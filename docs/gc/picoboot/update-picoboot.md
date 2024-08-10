# Update PicoBoot

:::danger
If your Pico is wired without in-series diode (most installations prior to PicoBoot v0.4) you should disconnect 3.3V wire for the time of update. This is done to prevent supplying 3.3V to the console which could put high load on power regulator on Pico board. It can get very hot and potentially fail causing irrepairable damage.
:::

PicoBoot can be updated like any other Raspberry Pi Pico project. You need a PC and a micro USB cable.

1. Grab the latest `picoboot_full.uf` file from [Releases page](https://github.com/webhdx/PicoBoot/releases/latest)
2. Hold down `BOOTSEL` button on Raspberry Pi Pico while connecting USB cable.
3. A new mass storage device `RPI-RP2` will appear.
4. Copy `picoboot_full.uf2` file onto the device.
5. When flashing is successful, it will automatically eject itself.
6. Disconnect the USB cable and test your console.
