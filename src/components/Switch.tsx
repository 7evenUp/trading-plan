const Switch = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label
      className="group cursor-pointer relative flex h-[32px] w-[52px]"
      htmlFor={"isLeverage"}
    >
      <input
        className="appearance-none peer"
        id="isLeverage"
        type={"checkbox"}
        checked={checked}
        onChange={onChange}
      />
      <div
        className="h-[32px] w-[52px] absolute bg-surfaceVariant peer-checked:bg-primary
                  border-2 border-outline peer-checked:border-primary
                  rounded-full transition-all"
      />
      <div
        className={`h-4 w-4 peer-checked:h-6 peer-checked:w-6
                  translate-y-2 translate-x-[6px] peer-checked:translate-y-1 peer-checked:translate-x-6
                  absolute bg-outline peer-checked:bg-onPrimary rounded-full transition-all
                  group-hover:peer-checked:bg-primaryContainer group-hover:bg-onSurfaceVariant`}
      />
    </label>
  );
};

export default Switch;
