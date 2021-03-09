module.exports = {
  title: "UseDB",
  tagline: "DB connection for React without writing the APIs",
  url: "https://usedbjs.github.io",
  baseUrl: "/usedb/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icon.svg",
  organizationName: "usedbjs", // Usually your GitHub org/user name.
  projectName: "usedb", // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: "UseDB",
      logo: {
        alt: "My Site Logo",
        src: "img/usedb-logo.svg",
        srcDark: "img/usedb-logo-dark.svg",
      },
      items: [
        {
          to: "docs/introduction",
          label: "Docs",
          position: "right",
        },
        {
          to: "docs/faq",
          label: "FAQ",
          position: "right",
        },

        {
          to:
            "https://geekyants.com/hire?utm_source=usedb&utm_medium=header&utm_campaign=usedb",
          label: "Hire Us",
          position: "right",
        },
        {
          to: "https://github.com/usedbjs/usedb",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/introduction",
            },
            // {
            //   label: "Concepts",
            //   to: "docs/model/",
            // },
            // {
            //   label: "Examples",
            //   to: "docs/runtime-binding-example/",
            // },
            // {
            //   label: "ServerSide Binding",
            //   to: "docs/laravel/getting-started/",
            // },
            {
              label: "FAQ",
              to: "docs/faq",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/usedbjs/usedb",
            },
            {
              label: "Contribution Guidelines",
              href:
                "https://github.com/usedbjs/usedb/blob/main/contributions.md",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts",
              href:
                "https://geekyants.com/?utm_source=usedb&utm_medium=footer&utm_campaign=usedb",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UseDB`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects: function (existingPath) {
          if (existingPath === "/usedb") {
            return ["/"]; // string | string[]
          }
        },
      },
    ],
  ],
};
