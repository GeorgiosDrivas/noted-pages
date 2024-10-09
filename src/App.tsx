import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/landing";
import SignIn from "./components/sign-in/signIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// #f0eee2 Left background
// #fdfcf7 Right background
// #0e1122 text
