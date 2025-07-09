import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoute from "./layout/LayoutRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Timer from "./pages/Timer";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="timer" element={<Timer />} />
          <Route path="movies" element={<Movies />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
