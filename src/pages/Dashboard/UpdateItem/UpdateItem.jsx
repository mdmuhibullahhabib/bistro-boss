import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { name, category, recipe, price, _id } = useLoaderData();

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data.image);
    // image upload to imgbb and then get a URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        //  reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="Refresh info"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              required
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6">
            {/* Category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Salat">Salat</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </label>

            {/* Price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Recipe Details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24 resize-none"
              placeholder="Recipe details"
            ></textarea>
          </label>

          {/* Image */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          {/* Submit Button */}
          <button className="btn">
            Update Menu Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
