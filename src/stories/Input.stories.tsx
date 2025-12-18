import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/index"

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Inputs rely on semantic HTML and design tokens for spacing and focus states. Compose them with `<label>` elements to ensure accessible naming.",
      },
    },
  },
  args: {
    placeholder: "Type here…",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-sm">
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="input-default">
          Default
        </label>
        <Input id="input-default" placeholder="Account name" />
      </div>
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="input-disabled">
          Disabled
        </label>
        <Input id="input-disabled" placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="input-error">
          Error state
        </label>
        <Input
          id="input-error"
          aria-invalid="true"
          aria-describedby="input-error-help"
          placeholder="Email address"
        />
        <p id="input-error-help" className="text-sm text-destructive">
          Enter a valid email to continue.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use `aria-invalid` and `aria-describedby` when surfacing validation feedback. Avoid custom inline styles that conflict with design tokens.",
      },
    },
  },
}

