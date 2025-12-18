import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
} from "@/index"

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "The Select primitive mirrors the native combobox experience while exposing Radix semantics. Always provide a visible label and supply `placeholder` text that guides the selection.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const OPTIONS = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "push", label: "Push notification" },
]

function SelectField({
  placeholder = "Choose an option",
  disabled = false,
  defaultValue,
}: {
  placeholder?: string
  disabled?: boolean
  defaultValue?: string
}) {
  return (
    <Select defaultValue={defaultValue} disabled={disabled}>
      <SelectTrigger aria-label="Channels">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton />
        <SelectGroup>
          <SelectLabel>Channels</SelectLabel>
          {OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectScrollDownButton />
      </SelectContent>
    </Select>
  )
}

export const Playground: Story = {
  render: () => <SelectField placeholder="Choose delivery channel" />,
}

export const States: Story = {
  render: () => (
    <div className="grid gap-sm">
      <SelectField placeholder="Select an option" defaultValue="email" />
      <SelectField placeholder="Disabled select" disabled />
    </div>
  ),
}

function ControlledSelectStory() {
  const [value, setValue] = useState("sms")

  return (
    <div className="space-y-2xs">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger aria-label="Reminder channel">
          <SelectValue placeholder="Select channel" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Channel</SelectLabel>
            {OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Currently sending reminders via <strong>{value}</strong>.
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledSelectStory />,
  parameters: {
    docs: {
      description: {
        story:
          "When controlling Select, persist the chosen value in state to integrate with forms or analytics pipelines.",
      },
    },
  },
}

