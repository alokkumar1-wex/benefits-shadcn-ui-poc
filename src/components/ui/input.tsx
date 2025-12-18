import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-control w-full rounded-md border border-input bg-transparent px-sm py-2xs text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:px-sm file:py-2xs file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
// Keyboard: inherits native input typing, selection, and tab-order behavior with focus ring tokens applied.
// Screen reader: announces via associated <label> or aria-* props passed through to the input element.
// A11y considerations: honor required/invalid states via aria attributes so consumers surface validation context.
Input.displayName = "Input"

export { Input }
