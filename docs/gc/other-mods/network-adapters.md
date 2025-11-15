# Network adapters

Network adapter solutions for GameCube that enable online connectivity and network-based homebrew features.

```mdx-code-block
import { ProductCard, ProductGrid, ProductList, ProductListItem } from '@site/src/components/ProductCard';
import { ETH2GCModelsDefault } from '@site/src/components/ETH2GC';
```

## Overview

GameCube originally supported network connectivity through the official Broadband Adapter (BBA) and Modem Adapter. These adapters are now rare and expensive. Modern homebrew software like Swiss can emulate the Broadband Adapter, enabling various community-made network adapter solutions.

:::info Requires homebrew
All modern network adapters require homebrew software (typically [Swiss](https://github.com/emukidid/swiss-gc/)) to function. They emulate the original Broadband Adapter behavior through software.
:::

## ETH2GC

My own project offering professional network adapter solutions for GameCube. Connects via Serial Port 2 (DOL-001 models only).

[View full documentation →](/gc/eth2gc)

```mdx-code-block
<ETH2GCModelsDefault />
```

## Community projects

Network adapter projects created by the GameCube community.

### Card slot adapter by silversteel

Community-designed adapter available on AliExpress. Connects via Memory Card slot which makes it more compatible with various GameCube models like DOL-101 or Panasonic Q.

Design files and documentation available on [GitHub](https://github.com/silverstee1/ETH2GC-Card-Slot-Adapter).

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="Card slot adapter"
    description="Community-designed network adapter for Memory Card slot."
    url="https://s.click.aliexpress.com/e/_c4oi1CVB"
    image={require('@site/static/img/products/network-adapters/silversteel-memcard.jpg')}
    storeName="AliExpress"
  />
</ProductGrid>
```

### SP1ETH by silversteel

DIY network adapter project by silversteel that uses Serial Port 1 - the same port used by the original Nintendo Broadband Adapter. This makes it compatible with more GameCube models including DOL-101 and Panasonic Q.

This is a DIY-only project requiring 3D printing, custom PCB fabrication, and manual assembly with soldering skills.

Schematics and designs available on [GitHub](https://github.com/silverstee1/SP1ETH).

### GCNet by NeoStormer

Custom network solution by NeoStormer that connects via Memory Card slot. This adapter offers front-accessible installation. Available for direct purchase from the creator at [geeceenet.com](https://geeceenet.com/). May have limited availability and occupies one Memory Card slot during use.

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="GCNet Network Adapter"
    description="Custom network adapter by NeoStormer. Front-accessible Memory Card slot form factor."
    url="https://geeceenet.com/"
    image={require('@site/static/img/products/network-adapters/gcnet.jpg')}
    storeName="GCNet"
  />
</ProductGrid>
```