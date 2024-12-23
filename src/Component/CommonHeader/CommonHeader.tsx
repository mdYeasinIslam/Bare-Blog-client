import { ReactNode } from "react";

type Prop = {
    header: ReactNode
}
const CommonHeader = ({header}:Prop) => {
    return (
        <div>
            
            {header}
    </div>
    );
};

export default CommonHeader;