type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ variant = "primary", children }: ButtonProps) {
  return (
    <button className={`button-${variant}`}>
      <span>
        <span>{children}</span>
      </span>
    </button>
  );
}
