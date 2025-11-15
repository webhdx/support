# AV cables and mods

Various audio/video solutions for GameCube that improve picture and sound quality.

```mdx-code-block
import { ProductCard, ProductGrid, ProductList, ProductListItem } from '@site/src/components/ProductCard';
```

## GCVideo based cables (highest quality possible)

Some GameCube models (DOL-001, Panasonic Q) come equipped with a digital AV output. It offers the best possible image and audio quality possible on the console. There are several options in this category, including the official GameCube Component cable made by Nintendo (however this option is quite rare and very expensive so not really recommended).

GCVideo is an open source project created by Ingo Korb, that converts Nintendo's proprietary digital video format to more common standards. Most digital cables and mods on the market are based on this project.

### EON GCHD MK-II HD Adapter

Dual output solution with HDMI digital video as well as Wii's style multi-AV output supporting RGB and Component. This a very convenient option for both HDMI and analog requirements. It comes with a higher price tag though.

### Insurrection Industries CARBY

Overall the best quality HDMI adapter available. It comes from a reputable manufacturer and is a very popular option among GameCube fans.

### GCPlug

It's the cheapest HDMI adapter available. The design is open source and it has become very popular on marketplaces like AliExpress and Amazon. The build quality is subpar to some other options available nowadays as it's fully 3D printed, including the proprietary connector piece. It uses less common mini HDMI port which requires an adapter or a correct cable.

### Retro-bit Prism HD Adapter

Overall good adapter, comes with metal connector piece.

### BitFunx/KAICO Digital HDMI adapter    

This is the most popoular HDMI adapter on AliExpress. It comes under KAICO or BitFunx brand but it's the same product. Good quality, metal construction.

This adapter is known to cause issues with PicoBoot when your installation uses 3.3V power. It can be mitigated by powering Pico from 5V through a diode.

### Available products

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="BitFunx HDMI adapter"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="GCPlug"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="Retro-bit Prism HD Adapter"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="EON GCHD MK-II HD Adapter"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    badge="Quality"
  />
  <ProductCard
    name="Insurrection Industries CARBY"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    badge="Quality"
  />
</ProductGrid>
```

## Internal modifications

Hardware modifications that replace or enhance the console's video output circuitry.

### Pluto HDMI

Modern HDMI mod offering digital video output with advanced features.

**Features:**
- Native digital HDMI output
- Line-doubling for 480p content
- Low latency
- Easy installation with flex cable

**Compatibility:**
- Works with all GameCube models (DOL-001, DOL-101)
- Retains original AV port functionality

### Hispeedido HDMI

This is a relatively new modification that was created by Hispeedido. There aren't many reviews on the product

**Features:**
- HDMI digital output
- Multiple video modes
- Compatible with most displays

**Compatibility:**
- Available for various GameCube models
- Check specific version compatibility

### Generic Chinese RGB boards

Affordable RGB modification boards from various manufacturers.

**Features:**
- Adds RGB output capability to NTSC consoles
- Uses multi-AV port for RGB output
- Requires SCART cable for connection

**Considerations:**
- Variable quality between manufacturers
- May require additional components
- Soldering skills required for installation

### PixelFX RetroGEM

High-end digital video solution with premium features.

**Features:**
- Multiple output modes (HDMI, component, RGB)
- Advanced scaling options
- Low latency
- Professional installation recommended

**Considerations:**
- Premium pricing
- Most feature-rich option
- Requires significant installation expertise

## Choosing the right solution

### For original display experience
- **RGB SCART cables** (with RGB mod) - Best analog quality
- **S-Video cables** - Good middle ground
- **Composite cables** - Basic but universally compatible

### For modern displays
- **Internal HDMI mods** (Pluto, Hispeedido) - Best quality, works on all models
- **Component cables** - Great quality, DOL-001 only
- **HDMI adapters** - Convenient, DOL-001 only

### Budget considerations
- **Most affordable**: Composite or S-Video cables
- **Mid-range**: Component cables or HDMI adapters
- **Premium**: Internal HDMI modifications

## Available products

Coming soon - links to recommended cables and modification kits.

## Analog output cables

Cables that use the GameCube's native analog output through the multi-AV port.

### Composite and S-Video cables

The most common and basic analog AV cables. These are usually the cheapest options but they don't offer good video quality. S-Video offers slightly improved video quality over Composite.

### RGB SCART cables

Highest quality analog signal available from GameCube using native analog out port. NTSC GameCube consoles don't output RGB natively. You need an internal RGB modification or a compatible PAL console to use RGB SCART cables.

### Available products

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="Basic composite cable"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="S-Video cable"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="RGB SCART cable"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    storeName="AliExpress"
  />
</ProductGrid>
```