import react, { useContext } from "react";
import { WrapperContext } from "./App";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { isLogin } = useContext(WrapperContext);

    if (isLogin) {
        return children;
    }
    return <Navigate to="/Login" />;
}