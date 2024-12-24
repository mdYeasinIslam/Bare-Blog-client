import { useEffect, useState } from "react";
import { BlogType } from "../../../Types/types";
import axios from "axios";
import DisplaySectOne from "./DisplaySectOne";
import Marquee from "react-fast-marquee";


const ExtraSectOne = () => {
    const [authorsData, setauthorsData] = useState<BlogType[]>([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_server}/firstSection`)
        setauthorsData(response.data)
    }
    return (
        <div className="px-4 py-8 bg-gray-100">
            <h2 className="text-xl md:text-4xl text-center font-medium mb-6">
               Top Five Featured Authors
            </h2>
            <div className="lg:max-w-4xl xl:max-w-5xl mx-auto  md:space-y-5">
                <h1 className="text-2xl ml-2 md:ml-5 lg:ml-0 font-meium ">Top Blogs Owner: </h1>
                <Marquee pauseOnHover className=" ">
                    <div className="flex lg:gap-x-10 ">
                        {authorsData?.map(author => <DisplaySectOne key={author?._id} author={author} />)}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default ExtraSectOne;
