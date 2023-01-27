import React from 'react'

const Button = (props) => {
    
    return <div style={{color:'blue',background:'gray'}}>{props.buttonText}
    {props.children}
    </div>

}

export default Button