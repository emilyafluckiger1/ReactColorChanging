import { useState } from "react";
import NavBar from "../components/nav";
import Button from "../components/button";
import { Outlet } from "react-router-dom";


export default function Layout() {
    const [count, setCount] = useState(0);
    const [colorString, setColorString] = useState('red');
    const [websiteColor, setWebsiteColor] = useState(0);

    const colors = ['orange', 'red', '#a6d5c7', 'green', 'blue'];
    document.body.style.backgroundColor = colorString;
    function randColor() {
        setWebsiteColor(Math.floor(Math.random() * 5)); //4 = max and first 0 = min   plus 1 to move along the array, + 0 is min again
        //setColor(1)
        setColorString(colors[websiteColor]);
        document.body.style.transition = "all .25s";
        document.body.style.backgroundColor = colorString;
        // document.body.style.transition = "none";
    }

    return (
        <>
            <div>
                <NavBar color={colorString}></NavBar>
                <Button changeColor={randColor}></Button>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
}