# Power modifications

```mdx-code-block
import { ProductCard, ProductGrid } from '@site/src/components/ProductCard';
```

Various power supply modifications for GameCube that modernize the power delivery system.

:::tip USB-C Power Delivery voltage requirements

Pay attention to the **Power Delivery voltage requirements** when choosing a USB-C port replacement board. Some designs require **12V PD**, which is less common in the USB Power Delivery standard.

Not all USB-C chargers support 12V output. Before purchasing, verify:
- Which voltage your chosen board requires (typically 12V or 15V)
- Whether your USB-C charger supports that specific voltage

:::

## USB-C Power Delivery cables and adapters

This is the **easiest and most user-friendly solution** for modernizing your GameCube's power supply. These products feature a standard GameCube power plug with integrated Power Delivery circuitry, allowing you to power your console using modern USB-C chargers without opening the console.

### Features

- **No console modifications required** - plug and play solution
- Native USB-C Power Delivery support
- Compatible with modern USB-C chargers and power banks
- Built-in voltage negotiation circuitry
- Maintains original power connector reliability

### Available products

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="USB-C PD Cable"
    description="Complete cable solution with integrated PD circuitry. Most affordable option for USB-C power delivery."
    url="https://s.click.aliexpress.com/e/_c4o36znb"
    image={require('@site/static/img/products/usb-c-mods/usbc-cable.jpg')}
    badge="Best Value"
    storeName="AliExpress"
  />
  <ProductCard
    name="USB-C PD Adapter"
    description="Compact adapter that converts power connector to USB-C. Use with your own cable for flexibility."
    url="https://s.click.aliexpress.com/e/_c4qWRb6p"
    image={require('@site/static/img/products/usb-c-mods/usbc-adapter.jpg')}
    storeName="AliExpress"
  />
</ProductGrid>
```

## USB-C port replacement boards

This modification involves replacing the original "power input board" PCB with a new board that includes a USB-C port and Power Delivery negotiation circuitry. The replacement board fits in the same location as the original power connector, making it a clean and permanent solution for modernizing your GameCube's power delivery.

### Features

- Direct replacement for original power connector
- USB-C Power Delivery support with automatic voltage negotiation
- Maintains original mounting points and case compatibility
- No external adapters or cables needed
- Clean, integrated look

### Popular products

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="USB-C Replacement PCB"
    description="Budget-friendly option with basic functionality. Quality may vary."
    url="https://s.click.aliexpress.com/e/_c30qf3pj"
    image={require('@site/static/img/products/usb-c-mods/generic-aliexpress-usbc-kit-2.jpg')}
    badge="Cheapest"
    storeName="AliExpress"
  />
  <ProductCard
    name="USB-C Replacement PCB"
    description="Budget-friendly option with basic functionality. Quality may vary."
    url="https://s.click.aliexpress.com/e/_c33rp9rJ"
    image={require('@site/static/img/products/usb-c-mods/generic-aliexpress-usbc-kit-1.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="USB-C Replacement PCB"
    description="Budget-friendly option with basic functionality. Quality may vary."
    url="https://s.click.aliexpress.com/e/_c3jlMpbJ"
    image={require('@site/static/img/products/usb-c-mods/generic-aliexpress-usbc-kit-3.jpg')}
    storeName="AliExpress"
  />
  <ProductCard
    name="Giltesa USB-C Kit"
    description="Professional kit with comprehensive documentation and community support. Includes everything needed for installation."
    url="https://shop.giltesa.com/product/nintendo-gamecube-usb-c-kit/"
    image={require('@site/static/img/products/usb-c-mods/giltesa-kit.jpg')}
    badge="Quality"
    storeName="Giltesa Shop"
  />
  <ProductCard
    name="HDR GameCube PD"
    description="High-quality replacement board by fellow modder HDR. Reliable performance and excellent build quality."
    url="https://retrogamerepairshop.com/products/hdrs-gc-pd?variant=42955811881132"
    image={require('@site/static/img/products/usb-c-mods/hdr-kit.jpg')}
    badge="Quality"
    storeName="RGRS"
  />
</ProductGrid>
```

## Third-party replacement power supplies

:::danger Not recommended

Third-party replacement power supplies are **not recommended** for GameCube. While they may seem like a convenient and affordable option, they often cause more problems than they solve.

:::

Third-party GameCube power supplies are widely available on marketplaces like Amazon and AliExpress. These units are typically manufactured in China and are often marketed as direct replacements for the original Nintendo power supply.

The most common issue is **video interference when using analog outputs**. Users frequently report:

- Visual glitches and artifacts on screen
- Horizontal lines or noise in the video signal
- Unstable picture quality
- Particularly noticeable when using CRT televisions
- Issues affect analog video and audio output

### Available products

If you absolutely must purchase a third-party power supply as a last resort, here are some options. Remember that these are **not recommended** and may cause video quality issues.

```mdx-code-block
<ProductGrid>
  <ProductCard
    name="Third-Party AC Adapter"
    description="Generic replacement power supply. Not recommended - may cause video quality issues. Buy only as last resort."
    url="https://s.click.aliexpress.com/e/_c4aITlFf"
    image={require('@site/static/img/products/usb-c-mods/third-party-psu.jpg')}
    badge="Not recommended"
    storeName="AliExpress"
  />
</ProductGrid>
```