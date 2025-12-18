import type { Meta, StoryObj } from "@storybook/react"

import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/index"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "Tooltips deliver supplemental information on focus or hover. Never place critical guidance solely inside a tooltip.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover or focus me</Button>
        </TooltipTrigger>
        <TooltipContent>
          Tooltip content augments the trigger. Keep it concise.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

