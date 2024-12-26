import { Box, Button, Card } from "@mui/material";
import { CommentType } from "../../../Types/types";
import { FaTrash } from "react-icons/fa";
import useContextHook from "../../../Hooks/useContextHook";
import axios from "axios";
type Prop = {
    comment: CommentType
    setAfterDelete: React.Dispatch<React.SetStateAction<boolean>>
}
const DisplayComment = ({ comment, setAfterDelete }: Prop) => {
    // const { blog_id,comment,userEmail ,userName, userPhoto} =comment
    const { user } = useContextHook()
    const deleteHandler = async() => {
        if (user.email === comment.userEmail) {
            const response =await axios.delete(`${import.meta.env.VITE_server}/allComment/${comment._id}`)
            if (response.data) {
                setAfterDelete(true)
            }
        }
        
    }
    return (
        <Box>
            <Card className="flex gap-3 items-center justify-between">
                <div className="flex gap-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={comment.userPhoto} alt="" />
                    <div>
                        <h1 className="font-medium">{comment.userName}</h1>
                        <p>{comment.comment}</p>
                    </div>
                </div>
                <Button 
                    variant="outlined"
                    color="error"
                    size='small'
                    onClick={deleteHandler}
                    disabled={user.email !== comment.userEmail && true}
                    className="text-red-500 hover:text-red-700 flex hover:bg-red-100"
                // onClick={() => handleDelete(row.original)}
                ><span className="hidden md:flex">Delete</span>
                    <FaTrash className="w-6 h-5" />

                </Button>
            </Card>
        </Box>
    );
};

export default DisplayComment;