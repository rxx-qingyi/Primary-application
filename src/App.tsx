import { start } from 'qiankun';
import styles from './App.module.less';
import { commonRoutes } from './common/routes';
import MyLayout from './layout/layout';
import Home from "./views/Home/Home"
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAllMicroAppsRoute } from './common/MicroAppsConfig';

function App() {
  const [isQiankunContainer, setIsQiankunContainer] = useState<boolean>();


  // useEffect(() => {
  //   if(isQiankunContainer){
     
  //   }
  // }, [isQiankunContainer])

  return (
    // <>
    //   { isQiankunContainer
    //     ? <div id='container'></div>
    //     : <div className={styles.App} >
    //         {/* <MyLayout /> */}
    //         {/* <Home /> */}
    //         <RouterProvider router={commonRoutes} />
    //       </div>
    //   }
    // </>
    <div className={styles.App} >
      {/* <MyLayout /> */}
      {/* <Home /> */}
      <RouterProvider router={commonRoutes} />
      <div id="container"></div>
    </div>
  );
}

export default App;
