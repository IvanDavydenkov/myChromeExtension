import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";
const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  display:block;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: #fff;
  }
`;


export const currentUrl = window.location.origin

function renderOn(selector){
  const targetElement = document.querySelector(selector)
  if (targetElement !== null) {
    targetElement.prepend(rootElement)
  } else {
    renderOn()
  }
}

if(currentUrl==='http://localhost:3000'){
  document.body.prepend(rootElement);
}
if(currentUrl==='https://finandy.com'){
  renderOn('body')
}
if(currentUrl==='https://www.binance.com'){
  renderOn('body')
}


document.body.prepend(globalStyles);


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);