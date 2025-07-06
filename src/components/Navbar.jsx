import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <h1></h1>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <button>Sign in</button>
    </header>
  );
}
