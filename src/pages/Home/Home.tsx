import Banner from "./Banner/Banner";
import ExtraSectOne from "./ExtraSect_one/ExtraSectOne";
import LatestBlogs from "./LatestBlogs/LatestBlogs";

const Home = () => {
    return (
        <div>
            <Banner />
            
            <ExtraSectOne />
            <LatestBlogs/>
        </div>
    );
};

export default Home;