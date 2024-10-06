# Installation guide

:::danger v0.4 firmware issues
Some people are reporting **reliability issues** with **v0.4 firmware**. In such case please stick to v0.3 until the issue is resolved. v0.3 firmware is available [on GitHub](https://github.com/webhdx/PicoBoot/releases/tag/v0.3) together with old [installation diagram](https://raw.githubusercontent.com/webhdx/PicoBoot/refs/tags/v0.3/assets/Wiring%20diagram.jpg).
:::

:::warning
People have a tendency to overestimate their skills after watching tutorial videos where everything seems easy. Please practice soldering on some scrap electronics before attempting PicoBoot installation.
:::

## Prerequisites

You obviously need a soldering iron, soldering wire, flux. For the wires I recommend 26-28 AWG gauge. A good recommended soldering station is T12 ([Amazon](https://amzn.to/3bgBbOW), [AliExpress](https://s.click.aliexpress.com/e/_DEiTBWJ)). It has Voultar's seal of approval for installing many console mods!

* Soldering iron
* Soldering wire, preferably lead based "Sn60Pb40"
* Raspberry Pi Pico ([AliExpress](https://s.click.aliexpress.com/e/_DmWBvwb))
* SD card adapter (choose one):
    - SD Gecko or WiiSD ([AliExpress](https://s.click.aliexpress.com/e/_Dm43n6J)), GC2SD ([AliExpress](https://s.click.aliexpress.com/e/_DCGkoQf))
    - SD2SP2 ([AliExpress](https://s.click.aliexpress.com/e/_DCQ6XUf)). Get new **v2.0** version, it's faster.
* FAT32 formatted SD card
* Good quality wires, 26-28 AWG gauge ([AliExpress](https://s.click.aliexpress.com/e/_DldVJQr))

Links above are affiliated and I get a small commission with no additional cost for you. Thanks to everyone who used links above 🙏

## Flashing Raspberry Pi Pico board

Go to [the latest release page](https://github.com/webhdx/PicoBoot/releases/latest) and download `picoboot_full.uf2` file. Now connect Raspberry Pi Pico board to your computer while holding down `BOOTSEL` button. If it's been done correctly you'll see `RPI-RP2` mass storage device show up. Drag and drop `picoboot_full.uf2` file to that device. It'll automatically eject and green LED will light up if it was programmed correctly. Unplug USB cable from Pico and proceed with hardware installation.

## Preparing SD card

Format your SD card to FAT32 or exFAT. Download the latest Swiss release from [here](https://github.com/emukidid/swiss-gc/releases/latest) and grab `swiss_rXXXX.dol` file, rename it to `ipl.dol` and copy to the root of your SD card.

## Hardware installation

:::info Wiring change
Prior to PicoBoot v0.4, wiring was slightly different and most videos available online cover the old wiring method. You no longer need to bridge pins **GP6 and GP7**. If you are making fresh PicoBoot installation please follow new wiring diagram. If you are updating from older firmware, you don't have to change the wiring at all as new firmware is backwards compatible.
:::

[![Wiring diagram](/img/picoboot/wiring_diagram.jpg)](/img/picoboot/wiring_diagram.jpg)

* Install PicoBoot on the fan assembly or behind front controller plate.
* Use official Raspberry Pi Pico (W) boards only.
* Pay attention to the wires! 26 AWG stranded silicone wires are my best recommendation. This is very important.
* To remove the heatsink easily, warm up the console for 10-15 minutes just by playing some game. Once it's up to the temperature, the heatsink should come off much easioer. You can twist it back and forth a few times to make thermal pads loosen up. Do not use prying tools. Be careful to not knock off any components from the board, especially DA15 component seems to be often ripped out. 