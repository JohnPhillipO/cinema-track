import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutRoute() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet className="font-inter" />
      </main>
    </div>
  );
}
