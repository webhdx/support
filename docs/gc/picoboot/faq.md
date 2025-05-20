---
sidebar_position: 3
description: Answers to frequently asked questions about PicoBoot, including comparisons with other modchips, compatibility with different Raspberry Pi boards, and installation considerations.
---

# FAQ 

### Is PicoBoot better than Flippydrive, GC Loader or CubeODE?

PicoBoot in combination with Swiss and SD2SP2 v2.0 adapter achieves near perfect game compatibility and enough read throughput to play games without any stutter. This puts it in the same league as Optical Drive Emulators. PicoBoot is 4-10 times cheaper than ODEs which makes it the ultimate low budget option.

### Is PicoBoot better than XenoGC?

XenoGC is a drive modchip, it can only patch disc data on the fly. This means you have to use a boot disk to run Swiss and play games from an SD card. PicoBoot uses completely different approach by injecting custom payload during console boot sequence. In combination with software called [Swiss](https://github.com/emukidid/swiss-gc/) it provides all XenoGC features without requiring any boot disc.

### Which Raspberry Pi boards are compatible with PicoBoot?

PicoBoot is fully compatible with following hardware:
  - Raspberry Pi Pico (RP2040)
  - Raspberry Pi Pico W (RP2040)
  - Raspberry Pi Pico 2 (RP2350)
  - Raspberry Pi Pico 2 W (RP2350)

You cannot use „big” Raspberry Pi’s like 5, 4 or Zero. 

### Can I use other RP2040/RP2350 boards?

Some 3rd party boards should be compatible but I don’t provide any support for them. If you are using non-official board you will have to troubleshoot issues yourself. PicoBoot uses overclocking to keep up with bus transfer speeds. Some boards use lower quality components and they don’t work reliably with off spec clocks.

### Will it work if I have XenoGC installed?

Yes, you can use it with XenoGC intalled.

### I appreciate your work. Can I support you in any way?

This project is free and available for everyone. If you want to support it anyway, consider using [:heart: Sponsor](https://github.com/sponsors/webhdx) button.