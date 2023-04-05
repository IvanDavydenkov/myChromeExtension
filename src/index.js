import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: static;
  display:block;
  }
`;

  // setTimeout(()=>{
  //   document.querySelector('.mainbox').prepend(rootElement)
  // },10000)
// const obs = new MutationObserver(()=>{
//   if(document.querySelector('.mainbox')!==null){
//     document.querySelector('.mainbox').prepend(rootElement)
//   }
// })

function renderOn(){
  const targetElement = document.querySelector('.mainbox')
  if (targetElement !== null) {
    targetElement.prepend(rootElement)
  } else {
    setTimeout(()=>{
      renderOn()
    },0)
  }
}
renderOn()

  // document.body.prepend(rootElement);
  document.body.prepend(globalStyles);


const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
