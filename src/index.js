import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import React from "react";
// import ReactDOM from "react-dom";
import Register from "./pages/Register.jsx"; // Adjust the path based on where your Register.jsx file is located

// Render the Register component into the root div
// ReactDOM.render(<Register />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
