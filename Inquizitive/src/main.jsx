import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Import the main App component
import "./styles/index.css";  // Import the global styles (index.css)
import "./styles/App.css";    // Import app-specific styles (App.css)

// Create the root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root div
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
