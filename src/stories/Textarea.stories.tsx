import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "@/index"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "Textarea shares the same focus treatment and spacing tokens as inputs. Provide helper copy via `aria-describedby` to keep long-form responses accessible.",
      },
    },
  },
  args: {
    placeholder: "Provide context…",
    rows: 4,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="grid gap-sm">
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="textarea-default">
          Default
        </label>
        <Textarea id="textarea-default" placeholder="Share your feedback" />
      </div>
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="textarea-disabled">
          Disabled
        </label>
        <Textarea id="textarea-disabled" placeholder="Disabled textarea" disabled />
      </div>
    </div>
  ),
}

