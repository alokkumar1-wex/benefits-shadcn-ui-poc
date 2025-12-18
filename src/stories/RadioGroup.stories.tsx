import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { RadioGroup, RadioGroupItem } from "@/index"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Radios use roving tab index for efficient keyboard navigation. Pair each radio with a visible label and describe the group using `aria-label` or `aria-labelledby`.",
      },
    },
  },
  args: {
    className: "grid gap-sm",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="standard">
      <label className="flex items-center gap-xs text-sm font-medium text-foreground" htmlFor="plan-standard">
        <RadioGroupItem value="standard" id="plan-standard" />
        Standard plan
      </label>
      <label className="flex items-center gap-xs text-sm font-medium text-foreground" htmlFor="plan-plus">
        <RadioGroupItem value="plus" id="plan-plus" />
        Plus plan
      </label>
      <label className="flex items-center gap-xs text-sm font-medium text-foreground" htmlFor="plan-enterprise">
        <RadioGroupItem value="enterprise" id="plan-enterprise" />
        Enterprise plan
      </label>
    </RadioGroup>
  ),
}

function ControlledRadioGroupStory() {
  const [value, setValue] = useState("weekly")

  return (
    <RadioGroup
      aria-label="Delivery cadence"
      value={value}
      onValueChange={(next) => setValue(next)}
      className="grid gap-sm"
    >
      <label className="flex items-center gap-xs text-sm font-medium text-foreground" htmlFor="weekly">
        <RadioGroupItem value="weekly" id="weekly" />
        Weekly summary
      </label>
      <label className="flex items-center gap-xs text-sm font-medium text-foreground" htmlFor="monthly">
        <RadioGroupItem value="monthly" id="monthly" />
        Monthly summary
      </label>
      <label className="flex items-center gap-xs text-sm text-muted-foreground" htmlFor="paused">
        <RadioGroupItem value="paused" id="paused" disabled />
        Paused (coming soon)
      </label>
    </RadioGroup>
  )
}

export const Controlled: Story = {
  render: () => <ControlledRadioGroupStory />,
  parameters: {
    docs: {
      description: {
        story:
          "`onValueChange` emits the option value string. Maintain external state to integrate with forms or data layers.",
      },
    },
  },
}

