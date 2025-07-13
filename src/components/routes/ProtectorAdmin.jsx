import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({isAdmin}) => {
     if(!isAdmin){
        return <Navigate to={"/"}></Navigate>
    }

    return (
        <Outlet />
    );
};

export default ProtectorAdmin;