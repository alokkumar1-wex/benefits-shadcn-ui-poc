import type { Meta, StoryObj } from "@storybook/react"

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/index"

const meta = {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          "DropdownMenu mirrors system menus with keyboard navigation, typeahead, and ARIA roles wired by Radix. Ensure triggers have accessible labels and avoid nesting focusable elements inside menu items.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const ExampleMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[220px]">
      <DropdownMenuLabel spacing="inset">Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Billing
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger spacing="inset">Theme</DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-[180px]">
          <DropdownMenuRadioGroup defaultValue="system">
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked>Notifications</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Product updates</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

export const Playground: Story = {
  render: () => (
    <div className="flex justify-start">
      <ExampleMenu />
    </div>
  ),
}

