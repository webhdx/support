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

![Hookup PCB soldered to the mainboard](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Hookup_Soldered.jpeg)

You can connect FFC cable now. Fold it as shown in the picture. Route it so that it goes under WiFi module area. Make sure the FFC is routed away from screw holes or it'll get damaged during assembly.

![FFC connected and routed](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_FFC_Folding.jpg)
![FFC routing](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_FFC.jpg)

## Preparing Wii shell
The kit comes with 2 3D printed drill guies. They're used to make clean cutout for microSD card slot and reset button. Start with either one and mount it to the screw post, note the correct orientation as shown in the photo. Do not use both attached at the same time.

![Drill guide mounted on a screw post](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Drill_Guide.jpg)

![Drilling](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Cutout_Drilling.jpg)

![Drilling done](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Cutout_1.jpg)

![Finishing cutout](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Cutout_2.jpg)

Use crafting knife to widen the cutout.

![Using crafting knife](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Cutout_3.jpg)

Use small file to finish off the cutout.

## Mounting main PCB
The main PCB comes assembled with 3D printed frame. It's mounted on the screw post previously used by the drill guides. Connect other end of flex cable to the main PCB, make sure it's oriented correctly (silver contacts facing top). Reversing the cable may be potentialy dangerous for your console/SDRST kit.


![Main PCB mounted on the screw post](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_MountedPCB.jpg)
![FFC connected, ready for final assembly](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/SDRST_Mounted.jpg)

## Assemble the console
You're done with hardware part. Follow iFixit guide to finish console assembly. You can now proceed with software modification using guides from this wiki.