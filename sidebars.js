/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  MainSidebar: [
    {
      type: 'category',
      label: 'GameCube',
      link: {type: 'doc', id: 'gc/index'},
      items: [
        {
          type: 'category',
          label: 'ETH2GC',
          link: {type: 'doc', id: 'gc/eth2gc/index'},
          items: [
            {
              type: 'doc',
              id: 'gc/eth2gc/faq',
            },
            {
              type: 'category',
              label: 'Sidecar',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'gc/eth2gc/sidecar/diy-assembly-guide',
                  label: 'DIY Assembly Guide',
                },
              ],
            },
            {
              type: 'category',
              label: 'Lite',
              collapsible: false,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'gc/eth2gc/lite/diy-assembly-guide',
                  label: 'DIY Assembly Guide',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'PicoBoot',
          link: {type: 'doc', id: 'gc/picoboot/index'},
          items: [
            'gc/picoboot/installation-guide',
            'gc/picoboot/faq',
            'gc/picoboot/troubleshooting',
            'gc/picoboot/update-picoboot',
            'gc/picoboot/compiling-firmware',
          ]
        },
      ],
    },
  ],
};
export default sidebars;
