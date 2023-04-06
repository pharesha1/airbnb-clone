import React from "react";
import Navbar from "./Components/navbar";
import Heroes from "./Components/heroes";
import Content from "./Components/content";

export default function App(){
    
    return(
        <div>
            <Navbar/>
            <Heroes/>
            <Content/>
        </div>
    );
}