import React from "react";
import ReactDOM from "react-dom/client";
import { AppContainer } from "@components";
import "./main.css";

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <React.StrictMode>
            <AppContainer />
        </React.StrictMode>
    );
