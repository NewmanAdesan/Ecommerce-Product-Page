import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import "./index.css"

// obtain the root element and render the app component inside the root element
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)