---
layout: post
title:  "Google Chromecast and Home devices are causing problems with some Wi-Fi networks"
date: 2018-01-16 00:20:52Z
categories: bgr
---

![Google Chromecast and Home devices are causing problems with some Wi-Fi networks](https://boygeniusreport.files.wordpress.com/2016/02/chromecast.png)

Google has confirmed an issue with its Google Home and Chromecast products that can cause your home Wi-Fi network to crash. According to a TP-Link engineer who investigated the problem, the crash is caused by Google's device sending hundreds of thousands of data packets in a short amount of time, a traffic spike that can crash routers commonly found in your home. The issue reportedly affects routers from ASUS, Linksys, Netgear, TP-Link, and Synology, which covers most brands you're likely to find in your home. A Google spokesperson seemingly confirmed the issue to 9to5Google , saying that Google's engineering team "is working quickly to share a solution." In a post on its FAQ page , TP-Link explained what it had discovered to be the problem: Following initial research and investigation, our Engineering Team is confident that they've determined one of the key origins of the issue. From what we have gathered so far, the issue appears to be related to some recent releases of Android OS and Google Apps. This issue stems from these devices' "Cast" feature, which sends MDNS multicast discovery packets in order to keep a live connection with Google products such as Google Home. These packets normally sent in a 20-second interval. However, we have discovered that the devices will sometimes broadcast a large amount of these packets at a very high speed in a short amount of time. This occurs when the device is awakened from the "sleep mode", and could exceed more than 100,000 packets in a short amount of time. The longer your device is in "sleep", the larger this packet burst will be. This issue may eventually cause some of router’s primary features to shut down – including wireless connectivity. TP-Link has fixed the problem for its users with a firmware to the router, which should allow it to handle the sudden burst of packets without crashing. If you're experiencing similar problems with a different router, the only solution for now appears to be to unplug whatever Google device is causing the issue. Hopefully, a software update is on the way.


Full story on F3News: [Google Chromecast and Home devices are causing problems with some Wi-Fi networks](http://www.f3nws.com/n/QST3ZH)

> Posted on: Tuesday, January 16, 2018 12:20:52 AM
