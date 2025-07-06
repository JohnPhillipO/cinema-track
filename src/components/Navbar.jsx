import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="font-inter flex justify-between items-center px-6 py-6 fixed top-0 left-0 right-0 z-10 bg-white">
      <div
        className="text-3xl flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="font-semibold">Cinetracker</h1>
      </div>
      <nav className="hidden sm:flex sm:items-center sm:justify-center sm:gap-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 px-3 py-1 w-20 text-center ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300"
                : "hover:border-solid hover:border-2 hover:border-gray-300"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/timer"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 px-3 py-1 w-20 text-center ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300 "
                : "hover:border-solid hover:border-2 hover:border-gray-300"
            }`
          }
        >
          Timer
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 px-3 py-1 w-20 text-center ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300"
                : "hover:border-solid hover:border-2 hover:border-gray-300"
            }`
          }
        >
          Movies
        </NavLink>
      </nav>
      {/* {      <button className="hidden sm:block sm:bg-blue-400 sm:px-6 sm:py-2 sm:rounded-3xl sm:text-white sm:font-semibold cursor-pointer">
        Sign in
      </button>} */}
    </header>
  );
}
