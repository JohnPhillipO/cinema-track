import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoute from "./layout/LayoutRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Timer from "./pages/Timer";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
