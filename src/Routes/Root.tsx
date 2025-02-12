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
import { SecondLayout } from "../pages/Layout/SecondLayout";
import About from "../pages/About/About";
import { Profile } from "../pages/Profile/Profile";

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
                    path: 'about',
                    element:<About/>
                  }
                
               
            ]
        },
        {
            path: '/auth',
            element: <SecondLayout />,
            errorElement: <ErrorHandler />,
            children: [
                 {
                    path: "/auth/sign_in",
                    element:<SignIn/>
                },
                {
                    path: '/auth/sign_up',
                    element:<SignUp/>
                },
                {
                    path: '/auth/profile',
                    element:<PrivateRoot><Profile/></PrivateRoot>
                }
            ]
        }
    ])
    return (
       <RouterProvider router={routes}/>
    );
};

export default Root;