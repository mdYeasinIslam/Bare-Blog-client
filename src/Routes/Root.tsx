import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import AddBlogs from "../pages/BlogSection/Add_Blogs/AddBlogs";
import AllBlogs from "../pages/BlogSection/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/BlogSection/Featured_Blog/FeaturedBlogs";
import Wishlists from "../pages/BlogSection/Wishlist/Wishlists";

const Root = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
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
                    element:<AddBlogs/>
                },
                  {
                    path: '/all_blog',
                    element:<AllBlogs/>
                },
                   {
                    path: '/featured_blog',
                    element:<FeaturedBlogs/>
                },
                  {
                    path: '/wishlist',
                    element:<Wishlists/>
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