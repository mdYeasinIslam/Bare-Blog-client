import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import AddBlogs from "../pages/BlogSection/Add_Blogs/AddBlogs";
import AllBlogs from "../pages/BlogSection/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/BlogSection/Featured_Blog/FeaturedBlogs";
import Wishlists from "../pages/BlogSection/Wishlist/Wishlists";
import ErrorHandler from "../Component/ErrorHandler/ErrorHandler";
import PrivateRoot from "./PrivateRoot";
import BlogDetails from "../pages/BlogSection/AllBlogs/BlogDetails";

const Root = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement:<ErrorHandler/>,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: '/home',
                    element:<Home/>
                },
                  {
                    path: '/add_blog',
                      element: <PrivateRoot><AddBlogs /></PrivateRoot>
                },
                  {
                    path: '/all_blog',
                    element:<AllBlogs/>
                },
                 {
                    path: '/all_blog/:id',
                     element: <PrivateRoot><BlogDetails /></PrivateRoot>,
                     loader: ({params})=>fetch(`${import.meta.env.VITE_server}/allBlog/${params.id}`)
                },
                
                   {
                    path: '/featured_blog',
                       element: <PrivateRoot><FeaturedBlogs /></PrivateRoot>
                },
                  {
                    path: '/wishlist',
                    element: <PrivateRoot><Wishlists /></PrivateRoot>
                },
                
                {
                    path: "/sign_in",
                    element:<SignIn/>
                },
                {
                    path: '/sign_up',
                    element:<SignUp/>
                }
            ]
        }
    ])
    return (
       <RouterProvider router={routes}/>
    );
};

export default Root;