import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
};
