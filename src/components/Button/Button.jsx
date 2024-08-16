import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    // console.log("Inside BUTTOn PROPS we have : " , props);

    const { isOutlineBtn , icon , text , ...rest} = props;  // Object Destructuring
    
  return (
    <button {...rest} 
            className={isOutlineBtn ? styles.outline_btn : styles.primary_btn}>
        {/* <MdMessage fontSize="24px" />  YAHA hamne icon ko hard code krdiya hai islie just niche waali lines mai ache sai likh hai  */} 
        {icon}
        {text}
        {/* {props.icon}  instead of just upper lines we can also write this*/}
        {/* {props.text} */}
    </button>
  )
}

export default Button