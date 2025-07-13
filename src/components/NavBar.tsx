import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "px-4 py-2 rounded hover:bg-gray-200 transition text-lg font-medium";
  const activeStyle = "bg-gray-800 text-white";

  return (
    <nav className="flex justify-center gap-6 bg-white p-4 shadow">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : "text-gray-700"}`
        }
      >
        Browse
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : "text-gray-700"}`
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Navbar;
