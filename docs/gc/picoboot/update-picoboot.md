---
title: Update PicoBoot
description: "Simple instructions for updating PicoBoot firmware using a PC and micro USB cable, with important safety warnings."
---

# Update PicoBoot

:::danger
If your Pico is wired without an in-series diode (most installations prior to PicoBoot v0.4), it is recommended to disconnect the 3.3V wire during the update. This prevents supplying 3.3V to the console, which could put a high load on the power regulator on the Pico board. It can get very hot and potentially fail, causing irreparable damage. Alternatively, you can power on the console after connecting the Pico to the computer.
:::

PicoBoot can be updated like any other Raspberry Pi Pico project. You need a PC and a micro USB cable.

1. Grab the latest `picoboot_full_pico.uf2` or `picoboot_full_pico2.uf2` file from the [Releases page](https://github.com/webhdx/PicoBoot/releases/latest).
   - `picoboot_full_pico.uf2`: Compatible with Raspberry Pi Pico and Raspberry Pi Pico W.
   - `picoboot_full_pico2.uf2`: Compatible with Raspberry Pi Pico 2 and Raspberry Pi Pico 2 W.
2. Hold down the `BOOTSEL` button on the Raspberry Pi Pico while connecting the USB cable.
3. A new mass storage device `RPI-RP2` or `RP2350` will appear.
4. Copy the appropriate `.uf2` file onto the device.
5. When flashing is successful, it will automatically eject itself. Correct flashing will result in solid green LED lighting up.
6. Disconnect the USB cable and test your console.
