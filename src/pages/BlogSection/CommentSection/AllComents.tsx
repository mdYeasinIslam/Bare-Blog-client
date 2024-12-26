import { useEffect, useState } from "react";
import { CommentType } from "../../../Types/types";
import axios from "axios";
import { Box } from "@mui/material";
import DisplayComment from "./DisplayComment";
import useContextHook from "../../../Hooks/useContextHook";
type Prop = {
    blog_id: string
    searchText:boolean
}
const AllComents = ({ blog_id, searchText }:Prop) => {
    const [comments, setComment] = useState<CommentType[]>([])
    const [afterDelete, setAfterDelete] = useState(false)
    const {user} = useContextHook()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_server}/allComment`)
            .then(res => {
                const filter = res.data?.filter((comment:CommentType)=>comment.blog_id== blog_id )

                setComment(filter)
                setAfterDelete(false)
            })
            .catch(e => {
            console.log(e)
        })
    }, [blog_id, searchText,afterDelete,user.email])
   
    return (
        <Box>
            <div className="flex flex-col gap-5">
                {
                    comments.map(comment => <DisplayComment key={comment._id}
                        comment={comment}
                        setAfterDelete={setAfterDelete}
                    />)
                }
           </div>
        </Box>
    );
};

export default AllComents;