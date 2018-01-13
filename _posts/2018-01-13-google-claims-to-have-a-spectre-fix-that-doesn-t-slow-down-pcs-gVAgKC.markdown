---
layout: post
title:  "Google claims to have a Spectre fix that doesn’t slow down PCs"
date: 2018-01-13 04:12:04Z
categories: bgr
---

![Google claims to have a Spectre fix that doesn’t slow down PCs](https://boygeniusreport.files.wordpress.com/2017/07/google-logo.jpg?quality=98&strip=all)

Since the Spectre and Meltdown processor flaws were first made public last week, tech firms have been scrambling to get updates pushed out to users' devices. The only problem? In fixing the bugs, which concern chip-level code and functions, Intel and Microsoft's patches have also made computers slower. But according to Google, it is still possible to have the best of both worlds. Google's own fix for Variant 2 of the Spectre CPU attacks, considered to be the hardest to patch without impacting performance, uses software patches, rather than disabling the affected CPU features. According to Google, the patch has a "negligible" impact on performance, especially compared to the Microsoft and Intel patches, which have been confirmed to slow down some systems. Spectre Variant 2 specifically targets a CPU feature called "speculative execution." Microsoft confirmed that its patch for Variant 2, which includes patches to the operating system and silicon-level microcode, has a "performance impact," especially on systems running Windows 7 or Windows 8 on older (2015 or older) silicon. According to Google, its patch, code-named Retpoline and which is software-implemented, has no or little impact on performance. "Retpoline sequences are a software construct which allow indirect branches to be isolated from speculative execution. This may be applied to protect sensitive binaries (such as operating system or hypervisor implementations) from branch target injection attacks against their indirect branches," explained Retpoline creator Paul Turner . "This confirmed our internal assessment that in real-world use, the performance-optimized updates Google deployed do not have a material effect on workloads," Google VP Ben Treynor Sloss wrote. "We believe that Retpoline-based protection is the best-performing solution for Variant 2 on current hardware. Retpoline fully protects against Variant 2 without impacting customer performance on all our platforms. In sharing our research publicly, we hope that this can be universally deployed to improve the cloud experience industry-wide."


Full story on F3News: [Google claims to have a Spectre fix that doesn’t slow down PCs](http://www.f3nws.com/n/gVAgKC)

> Posted on: Saturday, January 13, 2018 4:12:04 AM
