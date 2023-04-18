import clsx from "clsx"

const FilledButton = ({
  label,
  onClick,
  icon,
}: {
  label: string
  onClick: () => void
  icon?: React.ReactNode
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center w-max rounded-full h-10 px-6text-onPrimary bg-primary capitalize text-sm tracking-[0.1px] font-medium hover:bg-opacity-80 active:bg-opacity-90 transition-all",
        icon && "pl-4 gap-2"
      )}
    >
      {icon && <p className="text-xs">{icon}</p>}
      {label}
    </button>
  )
}

export default FilledButton
