import { useState } from "react";
import styles from "./Header.module.less"
import { Link, useNavigate } from "react-router-dom";



const HeaderComponent = () => {
  const [current, setCurrent] = useState<any>()
  const [isCurrent, setIsCurrent] = useState<boolean>()
  const navigate = useNavigate();

  const onCardClick = (current: any) => {
    setCurrent(current)
    setIsCurrent(true)
    navigate(current.path)
  }

  const crads = [
    {name: "测试", path: "/home"},
    {name: "测试1", path: "/app-react"},
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
          { isCurrent && 
            <div className={styles.current}>
              <div>当前微应用</div>
              { current 
                ? <div className={styles.currentCard}>{current.name}</div>
                : <div></div>
              }
            </div>
          }
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