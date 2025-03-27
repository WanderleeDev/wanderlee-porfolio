import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      type="button"
      {...props}
      className={`min-w-32 min-h-8 p-[.1rem_.5rem] capitalize  cursor-pointer transition-colors duration-200 bg-high-light text-black hover:text-high-light hover:bg-black/20 rounded-lg border-[.1rem] border-high-light/70 hover:ring-4  ring-high-light/30 ${className}`}
    >
      {children}
    </button>
  );
}
