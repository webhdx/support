---
title: Install PicoBoot
description: "Comprehensive installation guide for PicoBoot modchip, including required materials, step-by-step instructions for flashing firmware, preparing SD card, and hardware installation."
---

import { ProductCard, ProductGrid, ProductList, ProductListItem } from '@site/src/components/ProductCard';
import Figure from '@site/src/components/Figure';

# Install PicoBoot

:::danger Soldering Experience Required
PicoBoot is considered an easy soldering modification. However, there is significant evidence online showing that inexperienced users can easily damage their console beyond repair. Do not overestimate your soldering skills. Practice soldering on scrap electronics before attempting this installation.
:::

## Required Materials

### Raspberry Pi Pico board

**Raspberry Pi Pico 2 W** is the recommended board for new PicoBoot installations. It features a more powerful microcontroller (RP2350), increased RAM and flash memory, plus built-in WiFi and Bluetooth connectivity. These improvements may enable future feature enhancements. PicoBoot will continue to support Pico and Pico W boards (RP2040) for as long as possible.

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="Raspberry Pi Pico board"
    description="PicoBoot is compatible with all official Pico boards. The original $4 Pico is still great but consider Pico 2 W for future enhancements."
    url="https://s.click.aliexpress.com/e/_oCdaL9v"
    image={require('@site/static/img/products/picoboot/pico-board.jpg')}
    storeName="AliExpress"
  />
</ProductGrid>
```

### SD card with an adapter

Get one of these adapters. SD2SP2 is usually preferred but make sure your console has Serial Port 2 (most DOL-001 models, DOL-101 and Panasonic Q are incomaptible). Following adapters are upgraded, semi-passive version which offers the best gaming experience. Both options now offer the same read speeds despite common beliefs on online forums.

If you source it from other stores make sure to look for the upgraded versions of these adapters. They are called semi-passive and come with a small chip on board. The difference is very noticeable in read speeds.

You also need an SD card, format it to FAT32 or exFAT. FAT32 is recommended for better compatibility with homebrew software.

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="SD2SP2 v1.3 PRO"
    description="Semi-passive SD card adapter for DOL-001 Serial Port 2. Improved reading speeds."
    url="https://s.click.aliexpress.com/e/_olfXufh"
    image={require('@site/static/img/products/picoboot/sd2sp2.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="GC2SD"
    description="Alternative SD card adapter with semi-passive design. Inserted into Memory Card slot."
    url="https://s.click.aliexpress.com/e/_onzxcOR"
    image={require('@site/static/img/products/picoboot/gc2sd.jpg')}
    storeName="AliExpress"
  />
</ProductGrid>
```
### Other supplies and tools

#### Soldering iron

```mdx-code-block
<ProductList>
  <ProductListItem
    name="T12 Soldering Station"
    url="https://s.click.aliexpress.com/e/_opdkDGf"
    storeName="AliExpress"
  />
  <ProductListItem
    name="PINE64"
    url="https://s.click.aliexpress.com/e/_c3zxtZjP"
    storeName="AliExpress"
  />
</ProductList>
```

#### Other supplies

```mdx-code-block
<ProductList>
  <ProductListItem
    name="Solder Wire"
    url="https://s.click.aliexpress.com/e/_c3eCRJNF"
    storeName="AliExpress"
  />
  <ProductListItem
    name="Soldering Flux"
    url="https://s.click.aliexpress.com/e/_c3VbCqDP"
    storeName="AliExpress"
  />
  <ProductListItem
    name="26-28 AWG Wire Kit"
    url="https://s.click.aliexpress.com/e/_om0Bpt1"
    storeName="AliExpress"
  />
</ProductList>
```

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

<Figure img={require('/img/picoboot/wiring_diagram.jpg')} alt='Wiring diagram' caption='Wiring diagram' zoom />

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
