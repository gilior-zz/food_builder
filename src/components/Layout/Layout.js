import React, { useState, useRef, useEffect } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
const Layout = (props) => {
    const [side_drawer_state, update_side_drawer_state] = useState(true)
    const prevDrawerRef = useRef();
    useEffect(() => {
        prevDrawerRef.current = side_drawer_state;
    });
    const prevDrawer = prevDrawerRef.current;

    
    const on_side_drawer_closed = () => {
        update_side_drawer_state(!prevDrawerRef.current)
    }
    return (
        <>
            <Toolbar on_toggle_drawer={on_side_drawer_closed}></Toolbar>
            <SideDrawer show={side_drawer_state} on_side_drawer_closed={on_side_drawer_closed}></SideDrawer>
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    )
}

export default Layout