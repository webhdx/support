// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'support.webhdx.dev',
  tagline: 'Docs for some awesome mods',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://support.webhdx.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'webhdx', // Usually your GitHub org/user name.
  projectName: 'support', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch of the docs repo to deploy to
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/webhdx/support/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'announcement',
        content:
          'It\'s live! 🥳 Documentation is currently in beta! Please report any issues to me via Discord.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'support.webhdx.dev',
        logo: {
          alt: 'webhdx',
          src: 'img/logo.jpg',
          href: '/',
        },
        items: [
          {
            position: 'left',
            to: '/gc/eth2gc',
            label: 'ETH2GC',
          },
          {
            position: 'left',
            to: '/gc/picoboot',
            label: 'PicoBoot',
          },
          {
            href: 'https://store.webhdx.dev',
            label: 'Store',
            position: 'right',
          },
          {
            href: "https://github.com/webhdx/support",
            className: 'header-icon header-github-link',
            'aria-label': 'GitHub',
            position: "right",
          },
          {
            href: "https://click.webhdx.dev/discord",
            className: 'header-icon header-discord-link',
            'aria-label': 'Discord',
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} webhdx`,
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'ETH2GC',
                to: 'gc/eth2gc',
              },
              {
                label: 'PicoBoot',
                to: 'gc/picoboot',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join discord server',
                to: 'https://click.webhdx.dev/discord',
              },
              {
                label: 'Submit a bug or feature',
                to: 'https://github.com/webhdx/support/issues/',
              },
              {
                label: 'Support me on GitHub',
                to: 'https://github.com/sponsors/webhdx',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GC-Forever Wiki',
                to: 'https://gc-forever.com/wiki',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    
    plugins: [
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 70,
          max: 1030, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
};

export default config;
