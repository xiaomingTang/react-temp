// react-create-app 的 bug, 开发模式下 ie 9/10 始终报错"Map 未定义"
// import "core-js/features/map"
// import "core-js/features/set"
// import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import "raf/polyfill"

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App/index"
// import * as serviceWorker from "./serviceWorker"

import "./index.css"
import "@Src/assets/icons/iconfont/iconfont.css"

const container = document.getElementById("root")!

ReactDOM.render(<App />, container)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
