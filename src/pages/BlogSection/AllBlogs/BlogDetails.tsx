import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Divider, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import {useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BlogType } from "../../../Types/types";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";
import toast from "react-hot-toast";
import {  FormEvent, useEffect, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import AllComents from "../CommentSection/AllComents";
import UpdateBlog from "./UpdateBlog";

const BlogDetails = () => {
    const blogData = useLoaderData() as BlogType
    const { id } = useParams()
    const [blog,setBlogData] =useState<BlogType>(blogData)
    const { user, darkMode } = useContextHook()
    const [searchText, setSearchText] = useState(false)
    const [open, setOpen] = useState(false);
    const [afterUpdate, setUpdate] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { title, author, content, _id, imageUrl, categories, excerpt, publishDate, tags, authorEmail } = blog
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_server}/allBlog/${id}?email=${user.email}`, { withCredentials: true })
            .then(res => {
                console.log(res)
                setBlogData(res.data)
            }).catch(e => {
                console.log(e.response.data)
                setError(e.response.data.message)
        })
    }, [id,afterUpdate,user.email])

    const addToWishlist = async () => {
        const wishBlogs = {
          blog_id:_id,  title, author, content,imageUrl,categories,publishDate,tags,excerpt, userEmail:user.email, userName:user?.displayName,userPhoto:user?.photoURL
        }
        const response = await axios.post(`${import.meta.env.VITE_server}/wishlist`, wishBlogs)
        if (response) {
            toast.success('This blog is successfully added to the wish list')
            navigate('/wishlist')
        }
    }
    const commentHandler = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearchText(false)
        
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
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setUpdate(!afterUpdate)
    };
    return (
        <Box className={`${darkMode ? 'dark' : ''} `}>
            {
                error?.length ?
                    <p className="text-center font-medium text-xl">{error}
                    </p>
                    :
                    <>
                    {
                !blog ?
                    <div>
                        loading...
                    </div>
                    :

            <UpdateBlog open={open} handleClose={handleClose} blog={blog} />
            }
            <Card className={`my-10 max-w-6xl mx-auto grid grid-cols-2 drop-shadow-xl border-2 `}>
            <CardContent className="dark:bg-[#1F2937] dark:text-[#F9FAFB]">
                <h1 className="text-4xl font-medium ">{title}</h1>
                <div className="flex gap-4 text-2xl font-medium">Category: {categories?.map((category, idx) => <span key={idx}>
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
                    <ButtonGroup className="flex gap-3">
                        {user.email !== authorEmail ?
                            null :
                            
                        <Button onClick={handleOpen}  className={`transform transition-transform  duration-1000 hover:scale-105 `} variant="contained">
                            Update
                        </Button> 
                        }

                        <Button onClick={addToWishlist} className={`transform transition-transform  duration-1000 hover:scale-105 `} variant="contained" endIcon={<FavoriteIcon />}>
                    Add Wishlist
                        </Button> 

                    </ButtonGroup>
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
            <section className={`md:w-1/2 mx-5 md:mx-10 flex flex-col gap-5`}>
                <form onSubmit={commentHandler}>
                    <FormControl variant="standard" className="w-full ">
                        <InputLabel htmlFor="input-with-icon-adornment" className='dark:text-[#F9FAFB]'>
                            Add your comment
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            placeholder={user?.email == authorEmail ? 'You can not comment on you blog' : "Add your comment"}
                            className="dark:text-[#F9FAFB]"
                            disabled={user?.email == authorEmail ? true : false}  
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
                            variant="outlined" type="submit" disabled={user?.email == authorEmail ? true : false}  >Comment</Button>
                        </ButtonGroup>
                </form>
                <div>
                    <AllComents blog_id={_id} searchText={searchText} />
                </div>
            </section>
                    </>
                    }
            
        </Box>
    );
};

export default BlogDetails;