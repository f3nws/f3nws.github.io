---
layout: post
title:  "Microsoft says security fixes will noticeably slow older PCs"
date: 2018-01-10 00:10:00Z
categories: engadget
---

![Microsoft says security fixes will noticeably slow older PCs](https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5576%252C3640%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1044%26image_uri%3Dhttp%253A%252F%252Fhss-prod.hss.aol.com%252Fhss%252Fstorage%252Fmidas%252Feaa8ea8b86d2896e15fef9c9aecdd46%252F203780834%252FRTX1AVL0.jpeg%26client%3Da1acac3e1b3290917d92%26signature%3Dce2199f8f5d8228ce630cf692ab14f486a5a0d44&client=cbc79c14efcebee57402&signature=7e5f495605383ef86a4be5b3dda2ab6b4195013c)

It's been clear for a while that the fixes for the Meltdown and Spectre memory vulnerabilities would slow down PCs, but just how bad is the hit, really? Microsoft has run some benchmarks , and it's unfortunately bad news if your system is less than fresh. While the patches for Meltdown and one variant of Spectre will have a "minimal performance impact," fixing a second Spectre variant through low-level microcode imposes a tangible speed penalty -- and it's particularly bad on systems released around 2015 or earlier. If you have a PC with a 6th-generation Intel Core processor or later, you should only see a hit in the "single-digit" percentage range. That's small enough that you might not notice a thing. If you're using a 4th-generation Core or older CPU, however, you'll see "more significant slowdowns," some of which could be noticeable. And that's if you're using Windows 10. Most Windows 7 or 8 users on similar hardware should notice the effect, while Windows Server is bound to take a more substantial performance blow due to its heavy dependence on I/O. The newer parts aren't as badly affected since Intel can limit the instructions it uses to disable branch speculation (used in the exploits to snoop on protected memory). Windows 10, meanwhile, is faster because it tosses out some legacy approaches to switching between user memory and kernel memory. If you're affected, you'll most likely see the performance drop once Intel rolls out its patches in the days ahead. And there are a lot of affected users. PC shipments are still on the decline , and that's due in no small part to people holding on to older computers. And recent usage share stats suggest that Windows 10 is present on just 27 percent of PCs, only some of which are relatively new. This won't necessarily prompt a wave of upgrades (you don't need a fast system if you're only checking Facebook), but it's bound to cause complaints from gamers and others who wring every ounce of speed from their systems. Source: Microsoft Secure


Full story on F3News: [Microsoft says security fixes will noticeably slow older PCs](http://www.f3nws.com/n/g3c2UD)

> Posted on: Wednesday, January 10, 2018 12:10:00 AM
