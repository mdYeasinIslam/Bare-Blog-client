import useContextHook from "../../../Hooks/useContextHook";
import { BlogType } from "../../../Types/types";
import { NavLink } from "react-router-dom";
type Prop = {
    author: BlogType
    idx:number
}
const DisplaySectOne = ({ author,idx }: Prop) => {
          const {darkMode} =useContextHook()
    return (
       
            <div className={`border-2 h-20 w-48   rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex justify-center items-center ${idx ==0 && 'ml-5 lg:ml-7'} ${darkMode?'':'bg-white'}`}>
                <NavLink to={`/all_blog/${author._id}`} className="">
                    <h1 className="font-medium text-center">{ author.author}</h1>
                    <p className="text-center">{author.categories[0]}</p>
                </NavLink>
            </div>
       
    );
};

export default DisplaySectOne;