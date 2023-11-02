---
title: Making a nice API of Amtrak's ugly API
date: 2023-11-02
summary: Amtrak doesn't make is super easy to find out where you train is, but it's not impossible. Here's how I did it, and turned their obfuscated API into an open one.
---

I had an upsetting experience with Amtrak recently. I had booked passage on a
train that went about halfway across the country. I was going to get on it near
the end of its route and only take it a dozen or so stops. But there were delays
and the train ended up being several hours behind. Amtrak rebooked me on to a
bus, which... no thank you. There's a reason I picked the train.

Anyway, as I was watching my train's status for a full two days before my actual
departure time, I caught myself thinking several times, "Gee, it'd be cool if I
could get data about my specific train and build myself a little one-off widget
to track just that." You know, since Amtrak's main site is pretty awful for
that purpose.

Have you ever seen [Amtrak's train map](https://www.amtrak.com/track-your-train)?
It's pretty cool, right? You can see all the active trains, all the stops on
their route, and arrival and departure times. Neat! And if you're a nerd like
me, you immediately want to see if there's an API driving this so you can do...
I don't know, anything you want to with it, I guess.

And it turns out, there's an API! There are a handful of endpoints, but a first
inspection of the browser's network tool shows two particularly interesting ones:

First, a list of all the train stations:

- [https://maps.amtrak.com/services/MapDataService/stations/trainStations](https://maps.amtrak.com/services/MapDataService/stations/trainStations)

And then a list of all the active trains:

- [https://maps.amtrak.com/services/MapDataService/trains/getTrainsData](https://maps.amtrak.com/services/MapDataService/trains/getTrainsData)

You, like me, get excited and click those links to discover... a wall of encoded
text. What the actual heckin' heck? Well it looks like base64 encoding, so let's
try decoding it and seeing what happens.

Oh, it's still gibberish. Well... time to search the internet, I guess.

I found a small number of older forum threads from someone who'd written a
wrapper around the Amtrak API and exposed their own. It's
[amtraker-v3](https://github.com/piemadd/amtraker-v3) by
[piemadd](https://github.com/piemadd/). Digging around in there, I found the
[main script](https://github.com/piemadd/amtraker-v3/blob/main/index.ts) was
calling into those same URLs above, and this code had a variable called
`publicKey`. _Fascinating_. But where does it come from? Time to inspect some
code, I guess.

Opening up the Firefox dev tools, looking at the resource list, and filtering to
just Javascript, I found this one file that looks promising:

- [https://maps.amtrak.com/rttl/js/mapApplication.js](https://maps.amtrak.com/rttl/js/mapApplication.js)

I started scanning that file from the top to see if any names stood out. It
wasn't long until I landed on this:

```javascript
/*
__$$_jmd - public key
masterSegment - length of data to be extracted from the encrypted response - 55 is just a fake
//FAKE VARIABLES to throw off people hahahahaha
__$_s - salt value
__$_v - iv vale
*/
```

Ah-ha! A public key, salt, and IV. Is there some encryption going on here? That
looks likely. Surprising and bewildering, but likely. In any case, now I have
some new stuff to search for. I don't know what the public key is, but whoever
wrote this kindly let me know _this_ isn't it, but I should be able to find it
somewhere else under this variable name.

Firefox's developer tools have a debugger that features a search across all
script sources on the page. I did a quick debugger search for `__$$_jmd` and
found that it's being populated from an XHR:

```javascript
$.getJSON(_$$_666.route_listview_url, function(data) {
  /*MasterZoom is the sum of the zoom levels from the routes_list.json file. That is the index in the routesList.v.json -> arr array where we have the public key stored.
  IF THE ROUTES_LIST CHANGES, REMEMBER TO CHANGE THE INDEX TO BE CORRECT */
__$$_jmd = (data.arr[masterZoom]);
```

More helpful comments! I don't know what this master zoom thing is yet, but let
me first see what this URL is. No need to go hunting for it, though. I just pop
in a breakpoint and reload the page. Then when the breakpoint stops the code,
I can simply inspect the value of `route_listview_url`:

- [https://maps.amtrak.com/rttl/js/RoutesList.v.json](https://maps.amtrak.com/rttl/js/RoutesList.v.json)

And just look at those three lists of blobs of text. The first ones look like
UUIDs and the others don't look like anything. Alright, I can't do anything with
this right now, but I know the public key is in the `arr` list somewhere. Back
to this master zoom thing, I guess.

The comments tell us the master zoom is the "sum of the zoom levels from the
routes_list.json file", and that's the index into the `arr` array where the
public key is. Back to the network tab, and I find this URL:

- [https://maps.amtrak.com/rttl/js/RoutesList.json](https://maps.amtrak.com/rttl/js/RoutesList.json)

And looky there, a list of things with a `ZoomLevel` property. A quick bit of
console REPL'ing:

```javascript
await fetch("https://maps.amtrak.com/rttl/js/RoutesList.json")
  .then((r) => r.json())
  .then((list) =>
    list.reduce((sum, { ZoomLevel }) => sum + (ZoomLevel ?? 0), 0)
  );
```

And I got a result: 194. Okay, so the master zoom is 194. Now I can go back a
few steps to where `__$$_jmd` was being set. It's coming from a list called
`arr` in the `route_listview_url`. At index number 194, I find my public key,
which turns out (at the time of this writing) to be
`69af143c-e8cf-47f8-bf09-fc1f61e5cc33`.

Immediately after that code, there was code that sets the salt and
initialization vector. Those come from the same `route_listview_url` data, but
different properties. And the indices are computed differently, so time to look
into that.

For the salt, the comments say this:

```javascript
/*Salt Value - the element is at the 8th position. So we can essentially pick any number from 0-100 (length of the s array in the file), get the length of the element, and then go to that index
the following funky looking code will evaluate to 8. Salt has a length of 8
*/
__$_s1._$_s =
  data.s[data.s[Math.floor(Math.random() * (data.s.length + 1))].length];
```

Which I found **_hilarious_**. Why would you obfuscate this code if you're
describing how you did it immediately above? Were these comments supposed to
have been stripped away? In any case, the initialization vector code looks more
or less the same:

```javascript
/*Initialization Vector Value - the element is at the 32th position. So we can essentially pick any number from 0-100 (length of the IV array in the file), get the length of the element, and then go to that index
the following funky looking code will evaluate to 32 - IV has a length of 32		
*/
__$_s1._$_i =
  data.v[data.v[Math.floor(Math.random() * (data.v.length + 1))].length];
```

Going back to my source data file, I find my salt and IV: `9a3686ac` and
`c6eb2f7f5c4740c1a2f708fefd947d39`, respectively.

Alright, now what to do with these things? Let's see where else `__$$_jmd` is
used in the code. I find it referenced in some pretty gnarly-looking code, but
looking a little above that for context, I find two interesting things:

1. I'm in a callback for an XHR request. Adding a breakpoint reveals that this
   request is for [getTrainsData](https://maps.amtrak.com/services/MapDataService/trains/getTrainsData).
   Eureka! (Maybe.)
2. Look at these amazing comments!
   ```javascript
   /*MasterSegment is the length of the string at the end of the encrypted data that contains the secret key
    To decrypt - we do the following
   1. Take masterSegment (88) length - from the right of the data - this has the private key
   2. Everything from 0 to the end - master segment is the raw data - that needs to be decrypted
   3. Decrypt the 88 characters using the public key - that will give you a pipe separated string of the private key (random guid from MDS) and a time stamp (to scramble it)
   4. Now use the private key and decrypt the data stored from step 2.
   5. Parse the decrypted data - and rejoice
   6. KSUE -means key issue
   7. __$$_jmd - the public key that we obtain
   ```

Okay, so... the REST data is encrypted, and here are the instructions for
decrypting it. Let's look at the code that does the work:

```javascript
var json = JSON.parse(
  __$_s1._$_dcrt(
    dd.substring(0, dd.length - masterSegment),
    __$_s1._$_dcrt(dd.substr(dd.length - masterSegment), __$$_jmd).split("|")[
      masterSegment - 88
    ]
  )
);
```

That's kind of a mess. So first things first, let me try to clean it up a bit so
I can make sense of what's happening:

```javascript
const masterSegment = 88;
const publicKey = __$$_jmd;

const privateKeyCipher = dd.substr(dd.length - masterSegment);
const privateKey = __$_s1._$_dcrt(privateKeyCipher, publicKey).split("|")[
  masterSegment - 88
];

const rawData = dd.substring(0, dd.length - masterSegment);

const data = __$_s1._$_dcrt(rawData, privateKey);

var json = JSON.parse(data);
```

There's only one thing here that's not just standard Javascript:
`__$_s1._$_dcrt`. And it's easy enough to find that function by setting a
breakpoint and then stepping into the debugger (presented here formatted with
prettier):

```javascript
/*CryptoJS-Security - the salt and IV values here are fake to throw someone off. All variable names are changed*/
var __$_s1 = {
  _$_s: "amtrak",
  _$_i: "map",
  _$_dcrt: function (_, $) {
    return _$_cjs._$_sea
      ._$_dcr(
        _$_cjs.lib._$_cpar.create({ _$_ctxt: _$_cjs.enc.Base64.parse(_) }),
        this._$_gk($),
        { iv: _$_cjs.enc.Hex.parse(this._$_i) }
      )
      .toString(_$_cjs.enc.Utf8);
  },
  _$_gk: function (_) {
    return _$_cjs._$_pdf2(_, _$_cjs.enc.Hex.parse(this._$_s), {
      keySize: 4,
      iterations: 1e3,
    });
  },
};
```

Continuing down into these obfuscated variable names, I make a happy discovery.
This `_$_cjs._$_sea._$_dcr()` function is defined in `AS.js`, which begins with
yet more super helpful comments:

```javascript
/*CJS-AES - origin cryptojs-aes file. Variables/methods all changed with random names*/
```

A little more inspection and it turns out all of `_$_cjs` is just
[crypto-js](https://npm.im/crypto-js) with the symbol names changed to attempt
to obfuscate it. That helps tremendously. So a quick look through crypto-js
documentation, and I've got an assumption about what these functions are doing:

```javascript
  _$_dcrt: function (_, $) {
    // Decrypt.
    return _$_cjs._$_sea
      ._$_dcr(
        // Create a cipher object from the value that results from base64
        // decoding the raw data that was passed in. We don't know what
        // algorithm or configuration we're using, though.
        _$_cjs.lib._$_cpar.create({ _$_ctxt: _$_cjs.enc.Base64.parse(_) }),
        // Derive a key from the passed-in private key
        this._$_gk($),
        // Provide an initialization vector in bytes by parsing it from hex.
        { iv: _$_cjs.enc.Hex.parse(this._$_i) }
      )
      .toString(_$_cjs.enc.Utf8);
  },
  _$_gk: function (_) {
    // Derive a key from a string. This appears to be PBKDF2 key derivation,
    // getting bytes by parsing the salt from hex, and iterating a thousand
    // times and getting a key size of 4. 4 somethings.
    return _$_cjs._$_pdf2(_, _$_cjs.enc.Hex.parse(this._$_s), {
      keySize: 4,
      iterations: 1e3,
    });
  },
```

In pseudocode, we have basically:

```pseudocode
key = hash(privateKey, salt)

decrypt(
  rawData,
  key,
  initializationVector
)
```

And we have a good idea of what the key derivation function is: PBKDF2. But what
hashing function is it using? And what encryption algorithm? Well, since this is
crypto-js, maybe it has defaults. So I went to GitHub and found that the
defaults had pretty recently been changed. Before that, the default had long
been SHA1 and AES-128-CBC, so... let's just assume those are right for now.
Given the big encrypted blob response from the
[getTrainsData](https://maps.amtrak.com/services/MapDataService/trains/getTrainsData)
endpoint, I should be able to get the data basically like this:

```pseudocode
PUBLIC_KEY = 69af143c-e8cf-47f8-bf09-fc1f61e5cc33
SALT = 9a3686ac
IV = c6eb2f7f5c4740c1a2f708fefd947d39
MASTER_SEGMENT = 88;

password = rawData[rawData.length - MASTER_SEGMENT:end]
encryptedData = rawData[start:rawData.length - MASTER_SEGMENT]

privateKey = pbkdf2(password, SALT, iterations:1000, size:4, SHA1)

data = decrypt(AES-128-CBC, key, encryptedData))
```

And it turns out that's basically correct, as implemented in
[my repo](https://github.com/mgwalker/amtrak-api). One funky twist is that
crypto-js's PBKDF2 key size is how many 4-byte units you want, so the actual key
should be 16 bytes. Using Node.js's standard crypto library, you'll want the
number of bytes, not the number of 4-byte units. (In crypto-js's code, it seems
to refer to these as words, and they just happen to be 4 bytes long. But the
word "word" isn't especially meaningful on its own, as it has variously meant
16, 32, and 64 bytes at different times and in different architectures).

So there you go. Now you too can access Amtrak data the easy way. Kudos to
whoever wrote the Amtrak map page because a) the weird obfuscations they made
were pretty clever and b) it sure seems like they knew it wasn't going to be
effective. I really appreciated their funny comments throughout!

And if you're curious what I'm doing with this data? I built a page for that!
My very own [Amtrak train tracker](https://mgwalker.github.io/amtrak-api/).
