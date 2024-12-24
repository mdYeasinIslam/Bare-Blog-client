import { BlogType } from "../../../Types/types";
import { NavLink } from "react-router-dom";
type Prop = {
    author: BlogType
}
const DisplaySectOne = ({ author }: Prop) => {
    return (
       
            <div className="border-2 h-20 w-48 ml-5 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
            <NavLink to={`/all_blog/${author._id}`} className="flex flex-col items-center">
                <h1 className="font-medium text-center">{ author.author}</h1>
                <p className="text-center">{author.categories}</p>
                </NavLink>
            </div>
       
    );
};

export default DisplaySectOne;