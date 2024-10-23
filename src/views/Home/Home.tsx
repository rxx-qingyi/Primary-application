import { Card, Col, Row } from "antd"
import styles from "./Home.module.less"


const Home = () => {

  const crads = [
    {name: "测试1", path: "/"},
    {name: "测试2", path: "/"},
    {name: "测试3", path: "/"},
    {name: "测试4", path: "/"},
    {name: "测试5", path: "/"},
    {name: "测试6", path: "/"},
    {name: "测试7", path: "/"},
    {name: "测试8", path: "/"},
    {name: "测试9", path: "/"},
    {name: "测试10", path: "/"},
    {name: "测试11", path: "/"},
    {name: "测试12", path: "/"},
    {name: "测试13", path: "/"},
    {name: "测试14", path: "/"},
    {name: "测试15", path: "/"},
    {name: "测试16", path: "/"},
    {name: "测试17", path: "/"},
    {name: "测试18", path: "/"},
    {name: "测试19", path: "/"},
  ]

  const onCradClick = (item: any) => {
    alert(`item: ${item.name}; path: ${item.path}`)
  }

  return (
    <>
    <div className={styles.Home}>
      <Row gutter={[16, 16]}>
        { crads.map((item) => {
            return (
              <Col span={6} >
                <Card title={item.name} bordered={false} className={styles.cardContainer} onClick={() => onCradClick(item)}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>  
            )
          })
        }
      </Row>
    </div>
    </>
  )
}

export default Home