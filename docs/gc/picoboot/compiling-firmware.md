---
sidebar_position: 2
description: "Guide for compiling PicoBoot firmware from source, including development environment setup using VS Code and Docker, building instructions, and flashing procedures."
---

# Compile PicoBoot firmware

:::info
The recommended way to build PicoBoot is using VS Code with the provided devcontainer environment. This ensures all dependencies are properly set up and consistent across different development machines.
:::

## Development Environment Setup

1. Install [VS Code](https://code.visualstudio.com/)
2. Install [Docker](https://www.docker.com/products/docker-desktop/)
3. Install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code
4. Clone the PicoBoot repository
5. Open the project in VS Code
6. When prompted, click "Reopen in Container" or use Command Palette (F1) and select "Remote-Containers: Reopen in Container"

The devcontainer includes all necessary dependencies including the Raspberry Pi Pico SDK.

## Building PicoBoot

Starting with v0.4 release, PicoBoot introduced split payload from modchip code. Now only part of the Pico can be updated to replace starting homebrew application. This was done in order to make PicoBoot more resilient to corrupted flash memory as well as to enforce interoperability between PicoBoot and other projects like [gekkoboot](https://github.com/redolution/gekkoboot) or [Swiss](https://github.com/emukidid/swiss-gc).

To build PicoBoot:

1. Place your `payload.dol` file in the project root directory
   - The entrypoint address of the *.dol must be **0x81300000**
   - **gekkoboot** is recommended and this is what PicoBoot releases are shipped with

2. Run the build script:
```shell
./tools/build.sh
```

After successful build, you'll find the following files in the `dist/` directory:
* `payload_*.uf2` - payload file for partial update
* `picoboot_*.uf2` - modchip code for partial udpate
* `picoboot_full_*.uf2` - full firmware + payload file, recommended for end-users and testing

## Flashing the Firmware

To flash new firmware to your Pico board:
1. Boot the Pico in `BOOTSEL` mode (hold `BOOTSEL` button and plug USB cable)
2. Copy `picoboot_full_*.uf2` file to the new `RPI-RP2` (or `RP2350`) device
3. The device will auto-eject and the green LED will light up on Pico