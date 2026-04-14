import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "./Navbar.css";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <h1>Where in the world?</h1>
        <div className="navbar__toggle">
          <button onClick={props.toggleTheme} aria-label="toggle theme">
            {props.theme === "light" ? (
              <MdOutlineLightMode />
            ) : (
              <MdOutlineDarkMode />
            )}
            <span>{props.theme === "light" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
