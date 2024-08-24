// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ibrahim Abdel-Khaleq',
  tagline: "I’m Ibrahim Abdel- Khaleq, passionate about breaking and fixing things! Join me as I deploy DevOps and Platform Engineering strategies across on-prem and cloud datacenters.Let’s optimize, automate, and solve complex challenges together!",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ibrahimabdelkhaleq', // Usually your GitHub org/user name.
  projectName: 'ibrahimabdelkhaleq.com', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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
        blog: {
          showReadingTime: true,
          blogTitle: 'Ibrahim Abdel-Khaleq Blog',
          blogDescription: 'Ibrahim Abdel-Khaleq Blog',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 6,
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ibrahim Abdel-Khaleq',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: '/files/IbrahimAbdel_Khaleq.pdf',
          //   label: 'Resume',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/ibrahimabdelkhaleq',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'About me',
                to: '/',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/users/10370805/ibrahim-abdel-khaleq',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ibrahimabdelkhaleq/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ibrahimabdelkhaleq',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@ibrahimabdel-khaleq',
              },
              {
                label: 'Adplist',
                href: 'https://adplist.org/mentors/ibrahim-mohamed',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ibrahim Abdel-Khaleq Blog`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
      },
    }),
  plugins: [[require.resolve('docusaurus-lunr-search'), {
    languages: ['en', 'de'],
  }]],
};

export default config;