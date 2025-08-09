import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import TechShopLoader from "@/components/techShopLoader";

type AuthResponse = {
  ok: boolean;
};

export const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<AuthResponse | null>(null);
  const [delayFinished, setDelayFinished] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axiosInstance.get<AuthResponse>("/verify");
        setIsAuthenticated({ ok: response.data.ok });
      } catch (error) {
        setIsAuthenticated({ ok: false });
      }
    };

    verifyAuth();

    // Delay de 800ms para transição suave
    const delay = setTimeout(() => setDelayFinished(true), 1000);
    return () => clearTimeout(delay);
  }, []);

  if (isAuthenticated === null || !delayFinished) {
    return <TechShopLoader />;
  }

  return isAuthenticated.ok ? <Outlet /> : <Navigate to="/login" />;
};
