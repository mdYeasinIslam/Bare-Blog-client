
 type ErrorType = {
    data: string,
    status: number
    statusText: string
}
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {data,status,statusText} = useRouteError() as ErrorType

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
      {/* Animated Error Code */}
      <motion.h1 
        className="text-6xl font-bold text-red-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {status}
      </motion.h1>
      
      {/* Error Message */}
      <p>{statusText}</p>
                <p>{data}</p>
      
      {/* Navigate Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
