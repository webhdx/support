---
sidebar_position: 3
description: "Answers to frequently asked questions about PicoBoot, including comparisons with other modchips, compatibility with different Raspberry Pi boards, and installation considerations."
---

# FAQ 

### Is PicoBoot better than Flippydrive, GC Loader or CubeODE?

PicoBoot in combination with Swiss and SD2SP2 v2.0 adapter achieves near perfect game compatibility and enough read throughput to play games without any stutter. This puts it in the same league as Optical Drive Emulators. PicoBoot is 4-10 times cheaper than ODEs which makes it the ultimate low budget option.

### Is PicoBoot better than XenoGC?

XenoGC is a drive modchip, it can only patch disc data on the fly. This means you have to use a boot disk to run Swiss and play games from an SD card. PicoBoot uses completely different approach by injecting custom payload during console boot sequence. In combination with software called [Swiss](https://github.com/emukidid/swiss-gc/) it provides all XenoGC features without requiring any boot disc.

### Can I use new Pico W board?

Pico W is supported but LED won't show any activity. This is because Pico W wires LED differently which requires special handling in software. It hasn't been implemented yet. Many people are using Pico W with a success. Pico W might become the main platform for PicoBoot in the future.

### Can I use new Pico 2 board?

Pico 2 support is planned but nothing has been done just yet.

### Can I use other RP2040 boards?

Yes, go for it. Just respect the [license agreements](https://github.com/webhdx/PicoBoot/blob/main/LICENSE) and don't expect me to provide any support for your board. PicoBoot only supports official Raspberry Pi Pico module at the moment.

### Will it work if I have XenoGC installed?

Yes, you can use it with XenoGC intalled.

### I appreciate your work. Can I support you in any way?

This project is free and available for everyone. If you want to support it anyway, consider using [:heart: Sponsor](https://github.com/sponsors/webhdx) button.