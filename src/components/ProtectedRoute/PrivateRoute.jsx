import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login", { state: { path: location.pathname } });
      return null;
    }
  });

  return <>{children}</>;
}
