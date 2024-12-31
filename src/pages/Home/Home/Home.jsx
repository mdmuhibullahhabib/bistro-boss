import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Teastimoials from "../Testimonials/Teastimoials";
import Recommends from "../Recommends/Recommends";

const Home = () => {
    return (
        <div>
               <Helmet>
                            <title>Bistro Boss | Menu</title>
                        </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <Recommends/>
            <Featured />
            <Teastimoials />
        </div>
    );
};

export default Home;