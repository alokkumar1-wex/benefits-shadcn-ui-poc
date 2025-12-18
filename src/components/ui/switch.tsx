"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
>

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-switch w-switch shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block size-icon-sm rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[calc(var(--switch-width)-var(--switch-height))] data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
// Keyboard: toggles with Space/Enter while maintaining focus-visible outlines and Radix swipe gestures on touch.
// Screen reader: announces as role="switch" with state changes reflected by aria-checked for assistive tech.
// A11y considerations: pair with descriptive labelling and avoid using switch for binary states lacking on/off meaning.
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
