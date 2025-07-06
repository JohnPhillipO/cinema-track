import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="font-inter flex justify-between items-center px-6 py-6 sm:px-15 sm:py-6">
      <div
        className="text-3xl flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="font-semibold">Cinetracker</h1>
      </div>
      <nav className="flex items-center gap-10">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300 px-3 py-1 "
                : "hover:bg-gray-50 hover:border-solid hover:border-2 hover:border-gray-300 hover:px-3 hover:py-1"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/timer"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300 px-3 py-1 "
                : "hover:bg-gray-50 hover:border-solid hover:border-2 hover:border-gray-300 hover:px-3 hover:py-1"
            }`
          }
        >
          Timer
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300 px-3 py-1 "
                : "hover:bg-gray-50 hover:border-solid hover:border-2 hover:border-gray-300 hover:px-3 hover:py-1 "
            }`
          }
        >
          Movies
        </NavLink>
      </nav>
      <button className="bg-blue-400 px-6 py-2 rounded-3xl text-white font-semibold">
        Sign in
      </button>
    </header>
  );
}
