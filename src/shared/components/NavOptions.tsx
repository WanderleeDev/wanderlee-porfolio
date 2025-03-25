import home from "../../icons/home.svg";
import menu from "../../icons/menu.svg";
import project from "../../icons/projects.svg";
import contact from "../../icons/contact.svg";
import { useState } from "react";

export function NavOptions() {
  const [isOpen, setIsOpen] = useState(false);

  const styles = `cursor-pointer p-1 bg-high-light text-black/70 hover:ring-4 ring-high-light/30 focus:outline-offset-[6px] rounded-full focus:ring-4 transition-shadow grid place-content-center`;
  const routes = [
    {
      href: "/",
      icon: home,
      label: "Home",
    },
    {
      href: "/projects",
      icon: project,
      label: "Projects",
    },
    {
      href: "/contact",
      icon: contact,
      label: "Contact",
    },
  ];
  return (
    <div className="relative">
      <button
        className={`${styles} mx-auto`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="bg-transparent"
          src={menu.src}
          alt="menu icon"
          width={32}
          height={32}
        />
      </button>

      {isOpen && (
        <nav className="absolute starting:translate-y-2/4 starting:opacity-0 transition-all duration-300 flex flex-col items-center mt-4 gap-3">
          {routes.map((route) => (
            <a
              key={route.label}
              href={route.href}
              className={`${styles} bg-white/30 backdrop-blur-md border-high-light border-2`}
            >
              <span className="sr-only">go to {route.label}</span>
              <img
                className="bg-transparent"
                src={route.icon.src}
                alt={route.label}
                width={30}
                height={30}
              />
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
