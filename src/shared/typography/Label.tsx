import { FC, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/cn"

const labelVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-sm tracking-[0.1px] font-medium",
      medium: "text-xs tracking-[0.5px] font-medium",
      small: "text-[11px] leading-4 tracking-[0.5px] font-medium",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof labelVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Label: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <span className={cn(labelVariants({ size }), className)} {...props}>
      {children}
    </span>
  )
}

export default Label
