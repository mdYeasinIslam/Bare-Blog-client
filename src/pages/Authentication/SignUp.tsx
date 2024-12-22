import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Lottie from "lottie-react";
import { FormEvent, useState } from "react";
import SignUpImage from './signUp.json';
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useContextHook from "../../Hooks/useContextHook";
import toast from "react-hot-toast";

const SignUp = () => {
    const { signUpAuth, googleAuth,darkMode } = useContextHook()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate()



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget as HTMLFormElement)
        const formData = Object.fromEntries(form.entries())
        const email = formData.email as string
        const password = formData.password as string
        const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return toast.error('Password should have at least 6-character,a capital latter,a special character an a numeric character')
        }
        signUpAuth(email, password)
            .then(() => {
                toast.success('Your account is created successfully')
                navigate('/')
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
        <div className={`flex flex-col-reverse md:grid grid-cols-2`}>
            <div className="flex  justify-center items-center ">
                <div className={`bg-[#F3F4F6] dark:bg-[#1E293B] dark:text-white w-full mx-2 lg:mx-0 my-10 p-5 lg:w-[80%] xl:w-[60%] rounded-xl`}>
                    <h1 className=" text-2xl font-medium text-center my-5">Create Your Account</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                        <FormControl>
                            <TextField
                                
                                id="outlined-required"
                                label="Your Name"
                                type="name"
                                name='name'
                                placeholder="your name"
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
                                label="Your Email"
                                name='email'
                                type="email"
                                placeholder="Email"
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
                                    <InputAdornment position="end" >
                                        <IconButton
                                            className="dark:text-white"
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
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
                            <Button type="submit" className="w-full" variant="contained">Register</Button>
                        </div>
                        <Divider>OR</Divider>
                        <div className="mt-3 flex justify-around">
                            <Button onClick={googleSignIn} variant="outlined">
                                <img className="w-7" src="/images/google.png" alt="" />
                            </Button>
                            <Button variant="outlined">
                                <FaGithub className="w-7 h-7" />

                            </Button>

                        </div>

                        <div className="hover:underline">
                            <Link to={`/sign_in`}>Already have an account? please log in</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center">
                <Lottie
                    className="w-[80%] h-[70%] mx-auto "
                    animationData={SignUpImage} loop={true} />
            </div>

        </div>
    );
};

export default SignUp;