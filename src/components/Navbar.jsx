import { NavLink } from "react-router-dom";
import { PiFilmSlate } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className="font-inter flex justify-between items-center px-6 py-6">
      <div className="text-3xl flex items-center gap-2">
        <PiFilmSlate size={40} />
        <h1 className="font-semibold">Cinetracker</h1>
      </div>
      <nav className="flex items-center gap-5">
        <NavLink
          to="/about"
          className={(isActive) => (isActive ? "" : "underline")}
        >
          About
        </NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <button className="bg-blue-400 px-6 py-2 rounded-3xl text-white">
        Sign in
      </button>
    </header>
  );
}
