---
title: ETH2GC Lite DIY Assembly Guide
---

import Image from '@theme/IdealImage';
import ShoppingButton from '@site/src/components/ShoppingButton';

:::info
If you don't want to purchase parts separately, you can buy DIY kit from [my store](https://store.webhdx.dev/products/eth2gc-lite-broadband-adapter-emulator).
:::

## Prerequisites

* Breakout PCB
* 2x5P Female Headers 8.5mm P=2.54mm Right-Angle
* 3D printed case
* ENC28J60 Mini module

STL file for 3D printed case, PCB gerbers and full Bill Of Materials with purchase links are available in GitHub repository [here](https://github.com/webhdx/ETH2GC/tree/main?tab=readme-ov-file#-eth2gc-lite).

| Part          | Links                                                                                                                                                              |
|:-------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <Image img={require('/img/eth2gc/ENC28J60_Mini.jpg')} alt='ENC28J60 MINI' /><br/>**ENC28J60 MINI** | <ShoppingButton url="https://s.click.aliexpress.com/e/_DlkjMGp" /><br/><ShoppingButton url="https://www.amazon.com/ENC28J60-Ethernet-Network-Module-Arduino/dp/B07KNTHR84" /> |



## Soldering

Reference below photos for connector orientation.

<Image img={require('/img/eth2gc/build-guide/Lite_Breakout_PCB_Front.jpeg')} alt="PCB front" />
<Image img={require('/img/eth2gc/build-guide/Lite_Breakout_PCB_Back.jpeg')} alt="PCB back" />

* Leaded solder is recommended - it's easier to work with. 
* Use temperature controller soldering iron set to 330&deg;C (~620&deg;F). 
* Use flux - it really helps solder to flow.
* Be careful to not melt solder on gold edge connector. You can protect it with kapton tape.

## 3D printed frame

* Print the part with flat surfaces on the build plate. 
* Textured build plate is recommended for nice finish on visible surface. 
* Supports are not needed as long as your settings are optimized for printing overhangs and bridges. 
* You can use many different materials. PLA, PETG or ABS are great choices.

<Image img={require('/img/eth2gc/build-guide/ETH2GC_Lite_Printing.jpg')} alt='Printing orientation' />

## Assembly

:::warning
Some **ENC28J60 Mini** boards might be wider than others. If your module does not fit, sand down edges of the board with sand paper.
:::

Connect ENC28J60 module to breakout PCB and press it down in the 3D printed case. It might require some fiddling to attach parts together. Do not use excessive force to avoid damaging delicate parts.


<Image img={require('/img/eth2gc/build-guide/Lite_Breakout_PCB_Attached.jpeg')} alt='ENC28J60 and Breakout PCB connected together' />
<Image img={require('/img/eth2gc/build-guide/Lite_Breakout_Aligned.jpeg')} alt='Case and PCB aligned' />
<Image img={require('/img/eth2gc/build-guide/Lite_Breakout_Assembled.jpeg')} alt='Final assembly' />
