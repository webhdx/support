---
title: Introduction
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ETH2GCModels} from '@site/src/components/ETH2GC';

<div className="hero project">
  <div className="container">
    <div className="row">
    <div className="col col--9">
    <h1 class="hero__title">ETH2GC</h1>
      <div className="hero__subtitle">
        A hardware project for interfacing various Ethernet adapters to GameCube. It leverages Broadband Adapter emulation feature in [Swiss](https://github.com/emukidid/swiss-gc).
      </div>
    </div>
    <div className="col col--3 project__logo">
      <ThemedImage
        alt="ETH2GC Logo"
        width="100%"
        sources={{
          light: useBaseUrl('/img/eth2gc/ETH2GC_Logo_Dark.png'),
          dark: useBaseUrl('/img/eth2gc/ETH2GC_Logo_Light.png'),
        }}
      />
    </div>
  </div>
  </div>
</div>

# Available models

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
        <div>✅ Cable comes towards the rear</div>
      </>
    )
  },
  {
    name: 'ETH2GC Lite',
    image: require('@site/static/img/eth2gc/ETH2GC_Lite.jpg'),
    purchase_url: 'https://store.webhdx.dev/products/eth2gc-lite-broadband-adapter-emulator',
    diy_url: '#',
    nic: 'ENC28J60',
    description: (
      <>
        <div>✅ Uses off the shelf ENC28J60 "Mini" module</div>
        <div>❌ Incompatible with GameBoy Player*</div>
        <div>❌ Cable sticks out to the side</div>
      </>
    )
  },
]} />

*&ast; Unless physically modified by trimming through hole component legs.*


# 🛍️ Where to buy?
Original ETH2GC designs can be purchased directly from [my online store](https://store.webhdx.dev). By purchasing my products you help funding all my future projects.

# Homebrew support

- [Swiss](https://github.com/emukidid/swiss-gc) - Swiss army knife of all GC homebrews
