import React from "react";



function Header(props){
    return (
        
        <div style={{backgroundColor:'purple', height:'100px'}} className="App">
           <button onClick={()=>{props.handleClick('AboutMe')}}>About Me</button>
           <button onClick={()=>{props.handleClick('Contacts')}}>Contacts</button>
           <button onClick={()=>{props.handleClick('Resume')}}>Resume</button>
           <button onClick={()=>{props.handleClick('Work')}}>Work</button>
        </div>
    )
}

export default Header;