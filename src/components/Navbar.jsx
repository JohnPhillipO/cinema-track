import { NavLink, useNavigate } from "react-router-dom";
import { RxLapTimer } from "react-icons/rx";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="font-inter flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-10 bg-white">
      <div
        className="text-3xl flex items-center justify-center gap-2 cursor-pointer text-gray-900"
        onClick={() => navigate("/")}
      >
        <RxLapTimer className="text-4xl" />
        <h1 className="font-semibold">Cinetracker</h1>
      </div>
      <nav className="hidden sm:flex sm:items-center sm:justify-center sm:gap-4">
        <NavLink
          to="/timer"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 px-3 py-1 w-20 text-center text-gray-900 ${
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
            `rounded-3xl transition-all duration-200 px-3 py-1 w-20 text-center text-gray-900 ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300"
                : "hover:border-solid hover:border-2 hover:border-gray-300"
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            `rounded-3xl transition-all duration-200 px-3 py-1 w-24 text-center text-gray-900 ${
              isActive
                ? "bg-gray-50 border-solid border-2 border-gray-300"
                : "hover:border-solid hover:border-2 hover:border-gray-300"
            }`
          }
        >
          Watchlist
        </NavLink>
      </nav>
    </header>
  );
}
