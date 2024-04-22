---
title: ETH2GC Sidecar Build Guide
---

# ETH2GC Sidecar - Build Guide

# Prerequisites

* Breakout PCB
* Main PCB
* 2x4P Male Headers P=2.54mm
* 2x5P Female Headers 8.5mm P=2.54mm
* 2x4P Female Headers 8.5mm P=2.54mm
* 2 part case
* 6x M2 6mm self tapping screws
* ENC28J60 Mini module

:::info
DIY kits are available [at my store](https://store.webhdx.dev/products/eth2gc-sidecar-broadband-adapter-emulator).
:::

# Soldering

Reference below photos for connectors orientation.

![Breakout PCB Front](/img/eth2gc/build-guide/Sidecar_Breakout_PCB_Front.jpeg)
![Breakout PCB Back](/img/eth2gc/build-guide/Sidecar_Breakout_PCB_Back.jpeg)

![Main PCB Front](/img/eth2gc/build-guide/Sidecar_Main_PCB_Front.jpeg)
![Main PCB Back](/img/eth2gc/build-guide/Sidecar_Main_PCB_Back.jpeg)

* Leaded solder is recommended - it's easier to work with. 
* Use temperature controller soldering iron set to 330&deg;C (~620&deg;F). 
* Use flux - it really helps solder to flow.
* Be careful to not melt solder on gold edge connector. You can protect it with kapton tape.

# Assembly

:::warning
Some **ENC28J60 Mini** boards might be wider than others. If your module does not fit, sand down edges of the board with sand paper.
:::

1. Attach smaller breakout PCB to the main PCB as shown in the photos below.
2. Attach ENC28J60 Mini module to the main PCB.
3. Put everything in main plastic case.
4. Secure main PCB with 4 M2 self tapping screws.
5. Mount bottom case cover, align both parts first and make sure they fit together. Lightly press down until both pieces click together. **Do not use excessive force!** 

![Attaching PCBs together](/img/eth2gc/build-guide/Sidecar_Main_PCB_Attached.jpeg)
![Ataching ENC28J60 module](/img/eth2gc/build-guide/Sidecar_Main_PCB_ENC_Attached.jpeg)
![Assembling case](/img/eth2gc/build-guide/Sidecar_Assembly_1.jpeg)
![Final assembly](/img/eth2gc/build-guide/Sidecar_Assembly_Final.jpeg)
