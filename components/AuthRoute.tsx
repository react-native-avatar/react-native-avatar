import React, { ReactNode } from "react";
import useAuth from "@/hooks/queries/useAuth";
import { router, useFocusEffect } from "expo-router";

interface AuthRouteProps {
  children: ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { auth } = useAuth();

  useFocusEffect(() => {
    !auth.id && router.replace("/auth");
  });

  return <>{children}</>;
}

export default AuthRoute;
