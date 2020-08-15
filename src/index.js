import React from "react";
import ReactDOM from "react-dom";
import '../assets/reset.scss';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    /* jshint ignore:start */
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById("root")
    /* jshint ignore:end */
);