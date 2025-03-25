import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: Props) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
