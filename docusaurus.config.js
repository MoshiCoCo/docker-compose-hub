// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'docker-compose-hub',
    tagline: 'docker-compose-hub',
    url: 'https://docker-compose.misec.top',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'MoshiCoCo', // Usually your GitHub org/user name.
    projectName: 'docker-compose-hub', // Usually your repo name.

    presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                editUrl: 'https://github.com/MoshiCoCo/docker-compose-hub/blob/main/',
            }, blog: {
                showReadingTime: true, // Please change this to your repo.
                editUrl: 'https://github.com/MoshiCoCo/docker-compose-hub/blob/main/',
            }, theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),],],

    themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'docker-compose-hub', logo: {
                    alt: 'My Site Logo', src: 'img/logo.svg',
                }, items: [{
                    type: 'doc', docId: 'intro', position: 'left', label: '快速开始',
                }, {to: '/blog', label: 'Blog', position: 'left'}, {
                    href: 'https://github.com/MoshiCoCo/docker-compose-hub', label: 'GitHub', position: 'right',
                },],
            }, footer: {
                style: 'dark', links: [{
                    title: 'Docs', items: [{
                        label: 'Tutorial', to: '/docs/intro',
                    },],
                }, {
                    title: 'Community', items: [{
                        label: 'Github', href: 'https://github.com/MoshiCoCo/docker-compose-hub',
                    }, // {
                        //   label: 'Discord',
                        //   href: 'https://discordapp.com/invite/docusaurus',
                        // },
                        // {
                        //   label: 'Twitter',
                        //   href: 'https://twitter.com/docusaurus',
                        // },
                    ],
                }, {
                    title: 'More', items: [{
                        label: 'Blog', to: '/blog',
                    }, {
                        label: 'GitHub', href: 'https://github.com/MoshiCoCo/docker-compose-hub',
                    },],
                },], copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            }, prism: {
                theme: lightCodeTheme, darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
