import { useState } from "react";
import styles from "./Header.module.less"
import { Link } from "react-router-dom";



const HeaderComponent = () => {
  const [current, setCurrent] = useState<any>()

  const onCardClick = (current: any) => {
    setCurrent(current)
  }

  console.log(styles);
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

  return (
    <>
      <div className={styles.header}>
      <div className={styles.current}>
            { current 
              ? <div className={styles.currentCard}>{current.name}</div>
              : <div></div>
            }
          </div>
        <div className={styles.headercards}>

          {crads.map((item) => {
            return <div className={styles.card} onClick={() => onCardClick(item)}>{item.name}</div>
          })}
        </div>
      </div>
    </>  
  )
}

export default HeaderComponent;