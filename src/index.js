// import modules/packages
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// import component 
import App from "./Component/App";

// app configuration
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);