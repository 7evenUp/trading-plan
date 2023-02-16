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
    <label htmlFor={name}>
      <span>{label}</span>
      <input id={name} value={value} onChange={onChange} />
    </label>
  );
};

export default TextField;
