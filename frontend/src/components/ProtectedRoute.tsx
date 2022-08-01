import { Navigate } from "react-router-dom";
import { UserData } from "../types/UserDataType";

type ProtectedRouteProps = {
  user: UserData;
  redirectPath: string;
  component: JSX.Element;
};

export const ProtectedRoute = ({
  user,
  redirectPath,
  component,
}: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return component;
};
