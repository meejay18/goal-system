import { GlobalContext } from "@/global/globalProvider";
import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute2: FC<any> = ({ children }) => {
  const { user }: any = useContext(GlobalContext);

  const data = JSON.parse(localStorage.getItem("auth")!);

  return (
    <div>{data ? <Navigate to="/dashboard" /> : <div>{children}</div>}</div>
  );
};

export default PrivateRoute2;
