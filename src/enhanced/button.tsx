import { withTargetSize } from "@/a11y/wrappers/withTargetSize"
import { composeA11y } from "@/a11y/wrappers/composeA11y"
import {
  Button as BaseButton,
  buttonVariants,
  type ButtonProps as BaseButtonProps,
} from "@/components/ui/button"

const enhanceButton = composeA11y(withTargetSize())

// Consumers import from this enhanced entry point so WCAG upgrades can layer on
// without mutating the upstream shadcn/ui source.
export const Button = enhanceButton(BaseButton)
Button.displayName = BaseButton.displayName

export type ButtonProps = BaseButtonProps

export { buttonVariants }

