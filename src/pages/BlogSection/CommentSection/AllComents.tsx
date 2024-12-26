import { useEffect, useState } from "react";
import { CommentType } from "../../../Types/types";
import axios from "axios";
import { Box } from "@mui/material";
import DisplayComment from "./DisplayComment";
type Prop = {
    blog_id: string
    searchText:boolean
}
const AllComents = ({ blog_id, searchText }:Prop) => {
    const [comments, setComment] = useState<CommentType[]>([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_server}/allComment`)
            .then(res => {
                const filter = res.data?.filter((comment:CommentType)=>comment.blog_id== blog_id)
                console.log(filter)
                setComment(filter)
        })
    }, [blog_id, searchText])
    // console.log(blog_id)
    return (
        <Box>
            <div>
                {
                    comments.map(comment => <DisplayComment key={comment._id}
                    comment={comment}
                    />)
                }
           </div>
        </Box>
    );
};

export default AllComents;