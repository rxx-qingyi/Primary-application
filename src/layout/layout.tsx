import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.less"
import HeaderComponent from "./header/HeaderComponent";

const MyLayout = () => {
  
  return (
    <Layout >
      <HeaderComponent />
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  )
}

export default MyLayout;