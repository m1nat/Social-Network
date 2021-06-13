import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { postMessege, getCurrentTextMessege } from './redux/State';


export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} postMessege={postMessege} getCurrentTextMessege={getCurrentTextMessege}/>
  </React.StrictMode>,
  document.getElementById("root")
);
}
  

