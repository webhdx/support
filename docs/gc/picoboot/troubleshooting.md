---
title: Troubleshooting
description: "Solutions for common PicoBoot issues including no video problems and power issues, with detailed explanations of causes and step-by-step fixes."
---

import Image from '@theme/IdealImage';
import Figure from '@site/src/components/Figure';

# Troubleshooting

## Problem: Stuck at gekkoboot debug screen

### Cause: SD card setup issues
This issue typically indicates problems with your SD card configuration. Many users have experienced this with SD2SP2 adapters, which are often of poor quality. I recommend trying a different SD2SP2 adapter, preferably a sideloading one (commonly referred to as "GB Player compatible"), as these tend to be more reliable. In mid-2024, a new type of semi-passive adapter was released, offering improved compatibility with demanding games and smooth FMV playback. I strongly recommend using new version over legacy type.

For consoles without an SP2 port (DOL-101, newer revision DOL-001, Panasonic Q), you can use a memory card form factor adapter, commonly known as SD Gecko, WiiSD, or GC2SD. These adapters provide the same functionality as SD2SP2 adapters but use a different port. Similar to SD2SP2 adapters above, these also come in semi-passive type improving performance.

<Figure img={require('/img/picoboot/gekkoboot.jpg')} alt='gekkoboot debug output' caption='gekkoboot debug output' zoom />

If you can access this screen, your PicoBoot installation is confirmed correct, and the issue lies within the SD card setup.

### Cause: Incompatible HDMI adapter
Some inexpensive Chinese GCVideo-based HDMI adapters can cause similar "booting to stock GameCube menu" issues. This is detailed in [this GitHub issue](https://github.com/ikorb/gcvideo/pull/123). The console may boot into Swiss once but return to the stock menu on subsequent power cycles. The recommended solution is to discontinue using these HDMI adapters as they aren't electrically safe (however there is no evidence of these adapters being harmful to the hardware). Alternatively, you can mitigate this issue by using the 5V pin and a diode to power PicoBoot. See [the wiring diagram](https://github.com/webhdx/PicoBoot/blob/main/assets/Wiring%20diagram.jpg) for details.

## Problem: Orange light on, no display (black or blue screen, no input screen)

### Cause: Excessive wire length
If your soldering is correct and there are no shorts, you're likely experiencing data line interference due to wire length. Follow this golden rule: keep wires as short as possible. The maximum recommended length is approx. 10 centimeters (or 4 inches). Wire type is crucial - use 26-28 AWG stranded wires. Single-core or thick wires can break easily or, in worst cases, damage motherboard pads if stressed.

### Cause: Short circuits
Check for any shorts between adjacent soldering points. GP4 and GP6 commonly short to the heatsink when routed over the U10 chip.

### Cause: Improper board placement
PicoBoot placement significantly affects reliability. Install it near the fan for guaranteed functionality. Alternative locations, while possible, are not recommended by the creator. Particularly, placing PicoBoot in the Serial Port 1 cavity for easier upgrades has proven unreliable for some users.

### Additional troubleshooting steps
- Try a different power supply (see [issue #32](https://github.com/webhdx/PicoBoot/issues/32))
- Use 5V instead of 3.3V as specified in the wiring diagram

## Problem: Power light turns off shortly after power up

### Cause: Power rail short circuit
This indicates a shorted power line. Carefully inspect your soldering and ensure wires only connect to the specified points in the diagram. Exercise caution around the SP1 connector, where you need to solder three wires - there's a 12V power line in this area. Accidental shorts here can permanently damage the console.

