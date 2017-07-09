---
layout: post
title:  "Ever-changing memory could lead to faster processors"
date: 2017-07-09 03:11:00Z
categories: engadget
---

![Ever-changing memory could lead to faster processors](https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fdims-shared%2Fdims3%2FGLOB%2Fcrop%2F4368x2912%2B0%2B0%2Fresize%2F1600x1067%21%2Fformat%2Fjpg%2Fquality%2F85%2Fhttps%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Ff203f28eb0d0bff1a20b5f59e83a240e%2F205456438%2Felectrical-processor-picture-id149081218&client=cbc79c14efcebee57402&signature=d545a738a9b14c37e5717bf87da05a40bb795c01)

Virtually every central processor in your devices uses a tiered set of memory caches to speed things up by fetching commonly used data. But it's not very efficient -- in trying to accommodate everything, it's rarely the fastest at anything. MIT's CSAIL researchers want to fix that. They've developed a cache system (appropriately named Jenga ) that creates new cache structures on the spot to optimize for a specific app. As Jenga knows the physical locations of each memory bank, it can calculate how to store data to reduce the travel time (and thus lag) as much as possible, even if that means changing the hierarchy. Whether an app would benefit from multiple cache levels or one gigantic cache, this system would be ready. The gains could be huge. A simulated 36-core chip ran up to 30 percent faster just by adopting Jenga, and could use up to 85 percent less power. You wouldn't necessarily face a penalty for having many cores in a chip, even in laptops and smartphones where every watt counts. Of course, there's one major problem: Jenga is just a simulation. It could take a while before you see real-world examples of this cache, and longer still before chip manufacturers adopt it (assuming they like the idea, that is). This also assumes that Jenga scales neatly across different core counts. Will you see similar gains with 'just' an 8-core chip? It's easy to imagine CPU giants like Intel or Qualcomm leaping on this concept, though. Chip makers frequently boost performance by moving to ever-smaller manufacturing processes, but they're gradually running into physical limits . So long as there's software to take advantage of it, Jenga could wring extra performance out of chips with relatively little effort. Source: MIT News


Full story on F3News: [Ever-changing memory could lead to faster processors](http://www.f3nws.com/n/aWadQB)

> Posted on: Sunday, July 9, 2017 3:11:00 AM
