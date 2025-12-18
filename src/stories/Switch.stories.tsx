import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { Switch } from "@/index"

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          "Switch represents an on/off decision. Always label the control and reserve it for binary states with immediate impact.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    id: "notifications",
  },
}

export const Controlled: Story = {
  render: function ControlledStory() {
    const [enabled, setEnabled] = useState(true)

    return (
      <label className="flex items-center gap-sm text-sm font-medium text-foreground" htmlFor="switch-controlled">
        <Switch
          id="switch-controlled"
          checked={enabled}
          onCheckedChange={(value) => setEnabled(Boolean(value))}
        />
        <span>{enabled ? "Notifications enabled" : "Notifications disabled"}</span>
      </label>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Switch emits a boolean via `onCheckedChange`. Convert the incoming value to a primitive boolean before syncing it with state.",
      },
    },
  },
}

