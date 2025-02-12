import { Card, CardContent, Typography } from "@mui/material";

const ExtraSectTwo = () => {

    return (
        <Card className={`max-w-4xl mx-5 lg:mx-auto my-10  md:h-72  flex flex-col md:flex-row shadow-md hover:shadow-lg transition-shadow bg-gray-100 duration-300 border `}>
          
            <div className="w-full ">
                <img
                    src='https://i.ibb.co.com/SmyMCzT/0-k-RICN-8-Iw-Jg-Ky4cw.jpg'
                    alt='extra sect two'
                    className="object-cover w-full h-full"
                />
            </div>

          
            <CardContent className="w-full md:w-2/3 p-4 space-y-5">
                <Typography variant="h6" className="font-semibold mb-2">
                    How to Learn React in 2024
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 mb-4"
                    style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                >
                    React is a popular JavaScript library for building user interfaces. This guide will take you through the best resources and tips for mastering React in 2024.
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 mb-4"
                    style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                >
                    Explore the best tools for enhancing your React.js workflow.
                </Typography> <Typography
                    variant="body2"
                    className="text-gray-600 mb-4"
                    style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                >
                    Tags : "React Js" "Tools"
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExtraSectTwo;
