import {  Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { BlogType } from "../../../Types/types";
import SendIcon from '@mui/icons-material/Send';

import FavoriteIcon from '@mui/icons-material/Favorite';
type Prop = {
    blog: BlogType
    idx:number
}
const DisplayBlog = ({ blog, idx }: Prop) => {
    const {title,author,content} = blog
    return (
        <div className={`transform transition-transform  duration-500 hover:scale-95   ${idx%3==0 ?`lg:col-span-3`:`${idx ==4 ? 'lg:col-span-3':'lg:col-span-2'}`} `}>
            <Card className="w-full relative h-full flex flex-col items-center justify-center ">
                <div className="relative h-72  w-full overflow-hidden">
                <CardMedia
                    component="img"
                    image={blog.imageUrl}
                    className="w-full h-full brightness-[20%] object-contain"
                    alt="Paella dish"
                />
                </div>
                <article  className="absolute top-0 ">
                <CardContent className="text-slate-200 space-y-3">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">{title}</h1>
                        <p className="text-xl font-medium">{author}</p>
                        <p>{content.slice(0,100)}</p>
                </CardContent>
                <CardActions disableSpacing className="flex gap-5 ">
                        <Button variant="contained" endIcon={<SendIcon />}>
                           Read Details
                        </Button> 
                        <Button variant="contained" endIcon={<FavoriteIcon />}>
                           Add Wishlist
                        </Button> 
                        
                </CardActions>
                </article>
            </Card>
        </div>
      
    );
};

export default DisplayBlog;