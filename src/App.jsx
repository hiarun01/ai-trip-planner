import "./App.css";

import {createBrowserRouter, RouterProvider} from "react-router";
import AppLayout from "./components/Layout/AppLayout";
import CreateTrip from "./components/UI/create-trip/CreateTrip";
import Hero from "./components/UI/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/create-trip",
        element: <CreateTrip />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
