# Troubleshooting

## Problem: Booting into stock GC menu

### Cause: SD Card setup
In most cases this suggests there are issues with your SD card setup. Many people experienced this with SD2SP2 adapters which are very often terrible quality. I suggest trying different SD2SP2 adapter, preferably sideloading one (so called "GB Player compatible") which are, in my experience, more reliable. In mid 2024, a new version "SD2SP2 v2.0" was released. It improves compatibility with demanding games, making FMVs play with no stutter. I highly recommend getting "v2.0" adapters over the old ones.

If your console is missing SP2 port (DOL-101, newer revision DOL-001, Panasonic Q) you can get memory card form factor adapter which is often called SD Gecko, WiiSD or GC2SD. They are functionally the same as SD2SP2 adapters, just using different port.

To confirm it's indeed SD card related problem, you can hold D-Pad Down button during boot. It should show debug info screen while you hold the button. Make sure you're using the latest software version. Afromentioned debug screen will looks similar to the one below:

![IPLBoot debug output](/img/picoboot/iplboot_debug_output.png)

If you get to show this screen, you can be assured your PicoBoot installation is 100% correct and the problem lies in SD card setup. 

### Cause: Cheap Chinese HDMI adapter

Similar "booting to stock GameCube menu" issue can happen with some cheap Chinese GCVideo based HDMI adapters. It's described in detail in [here](https://github.com/ikorb/gcvideo/pull/123). Basically the console will boot to Swiss once and then it'll boot to the stock menu on next power cycle. The best solution is to stop using mentioned HDMI adapter as it's potentially harmful. Alternatively this issue can be mitigated by using 5V pin and a diode to power PicoBoot. Refer to [the wiring diagram](https://github.com/webhdx/PicoBoot/blob/main/assets/Wiring%20diagram.jpg) for more information. 

## Problem: Orange light is on but it doesn't display anything on the screen

### Cause: Wires are too long (very common!)

If you are 100% sure your soldering is okay and there are no shorts, you are probably experiencing interference on data lines caused by wires length. There is a golden rule: use as short wires as possible. 10 centimeters (~4 inches) is what I'd consider as a maximum recommended length. Type of the wires is also very important. Use 26-28 AWG stranded wires. Single core or thick wires can easily break or in worst case rip pads from the motherboard if you put too much stress on them. This kind of damage is often irrepairable. This is why you should practice soldering before attempting the installation. 

### Cause: Shorts between soldering points

First rule out any shorts between adjacent points. It's also common for GP4 and GP6 short to the heatsink if you soldered routed over U10 chip.

### Cause: Board placement 

PicoBoot placement also plays a huge role in reliability - install it near the fan, it's guaranteed to work in that spot. There are some alternative locations which are not recommended by the creator. Especially placing PicoBoot in Serial Port 1 cavity for ease of upgrading has proven to be unreliable for some users.

### Other things to try

- Try a different power supply, ref. https://github.com/webhdx/PicoBoot/issues/32
- Use 5V instead of 3.3V as noted in the wiring diagram.

## Problem: Power light comes off shortly after power up

### Cause: There is a short on 3.3V or 5V power rails

This indicates shorted power line. Check your soldering and make sure wires are not touching any other point than the one mentioned in the diagram. Please be careful, there is 12V power line on the SP1 connector where you need to solder 3 wires. Accidential shorts in this area can be permanently harmful to the console.

