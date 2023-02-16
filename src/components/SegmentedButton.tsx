const SegmentedButton = ({
  label,
  id,
  name,
  value,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  value: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex-1 flex group">
      <input
        className={`appearance-none peer/${id}`}
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`flex-1 font-medium text-sm leading-5 tracking-[0.1px] py-2 text-onSurface text-center
                 peer-checked/${id}:text-onPrimaryContainer peer-checked/${id}:bg-primaryContainer
                 hover:bg-surfaceVariant transition-all
                  border-r border-outline group-first:rounded-l-full group-last:rounded-r-full group-last:border-r-0`}
      >
        {label}
      </label>
    </div>
  );
};

export default SegmentedButton;
