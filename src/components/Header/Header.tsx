import HeaderIcon from "@/assets/react-ui-lab-header-icon.png";
import { NavLink } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-gray-800 px-2 py-1 flex justify-between items-center z-10">
      <NavLink to="/" end>
        <img className="h-16" src={HeaderIcon} />
      </NavLink>
      <NavBar />
    </header>
  );
};
