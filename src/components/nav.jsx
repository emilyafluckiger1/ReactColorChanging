import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar({color}){

 


return(
    <div className="NavContainer">
    <nav >
        {/* <h1 id="hello" className="hi"></h1>         #hello   .hi */}
        <div className="element" >
            <a href={"/"}><p style={{color: color}}>Home</p></a>
        </div>
        <div className="element">
            {/* <p>About</p> */}
            <a href={"/about"}><p style={{color: color}}>About</p></a>
        </div>
        <div className="element">
            <a href={"/learn"}><p style={{color: color}}> Learn More</p></a>
        </div>
        
    </nav>
    </div>

)

}