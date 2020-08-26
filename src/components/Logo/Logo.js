import React from 'react'
import classes from './Logo.module.css'
import logo from '../../assets/images/burger-logo.png'
const Logo = (props) => {
    return (
   <div className={classes.Logo}> 
       <img src={logo}></img>
   </div>
)
}

export default Logo