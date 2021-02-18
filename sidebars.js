module.exports = {
  someSidebar: {
    "Getting Started": ["introduction", "installation", "motivation"],
    Examples: ["runtime-binding-example"],
    Concepts: [
      "model",
      "binding",
      {
        type: "link",
        label: "Runtime Binding",
        href: "binding#runtime-binding",
      },
      {
        type: "link",
        label: "ServerSide Binding",
        href: "binding#serverside-binding",
      },
      "cache",
    ],
    "ServerSide Binding": [
      {
        "Laravel package": [
          "laravel/getting-started",
          "laravel/middleware",
          "laravel/security",
          {
            ELOQUENT: ["laravel/relationships"],
          },
        ],
      },
    ],
  },
};
