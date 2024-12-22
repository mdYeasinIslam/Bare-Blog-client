import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Lottie from "lottie-react";
import { FormEvent, useState } from "react";
import SignInImage from './signIn.json';
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useContextHook from "../../Hooks/useContextHook";
import toast from "react-hot-toast";

const SignIn = () => {
    const { signInAuth, googleAuth, darkMode } = useContextHook()
    const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget as HTMLFormElement)
        const formData = Object.fromEntries(form.entries())
        const email = formData.email as string
        const password = formData.password as string
        signInAuth(email, password)
            .then(() => {
                toast.success('Your account is created successfully')
                navigate(from,{replace:true})
            }).catch(e => {
                toast.error(e.message)
                console.error(e)
            })
    }
    const googleSignIn = () => {
        googleAuth().then(() => {
            navigate('/')
            toast.success('Your are successfully signIn by Google')
        })
            .catch(e => {
                toast.error(e.message)
                console.error(e)
            })
}
    return (
        <div className={`flex flex-col-reverse md:grid md:grid-cols-2 ${darkMode ? 'dark' : ''}`}>
            <div className="flex justify-center items-center my-10 ">
                <div className={`bg-[#F3F4F6] dark:bg-[#1E293B] dark:text-white mx-2 lg:mx-0 p-5 xl:w-[60%] rounded-xl`}>
                    <h1 className=" text-2xl font-medium text-center my-5">Please Log In your account</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 ">
                        <FormControl sx={{ color: 'white' }} className="">
                            <TextField
                                required
                                id="outlined-required"
                                label="Your Email"
                                type="email"
                                name='email'
                                placeholder="Email"
                                className="dark:text-white "
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
                        
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password" className="dark:text-white">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder="Password"
                                label="Your Password"
                                className="dark:text-white"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            className="dark:text-white"
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            // onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                             
                                inputProps={{
                                    sx: {
                                        color: darkMode ? 'white' : 'black', // Input text color
                                    },
                                }}
                            />
                        </FormControl>
                        <div className="mt-3">
                            <Button type="submit" className="w-full"  variant="contained">Log In</Button>
                        </div>
                        <div className="mt-3 flex justify-around">
                            <Button onClick={googleSignIn} variant="outlined">
                                <img className="w-7" src="/images/google.png" alt="" />
                            </Button>
                            <Button variant="outlined">
                                <FaGithub className="w-7 h-7" />

                            </Button>

                        </div>
                       
                        <div className="hover:underline">
                            <Link to={`/sign_up`}>Don't have any account? please create you account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center">
                <Lottie
                    className="w-[70%] h-[70%] mx-auto "
                    animationData={SignInImage} loop={true} />
            </div>

        </div>
    );
};

export default SignIn;