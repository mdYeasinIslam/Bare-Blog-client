import { WishType } from "../../../Types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";

const Wishlists = () => {
    const [wishlistData, setWishlistData] = useState<WishType[]>([])
    const { user } = useContextHook()
    useEffect(() => {
        const email = user.email as string
        fetchData(email)
    }, [user?.email])
    const fetchData = async (email: string) => {
        const response = await axios.get(`${import.meta.env.VITE_server}/wishlist?email=${email}`)
        setWishlistData(response.data)
    }
    console.log(wishlistData)
    
    return (
        <div className="p-2 max-w-6xl mx-auto">
        
        </div>
    );
};

export default Wishlists;