---
title: Install PicoBoot
description: "Comprehensive installation guide for PicoBoot modchip, including required materials, step-by-step instructions for flashing firmware, preparing SD card, and hardware installation."
---

import ShoppingButton from '@site/src/components/ShoppingButton';
import Image from '@theme/IdealImage';

# Install PicoBoot

:::danger Firmware Version Warning
A small percentage of **v0.4** firmware users reported reliability issues. If you experience problems, please use v0.3.x firmware instead:
- Download the latest v0.3.x release from [GitHub](https://github.com/webhdx/PicoBoot/releases/tag/v0.3.1)
- Wire PicoBoot according to [legacy v0.3 wiring diagram](https://raw.githubusercontent.com/webhdx/PicoBoot/refs/tags/v0.3/assets/Wiring%20diagram.jpg)
:::

:::warning Soldering Experience Required
PicoBoot is considered an easy soldering modification. However, there is significant evidence online showing that inexperienced users can easily damage their console beyond repair. Do not overestimate your soldering skills. Practice soldering on scrap electronics before attempting this installation.
:::

## Required Materials

Affiliate links below help support the project at no extra cost to you. Thank you for your support! 🙏

### Essential Tools
- Soldering iron like T12 station (<ShoppingButton url="https://s.click.aliexpress.com/e/_opdkDGf" />) or PINE64 (<ShoppingButton url="https://s.click.aliexpress.com/e/_oENPHxd" />)
- Soldering wire: Sn60Pb40 lead-based is recommended (<ShoppingButton url="https://s.click.aliexpress.com/e/_opePFor" />)
- Flux (<ShoppingButton url="https://s.click.aliexpress.com/e/_omFsBsn" />)
- 26-28 AWG gauge wires (<ShoppingButton url="https://s.click.aliexpress.com/e/_om0Bpt1" />)

### Hardware Components
1. Compatible Raspberry Pi board (<ShoppingButton url="https://s.click.aliexpress.com/e/_oCdaL9v" />):
   - Raspberry Pi Pico
   - Raspberry Pi Pico W
   - Raspberry Pi Pico 2
   - Raspberry Pi Pico 2 W
2. SD card adapter like GC2SD, SD Gecko, WiiSD or SD2SP2:
   - SD2SP2: If you have DOL-001 with Serial Port 2 (<ShoppingButton url="https://s.click.aliexpress.com/e/_olfXufh" />)
   - GC2SD/WiiSD/SD Gecko: If you have DOL-001 with Serial Port 2 (<ShoppingButton url="https://s.click.aliexpress.com/e/_onzxcOR" />)
3. FAT32 formatted SD card

:::note Semi-passive SD card adapters
Nowadays there are new, upgraded SD card adapter utilizing aditional discrete logic component to greatly improve reading speeds. All above links are for semi-passive adapters.
:::

## Installation Steps

### Flash the Raspberry Pi Pico
1. Download correct UF2 file from [the latest release](https://github.com/webhdx/PicoBoot/releases/latest)
   - `picoboot_full_pico.uf2`: if you are using Raspberry Pi Pico or Pico W board
   - `picoboot_full_pico2.uf2`: if you are using Raspberry Pi Pico 2 or Pico 2 W board
2. Hold `BOOTSEL` button and connect the board to your computer
3. Look for `RPI-RP2` or `RP2350` mass storage device
4. Drag and drop `*.uf2` file onto the device
5. Wait for automatic ejection and green LED confirmation
6. Unplug USB cable

### Prepare the SD Card
1. Format SD card to FAT32 or exFAT
2. Download the latest Swiss version from [releases page](https://github.com/emukidid/swiss-gc/releases/latest)
3. Rename `swiss_rXXXX.dol` to `ipl.dol`
4. Copy `ipl.dol` to SD card root directory

### Hardware Installation

:::info Wiring Update
**Important Change:** PicoBoot v0.4+ has updated wiring requirements and briding pins GP6 and GP7 is no longer required. New firmware is backwards compatible with legacy wiring but you should follow the new wiring diagram below.
:::

<Image img={require('/img/picoboot/wiring_diagram.jpg')} alt='Wiring diagram' />

### Installation Tips
- Mount PicoBoot on fan assembly or behind front controller plate
- Use only official Raspberry Pi Pico (W) or Pico 2 (W) boards
- For heatsink removal:
  - Warm up console by playing a game for 10-15 minutes
  - Gently twist heatsink back and forth, be careful not to damage DA15 component on the motherboard
  - Avoid using prying tools
- After installation:
  - Console should boot directly to Swiss or stop on gekkoboot debug screen
  - If you see stock GameCube menu or nothing displays, refer to [Troubleshooting Guide](./troubleshooting.md)
