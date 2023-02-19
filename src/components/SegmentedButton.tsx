const SegmentedButton = ({
  label,
  id,
  name,
  value,
  onChange,
  checked
}: {
  label: string;
  id: string;
  name: string;
  value: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean
}) => {
  return (
    <div className="flex-1 flex group">
      <input
        className="appearance-none peer"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="flex-1 font-medium text-sm leading-5 tracking-[0.1px] py-2 text-onSurface text-center
                 peer-checked:text-onPrimaryContainer peer-checked:bg-primaryContainer
                 hover:bg-surfaceVariant active:bg-opacity-20 transition-all cursor-pointer
                 border-outline border-r group-last:border-r-0 group-first:rounded-l-full group-last:rounded-r-full"
      >
        {label}
      </label>
    </div>
  );
};

export default SegmentedButton;
