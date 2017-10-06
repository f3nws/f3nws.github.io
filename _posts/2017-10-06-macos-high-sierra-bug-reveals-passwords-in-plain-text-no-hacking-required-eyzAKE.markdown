---
layout: post
title:  "MacOS High Sierra bug reveals passwords in plain text, no hacking required"
date: 2017-10-06 02:04:33Z
categories: bgr
---

![MacOS High Sierra bug reveals passwords in plain text, no hacking required](https://boygeniusreport.files.wordpress.com/2017/06/macos-10-13-high-sierra-2.jpg?quality=98&strip=all)

MacOS High Sierra, the latest version of Apple's desktop OS, is finally here. One of the biggest changes is under the hood, switching the OS over to a new, more efficient file system called Apple File System (APFS). Such a major change is always going to come with weird bugs and quirks, but that still doesn't excuse a new security bug exposed by researchers. Software developer Matheus Mariano has found a serious bug that reveals the passwords for encrypted APFS volumes when you click "show password hint" within Disk Utility. This isn't your kind of deep-down zero-day hacking vulnerability; it just looks like a simple oversight, but the end result is that anyone with access to your device can open encrypted volumes on your MacBook. All Mariano had to do in a demonstration was set up a new encrypted volume from within Disk Utility, unmount and remount the volume to force a password prompt, and hit "show hint." His password for the volume then showed up in plain text. https://twitter.com/felix_schwarz/status/915851372217683970 Felix Schwarz, another software developer, managed to reproduce the bug on his device. He also showed that it's a bug within Disk Utility, not the underlying software, as doing the same steps from the command line shows the password hint, rather than the actual password. The issue is still present in the most recent beta version of macOS High Sierra, which means any fix will take a while to roll out. In the meantime, disable any password hints, as that seems to band-aid fix the issue.


Full story on F3News: [MacOS High Sierra bug reveals passwords in plain text, no hacking required](http://www.f3nws.com/n/eyzAKE)

> Posted on: Friday, October 6, 2017 2:04:33 AM
