import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-6 my-20">
            <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can iget some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nisi alias ducimus ea soluta aut, consequuntur praesentium similique commodi aliquam architecto vitae, quia atque! Quo iusto reprehenderit minus, quam tenetur, fuga sunt repellendus earum quis magni aliquid nobis perspiciatis consectetur laudantium inventore animi quae placeat cupiditate. Deleniti reprehenderit natus obcaecati.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;