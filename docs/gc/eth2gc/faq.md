---
title: FAQ
---

import ShoppingButton from '@site/src/components/ShoppingButton';
import Figure from '@site/src/components/Figure';

# FAQ

### Does ETH2GC work standalone like the original Broadband Adapter?
No. Homebrew software [Swiss](https://github.com/emukidid/swiss-gc/) is required to emulate the original Broadband Adapter behavior.

### Can I use ETH2GC on unmodified system?
Swiss is required for ETH2GC. However you can load Swiss on unmodified consoles using game save exploits or Datel's Action Replay.

### Is ETH2GC compatible with PicoBoot, KunaiGC, XenoGC or GC Loader?
Yes. ETH2GC is compatible with any method of loading Swiss.

### Does ETH2GC work with SD2SP2 adapter?
No. Both devices use the same port. You need a different adapter which interfaces SD cards to GC's memory card slots. They come under different names: WiiSD, GC2SD, SD Gecko and offer the same performance as SD2SP2 adapter.

| Adapter                                    | Links                                                   |
|:------------------------------------------:|---------------------------------------------------------|
| <Figure img={require('/img/sd/wiisd.jpg')} alt='WiiSD' caption='WiiSD' /> | <ShoppingButton url="https://s.click.aliexpress.com/e/_Dm949Gp" /> |
| <Figure img={require('/img/sd/gc2sd.jpg')} alt='GC2SD' caption='GC2SD' /> | <ShoppingButton url="https://s.click.aliexpress.com/e/_DFF8UOt" /> |

### Are there any limitations when using ETH2GC?
Yes. As of today, Broadband Adapter emulation feature is incompatible with loading games using physical discs. Additionally, the ENC28J60 driver is not capable of providing speeds required to stream game ISOs from network-attached storage (like RetroNAS).
