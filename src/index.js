// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { StyledEngineProvider } from "@mui/material/styles";
// import App from "./App";

// ReactDOM.createRoot(document.querySelector("#root")).render(
//   <React.StrictMode>
//     <StyledEngineProvider injectFirst>
//       <App />
//     </StyledEngineProvider>
//   </React.StrictMode>
// );
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
