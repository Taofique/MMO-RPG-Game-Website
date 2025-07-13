type Props = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

function Button({ label, onClick, variant = "primary" }: Props) {
  const baseStyle =
    "px-4 py-2 rounded text-white font-medium transition duration-200 transform active:scale-95 focus:outline-none";

  const variantStyle =
    variant === "secondary"
      ? "bg-red-600 hover:bg-red-700 active:bg-red-800"
      : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800";

  return (
    <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
