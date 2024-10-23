import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layout/layout";
import Home from "../views/Home/Home";
import {getAllMicroAppsRoute} from "./MicroAppsConfig"

const MicroAppsRoutes = getAllMicroAppsRoute()


export const commonRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ]
    .concat(MicroAppsRoutes.map(item => {
      return {
        path: item,
        element: <div ></div>
      }
    }))
  },
])