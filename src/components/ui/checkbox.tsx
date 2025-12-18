import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer grid size-icon-sm place-content-center shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("grid place-content-center text-current")}
    >
      <Check className="size-icon-sm" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
// Keyboard: space toggles the control when focused and the Radix root handles roving focus in grouped checkboxes.
// Screen reader: announces checked state through the underlying role="checkbox" semantics and forwarded aria props.
// A11y considerations: pair with an explicit <label> or aria-labelledby to avoid unlabeled focusable controls.
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
