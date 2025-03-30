import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Competitions from "./components/Competitions/Competitions.tsx";
import CompetitionDetails from "./components/Competitions/CompetitionDetails.tsx";
import Team from "./components/Team/Team.tsx";
import Schedule from "./components/Schedule/Schedule.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/competitions",
    element: <Competitions />,
  },
  {
    path: "/competitions/:category/:name",
    element: <CompetitionDetails />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
