import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

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
                    path: "/signIn",
                    element:<SignIn/>
                },
                {
                    path: '/signUp',
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