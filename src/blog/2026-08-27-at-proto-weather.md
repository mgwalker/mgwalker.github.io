---
title: AT protocol and weather alerts
date: 2026-08-27
summary: >
  The AT protocol provides simple ways of distributing data while maintaining
  ownership. What if canonical government data was distributed that way?
---

The [AT protocol](https://atproto.at/) was created by the team at Bluesky in the
fallout of Twitter. It's designed to be a distributed system by default, similar
to [ActivityPub](https://github.com/w3c/activitypub), which drives services
like Mastodon[^1]. Servers using the AT Protocol communicate with each other
to relay updates as information is added or removed, and everything is
essentially available everywhere. So I wondered, what if governments published
data using AT Protocol?

## Some techincal background

### Users

Every AT Protocol (hereafter atproto) user has a universally-unique,
non-transferrable ID called a DID ("decentralized ID"; this is a W3C
standard). That ID is either tied irrevocably to a domain name
via DNS records and `.well-known` web endpoints; or it is managed by a public
ledger server called a PLC[^2]. In either case, the W3C spec defines a process for
resolving a DID, which returns a document.

Atproto users also have globally unique handles, such as `user.bsky.social` or,
in my case, simply `suddenlygreg.com`. These handles indicate to atproto
services how to find the user's DID. There are two ways to do it:

1. Look for a `TXT` record at `_atproto.{handle}` that has the DID in it
2. Query `https://{handle}/.well-known/atproto-did`

Once you have the DID, you can resolve it using the W3C spec to get a metadata
document that includes information about the user who owns the DID. For the
purposes of atproto, the key elements are the address of the server where the
user's information is stored.

### Data server

That server is called a "personal data server" (PDS). Every atproto user must
be associated with a single PDS, though users can migrate between them at-will.
Bluesky operates the largest PDS, and if you created an account at bsky.app,
it's where all of your Bluesky posts, replies, and quotes are stored.

But a PDS can hold, essentially, arbitrary data. As a result, other services
can create their own data types and let users store that data in their PDS
using a single account. That is, if you have a Bluesky account, you can join
other atproto services[^3] like [tangled](https://tangled.org/) (a git service),
[BookHive](https://bookhive.buzz/) (a platform for sharing your reading),
or [gridsky](https://gridsky.app/) (an Instagram alternative) without having
to create a new account.

In each of those cases, any information you create in conjunction with those
services is ultimately stored in your PDS. If you created your account on
bsky.app, then that data is stored there. But if you host your own PDS, then
your data is entirely under your control.

### Collections

Data is stored in collections in a PDS. A collection is defined by a
[lexicon](https://atproto.com/specs/lexicon), which is very similar to
JSON Schema, tweaked for atproto.

> **Note:** It is _only_ similar to JSON Schema. It it not _exactly_ JSON
> Schema. For example, atproto lexicons rename the `date-time` format for
> the `string` type to `datetime`, and atproto lexicons do not support any
> kind of decimal numbers whatsoever.

A lexicon is defined as a reverse domain
name, such as, oh, `com.mytinygiraffe.wx.alert.v1`. In this example, records
of the lexicon are called `v1`, and the authority to publish the lexicon is
determined by looking at the DNS TXT record at
`_lexicon.alert.wx.mytinygiraffe.com`, which lists the DID of the user who
owns the lexicon. (Neat, right?)

Once the lexicon is created and published (out of scope of this blog), anyone
can then publish records of that type to a PDS. Creating records in collections
is a basic feature of any atproto PDS, so no matter where your account is
hosted, it can contain records for any lexicon in the atproto universe.

## The problem

When I was at [18F](https://18f.org) and then again as a contractor, I worked
with the [National Weather Service](https://www.weather.gov) (NWS) on a project
to rebuild their primary website to be a more effective tool for delivering
critical weather and safety information to the American people. I loved it
because I'm a weather nerd. And as with any good digital service project, we
inevitably dug deeper than just the website, looking into the upstream data
sources, all the way up the chain to the point of creation.

One of the many (many!) complex things that NWS does is issue weather alerts
for the entire United States as well as its territories. There are a lot of
system touchpoints involved in creating an alert and propagating it through all
the various distribution systems to get it in front of the people who need it.
Those storm alerts you might get on your phone via
[WEA](https://www.fema.gov/emergency-managers/practitioners/integrated-public-alert-warning-system/public/wireless-emergency-alerts)
start with a forecaster in an NWS office drawing the alert on a map on their
computer.

Technically, for most cases where you want to consume those alerts as data,
like if you were building your own weather website or an app to notify people
when they are at risk, you would use the NWS
[public API](https://api.weather.gov). This API is incredibly robust and handles
a frankly absurd amount of daily traffic. But it's a pull-only API. If you want
the latest data, you have to ask for it. And since alerts come out constantly,
you end up having to poll a lot.

## A solution?

It would be pretty great if alerts could be _pushed_ to consumers. And I had a
funny thought: what if I took the [open source code](https://github.com/weather-gov/weather.gov/blob/main/api-interop-layer/data/alerts/backgroundUpdateTask.js)
that I'd written for NWS to poll the API for alerts and have it publish those
alerts into an atproto catalog? It should be pretty straightforward, I thought.

It was!

I created a lexicon that is basically a slightly modified version of the alert
definition from the [NWS API OpenAPI spec](https://api.weather.gov/openapi.json)
with a few slight modifications based on a) differences from JSON Schema and b)
some minor improvements I wanted to add to the alerts. If you were paying
attention earlier, you might not be surprised to learn that the lexicon is
`com.mytinygiraffe.wx.alerts.v1`.

Once I published the lexicon, the next thing was to turn each incoming alert
into a record and store it in my PDS. I have a PDS that stores the accounts for
a couple of weather-related atproto handles: `@hurricanes.mytinygiraffe.com`
and (newly-created for this project) `@weather-alerts.mytinygiraffe.com`.

> While neither account was created for Bluesky, because of how atproto works,
> they are both available there. Neither of them are currently publishing any
> Bluesky records, but I intend for the hurricanes one to replace an old bot I
> had on Mastodon that posts every time there is an update to a tracked Atlantic
> cyclone. It parses advisories from the
> [National Hurricane Center](https://www.nhc.noaa.gov), and posts when a storm
> forms, changes type, changes category, or dissipates.

One of the many cool things about atproto, as I talked about earlier, is that
everything is available everywhere. For example, [Taproot](https://atproto.at/)
is a tool for finding absolutely anything based on its ID. This could be a user,
a lexicon, a collection, a PDS, etc. So what if you wanted to see the current
list of weather alerts?

Look no further!
[Here's the catalog on my @weather-alerts account](https://atproto.at/uri/at://did:plc:akfyudbcwqxkkph5onh3coxn/com.mytinygiraffe.wx.alert.v1).
If you inspect the URL, you'll see that it's asking for a particular DID - the
one that happens to belong to `@weather-alerts.mytinygiraffe.com` – and a
specific catalog - `com.mytinygiraffe.wx.alert.v`. And there you'll see all of
the active weather alerts, based on data from the NWS public API.

But it gets better! You can also inspect what's called the "Jetstream," a
websocket that streams atproto events in (basically) realtime. Here's the
[Jetstream for weather alerts](https://atproto.at/uri/at://did:plc:akfyudbcwqxkkph5onh3coxn/com.mytinygiraffe.wx.alert.v1#jetstream).
If you watch long enough, you'll see records created as new alerts are issued
and deleted as alerts expire.

> Importantly, the catalog view shows all of the current records, whereas the
> Jetstream pushes updates as records are created or deleted. In this way,
> atproto collections can easily represent both slow-changing data as well as
> fast-changing data.

And it really is just a plain websocket under the hood. To demonstrate to myself
how this works, I created a super simple website that attaches to the websocket
and adds and removes alerts in realtime:
[https://mytinygiraffe.com/live-weather-alerts/](https://mytinygiraffe.com/live-weather-alerts/)

The Jetstream websocket lets you create filters when you connect, such as asking
for only a specific DID's records and specifying a particular collection you
want:

```javascript
const socket = new WebSocket(
  "wss://jetstream.us-east.bsky.network/xrpc/network.bsky.jetstream.subscribeEvents?dids=did:plc:akfyudbcwqxkkph5onh3coxn&collections=com.mytinygiraffe.wx.alert.v1&kinds=commit",
);

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data).payload;

  if (data.operation === "create") {
    create(data.rkey, data.record);
  } else if (data.operation === "delete") {
    remove(data.rkey);
  }
});
```

And there we are. NWS weather alerts pushed in near-realtime, taking advantage
of the AT protocol! All of this together took less than a day, thanks to the
fact that I could just lift code directly from NWS for fetching and processing
the alerts. The atproto part was easy.

Here's the repo containing the service that fetches alerts and creates and
deletes records in my PDS:

[https://code.suddenlygreg.com/weather/at-alerts](https://code.suddenlygreg.com/weather/at-alerts).

## What's next

Well, for this particular project, probably not much. It's doing everything I
had hoped for. But it's also just a proof-of-concept. Ultimately I'm providing
a bridge to government data, but anyone subscribing to my repo is having to
trust that I'm not doing anything funky with the data.

What would be super duper cool would be if the government created its own PDS
and alert lexicon, and published alerts to its own collection. Then the data
would not be derived from an authoritative source but would itself **_be_** an
authoritative source.

I don't know if any government agencies anywhere have created their own custom
atproto lexicons or even setup their own PDSes, but I don't see any good reason
they shouldn't. All kinds of government data could be shared that way, not just
weather. The Corps of Engineers could have feeds of the flow rates at all the
dams it manages. The Federal Reserve could post its interest rates. The former
might udpate every hour while the other might only update every few months, but
the protocol happily supports both.

The practical upshot is that the government would be embracing an existing
standard and making it easier for people to access government data, which would
lead to all kinds of interesting applications that are hard to even imagine yet.

[^1]:
    The services running over ActivityPub are often collectivly referred to
    as the Fediverse. In addition to Mastodon, there are alternatives for
    Instagram (Pixelfed), YouTube (PeerTube), Reddit (Lemmy), and more.

[^2]:
    Bluesky currently manages the PLC, but they are actively organizing an
    [international body](https://atproto.com/blog/plc-directory-org) to manage
    it longterm. Eventually it should operate somewhat like DNS, with multiple
    PLCs.

[^3]:
    The universe of everything to do with atproto is collectively referred to as
    the Atmosphere. It's not the most searchable name.
