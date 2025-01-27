// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  //   const [loading,setLoading] = useState(true)
  // const [menu, setMenu] = useState([]);

  //   useEffect(() => {
  //       fetch(`https://bistro-boss-server-indol-five.vercel.app/menu`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setMenu(data);
  //           setLoading(false);
  //         });
  //   }, [])

  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
