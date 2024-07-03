import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode> 이게 있으면 값을 가져올때 두개뜸
  <App />
  // </React.StrictMode>
);
