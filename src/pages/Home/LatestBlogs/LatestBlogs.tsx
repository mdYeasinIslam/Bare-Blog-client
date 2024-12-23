import { useEffect, useState } from "react";
import axios from 'axios'
import DisplayBlog from "./DisplayBlog";
import { BlogType } from "../../../Types/types";
import Skeleton from "react-loading-skeleton";
const LatestBlogs = () => {
    const [latestBlogs, setLatestBlogs] = useState<BlogType[]>([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_server}/allBlog`)
        
        setLatestBlogs(response.data)
    }
    console.log(latestBlogs)
    return (
        <div>
            {
                !latestBlogs.length ?
                    <div className="mt-4">
                        <Skeleton width="60%" height={20} />
                        <Skeleton width="80%" height={16} />
                        <Skeleton width="40%" height={16} />
                    </div>
                    :
                    <>
                {latestBlogs.map(blog => <DisplayBlog
                    key={blog._id}
                    blog={blog}
                />)}
                    </>
            }
        </div>
    );
};

export default LatestBlogs;