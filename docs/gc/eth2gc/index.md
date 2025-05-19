---
title: ETH2GC
hide_title: true
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ETH2GCModels } from '@site/src/components/ETH2GC';
import { IconBrandGithub } from '@tabler/icons-react';
import HeroSection from '@site/src/components/HeroSection';

<HeroSection
  className="eth2gc"
  title="ETH2GC"
  description="A series of hardware adapters utilizing Broadband Adapter emulation in Swiss."
  githubUrl="https://github.com/webhdx/ETH2GC"
  logoSrc={{
    light: '/img/eth2gc/ETH2GC_Logo_Dark.png',
    dark: '/img/eth2gc/ETH2GC_Logo_Light.png',
  }}
/>

## Available models

<ETH2GCModels models={[
  {
    name: 'ETH2GC Sidecar',
    image: require('@site/static/img/eth2gc/ETH2GC_Sidecar.jpg'),
    purchase_url: 'https://store.webhdx.dev/products/eth2gc-sidecar-broadband-adapter-emulator',
    diy_url: null,
    nic: 'ENC28J60',
    description: (
      <>
        <div>✅ Uses off the shelf ENC28J60 "Mini" module</div>
        <div>✅ Compatible with GameBoy Player</div>
        <div>✅ Cable comes out at the rear</div>
      </>
    )
  },
  {
    name: 'ETH2GC Lite',
    image: require('@site/static/img/eth2gc/ETH2GC_Lite.jpg'),
    purchase_url: 'https://store.webhdx.dev/products/eth2gc-lite-broadband-adapter-emulator',
    diy_url: 'https://github.com/webhdx/ETH2GC/#-eth2gc-lite',
    nic: 'ENC28J60',
    description: (
      <>
        <div>✅ Uses off the shelf ENC28J60 "Mini" module</div>
        <div>❌ Incompatible with GameBoy Player</div>
        <div>❌ Cable comes out to the side</div>
      </>
    )
  },
]} />

## Homebrew support
- [Swiss](https://github.com/emukidid/swiss-gc) - Swiss army knife of all GC homebrews
