---
title: ETH2GC
hide_title: true
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ETH2GCModels } from '@site/src/components/ETH2GC';
import { IconBrandGithub } from '@tabler/icons-react';

<div className="hero project">
  <div className="container">
    <div className="row">
    <div className="col col--8">
    <h1 class="hero__title">ETH2GC</h1>
      <div className="hero__subtitle">
        A series of hardware adapters utilizing Broadband&nbsp;Adapter emulation in [Swiss](https://github.com/emukidid/swiss-gc).
      </div>
      <a href="https://github.com/webhdx/ETH2GC" target="_blank" class="button button--lg button--primary button--icon"><IconBrandGithub stroke={2} /> View on GitHub</a>
    </div>
    <div className="col col--4 project__logo">
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

# Where to buy?
Original ETH2GC designs can be purchased directly from [my online store](https://store.webhdx.dev). By purchasing from my store you help funding all my future projects.

# Homebrew support

- [Swiss](https://github.com/emukidid/swiss-gc) - Swiss army knife of all GC homebrews
