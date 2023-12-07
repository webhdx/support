import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# User Manual

Congratulations on your purchase of the M.2 Loader, M.2 SATA SSD adapter designed for use with the Nintendo GameCube. This device is preassembled and ready to use, offering enhanced storage capabilities and a seamless gaming experience. Please follow the instructions below.

## Requirement

- M.2 Loader
- SSD
- M.2 to USB adapter
- GameCube
- some way to load Swiss

To utilize the M.2 Loader, you will need to acquire an M.2 SATA SSD. I strongly recommend purchasing one from the [SSD Compatibility List](ssd-compatibility-list.md). It is crucial to note that not all SSDs are compatible, and the M.2 Loader community consistently updates the compatibility list.

It's essential to understand that the M.2 Loader is not a standalone device, differing significantly from an Optical Drive Emulator such as GC Loader. It functions solely as a storage device, with Swiss handling the necessary processes to run games from it. Solder-free methods can be employed to run Swiss, including game save exploits and Action Replay.

For a more convenient M.2 Loader experience, it is advisable to use it on a console equipped with a modchip. PicoBoot is an excellent choice, being cost-effective and widely accessible due to its use of the Raspberry Pi Pico board. Nevertheless, alternatives such as KunaiGC or even older modchips (XenoGC, Qoob SX, Qoob Pro, ViperGC, Viper Extreme, HyperBoot) are equally effective and compatible.

## Preparing SSD

First you'll need to set up your SSD on your computer. This can be done with inexpensive M.2 SSD to USB adapter. A really cheap ones will do the job. I use $4 USB adapter and never had a single problem with it.

Once connected you need to format the drive to use FAT32 or exFAT filesystem. FAT32 has better compatibility with homebrew software so I recommend using FAT32. It's also important to use Master Boot Record (MBR) partition table.

If you are on Windows PC, you can use program called "guiformat" to prepare the SSD. Mac OS has built in program "Disk Utility".

Once the drive is formatted, you can copy your ISO images to it.

## Installing SSD

Before connecting the M.2 Loader to your GameCube, it is imperative to install the SSD. Please refrain from removing the SSD while the M.2 Loader is connected to the console.

To install the SSD, angle it appropriately, slide it into the M.2 slot, and firmly secure it in place using the provided screw.

<ThemedImage
alt="SSD installation"
width="60%"
sources={{
    light: useBaseUrl('/img/m2loader/ssd_install_light.jpg'),
    dark: useBaseUrl('/img/m2loader/ssd_install_dark.jpg')
  }}
/>

## Connecting M.2 Loader

Carefully insert the M.2 Loader into Serial Port 1 on the upside-down console, ensuring secure attachment. If met with resistance, avoid force, realign, and retry to prevent potential damage to the port.

Consider omitting the original port cover, especially if your SSD generates significant heat. Check the [SSD Compatibility List](ssd-compatibility-list.md) for heat-resistant disk recommendations to prevent potential overheating, which can lead to reduced lifespan or permanent damage. Some low profile heatsinks can be used to mitigate heat related problems.

## Troubleshooting

Rest assured, all units undergo thorough testing before they ship out. If you're facing any challenges, here are some tips to help you troubleshoot:

Firstly, make sure your SSD is a SATA type and is set up correctly—specifically, using the FAT32 file system and MBR configuration. Check our user manual for guidance on these settings.

Keep in mind that certain SSDs may pose compatibility issues. Even if they seem to work initially, like browsing files in Swiss, they might struggle with loading games. If you're running into problems, trying a different SSD could be worth exploring.

