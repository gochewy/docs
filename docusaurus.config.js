/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chewy Stack',
  tagline: 'Full fledged projects, in a simple way',
  url: 'https://gochewy.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gochewy', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Chewy Documentation',
      logo: {
        alt: 'Chewy Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://dev.to/gochewy', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/gochewy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/dXQ8qUYMVQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gochewyio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://dev.to/gochewy',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gochewy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ephemere Creative Ltd`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
