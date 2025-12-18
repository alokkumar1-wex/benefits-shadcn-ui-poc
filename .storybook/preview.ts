import type { Preview } from "@storybook/react"

import "@/styles/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "hsl(var(--color-bg))" },
        { name: "muted", value: "hsl(var(--color-bg-muted))" },
        { name: "surface", value: "hsl(var(--color-surface))" },
      ],
    },
    a11y: {
      options: {
        checks: { "color-contrast": { options: { noScroll: true } } },
      },
    },
  },
}

export default preview

