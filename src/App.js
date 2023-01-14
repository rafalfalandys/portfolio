import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Architecture from "./pages/Portfolio/Architecture";
import Photography from "./pages/Portfolio/Photography";
import DetailedProject from "./pages/Portfolio/DetailedProject";
import Provider from "./store/Provider";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/architecture" element={<Architecture />} />
        <Route
          path="/portfolio/architecture/:projectId"
          element={<DetailedProject />}
        />
        <Route path="/portfolio/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
}

export default App;
