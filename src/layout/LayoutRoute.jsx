import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutRoute() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
