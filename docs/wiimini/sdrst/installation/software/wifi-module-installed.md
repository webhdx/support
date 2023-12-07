---
id: sw-install-wifi
sidebar_label: With WiFi module
slug: /software/installation/wifi
---

# Software installation guide for Wii Mini with WiFi module installed
Wii does system check on boot and won't start if you don't have WiFi card installed. This is why Wii Mini comes with its own set of IOS modules where WiFi functionality has been removed. So after installing WiFi card we can basically install full System Menu and all regular IOS to enable missing features.

## Obtaining IOS modules
There are multiple ways to do it. You can use google to find all modules but much safer method is to use software to download them directly from Nintendo servers.

The easiest method I found is using NUS Downloader (NUSD) for Windows. It can use custom scripts to download multiple files automatically.

Download latest [NUSD from Wii Brew](https://wiibrew.org/wiki/NUS_Downloader). At the time of writing this guide `v1.9 Mod NUS-Fix - March 23rd, 2022` is the newest version available which is confirmed to be working.

Download `full_backup_latest_ios.nus` script from [the gist I made](https://gist.github.com/webhdx/feaf69d94111680cfe54a3e818fbe763) and save it on your computer.

### Downloading IOS modules
1. Launch NUS Downloader.

![NUSD Window](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/NUSD_Window.jpg)

2. Check `Pack WAD` option, other options are not important but you can uncheck some of the options to speed up the process. Refer to the screenshot above.
3. Click `Scripts -> Load NUS Script` and select `full_backup_latest_ios.nus` file.
4. It will automatically start downloading all IOS modules and save them in `scripts/full_backup_latest_ios.nus_output` directory.
5. Go to the directory where files have been downloaded and use file explorer to filter all `*.wad` files:

![File explorer showing *.wad files only](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/FileExplorer_WADs.jpg)

6. Copy all `*.wad` files to `wad/` directory on the USB stick you've used with BlueBomb.

You are all done with downloading IOS files. Now we need to grab System Menu and EULA channel. Why you need full System Menu is pretty much self explanatory but EULA channel may confuse some of you - we only install it to be able to use RiiConnect24 later. It's up to you but I highly recommend installing it now.

### Downloading System Menu 4.3 and EULA channel
1. In NUSD open `Database -> System -> System Menu` and select 4.3 version matching your console region:
    * `4.3J` - Japan
    * `4.3U` - USA/NTSC
    * `4.3E` - Europe/PAL
    * `4.3K` - Korea
2. Click `Start NUS Download!`.
3. Select `Database -> System -> EULA -> (Your Wii region) -> Latest Version`.
4. Click `Start NUS Download!`.
5. Go to `titles/` directory and use file explorer to find all `*.wad` files.
6. Copy EULA and System Menu WAD files to `wad/` directory on USB stick.

## Installing WADs on the console
Once you have all WADs you can install them on your Wii Mini. To do this you need to grab WiiMod Lite. You can use this guide: https://wii.guide/wiimodlite.html to get a brief overview on installing WADs, there is also a link to download the app.

**Be careful! Installing WADs is very dangerous and can brick your console. I do not take responsibility for anything you do by following this guide. Do it at your own risk. You've been warned.**

1. Select `WAD Manager`.
2. Select `USB Mass Storage Device`.
3. Go to `wad/` directory and press `1` to install all files in the directory. **CAUTION** Make sure there are only files downloaded in the previous step! Other `*.wad` files could be potentially dangerous.

![WiiMod Lite WAD Manager](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/WiiModLite_WADs.jpg)
4. Confirm installing WAD files.
![WiiMod Lite *.wad install confirmation](https://raw.githubusercontent.com/wiki/webhdx/WiiMini-SDRST/images/WiiModLite_InstallConfirm.jpg)

5. Wait a few minutes for WiiMod Lite to finish installing WADs.
6. Reboot the console.

**YOU ARE DONE!** You Wii Mini is now running full System Menu 4.3 and all regular IOS modules. You can access SD card in Data Management and connect to WiFi network in System Settings.
