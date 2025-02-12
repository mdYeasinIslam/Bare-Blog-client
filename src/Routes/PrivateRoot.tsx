import Skeleton from "react-loading-skeleton";
import useContextHook from "../Hooks/useContextHook";
import { ChildrenType } from "../Types/types";
import 'react-loading-skeleton/dist/skeleton.css'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoot = ({ children }: ChildrenType) => {
    const { loading, user } = useContextHook()
    const location = useLocation()
    if (loading) {
        return <div className="mt-4">
            <Skeleton  width="60%" height={20} />
            <Skeleton  width="80%" height={16} />
            <Skeleton  width="40%" height={16} />
            <Skeleton  width="40%" height={16} />
            <Skeleton  width="40%" height={16} />
        </div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to={'/auth/sign_in'} state={location.pathname} replace/>
   
};

export default PrivateRoot;