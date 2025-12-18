import { useToast } from "@/hooks/use-toast"
import type { ToastProviderProps } from "@/components/ui/toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export type ToasterProps = Partial<ToastProviderProps>

export function Toaster(providerProps: ToasterProps = {}) {
  const { toasts } = useToast()

  return (
    <ToastProvider {...providerProps}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-2xs">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
