import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
          "flex min-h-textarea w-full rounded-md border border-input bg-transparent px-sm py-xs text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
// Keyboard: supports multiline editing with native shortcuts (Enter for newline, Tab focus traversal preserved).
// Screen reader: relies on linked <label> or aria-describedby text to convey purpose and hints.
// A11y considerations: surface validation with aria-invalid/aria-errormessage when providing custom feedback.
Textarea.displayName = "Textarea"

export { Textarea }
