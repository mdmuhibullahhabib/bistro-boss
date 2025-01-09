import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={`add an item`}
        subHeading="What's new? "
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              required
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text"> Cetagory</span>
              </div>
              <select
                {...register("category,{required: true}")}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="Salat">Salat</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price,{required: true}")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24 resize-none"
              placeholder="Bio"
            ></textarea>
          </label>

          <div className="form-control w-full my-6">
            <input
              {...register("image , {required: true}")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Item <FaUtensils className="ml-2"></FaUtensils>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
