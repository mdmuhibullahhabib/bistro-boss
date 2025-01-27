import FoodCard from "../../../components/FoodCard";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const Recommends = () => {
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad').slice(0,3);

    
    return (
      <div>
       
        <SectionTitle
          subHeading={`Sould Try`}
          heading={`CHEF RECOMMENDS`}
            ></SectionTitle>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
            </div>

      </div>
    );
};

export default Recommends;