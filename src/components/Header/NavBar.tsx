
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 rounded ${isActive ? "bg-gray-700 text-white" : "text-gray-300"}`;

  return (
    <nav className="flex gap-2 px-4 py-2">
      <NavLink to="/" end className={linkClass}>
        DataTable
      </NavLink>
      <NavLink to="/gantt-chart" className={linkClass}>
        GanttChart
      </NavLink>
    </nav>
  );
};