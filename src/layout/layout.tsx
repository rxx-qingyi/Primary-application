import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.less"
import HeaderComponent from "./header/HeaderComponent";
import { getAllMicroAppsRoute } from "../common/MicroAppsConfig";
import { __internalGetCurrentRunningApp, initGlobalState, start, } from "qiankun";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const MyLayout = () => {

  const loaction = useLocation()
  const MicroAppsRoutes =  getAllMicroAppsRoute()
  console.log(loaction);
  
  useEffect(() => {
    console.log(MicroAppsRoutes, loaction.pathname, MicroAppsRoutes.includes(loaction.pathname));
    if(MicroAppsRoutes.includes(loaction.pathname)){
      start();
    } else {
      const container = document.getElementById('container');
      console.log(container)
      if (container) {
        container.innerHTML = '';
      }
    }
  }, [loaction.pathname])
  
  return (
    <Layout >
      <HeaderComponent />
      {/* <div id="container"></div> */}
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  )
}

export default MyLayout;
