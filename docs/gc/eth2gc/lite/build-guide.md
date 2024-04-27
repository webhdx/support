---
title: ETH2GC Lite Build Guide
---

# ETH2GC Lite - Build Guide

# Prerequisites

* Breakout PCB
* 2x5P Female Headers 8.5mm P=2.54mm Right-Angle
* 3D printed case
* ENC28J60 Mini module

STL file for 3D printed case, PCB gerbers and full Bill Of Materials with purchase links are available in GitHub repository [here](https://github.com/webhdx/ETH2GC/tree/main?tab=readme-ov-file#-eth2gc-lite).

| Part          | Links                                                                                                                                                              |
|:-------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![ENC28J60 MINI](/img/eth2gc/ENC28J60_Mini.jpg)<br/>**ENC28J60 MINI** | [AliExpress (affiliate)](https://s.click.aliexpress.com/e/_DlkjMGp)<br/>[Amazon US](https://www.amazon.com/ENC28J60-Ethernet-Network-Module-Arduino/dp/B07KNTHR84) |

:::info
If you don't want to purchase parts separately, you can buy DIY kit from [my store](https://store.webhdx.dev/products/eth2gc-lite-broadband-adapter-emulator).
:::

# Soldering

Reference below photos for connector orientation.

![PCB Front](/img/eth2gc/build-guide/Lite_Breakout_PCB_Front.jpeg)
![PCB Back](/img/eth2gc/build-guide/Lite_Breakout_PCB_Back.jpeg)

* Leaded solder is recommended - it's easier to work with. 
* Use temperature controller soldering iron set to 330&deg;C (~620&deg;F). 
* Use flux - it really helps solder to flow.
* Be careful to not melt solder on gold edge connector. You can protect it with kapton tape.

# 3D printing

* Print the part with flat surfaces on the build plate. 
* Textured build plate is recommended for nice finish on visible surface. 
* Supports are not needed as long as your settings are optimized for printing overhangs and bridges. 
* You can use many different materials. PLA, PETG or ABS are great choices.

![Printing orientation](/img/eth2gc/build-guide/ETH2GC_Lite_Printing.jpg)

# Assembly

:::warning
Some **ENC28J60 Mini** boards might be wider than others. If your module does not fit, sand down edges of the board with sand paper.
:::

Connect ENC28J60 module to breakout PCB and press it down in the 3D printed case. It might require some fiddling to attach parts together. Do not use excessive force to avoid damaging delicate parts.


![ENC28J60 and Breakout PCB connected together](/img/eth2gc/build-guide/Lite_Breakout_PCB_Attached.jpeg)
![Case and PCB aligned](/img/eth2gc/build-guide/Lite_Breakout_Aligned.jpeg)
![Final assembly](/img/eth2gc/build-guide/Lite_Breakout_Assembled.jpeg)
