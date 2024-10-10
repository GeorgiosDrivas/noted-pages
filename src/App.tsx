import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/landing";
import SignIn from "./components/sign-in/signIn";
import Register from "./components/register/register";
import Dashboard from "./components/dashboard";
import { ProtectedRoutes } from "./utils/protectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<Register />} path="/sign-up" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// #f0eee2 Left background
// #fdfcf7 Right background
// #0e1122 text
