import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import useContextHook from "../../../Hooks/useContextHook";
import { FormEvent, useState } from "react";
import moment from 'moment'
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
    const { darkMode,user } = useContextHook()
    const [age, setAge] = useState('')
    const currentDate = moment().format('YYYY-MM-DD') as string
    const navigate =useNavigate()
    const handleChange = (event : SelectChangeEvent) => {
        setAge(event.target.value as string);
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget as HTMLFormElement) 
        const formData = Object.fromEntries(form.entries()) 

        const categoryArray = (formData.categories as string).split('/')

        const transformedFormData = {
            ...formData,
            categories: categoryArray,
            
        };
        axios.post(`${import.meta.env.VITE_server}/allBlog`, transformedFormData)
            .then(response => {
                if (response.data) {
                    toast.success('Your Blog is successfully published')
                    navigate('/all_blog')
                }
            }).catch(e => {
                toast.error(e.message)
                console.error(e)
            })
    }

    return (
        <div className="">
            <div className="flex  justify-center items-center ">
                <div className={`bg-[#F3F4F6] dark:bg-[#1E293B] dark:text-white w-full mx-2 lg:mx-0 my-10 p-5 lg:w-[80%] xl:w-[60%] rounded-xl`}>
                    <h1 className=" text-2xl font-medium text-center my-5">Create Your Blog</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 dark:text-white">

                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Blog Title"
                                type="text"
                                name='title'
                                placeholder="blog-title"
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Blog Image URL"
                                type="url"
                                name='imageUrl'
                                placeholder="photo-url"
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />

                        </FormControl>

                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Short Description/ content"
                                name='content'
                                type="text"
                                placeholder="description/content"
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Long Description"
                                name='excerpt'
                                type="text"
                                placeholder="description"
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                       <FormControl>
                            <TextField
                                
                                id="outlined-disabled"
                                label="Author Name"
                                name='author'
                                className="dark:text-white"
                                defaultValue={user?.displayName}
                                slotProps={{
                                    input: {
                                        readOnly: true,
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                          <FormControl>
                            <TextField
                                
                                id="outlined-disabled"
                                label="Author Email"
                                name='authorEmail'
                                className="dark:text-white"
                                defaultValue={user.email}
                                slotProps={{
                                    input: {
                                        readOnly: true,
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                        
                        <FormControl>
                            <TextField
                                id="outlined-disabled"
                                label="Publising Time(current date)"
                                type="date"
                                name='publishDate'
                                defaultValue={currentDate}
                                slotProps={{
                                    input: {
                                        readOnly: true,
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Label color
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                      
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label" className="dark:text-white">Categories</InputLabel>
                            <Select
                                required
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                label="Category"
                                name='categories'
                                className="dark:text-white"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='Programming / JavaScript'>Programming / JavaScript</MenuItem>
                                <MenuItem value='Front-end / React'>Front-end / React</MenuItem>
                                <MenuItem value='Web design / CSS'>Web design / CSS</MenuItem>
                                <MenuItem value='Backend / Node.js'>Backend / Node.js</MenuItem>
                                <MenuItem value='Web Development /
                                    Accessibility'>Web Development /
                                    Accessibility</MenuItem>
                                <MenuItem value='Cloud computing / Backend'>Cloud computing / Backend</MenuItem>
                                <MenuItem value='AI / Education'>AI / Education</MenuItem>
                            </Select>
                        </FormControl>

                        <div className="mt-3">
                            <Button type="submit" className="w-full" variant="contained">Publish you Blog</Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;
