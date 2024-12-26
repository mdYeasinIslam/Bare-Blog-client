import { Box, Button, Modal, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import useContextHook from "../../../Hooks/useContextHook";
import { FormEvent, useState } from "react";
import { BlogType } from "../../../Types/types";
import axios from "axios";
import toast from "react-hot-toast";
type Prop = {
    open: boolean
    handleClose: () => void
    blog:BlogType
}
//from meterial ui
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
};

const UpdateBlog = ({ handleClose, open, blog }:Prop) => {
    const { darkMode } = useContextHook()
    const [age, setAge] = useState('')
    const { title, author, content, _id, imageUrl, categories, excerpt, publishDate, authorEmail } = blog

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()  
        const form = new FormData(e.currentTarget as HTMLFormElement)
        const formData = Object.fromEntries(form.entries())
        const categoryArray = (formData.categories as string)?.split(' / ')

        const transformedFormData = {
            ...formData,
            categories: categoryArray,
        };
        axios.put(`${import.meta.env.VITE_server}/allBlog/${_id}`, transformedFormData)
            .then(response => {
                if (response.data) {
                    toast.success('Updation is completed')
                }
                handleClose() 
            }).catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    }
    return (
        <div >
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                className=""
            >
                <Box sx={style} className={`w-1/2  overflow-scroll max-h-[90vh]`}>
                    <div className={`bg-[#F3F4F6] dark:bg-[#1E293B] dark:text-white  mx-2 lg:mx-0 my-10 p-5 rounded-xl`}>
                        <h1 className=" text-2xl font-medium text-center my-5">Update Your Blog</h1>
                        {
                            !blog ?
                                <div>loading....</div>    
                            :
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 dark:text-white overflow-scroll">

                            <FormControl>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Blog Title"
                                    type="text"
                                    name='title'
                                    placeholder="blog-title"
                                    defaultValue={title}
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
                                    defaultValue={imageUrl}

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
                                    defaultValue={content}

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
                                    defaultValue={excerpt}

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
                                    defaultValue={author}
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
                                    defaultValue={authorEmail}
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
                                    defaultValue={publishDate}
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
                                <InputLabel id="demo-select-small-label" className="dark:text-white">{categories?.join(' / ')}</InputLabel>
                                <Select
                                    required
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label='Categories'
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
                                <Button type="submit" className="w-full" variant="contained">Update you Blog</Button>
                            </div>

                                </form>
                                
                                
                        }
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateBlog;