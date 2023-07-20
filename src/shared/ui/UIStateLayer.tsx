import { FC, HTMLAttributes } from "react"

import { cn } from "../../lib/cn"

const UIStateLayer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-opacity-0 dark:bg-opacity-0 group-hover:bg-opacity-[0.08] group-active:bg-opacity-[0.12] group-disabled:bg-opacity-0 transition-all duration-short2 ease-standard",
        className
      )}
    >
      {children}
    </div>
  )
}

export default UIStateLayer
