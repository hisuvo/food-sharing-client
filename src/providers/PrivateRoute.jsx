import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProviders";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <h2>loging........</h2>;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} />;
}
