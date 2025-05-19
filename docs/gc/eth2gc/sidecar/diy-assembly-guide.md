---
title: ETH2GC Sidecar DIY Assembly Guide
---

import Image from '@theme/IdealImage';
import ShoppingButton from '@site/src/components/ShoppingButton';
import Badge from '@site/src/components/Badge';

:::secondary[Archived content]
This guide is archived since ETH2GC Sidecar DIY kits are no longer available for purchase. The content remains available as a reference for users who previously purchased these kits.
:::

## Prerequisites

* ETH2GC Sidecar DIY kit
* Breakout PCB
* Main PCB
* 2x4P Male Headers P=2.54mm
* 2x5P Female Headers 8.5mm P=2.54mm
* 2x4P Female Headers 8.5mm P=2.54mm
* 2 part case
* 6x M2 6mm self tapping screws
* ENC28J60 Mini module

| Part          | Links                                                                                                                                                              |
|:-------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <Image img={require('/img/eth2gc/ENC28J60_Mini.jpg')} alt='ENC28J60 MINI' /><br/>**ENC28J60 MINI** | <ShoppingButton url="https://s.click.aliexpress.com/e/_DlkjMGp" /><br/><ShoppingButton url="https://www.amazon.com/ENC28J60-Ethernet-Network-Module-Arduino/dp/B07KNTHR84" /> |

## Soldering

Reference below photos for connectors orientation.

<Image img={require('/img/eth2gc/build-guide/Sidecar_Breakout_PCB_Front.jpeg')} alt='Breakout PCB Front' />
<Image img={require('/img/eth2gc/build-guide/Sidecar_Breakout_PCB_Back.jpeg')} alt='Breakout PCB Back' />

<Image img={require('/img/eth2gc/build-guide/Sidecar_Main_PCB_Front.jpeg')} alt='Main PCB Front' />
<Image img={require('/img/eth2gc/build-guide/Sidecar_Main_PCB_Back.jpeg')} alt='Main PCB Back' />

* Leaded solder is recommended - it's easier to work with. 
* Use temperature controller soldering iron set to 330&deg;C (~620&deg;F). 
* Use flux - it really helps solder to flow.
* Be careful to not melt solder on gold edge connector. You can protect it with kapton tape.

## Assembly

:::warning
Some **ENC28J60 Mini** boards might be wider than others. If your module does not fit, sand down edges of the board with sand paper.
:::

1. Attach smaller breakout PCB to the main PCB as shown in the photos below.
2. Attach ENC28J60 Mini module to the main PCB.
3. Put everything in main plastic case.
4. Secure main PCB with 4 M2 self tapping screws.
5. Mount bottom case cover, align both parts first and make sure they fit together. Lightly press down until both pieces click together. **Do not use excessive force!** 

<Image img={require('/img/eth2gc/build-guide/Sidecar_Main_PCB_Attached.jpeg')} alt='Attaching PCBs together' />
<Image img={require('/img/eth2gc/build-guide/Sidecar_Main_PCB_ENC_Attached.jpeg')} alt='Attaching ENC28J60 module' />
<Image img={require('/img/eth2gc/build-guide/Sidecar_Assembly_1.jpeg')} alt='Assembling case' />
<Image img={require('/img/eth2gc/build-guide/Sidecar_Assembly_Final.jpeg')} alt='Final assembly' />
