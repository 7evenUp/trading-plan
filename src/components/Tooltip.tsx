import { useState } from "react";

const Tooltip = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative cursor-help"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="absolute top-0 left-0 -translate-y-full w-[300px]
                      bg-tertiaryContainer text-onTertiaryContainer p-2 rounded-lg
                        text-sm tracking-[0.25px]">
          {title}
        </span>
      )}
      {children}
    </div>
  );
};

export default Tooltip