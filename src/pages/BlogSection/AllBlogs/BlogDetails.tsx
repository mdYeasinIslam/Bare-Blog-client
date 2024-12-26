import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Divider, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BlogType } from "../../../Types/types";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";
import toast from "react-hot-toast";
import {  FormEvent, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import AllComents from "../CommentSection/AllComents";

const BlogDetails = () => {
    const blog = useLoaderData() as BlogType
    const { user, darkMode } = useContextHook()
    const [searchText, setSearchText] = useState(false)

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
    const commentHandler = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearchText(false)
        // console.log(event.currentTarget.comment.value,'clicked')
        
        const comment = event.currentTarget.comment.value as string
        const commentObj = {
            blog_id:_id,
            comment,
            userEmail: user?.email,
            userPhoto: user?.photoURL,
            userName:user?.displayName
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_server}/allComment`, commentObj)
            if (response.data?.acknowledged) {
                toast.success('Your comment is submitted')
                setSearchText(true)
            }
        } catch (error) {
            console.log(error)
            toast.error('There is a problem .please try again')
        }
    }
    return (
        <Box className={`${darkMode ? 'dark' : ''}`}>

            <Card className={`my-10 max-w-6xl mx-auto grid grid-cols-2 drop-shadow-xl border-2 `}>
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
            <Divider className='font-medium text-xl dark:text-white'>Comment Area</Divider>
            <section className={`w-1/2 mx-10 flex flex-col gap-5`}>
                <form onSubmit={commentHandler}>
                    <FormControl variant="standard" className="w-full ">
                        <InputLabel htmlFor="input-with-icon-adornment" className='dark:text-[#F9FAFB]'>
                            With a start adornment
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            placeholder="Add your comment"
                            className="dark:text-[#F9FAFB]"
                            name="comment"
                            startAdornment={
                                <InputAdornment position="start" className="my-2 ">
                                    {
                                        user?.photoURL ?
                                            <img src={user?.photoURL} className="rounded-full w-9 h-9" />
                                            :
                                            <AccountCircle />
                                    }
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                        <ButtonGroup className="flex gap-4 mt-2">
                            <Button variant="outlined">Cancel</Button>
                            <Button 
                                variant="outlined" type="submit">Comment</Button>
                        </ButtonGroup>
                </form>
                <div>
                    <AllComents blog_id={_id} searchText={searchText} />
                </div>
            </section>
        </Box>
    );
};

export default BlogDetails;