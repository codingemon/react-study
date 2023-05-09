import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";
import * as serviceWorker from "./serviceWorker";
import loggerMiddleware from "./lib/loggerMiddleware";

// createStore가 이제 잘 사용되지 않는다고한다.
// 현재는 " configureStore " 를 사용하라고 권장하고 있다.
// createStore 대신 redux/toolkit을 사용했을 때의 장점
// 1. redux-toolkit을 사용하므로써 actions를 작성해주지 않아도 된다.
// 2. 데이터를 변경할 때도 Object.assign()을 통해 새로운 데이터를 담은 객체를 만드는 번거로운 과정을 거치지 않아도 된다...
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
