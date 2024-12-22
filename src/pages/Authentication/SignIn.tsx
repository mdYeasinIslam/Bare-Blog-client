import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Lottie from "lottie-react";
import { FormEvent, useState } from "react";
import SignInImage from './signIn.json';
import {  Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useContextHook from "../../Hooks/useContextHook";
import toast from "react-hot-toast";

const SignIn = () => {
    const {signInAuth} = useContextHook()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget as HTMLFormElement)
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
        const email = formData.email as string
        const password = formData.password as string
        signInAuth(email, password)
            .then(() => {
                toast.success('Your account is created successfully')
                navigate('/')
            }).catch(e => {
                toast.error(e.message)
                console.error(e)
            })
    }
  
    return (
        <div className={`grid grid-cols-2`}>
            <div className="flex flex-col justify-center items-center ">
                <div className={`bg-[#F3F4F6] p-5 w-[60%] rounded-xl`}>
                    <h1 className=" text-2xl font-medium text-center my-5">Please Log In your account</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                        <FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Your Email"
                                type="email"
                                name='email'
                                placeholder="Email"
                            />
                        </FormControl>
                        
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder="Password"
                                label="Your Password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
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
                            />
                        </FormControl>
                        <div className="mt-3">
                            <Button type="submit" className="w-full"  variant="contained">Log In</Button>
                        </div>
                        <div className="mt-3 flex justify-around">
                            <Button variant="outlined">
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