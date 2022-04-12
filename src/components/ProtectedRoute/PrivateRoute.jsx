import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      if (
        location.pathname.includes("/explore/") ||
        location.pathname.includes("/playlists/")
      )
        navigate("/login");
      else navigate("/login", { state: { path: location.pathname } });
      return null;
    }
  }, [token]);

  return <>{children}</>;
}
