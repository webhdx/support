---
title: PicoBoot
hide_title: true
description: "An open-source Nintendo GameCube modchip using Raspberry Pi Pico that allows booting homebrew applications directly without a boot disc."
---

import { IconBrandGithub } from '@tabler/icons-react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PicoBootLogo from '@site/static/img/picoboot/logo.svg';
import YoutubeGrid from '@site/src/components/YoutubeGrid';
import DocCardList from '@theme/DocCardList';
import HeroSection from '@site/src/components/HeroSection';

<HeroSection
  className="picoboot"
  title="PicoBoot"
  features={[
    "open source",
    "uses $4 Raspberry Pi Pico board",
    "very easy installation, only 5 wires to solder or a flex cable",
    "upgradable via USB cable, without any drivers and programs",
    "automatically boots any homebrew app of your choice",
    "similar experience to ODEs like FlippyDrive or GC Loader",
  ]}
  githubUrl="https://github.com/webhdx/PicoBoot"
  logoSrc={{
    light: '/img/picoboot/logo.svg',
    dark: '/img/picoboot/logo.svg',
  }}
/>

## Documentation

<DocCardList />

## Videos

<YoutubeGrid videos={[
  {
    id: 'qwL4ZSa0xMo',
    title: 'PicoBoot Modchip Will Unleash The POWER of Your Nintendo GAMECUBE! | Installation Guide and Overview'
  },
  {
    id: 'lfMTLEM0yeQ',
    title: 'This new Gamecube Modchip is a GAMECHANGER - PicoBoot'
  },
  {
    id: 'W_9-mSBMBJ4',
    title: '$5 Gamecube IPL Modchip?! Picoboot Dol-001 + Dol-101 Installation / Setup / Showcase'
  },
  {
    id: 'rDrosSd-nDc',
    title: 'PicoBoot GameCube custom mod chip - make and install your own chip with a Raspberry Pi Pico'
  }
]} />
