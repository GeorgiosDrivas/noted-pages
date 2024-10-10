import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const user = null;
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};
