import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-indol-five.vercel.app",
  // baseURL: "https://bistro-boss-server-indol-five.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
