---
sidebar_position: 2
---

# Compiling PicoBoot firmware

:::info
Before following steps, make sure you have Raspberry Pi Pico SDK installed on your machine.
:::

Build Makefile and all required build scripts:
```shell
# cmake .
```

Starting with v0.4 release, PicoBoot introduced split payload from modchip code. Now only part of the Pico can be updated to replace starting homebrew application. This was done in order to make PicoBoot more resiliant to corrupted flash memory as well as to enforce interoperability between PicoBoot and other projects like [gekkoboot](https://github.com/redolution/gekkoboot) or [cubeboot](https://github.com/OffBroadway/cubeboot).

In order to proceed you need a homebrew app of your choice that will be injected by PicoBoot during boot sequence. By default, PicoBoot is shipped with [gekkoboot](https://github.com/redolution/gekkoboot) which comes with features like assigning different *.dol files to buttons, chain loading Swiss from SD card etc. If you plan to ship your own homebrew app, you have to make sure the entrypoint address of the *.dol is **0x81300000**.

Process your *.dol to produce `payload.uf2`:
```shell
# ./process_ipl.py gekkoboot.dol payload.uf2
```

`gekkoboot.dol` can be substituted with your file

Now compile PicoBoot:

```shell
# make
```

If there are no errors in the output log, you'll see 2 new files we are interested in:
* `picoboot.uf2` - PicoBoot code update file
* `picoboot_full.uf2` - PicoBoot code + payload update file (using *.dol file provided in the earlier step)

You can now flash new firmware to your Pico board just by booting it in `BOOTSEL` mode (hold `BOOTSEL` button and plug USB cable), then moving `picoboot_full.uf2` file onto the new `RPI-RP2` device. It'll auto eject and green LED will light up on Pico.