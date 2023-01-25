import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Architecture, {
  loader as projectsLoader,
} from "./pages/Portfolio/Architecture";
import Photography from "./pages/Portfolio/Photography";
import DetailedProject from "./pages/Portfolio/DetailedProject";
import Provider from "./store/Provider";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "photography", element: <Photography /> },
      {
        path: "architecture",
        id: "architecture",
        element: <Architecture />,
        loader: projectsLoader,
        children: [{ path: ":projectId", element: <DetailedProject /> }],
      },
    ],
  },
]);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
