import { useState } from "react"

export default function Button({changeColor}){
    // const [color, setColor] = useState(0);
    

return (
  //  <button onClick={randColor} style={{backgroundColor: colors[color]}}>Change Color</button>
  // ^ changes the physical button

  <button onClick={changeColor}>Change Background Color</button>

)

}