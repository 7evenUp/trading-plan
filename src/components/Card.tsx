const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-3xl bg-surfaceVariant bg-opacity-20 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
