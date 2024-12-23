import { useEffect, useState } from "react";
import axios from 'axios'
import DisplayBlog from "./DisplayBlog";
import { BlogType } from "../../../Types/types";
import Skeleton from "react-loading-skeleton";
import CommonHeader from "../../../Component/CommonHeader/CommonHeader";
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
    const header =   <div className="text-center dark:text-white space-y-3">
                <h1 className="text-xl md:text-4xl font-medium">Explore Recent Blogs of this week</h1>
                <p className="md:w-1/2 mx-auto">Effortlessly run your blog, solo or with a team. Customize everything — map a domain, subdomain, or use a company sub-path. Already loved by millions of devs worldwide.</p>
            </div>
    return (
        <div className="w-[95%] max-w-7xl mx-auto my-10 space-y-10">
            <div>

              <CommonHeader header={header}/>
            </div>
            {
                !latestBlogs.length ?
                    <div className="mt-4">
                        <Skeleton width="60%" height={20} />
                        <Skeleton width="80%" height={16} />
                        <Skeleton width="40%" height={16} />
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
                {latestBlogs.map((blog,idx) => <DisplayBlog
                    key={blog._id}
                    blog={blog}
                    idx={idx}
                />)}
                    </div>
            }
        </div>
    );
};

export default LatestBlogs;