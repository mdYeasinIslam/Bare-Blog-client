import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BlogType } from "../../../Types/types";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";
import toast from "react-hot-toast";

const BlogDetails = () => {
    const blog = useLoaderData() as BlogType
    const { user,darkMode } = useContextHook()
     const navigate = useNavigate()
    const { title, author, content, _id, imageUrl, categories, excerpt,  publishDate, tags } = blog

    const addToWishlist = async () => {
        const wishBlogs = {
          blog_id:_id,  title, author, content,imageUrl,categories,publishDate,tags,excerpt, userEmail:user.email, userName:user?.displayName,userPhoto:user?.photoURL
        }
        const response = await axios.post(`${import.meta.env.VITE_server}/wishlist`, wishBlogs)
        if (response) {
            toast.success('This blog is successfully added to the wish list')
            navigate('/wishlist')
        }
        console.log(response)
    }

    return (
        <Card className={`my-10 max-w-6xl mx-auto grid grid-cols-2 drop-shadow-xl border-2 ${darkMode ? 'dark': ''}`}>
            <CardContent className="dark:bg-[#1F2937] dark:text-[#F9FAFB]">
                <h1 className="text-4xl font-medium ">{title}</h1>
                <div className="flex gap-4 text-2xl font-medium">Category: {categories.map((category, idx) => <span key={idx}>
                    "{category}"
                </span>)}
                </div>
                <p className="text-xl font-medium"> Author : {author}</p>
                <div> <span className="font-medium">Content/Excerpt : </span>
                    <p>{excerpt}</p>
                    <p>{content}</p>
                </div>

                <p className="font-medium">Publish Date : {publishDate}</p>
                {
                    tags && <p className="font-medium">Tag : {tags}</p>
                }
                
                <Button onClick={addToWishlist} className={`transform transition-transform  duration-1000 hover:scale-105 `} variant="contained" endIcon={<FavoriteIcon />}>
                    Add Wishlist
                </Button> 
            </CardContent>
            <Box className={`relative h-full  w-full overflow-hidden`}>
                <CardMedia
                    component="img"
                    className="w-full h-full"
                    image={imageUrl}
                    alt="Blog image"
                />
            </Box>
        </Card>
    );
};

export default BlogDetails;