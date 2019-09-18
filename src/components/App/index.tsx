import React, { Suspense, lazy } from 'react';
import { Button } from "antd";
import logo from './logo.svg';
import Styles from './index.module.scss';
// import TempComp from '../TempComp/index';
const TempComp = lazy(() => import("../TempComp/index"))

console.log(process.env)

const App: React.FC = () => {
  return (
    <div className={Styles.app}>
      <header className={Styles.appHeader}>
        <img src="./assets/ttt.jpg" alt=""/>
        <img src={logo} className={Styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">fdas</Button>
        <Suspense fallback={<div>Loading...</div>}>
          <TempComp name="fdsa" age={99} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
