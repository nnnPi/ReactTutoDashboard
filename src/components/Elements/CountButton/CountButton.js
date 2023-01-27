import React, { useState, useEffect } from "react"
import "./CountButton.css"

const CountButton = (props) => {

    const[currentCount,setCurrentCount] = useState(0)


    const handleClick = () =>{
        setCurrentCount(currentCount+ props.incrementBy)
           }

const buttonStyles = {
    background: props.buttonColor,
    


}


    useEffect(()=>{
        
        
    }, [])

    return (
        <div>
            <button style ={buttonStyles} onClick={handleClick }>add +{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>

    </div>
    )
}

export default CountButton