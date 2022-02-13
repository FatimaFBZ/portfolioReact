import React from "react";
import image from "../assets/Resume1.pdf"

function Resume(){
    return(
        <div className="App">
           <h1 className="container">My Resume</h1>
           <li>
           <a href={image}>Resume</a>
           </li>
        </div>
    )
}


export default Resume;