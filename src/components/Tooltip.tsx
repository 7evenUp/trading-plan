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
        <span className="absolute top-0 left-0 -translate-y-full w-[250px]
                      bg-tertiaryContainer text-onTertiaryContainer p-2 rounded-lg
                        text-xs tracking-[0.4px] text-center shadow shadow-onTertiaryContainer/25">
          {title}
        </span>
      )}
      {children}
    </div>
  );
};

export default Tooltip