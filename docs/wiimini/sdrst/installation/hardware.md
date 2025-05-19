---
title: Hardware installation
---

import Figure from '@site/src/components/Figure';

# Hardware installation

## Required tools
- soldering iron
- flux
- soldering wire
- crafting knife
- drill/dremel tool
- 2mm and 4mm drilling bits
- small file

## Disassemble the console
This guide doesn't cover this step but you can refer to iFixit guide here: https://www.ifixit.com/Guide/Nintendo+Wii+mini+Motherboard+Replacement/37774

You need to teardown whole system down to the motherboard where you'll solder first component of the kit.

## Soldering Extension Port board
Line up hookup PCB with test points on Wii Mini motherboard. Make sure all points will make good contact with the PCB. You can use sticky tape to hold the board in place while soldering.

For better results, use proper amount of flux. It's important to use good quality soldering tip which can transfer enough heat to the motherboard. As seen in the picture, you can skip some of the points not used by this mod. It'll be easier to reverse the mod if needed. 

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Hookup_Soldered.jpeg')} alt="Hookup PCB soldered to the mainboard" caption="Hookup PCB soldered to the mainboard" />

You can connect FFC cable now. Fold it as shown in the picture. Route it so that it goes under WiFi module area. Make sure the FFC is routed away from screw holes or it'll get damaged during assembly.

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_FFC_Folding.jpg')} alt="FFC connected and routed" caption="FFC connected and routed" />
<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_FFC.jpg')} alt="FFC routing" caption="FFC routing" />

## Preparing Wii shell
The kit comes with 2 3D printed drill guies. They're used to make clean cutout for microSD card slot and reset button. Start with either one and mount it to the screw post, note the correct orientation as shown in the photo. Do not use both attached at the same time.

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Drill_Guide.jpg')} alt="Drill guide mounted on a screw post" caption="Drill guide mounted on a screw post" />

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Cutout_Drilling.jpg')} alt="Drilling" caption="Drilling" />

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Cutout_1.jpg')} alt="Drilling done" caption="Drilling done" />

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Cutout_2.jpg')} alt="Finishing cutout" caption="Finishing cutout" />

Use crafting knife to widen the cutout.

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Cutout_3.jpg')} alt="Using crafting knife" caption="Using crafting knife" />

Use small file to finish off the cutout.

## Mounting main PCB
The main PCB comes assembled with 3D printed frame. It's mounted on the screw post previously used by the drill guides. Connect other end of flex cable to the main PCB, make sure it's oriented correctly (silver contacts facing top). Reversing the cable may be potentialy dangerous for your console/SDRST kit.

<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_MountedPCB.jpg')} alt="Main PCB mounted on the screw post" caption="Main PCB mounted on the screw post" />
<Figure img={require('@site/static/img/wiimini/sdrst/SDRST_Mounted.jpg')} alt="FFC connected, ready for final assembly" caption="FFC connected, ready for final assembly" />

## Assemble the console
You're done with hardware part. Follow iFixit guide to finish console assembly. You can now proceed with software modification using guides from this wiki.