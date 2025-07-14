// type Props = {
//   label: string;
//   onClick: () => void;
//   variant?: "primary" | "secondary";
//   disabled?: boolean;
// };

// function Button({ label, onClick, variant = "primary" }: Props) {
//   const baseStyle =
//     "px-4 py-2 rounded text-white font-medium transition duration-200 transform active:scale-95 focus:outline-none";

//   const variantStyle =
//     variant === "secondary"
//       ? "bg-red-600 hover:bg-red-700 active:bg-red-800"
//       : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800";

//   return (
//     <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
//       {label}
//     </button>
//   );
// }

// export default Button;

type Props = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: Props) {
  const baseStyle =
    "px-5 py-2.5 rounded-lg font-semibold transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyle =
    variant === "secondary"
      ? "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 active:scale-95 focus:ring-pink-400 focus:ring-offset-gray-800 text-white shadow-lg"
      : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 active:scale-95 focus:ring-blue-400 focus:ring-offset-gray-800 text-white shadow-lg";

  return (
    <button
      className={`${baseStyle} ${variantStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
