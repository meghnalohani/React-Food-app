import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { URL } from "./utils/constants";
import Body from "./components/Body";



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<AppLayout/>)