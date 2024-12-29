import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Teastimoials from "../Testimonials/Teastimoials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Teastimoials/>
        </div>
    );
};

export default Home;