---
title: Playing with Rust
date: 2025-08-04
summary: |
  I had a small toy app, some time, and an interest, so I decided to play with
  the Rust programming language. Here's a little bit that I learned.
---

I like playing with different programming languages, but I really need an actual
project to sink my teeth into. I have a hard time picking up a new language with
the kinds of toy problems we tend to use by way of introduction. But recently I
built a small server app to implement a webring, and I saw the potential to
reimplement it in Rust as an excuse to fiddle with the language.

## The toy

The toy app is a simple
[HTTP server that implements a webring](https://github.com/mgwalker/webring/).
It's built in Node.js, and provides a whopping four endpoints:

- `/previous?from=[source]`
- `/next?from=[source]`
- `/random`
- `/webcomponent.js`

These endpoints respond with HTTP 302 redirects to the next site in the webring,
based on the `[source]` parameter. The configuration for the webring is stored
in a JSON file that the server re-reads periodically so that changes are
incorporated without needing to restart it. The `/webcomponents.js` is a bit of
an outlier in that it returned a Javascript file that implemented a web
component that member sites could put into their HTML to easily get a nice
consistent UI for the webring.

Thinking about it, I wondered if Node.js wasn't too heavy for such a simple app.
It uses a pretty good chunk of memory, after all. And I thought, if there are
sufficiently high-level HTTP server libraries in Rust, why not try building to
native code?

## What I knew

I knew a bit about Rust. I'd tinkered a very little bit with it before. I knew
it was very strict about type-safety, which is great for making build-time
assurances about correct usage, and it's pretty nice for documentation, as well.
Not entirely sure what a function does? Its type information might give you
some clues!

I also knew it's memory-safe by default, which is awesome for building software
that's more secure. If you can make provable guarantees about the state of the
memory used by the software – like nothing will ever overflow a buffer!

And I knew that generally Rust compiles statically rather than dynamically,
which means you often end up with a single binary executable that you can
distribute and run on a compatible platform. And I knew Rust could build to
many platforms at once, which is great.

## Some stuff I learned

### I'd forgotten what a hassle multithreaded memory management is.

I've lived mostly in Javascript for several years now, and I've watched it
evolve. I remember when callbacks were all the rage as asynchronous programming
first came to Javascript, and later `async`/`await`. And then workers, something
that feels very much like truly writing threaded code again. All of it pretty
elegantly handles memory: it simply never crosses thread boundaries.

The last time I'd spent much time doing real threads and having to think about
memory, I was using Apple's
[Grand Central Dispatch](https://developer.apple.com/documentation/dispatch)
which made it super easy to enqueue tasks on worker threads or move them back
to the main thread. Of course, this only works because it's implemented on top
of an event loop. But the way it was implemented, it allowed closures to capture
memory from one thread and make it available in another, and it followed all the
expected scoping rules.

Prior to that, I'd had less pleasant experiences using Windows .NET APIs and,
much worse, C/C++. So I've done this song and dance before and I know how badly
it can go wrong. I also know what a hassle it can be to ensure you're not
corrupting anything but writing while reading, or accessing something that has
been freed.

The Rust compiler actually prevents all of that. Memory must be owned by a scope
and threads are inherently scoped. Therefore, the same memory cannot be accessed
by multiple threads at all, let alone at the same time. But of course it _must_
support some way of moving information between threads.

The Rust guides suggest sending messages, which seems like a great option in
general since sending a message changes the owner of that message from the
sending thread to the receiving one. However, the method to receive a message
is a blocking method, so if you need to move a message from a background thread
to the main one, the main one blocks, and you end up not having a very
functional HTTP server.

(This is also when I realized I've become very accustomed to event loops.)

Instead, I looked to an old "friend," the mutex. Thankfully Rust has those
built-in, along with some other handy types to facilitate cross-thread memory
sharing, and in the end it turned out not to be too complicated in my use case
because I am only sharing a single piece of data between threads, and only
one thread ever writes to it.

### Strict type-safety is not elegant.

```rust
struct WebringItem {
    text: String,
    url: String,
}

struct WebringEntry {
    next: WebringItem,
    previous: WebringItem,
}

let thread_data: Arc<Mutex<HashMap<String, WebringEntry>>> = Arc::new(mutex);
```

In a dynamic language, or one with more flexible typing requirements, you don't
need this much code. You often wouldn't need to define the `WebringEntry` type
at all. It's left to the programmer to know what their data looks like.

While this code ends up being verbose and not particularly beautiful, this type
strictness does allow the compiler to ensure everything is as-expected, which is
quite nice. Trying to access a property that doesn't exist? **_You can't!_**

### Traits (and interfaces?) aren't always clearly expressed by the compiler.

Sometimes a method argument is not a specific type, but can be any type that
implements a specific trait. Traits are (I think) partial interfaces; a way to
say "my type has this function with that specific signature" without having to
implement an entire interface. It's how types can say they're cloneable, for
example.

It's a great system! But sometimes your custom trait won't implement a trait it
needs to and the Rust compiler will tell you so. Unfortunately, it doesn't
always do a great job of telling you which trait. I couldn't tell if this was
an issue with Rust in general or the HTTP server library I was using, but either
way, it made figuring out build issues tricky.

### Build issues are better than runtime issues.

But at the same time that the Rust compiler wasn't as helpful as I'd have liked,
it was still catching problems at build time rather than letting them become
fatal runtime problems. It is certainly easier to identify a type problem during
the build than trying to deduce it with a duck-typing language like Javascript.

## A concluding throught

I don't think I'll use Rust very often in general. It's lower level than where
I like to live. But I think it's an excellent systems language. The safety
guarantees can be complicated to work within, but if you're doing system-level
library or application programming, you should be trying to stay within those
bounds anyway, and Rust will help you by requiring it.

Personally, I have become spoiled by main thread event loops and duck typing.
Strict typing has its place, but I think I will continue to prefer more relaxed
typing systems.
