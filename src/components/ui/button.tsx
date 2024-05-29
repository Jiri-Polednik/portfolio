type ButtonProps = {
  variant?: "full" | "outlined";
  children: React.ReactNode;
  bgColor: string;
};

export default function Button({
  variant = "full",
  children,
  bgColor,
}: ButtonProps) {
  return (
    <button className={`button-${variant} bg-${bgColor}`}>
      <span>
        <span>{children}</span>
      </span>
    </button>
  );
}
