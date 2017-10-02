---
layout: post
title:  "Apple releases kernel source code tuned for mobile chips"
date: 2017-10-02 00:10:00Z
categories: engadget
---

![Apple releases kernel source code tuned for mobile chips](https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1400%252C931%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1064%26image_uri%3Dhttp%253A%252F%252Fo.aolcdn.com%252Fhss%252Fstorage%252Fmidas%252Fd4c17e372c1b04c0b01847fa69386b8e%252F204757565%252FSizes_DSC_2780.jpg%26client%3Da1acac3e1b3290917d92%26signature%3Db80ff63a7d7d234f1dd8d9dcb00174cf1fa4288a&client=cbc79c14efcebee57402&signature=5d604eff57c53c4d42f689b35cf812cf46c97cf2)

Ever since the first version of OS X, Apple has regularly released the kernel source code for Macs. In theory, you could learn from it or even build your own projects from it. For iOS, though? Not so simple. Even if you had source code, it wouldn't matter much unless it was optimized for the ARM-based chips that you see in most phones and mobile tablets. However, Apple is shaking things up a bit. The company has quietly posted ARM-friendly source code for the XNU kernels used in iOS and macOS. That's particularly relevant if you're interested in iOS, since you now have code that would theoretically run on an iPhone or iPad. However, it's not quite the breakthrough move it seems at first blush. To start: this is just the kernel, the low-level code that governs the most critical functions. It doesn't cover the interface, developer frameworks or apps... that is, the parts that truly define iOS or macOS. Those elements are still closed off, so you would have to build most of the platform from scratch. You won't see iOS on a Galaxy S8 any time soon. Apple also offers a relatively limited source code license that isn't as flexible as, say, the GPL license used for Linux. Moreover, while the presence of ARM-based Mac code is bound to raise eyebrows, this doesn't mean that you're about to see a MacBook with an A11 Bionic chip inside. Apple has a long history of writing code for other architectures "just in case" (the PowerPC-to-Intel transition happened quickly because Apple already had code waiting in the wings), so it might never make the switch. You certainly aren't about to install macOS on your ARM-based Chromebook. And besides, there are rumors of Apple developing ARM-based companion chips for Macs. It may need ARM code even if it has no intention of ditching Intel for CPUs. All the same, it's a welcome move. This gives app and OS developers a better sense of how Apple tackles basic system tasks, particularly on iOS. And yes, anyone ambitious enough to write a full operating system could use XNU as a starting point. It's just not going to change the status qu...


Full story on F3News: [Apple releases kernel source code tuned for mobile chips](http://www.f3nws.com/n/bzNnnH)

> Posted on: Monday, October 2, 2017 12:10:00 AM
