import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Architecture from "./pages/Portfolio/Architecture";
import Photography from "./pages/Portfolio/Photography";
import DetailedProject, {
  loader as detailedProjectProjectsLoader,
} from "./pages/Portfolio/DetailedProject";
import Provider from "./store/Provider";
import RootLayout, {
  loader as rootProjectsLoader,
} from "./pages/Portfolio/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} loader={rootProjectsLoader}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/architecture" element={<Architecture />} />
      <Route
        path="/portfolio/architecture/:projectId"
        element={<DetailedProject />}
        loader={detailedProjectProjectsLoader}
      />
      <Route path="/portfolio/photography" element={<Photography />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
