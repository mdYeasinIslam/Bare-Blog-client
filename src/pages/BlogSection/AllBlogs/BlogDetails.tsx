import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { BlogType } from "../../../Types/types";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";

const BlogDetails = () => {
    const blog = useLoaderData() as BlogType
    const {user} = useContextHook()
    const { title, author, content, _id, imageUrl, categories, commentsCount, excerpt, likes, publishDate, readingTime, related_blogs, tags } = blog

    const addToWishlist = async () => {
        const wishBlog = {
            title, author, content,imageUrl,categories,publishDate,tags,excerpt, userEmail:user.email, userName:user?.displayName,userPhoto:user?.photoURL
        }
        const response = axios.post(`${import.meta.env.VITE_server}/wishlist`,wishBlog)
        console.log(response)
    }

    return (
        <Card className="my-10 max-w-6xl mx-auto grid grid-cols-2 drop-shadow-xl border-2">
            <CardContent>
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
                <p className="font-medium">Tag : {tags}</p>
                <Button onClick={addToWishlist} className={`transform transition-transform  duration-1000 hover:scale-105 `} variant="contained" endIcon={<FavoriteIcon />}>
                    Add Wishlist
                </Button> 
            </CardContent>
            <Box className={`relative h-full  w-full overflow-hidden`}>
                <CardMedia
                    component="img"
                    className="w-full h-full"
                    image={imageUrl}
                    alt="Live from space album cover"
                />
            </Box>
        </Card>
    );
};

export default BlogDetails;