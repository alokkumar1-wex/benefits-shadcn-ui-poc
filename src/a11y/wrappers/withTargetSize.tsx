import * as React from "react"

import { cn } from "@/lib/utils"
import { WCAG_TARGET_SIZE_MIN } from "@/a11y/tokens/wcag"

type AnyComponent = React.ComponentType<any>

export interface WithTargetSizeOptions {
  /**
   * Minimum hit target size. Accepts a number (interpreted as pixels)
   * or any valid CSS length value so teams can adapt to different
   * density scales if a design system provides them.
   */
  minTargetSize?: number | string
  /**
   * Additional className appended to the wrapped component so teams
   * can hook into the accessibility layer for telemetry or styling.
   */
  className?: string
}

type PropsWithOptionalPresentation<Props> = Props & {
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_CLASSNAME = "a11y-target-size"

const normalizeSize = (value?: number | string) => {
  if (value == null) {
    return WCAG_TARGET_SIZE_MIN
  }

  return typeof value === "number" ? `${value}px` : value
}

const mergeStyles = (
  style: React.CSSProperties | undefined,
  minimumSize: string
): React.CSSProperties => {
  const merged: React.CSSProperties = { ...(style ?? {}) }

  if (merged.minWidth == null) {
    merged.minWidth = minimumSize
  }

  if (merged.minHeight == null) {
    merged.minHeight = minimumSize
  }

  return merged
}

/**
 * Ensures interactive controls meet the WCAG 2.2 Target Size minimum without
 * mutating the underlying shadcn/ui components. The returned component keeps
 * ref semantics intact so polymorphic Slot/asChild patterns continue to work.
 */
export function withTargetSize(options?: WithTargetSizeOptions) {
  const targetSize = normalizeSize(options?.minTargetSize)
  const appendedClassName = options?.className ?? DEFAULT_CLASSNAME

  return <Component extends AnyComponent>(Component: Component) => {
    type Props = React.ComponentPropsWithRef<Component>
    type Ref = React.ElementRef<Component>

    const TargetSized = React.forwardRef<Ref, Props>((props, ref) => {
      const {
        className,
        style,
        ...restProps
      } = props as PropsWithOptionalPresentation<Props>

      const mergedClassName = cn(className, appendedClassName)
      const mergedStyle = mergeStyles(style, targetSize)

      return (
        <Component
          {...(restProps as Props)}
          ref={ref}
          className={mergedClassName}
          style={mergedStyle}
        />
      )
    })

    const componentName = Component.displayName ?? Component.name ?? "Component"
    TargetSized.displayName = `withTargetSize(${componentName})`

    return TargetSized as unknown as Component
  }
}

