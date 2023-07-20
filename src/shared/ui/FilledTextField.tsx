import React, { InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/cn"
import Body from "../typography/Body"
import UIStateLayer from "./UIStateLayer"

const containerVariants = cva(
  "group relative flex h-[56px] bg-surfaceContainerHighest rounded-t border-b focus-within:border-b-2 transition-colors duration-short4 ease-standard",
  {
    variants: {
      variant: {
        default:
          "text-onSurfaceVariant border-onSurfaceVariant focus-within:border-primary hover:border-onSurface focus-within:hover:border-primary",
        error:
          "text-error hover:text-onErrorContainer focus-within:hover:text-error border-error hover:border-onErrorContainer focus-within:hover:border-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const labelVariants = cva(
  "absolute pointer-events-none text-xs tracking-[0.4px] left-4 translate-y-2 peer-placeholder-shown:translate-y-4 peer-focus:translate-y-2 peer-focus:text-xs peer-focus:tracking-[0.4px] peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.5px] transition-all duration-short4 ease-standard",
  {
    variants: {
      variant: {
        default: "peer-focus:text-primary",
        error: "peer-focus:text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const inputVariants = cva(
  "peer opacity-100 placeholder-shown:opacity-0 focus:opacity-100 text-onSurface pt-6 px-4 pb-2 outline-none text-base tracking-[0.5px] bg-transparent placeholder:text-onSurfaceVariant w-full",
  {
    variants: {
      variant: {
        default: "caret-primary",
        error: "caret-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const supportingTextVariants = cva("flex items-center gap-4 px-4", {
  variants: {
    variant: {
      default: "text-onSurfaceVariant",
      error: "text-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    Pick<VariantProps<typeof containerVariants>, "variant"> {
  label: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  supportingText?: string
  supportingTextCharCount?: string
}

const FilledTextField = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      leadingIcon,
      trailingIcon,
      supportingText,
      supportingTextCharCount,
      className,
      variant,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div
        className={cn("flex flex-col gap-1 w-fit", className)}
        ref={forwardedRef}
      >
        <div className={cn(containerVariants({ variant }))}>
          <UIStateLayer className="bg-onSurface group-active:bg-opacity-[0.08] focus-within:group-hover:bg-opacity-0">
            {leadingIcon && (
              <span className="absolute left-3 top-4">{leadingIcon}</span>
            )}
            {trailingIcon && (
              <span className="absolute right-3 top-4">{trailingIcon}</span>
            )}
            <input
              className={cn(
                inputVariants({ variant }),
                leadingIcon && "pl-[52px]",
                trailingIcon && "pr-[52px]"
              )}
              placeholder="&nbsp;"
              {...props}
            />
            <label
              className={cn(
                labelVariants({ variant }),
                leadingIcon && "left-[52px]"
              )}
            >
              {label}
            </label>
          </UIStateLayer>
        </div>
        {supportingText && (
          <div className={cn(supportingTextVariants({ variant }))}>
            <Body size="small">{supportingText}</Body>
            {supportingTextCharCount && (
              <Body size="small" className="ml-auto">
                {supportingTextCharCount}
              </Body>
            )}
          </div>
        )}
      </div>
    )
  }
)
FilledTextField.displayName = "FilledTextField"

export default FilledTextField
