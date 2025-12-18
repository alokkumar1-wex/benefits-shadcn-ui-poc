import type * as React from "react"

export type A11yWrapper<
  Component extends React.ComponentType<any>,
> = (component: Component) => Component

/**
 * Composes multiple accessibility wrappers while preserving the original
 * component signature. The wrappers are applied in the order they are
 * provided, allowing future WCAG enhancements to be layered predictably.
 */
export function composeA11y<Component extends React.ComponentType<any>>(
  ...wrappers: Array<A11yWrapper<Component>>
) {
  return (baseComponent: Component): Component =>
    wrappers.reduce(
      (component, wrapper) => wrapper(component),
      baseComponent
    )
}

