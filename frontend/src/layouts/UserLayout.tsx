import { useAuthIsAuthenticated } from "@/stores/auth";
import { Navigate, Outlet } from "react-router";

export default function UserLayout() {
  const isAuthenticated = useAuthIsAuthenticated();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
