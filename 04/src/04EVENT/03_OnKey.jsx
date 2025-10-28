import { useState, useEffect } from "react"

const EventComponent_03 = ()=>{
    const [state,setState] = useState(" ")

    const handleKeyUp=(e)=>{
        console.log("keyUp...",e.key)
        setState(state+e.key)
    }
    const handleKeyDown=(e)=>{console.log("keyDown...",e.key)}
    const handleKeyPress=(e)=>{console.log("keyPress...",e.key)}

    return (
        <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
            KEY UP : <input type="text" onKeyUp={handleKeyUp} className="KeyUp"/>
            KEY DOWN : <input type="text" onKeyDown={handleKeyDown}/>
            KEY PRESS : <input type="text" onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default EventComponent_03