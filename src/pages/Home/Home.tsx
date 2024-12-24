import Banner from "./Banner/Banner";
import ExtraSectOne from "./ExtraSect_one/ExtraSectOne";
import ExtraSectTwo from "./ExtraSect_Two/ExtraSectTwo";
import LatestBlogs from "./LatestBlogs/LatestBlogs";
import Newsletter from "./NewsLatter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner />
            
            <LatestBlogs/>
            <ExtraSectOne />
            <ExtraSectTwo/>
            <Newsletter/>
        </div>
    );
};

export default Home;