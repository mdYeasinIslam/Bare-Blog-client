import { ChangeEvent, useEffect, useState } from "react";
import axios from 'axios'
import { BlogType } from "../../../Types/types";
import Skeleton from "react-loading-skeleton";
import CommonHeader from "../../../Component/CommonHeader/CommonHeader";
import DisplayBlog from "../../Home/LatestBlogs/DisplayBlog";
import { Box, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

const AllBLogs = () => {
    const [latestBlogs, setLatestBlogs] = useState<BlogType[]>([])
    const [searchText, setSearchText] = useState('')
    const [category, setCategory] = useState('')
    const [noFound, setNoFound] = useState('')

    useEffect(() => {
        fetchData(searchText, category)
    }, [searchText, category])
    const fetchData = async (text: string, category: string) => {
        const response = await axios.get(`${import.meta.env.VITE_server}/allBlog?allBlog=all-blog&search=${text}`)
        if (response?.data?.status === false) {
            return setNoFound(response?.data?.message)
        }
        if (category.length > 0) {
            const filter = response?.data?.filter((d: BlogType) => d?.categories?.includes(category))
            setNoFound('')
            return setLatestBlogs(filter)
        }
        setNoFound('')
        setLatestBlogs(response.data)
    }
    const searchByTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }
    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    }
    const header = <div className="text-center dark:text-white space-y-3">
        <h1 className="text-xl md:text-4xl font-medium">Explore Recent Blogs of this week</h1>
        <p className="md:w-1/2 mx-auto">Effortlessly run your blog, solo or with a team. Customize everything — map a domain, subdomain, or use a company sub-path. Already loved by millions of devs worldwide.</p>
    </div>
    return (
        <div className="w-[95%] max-w-7xl mx-auto py-10 space-y-10">
            <div>

                <CommonHeader header={header} />
            </div>
            <div className="flex justify-between items-center ">
                <Box>
                    <h1 className="text-2xl font-medium">Filter :</h1>
                </Box>
                <form className="flex gap-4">

                    <FormControl>
                        <TextField
                            id="filled-search"
                            label="Search field"
                            type="search"
                            className="border py-4 px-2"
                            placeholder="Search by title"
                            onChange={searchByTitle}
                        />
                    </FormControl>
                    <FormControl sx={{ minWidth: 120 }} size="medium">
                        <InputLabel id="demo-select-small-label" className="dark:text-white">Categories</InputLabel>
                        <Select
                            required
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={category}
                            label="Category"
                            name='categories'
                            className="dark:text-white"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Programming'>Programming</MenuItem>
                            <MenuItem value='Frontend'>Frontend</MenuItem>
                            <MenuItem value='Web Design'>Web design</MenuItem>
                            <MenuItem value='Backend'>Backend </MenuItem>
                            <MenuItem value='Web Development'>Web Development</MenuItem>
                            <MenuItem value='Cloud Computing'>Cloud Computing </MenuItem>
                            <MenuItem value='AI'>AI </MenuItem>
                        </Select>
                    </FormControl>
                </form>

            </div>
            <Divider></Divider>
            {
                !noFound.length ?
                    <>
                        {!latestBlogs.length ?
                    <div className="mt-4">
                        <Skeleton width="60%" height={20} />
                        <Skeleton width="80%" height={16} />
                        <Skeleton width="40%" height={16} />
                        <Skeleton width="70%" height={16} />
                        <Skeleton width="80%" height={16} />
                    </div>
                    :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
                            {latestBlogs.map((blog, idx) => <DisplayBlog
                                key={blog._id}
                                blog={blog}
                                idx={idx}
                            />)}
                        </div>
                       
                            </div>}
                    </>
                    :
                    <div className="font-semibold text-2xl text-center">
                        {noFound}
                    </div>
            }

        </div>
    );
};

export default AllBLogs;