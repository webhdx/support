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
            'gc/eth2gc/faq',
            {
              type: 'category',
              label: 'Sidecar',
              link: undefined,
              items: [
                {
                  type: 'doc',
                  id: 'gc/eth2gc/sidecar/build-guide',
                  label: 'Build guide',
                },
              ],
            },
            {
              type: 'category',
              label: 'Lite',
              link: undefined,
              items: [
                {
                  type: 'doc',
                  id: 'gc/eth2gc/lite/build-guide',
                  label: 'Build guide',
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
          ],
        },
      ],
    },
  ],
};
export default sidebars;
