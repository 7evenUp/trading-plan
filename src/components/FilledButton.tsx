const FilledButton = ({
  label,
  onClick,
  icon,
}: {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center w-max rounded-full h-10 px-6 ${icon && 'pl-4 gap-2'} text-onPrimary bg-primary
                 capitalize text-sm tracking-[0.1px] font-medium hover:bg-opacity-80 active:bg-opacity-90 transition-all`}
    >
      {icon && <p className="text-xs">{icon}</p>}
      {label}
    </button>
  );
};

export default FilledButton;
