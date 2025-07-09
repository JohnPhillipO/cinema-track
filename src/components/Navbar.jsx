import { NavLink, useNavigate } from "react-router-dom";
import { RxLapTimer } from "react-icons/rx";
import { FaMedal } from "react-icons/fa6";
import usePomodoroTimer from "../hooks/usePomodoroTimer";

export default function Navbar() {
  const navigate = useNavigate();
  const rewards = JSON.parse(localStorage.getItem("rewards")) || 0;
  return (
    <header className="font-inter flex px-6 py-4 justify-between bg-white fixed top-0 left-0 right-0 z-10">
      <div
        className="text-3xl flex items-center justify-center gap-2 cursor-pointer text-gray-900"
        onClick={() => navigate("/")}
      >
        <RxLapTimer className="text-4xl" />
        <h1 className="font-semibold">Cinetracker</h1>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <nav className="hidden md:flex md:items-center md:justify-center md:gap-4">
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
      </div>
      <div className="flex flex-row items-center justify-center gap-2 border-2 border-gray-300 rounded-3xl px-3 py-1">
        <FaMedal className="text-2xl" />
        <span className="text-gray-900">{rewards}</span>
      </div>
    </header>
  );
}
