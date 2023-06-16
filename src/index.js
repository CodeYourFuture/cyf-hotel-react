import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import TouristInfoCards from "./components/TouristInfoCards";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <App />
);
