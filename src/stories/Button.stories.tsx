import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/index"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Use the `variant` and `size` props to align with the design tokens. Buttons expose WCAG-compliant focus rings and retain native keyboard activation.",
      },
    },
  },
  args: {
    children: "Primary action",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: "default",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-sm">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Variants map directly to design tokens. Prefer `secondary` or `outline` over custom theming when demoting an action.",
      },
    },
  },
}

export const SizesAndStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-sm">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon only">
        ✓
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only buttons must include an accessible label. Disabled buttons remain focusable through assistive tech when rendered within native form controls.",
      },
    },
  },
}

