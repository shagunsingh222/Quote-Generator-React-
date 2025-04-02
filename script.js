
import React from "react";

import { createRoot } from "react-dom/client";
import { Body } from "./components/Body";
let Applayout=()=>{
    return(
        <>
 <Body></Body>
    </>
)
}

let rootelem=document.getElementById("root");
let root=createRoot(rootelem);
root.render(<Applayout></Applayout>)





