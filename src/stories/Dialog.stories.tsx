import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/index"

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "Dialogs trap focus, announce via `aria-modal`, and return focus to the trigger after close. Keep content concise and provide clear primary actions.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

const DialogPreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update profile</DialogTitle>
          <DialogDescription>
            Provide a clear summary of the action and what changes will apply after confirmation.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-sm text-left text-sm text-muted-foreground">
          <p>Dialogs should stay task-focused and avoid stacking additional overlays.</p>
        </div>
        <DialogFooter className="flex gap-sm">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Playground: Story = {
  render: () => <DialogPreview />,
}

