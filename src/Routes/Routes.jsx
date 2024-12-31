import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Manu from "../pages/Menu/Menu/Manu";
import Order from "../Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>,
          },
          {
            path: 'menu',
            element:<Manu/>,
          },
          {
            path: 'order/:category',
            element: <Order/>,
          }
    ],
  },
]);
