import ReactDOM from "react-dom/client"
import React from "react";
import {RouterProvider} from "react-router-dom"
import App, { appRouter } from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)