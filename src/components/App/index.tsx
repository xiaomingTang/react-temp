import React, { Suspense, lazy, useState } from "react"
import { Button, Icon } from "antd"
import logo from "./logo.svg"
import Styles from "./index.module.scss"
// @ts-ignore
import TestWorker from "./test.worker" // ie 9 不支持 web worker

const worker = new TestWorker()

worker.postMessage({ from: "parent" })

// @ts-ignore
const TempComp = lazy(() => import("@Src/components/TempComp/index"))

const App: React.FC = () => {
  const [workerCB, setWorkerCB] = useState({ in: "", out: "" })

  worker.onmessage = ({ data }: { data: { in: string; out: string; } }) => { setWorkerCB(data) }

  return (
    <div className={Styles.app}>
      <header className={Styles.appHeader}>
        <img src="./assets/ttt.jpg" alt=""/>
        <img src={logo} className={Styles.appLogo} alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <p>{`in: ${workerCB.in};`}</p>
        <p>{`out: ${workerCB.out};`}</p>
        <span className="iconfont icon-qiye" />
        <Icon type="down" />
        <Icon type="caret-down" theme="filled" />
        <Icon type="down-circle" theme="twoTone" />
        <Button type="primary" icon="info">info</Button>
        <Button type="primary" icon="menu">menu</Button>
        <Button type="primary" icon="info-circle">info-circle</Button>
        <Suspense fallback={<div>Loading...</div>}>
          <TempComp name="fdsa" age={99} />
        </Suspense>
      </header>
    </div>
  )
}

export default App
