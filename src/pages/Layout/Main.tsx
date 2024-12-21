import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar";
import Footer from "../../Component/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;