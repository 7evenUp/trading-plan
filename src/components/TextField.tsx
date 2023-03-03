const TextField = ({
  label,
  value,
  onChange,
  name,
}: {
  label: string;
  value: string;
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  name: string;
}) => {
  return (
    <label
      htmlFor={name}
      className="bg-surfaceVariant flex flex-col-reverse border-b border-outline rounded-t py-2 px-6 focus-within:border-primary focus-within:border-b-2"
    >
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="peer text-onSurface bg-transparent outline-none text-base leading-6 tracking-[0.5px]"
      />
      <span className="text-onSurfaceVariant peer-focus:text-primary text-xs leading-4 tracking-[0.4px]">
        {label}
      </span>
    </label>
  );
};

export default TextField;
