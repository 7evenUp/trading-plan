import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import UIStateLayer from "./UIStateLayer"
import { cn } from "../../lib/cn"
import Label from "../typography/Label"

const buttonVariants = cva(
  "group h-10 rounded-full w-fit disabled:bg-opacity-[0.12] dark:disabled:bg-opacity-[0.12] disabled:cursor-not-allowed disabled:shadow-none disabled:text-onSurface disabled:dark:text-dark-onSurface disabled:text-opacity-[0.38] disabled:dark:text-opacity-[0.38] transition-shadow duration-short2 ease-standard",
  {
    variants: {
      appearance: {
        elevated:
          "bg-surfaceContainerLow dark:bg-dark-surfaceContainerLow shadow-elevation1 disabled:bg-primary disabled:dark:bg-dark-primary hover:shadow-elevation2 active:shadow-elevation1 text-primary dark:text-dark-primary",
        filled:
          "bg-primary dark:bg-dark-primary disabled:bg-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-onPrimary dark:text-dark-onPrimary",
        tonal:
          "bg-secondaryContainer dark:bg-dark-secondaryContainer disabled:bg-onSurface disabled:dark:bg-dark-onSurface hover:shadow-elevation1 active:shadow-none text-onSecondaryContainer dark:text-dark-onSecondaryContainer",
        outlined:
          "border border-outline dark:border-dark-outline disabled:border-onSurface disabled:dark:border-dark-onSurface disabled:border-opacity-[0.12] dark:disabled:border-opacity-[0.12] text-primary dark:text-dark-primary",
        text: "text-primary dark:text-dark-primary",
      },
    },
    defaultVariants: {},
  }
)

// Для стилей State Layer
// (Необходим, так как Button и State Layer в разных состояниях имеют разные свойства background)
const uiStateLayerVariants = cva(
  "rounded-full flex justify-center items-center gap-2 px-6",
  {
    variants: {
      appearance: {
        elevated: "bg-primary dark:bg-dark-primary",
        filled: "bg-onPrimary dark:bg-dark-onPrimary",
        tonal:
          "bg-onSecondaryContainer dark:bg-dark-onSecondaryContainer",
        outlined: "bg-primary dark:bg-dark-primary",
        text: "bg-primary dark:bg-dark-primary px-3",
      },
    },
  }
)

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<VariantProps<typeof buttonVariants>, "appearance">> {
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, children, className, appearance, ...props }, forwardedRef) => {
    return (
      <button
        className={cn(buttonVariants({ appearance }), className)}
        {...props}
        ref={forwardedRef}
      >
        <UIStateLayer
          className={cn(
            uiStateLayerVariants({ appearance }),
            icon && "pl-4",
            icon && appearance === "text" && "pl-3 pr-4"
          )}
        >
          {icon && <span>{icon}</span>}
          <Label size="large">{children}</Label>
        </UIStateLayer>
      </button>
    )
  }
)
Button.displayName = "Button"

export default Button
