import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "px-5 py-3 rounded-md transition-colors duration-300 text-lg font-semibold";
  const activeStyle =
    "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg";

  return (
    <nav className="sticky top-0 z-50 h-20 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg flex items-center justify-center gap-8 px-6 border-b border-gray-500">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkStyle} ${
            isActive ? activeStyle : "text-gray-300 hover:text-white"
          }`
        }
      >
        Browse
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `${linkStyle} ${
            isActive ? activeStyle : "text-gray-300 hover:text-white"
          }`
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Navbar;
