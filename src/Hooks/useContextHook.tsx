import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { ContextType } from "../Types/types";

const useContextHook = () => {
    const context = (useContext(AuthContext)as unknown)as ContextType
    return context
};

export default useContextHook;