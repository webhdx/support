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
        // {
        //   type: 'category',
        //   label: 'M.2 Loader',
        //   link: {type: 'doc', id: 'gc/m2loader/index'},
        //   items: [
        //     'gc/m2loader/user-manual',
        //     'gc/m2loader/ssd-compatibility-list',
        //     'gc/m2loader/specifications',
        //   ],
        // },
        {
          type: 'category',
          label: 'ETH2GC',
          link: {type: 'doc', id: 'gc/eth2gc/index'},
          items: [
            'gc/eth2gc/index',
            // 'gc/eth2gc/lite-vs-sidecar',
            // 'gc/eth2gc/build-your-own',
          ],
        },
        {
          type: 'category',
          label: 'PicoBoot',
          link: {type: 'doc', id: 'gc/picoboot/index'},
          items: [
            'gc/picoboot/compiling-firmware',
            'gc/picoboot/faq',
            'gc/picoboot/installation-guide',
            'gc/picoboot/troubleshooting',
            'gc/picoboot/update-picoboot',
          ],
        },
      ],
    },
  ],
};
export default sidebars;
