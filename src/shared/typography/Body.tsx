import { FC, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/cn"

const bodyVariants = cva("text-inherit dark:text-inherit", {
  variants: {
    size: {
      large: "text-base tracking-[0.5px]",
      medium: "text-sm tracking-[0.25px]",
      small: "text-xs tracking-[0.4px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface Props
  extends VariantProps<typeof bodyVariants>,
    HTMLAttributes<HTMLHeadingElement> {}

const Body: FC<Props> = ({ children, size, className, ...props }) => {
  return (
    <p className={cn(bodyVariants({ size }), className)} {...props}>
      {children}
    </p>
  )
}

export default Body