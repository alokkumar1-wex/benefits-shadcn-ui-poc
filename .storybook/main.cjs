const { resolve } = require("node:path")

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": resolve(__dirname, "../src"),
    }

    return config
  },
}

module.exports = config

