import clsx from "clsx"

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-surfaceContainerLowest bg-opacity-20 p-6 h-max",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
