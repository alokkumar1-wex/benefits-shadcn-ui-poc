import { useState, type ReactNode } from "react"

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ToastAction,
  Toaster,
  useToast,
} from "@/index"

type SectionProps = {
  title: string
  description?: string
  children: ReactNode
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-sm">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="rounded-lg border border-border bg-card px-lg py-md">
        <div className="space-y-md">{children}</div>
      </div>
    </section>
  )
}

function ButtonShowcase() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon button">
        <span className="text-lg" aria-hidden>
          ★
        </span>
      </Button>
    </div>
  )
}

function InputShowcase() {
  return (
    <div className="space-y-sm">
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="input-default">
          Default
        </label>
        <Input id="input-default" placeholder="Enter value" />
      </div>
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="input-disabled">
          Disabled
        </label>
        <Input id="input-disabled" placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2xs">
        <label className="text-sm font-medium text-foreground" htmlFor="input-error">
          With error state
        </label>
        <Input
          id="input-error"
          aria-invalid="true"
          aria-describedby="input-error-text"
          placeholder="Invalid value"
        />
        <p id="input-error-text" className="text-sm text-destructive">
          Provide a value that meets validation.
        </p>
      </div>
    </div>
  )
}

function CheckboxShowcase() {
  return (
    <div className="flex flex-col gap-sm">
      <label className="flex items-center gap-xs text-sm font-medium text-foreground">
        <Checkbox defaultChecked id="checkbox-default" />
        <span>Default checked</span>
      </label>
      <label className="flex items-center gap-xs text-sm text-muted-foreground">
        <Checkbox id="checkbox-disabled" disabled />
        <span>Disabled</span>
      </label>
    </div>
  )
}

function SelectShowcase() {
  return (
    <div className="flex flex-col gap-sm">
      <Select defaultValue="option-one">
        <SelectTrigger aria-label="Example select">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-one">Option one</SelectItem>
          <SelectItem value="option-two">Option two</SelectItem>
          <SelectItem value="option-three">Option three</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled>
        <SelectTrigger aria-label="Disabled select">
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
      </Select>
    </div>
  )
}

function DialogShowcase() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog heading</DialogTitle>
          <DialogDescription>
            Use dialogs to confirm decisions or surface additional context without
            leaving the current flow.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          This is a basic implementation using the shared design system tokens and semantics.
        </p>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ToastShowcase() {
  const { toast } = useToast()

  return (
    <div className="flex flex-wrap gap-sm">
      <Button
        onClick={() =>
          toast({
            title: "Toast triggered",
            description: "This toast confirms the shared toast API works end-to-end.",
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
            title: "Action required",
            description: "This message includes an inline action.",
            action: <ToastAction altText="Resolve">Resolve</ToastAction>,
          })
        }
      >
        Launch toast with action
      </Button>
    </div>
  )
}

export default function Preview() {
  return (
    <div className="min-h-screen bg-background px-xl py-xl text-foreground">
      <header className="mb-xl space-y-xs">
        <p className="text-sm text-muted-foreground">
          <a className="underline" href="/">
            ← Back to home
          </a>
        </p>
        <h1 className="text-3xl font-semibold">Internal UI Preview</h1>
        <p className="text-base text-muted-foreground">
          Components rendered below import exclusively from the design system public API.
          Use this page while developing new tokens and primitives.
        </p>
      </header>
      <main className="space-y-xl">
        <Section title="Button" description="Variants and sizes from the shared button primitive.">
          <ButtonShowcase />
        </Section>
        <Section title="Input" description="Base text input states.">
          <InputShowcase />
        </Section>
        <Section title="Checkbox" description="Interactive and disabled states.">
          <CheckboxShowcase />
        </Section>
        <Section title="Select" description="Radix-powered select trigger with options.">
          <SelectShowcase />
        </Section>
        <Section title="Dialog" description="Standard modal dialog experience.">
          <DialogShowcase />
        </Section>
        <Section title="Toast" description="Global toast notifications with optional actions.">
          <ToastShowcase />
        </Section>
      </main>
      <Toaster />
    </div>
  )
}

