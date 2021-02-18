module.exports = {
  someSidebar: {
    "Getting Started": ["introduction", "installation", "motivation"],
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
    Examples: ["runtime-binding-example"],
    "ServerSide Binding": [
      {
        Laravel: [
          "laravel/getting-started",
          "laravel/middleware",
          "laravel/security",
          {
            Eloquent: ["laravel/relationships"],
          },
        ],
      },
    ],
  },
};
