import {  Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { BlogType } from "../../../Types/types";
import SendIcon from '@mui/icons-material/Send';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from "react-router-dom";
import useContextHook from "../../../Hooks/useContextHook";
import axios from "axios";
import toast from "react-hot-toast";
import {  useState } from "react";
type Prop = {
    blog: BlogType
    idx:number
}
const DisplayBlog = ({ blog, idx }: Prop) => {
    const { user } = useContextHook()
    const navigate = useNavigate()
    const [disable,setDisable] = useState(false)
    const { title, author, content, _id, imageUrl, categories, excerpt, publishDate, tags } = blog    
   
    const addToWishlist = async () => {
        const wishBlogs = {
            blog_id:_id, title, author, content, imageUrl, categories, publishDate, tags, excerpt, userEmail: user.email, userName: user?.displayName, userPhoto: user?.photoURL
        }
        const response = await axios.post(`${import.meta.env.VITE_server}/wishlist`, wishBlogs)
        if (response) {
            toast.success('This blog is successfully added to the wish list')
            navigate('/wishlist')
        }
        if (response?.data?.blog_id === blog._id) {
            setDisable(true)
        }
    }

    return (
        <div className={`transform transition-transform  duration-500 hover:scale-95   ${idx % 2 == 0 ? `lg:col-span-3` : `  lg:col-span-2 `} `}>
            <Card className="w-full relative h-full ">
                <div className="relative h-72  w-full overflow-hidde">
                <CardMedia
                    component="img"
                    image={blog?.imageUrl}
                        className={`w-full h-full brightness-[20%] object-contain  ${!blog?.imageUrl ? '' : 'bg-gray-400'}`}
                    alt="Paella dish"
                />
                </div>
                <article  className="absolute top-0 left-5 flex flex-col justify-center  h-full">
                <CardContent className="text-slate-200 space-y-3">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">{title}</h1>
                        <p className="text-xl font-medium">{author}</p>
                        <p>{content.slice(0,100)}</p>
                </CardContent>
                <CardActions disableSpacing className=" h-full flex gap-x-5 items-end  ">
                  
                     <Link to={`/all_blog/${_id}`}>
                            <Button className={`transform transition-transform  duration-500 hover:scale-105 `} variant="contained" endIcon={<SendIcon />}>
                        Read More
                    </Button>   
                    </Link>
                 
                     <Button onClick={addToWishlist} className={`transform transition-transform  duration-1000 hover:scale-105 ${disable && 'cursor-not-allowed'}`} variant="contained" endIcon={<FavoriteIcon/>} >
                        Add Wishlist
                    </Button> 
                   
                </CardActions>
                </article>
            </Card>
        </div>
      
    );
};

export default DisplayBlog;