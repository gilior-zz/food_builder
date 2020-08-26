import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Toolbar} onClick={props.on_toggle_drawer}>menu</div>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>

            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar