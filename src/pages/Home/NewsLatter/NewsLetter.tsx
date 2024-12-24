import { Button, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
    const emailHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = e.currentTarget.email.value as string
        if (email) {
            toast.success('Thank you for subscribing to our newsletter')
            e.currentTarget.reset()
        }
    }
    return (
        <div className="px-4 py-12 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <Typography variant="h4" className="font-bold mb-4">
                    Subscribe to Our Newsletter
                </Typography>
                <Typography variant="body1" className="text-gray-600 mb-6">
                    Get the latest blog updates, tips, and exclusive content straight to your inbox.
                </Typography>

                <form onSubmit={emailHandler} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <TextField
                        variant="outlined"
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        className="w-full sm:w-2/3"
                        required
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        className="w-full sm:w-auto"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
