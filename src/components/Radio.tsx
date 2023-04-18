const Radio = ({
  label,
  value,
  name,
  onChange,
}: {
  label: string
  value: string
  name: string
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void
}) => {
  return (
    <label htmlFor={value} className="flex gap-4 items-center">
      <div className="relative flex">
        <input
          className="appearance-none peer border-2 border-outline rounded-full w-5 h-5 checked:border-primary"
          id={value}
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-[10px] h-[10px] rounded-full bg-primary scale-0 transition-all peer-checked:scale-100" />
      </div>
      <span>{label}</span>
    </label>
  )
}

export default Radio
