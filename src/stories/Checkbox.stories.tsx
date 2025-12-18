import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "@/index"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Checkboxes expose Radix semantics with keyboard toggle support. Pair every checkbox with a visible label or `aria-labelledby` relationship.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-sm">
      <label className="flex items-center gap-xs text-sm font-medium text-foreground">
        <Checkbox defaultChecked id="checkbox-checked" />
        <span>Checked</span>
      </label>
      <label className="flex items-center gap-xs text-sm text-muted-foreground">
        <Checkbox id="checkbox-unchecked" />
        <span>Unchecked</span>
      </label>
      <label className="flex items-center gap-xs text-sm text-muted-foreground">
        <Checkbox id="checkbox-disabled" disabled defaultChecked />
        <span>Disabled</span>
      </label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Leverage the `defaultChecked` or controlled props to synchronize state. Disabled checkboxes preserve contrast ratios for WCAG compliance.",
      },
    },
  },
}

