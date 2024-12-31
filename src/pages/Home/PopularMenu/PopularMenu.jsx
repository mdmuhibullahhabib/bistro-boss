
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  
  const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch(`menu.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const populerItems = data.filter(
    //               (item) => item.category === "popular"
    //             );
    //         setMenu(populerItems)
    //     })
    // },[])

    return (
      <section className="mb-12">
        <div>
          <SectionTitle
            subHeading="Popular Items"
            heading="From Our Menu"
          ></SectionTitle>

          <div className="grid md:grid-cols-2 gap-10">
            {popular.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View Full Menu
          </button>
        </div>
        <div className="bg-black text-white text-center p-16 mt-16 text-5xl font-bold">Call Us: +88 0192345678910</div>
      </section>
    );
};

export default PopularMenu;