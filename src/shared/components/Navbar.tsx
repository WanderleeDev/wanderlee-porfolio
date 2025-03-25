import { ThemeBtn } from "./ThemeBtn";
import { NavOptions } from "./NavOptions";

export function Navbar() {
  return (
    <div className="fixed z-50 right-8 top-8 flex gap-2 flex-row justify-center items-center">
      <ThemeBtn />
      <NavOptions />
    </div>
  );
}
