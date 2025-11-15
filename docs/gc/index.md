# GameCube

Cube shaped Nintendo console.

## Browse projects

```mdx-code-block
import { ProjectCardList } from '@site/src/components/ProjectCard';

<ProjectCardList projects={[
  {
    name: 'PicoBoot',
    description: 'An open-source Nintendo GameCube modchip using Raspberry Pi Pico that allows booting homebrew applications directly without a boot disc.',
    docsUrl: '/gc/picoboot',
    logoSrc: {
      light: '/img/picoboot/logo.svg',
      dark: '/img/picoboot/logo.svg',
    },
    className: 'picoboot',
  },
  {
    name: 'ETH2GC',
    description: 'A series of hardware adapters utilizing Broadband Adapter emulation in Swiss.',
    docsUrl: '/gc/eth2gc',
    logoSrc: {
      light: '/img/eth2gc/ETH2GC_Logo_Dark.png',
      dark: '/img/eth2gc/ETH2GC_Logo_Light.png',
    },
    className: 'eth2gc',
  },
]} />
```