# Postmarks browser extension

A browser extension to send things to your [Postmarks](https://postmarks.glitch.me) instance.

WIP. It sort of works.
- relies on existing Add Bookmark bookmarklet (no API for Postmarks as yet), opens as new tab, doesn't close cleanly on add.
- works in MS Edge, Chrome etc. (load unpacked extension)
- It looks like Firefox doesn't support background service workers / there is Manifest v3 stuff going on I haven't looked into properly. Probably needs a polyfill and/or a specific version.
- As yet [unpackaged](https://github.com/andypiper/postmarks-ext/issues/1)
- fragile


