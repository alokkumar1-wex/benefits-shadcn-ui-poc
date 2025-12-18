import type { Meta, StoryObj } from "@storybook/react"
import { Fragment } from "react"

import { Button, Toast, ToastAction, Toaster, toast } from "@/index"

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          "Toasts announce passive feedback without stealing focus. Use them sparingly for confirmations or lightweight alerts.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

const ToastDemo = () => (
  <Fragment>
    <div className="flex flex-wrap gap-sm">
      <Button
        onClick={() =>
          toast({
            title: "Settings saved",
            description: "We synced your preferences across devices.",
          })
        }
      >
        Launch toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            variant: "destructive",
            title: "Connection lost",
            description: "Retry within 30 seconds to avoid losing work.",
            action: <ToastAction altText="Retry">Retry</ToastAction>,
          })
        }
      >
        Launch destructive toast
      </Button>
    </div>
    <Toaster />
  </Fragment>
)

export const Playground: Story = {
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive stories reuse the shared toast store. Each `toast()` call pushes a new notification which auto-dismisses after the configured timeout.",
      },
    },
  },
}

