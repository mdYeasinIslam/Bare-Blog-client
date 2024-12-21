import { ChildrenType } from "../Types/types";

const ContextProvider = ({children}:ChildrenType) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ContextProvider;