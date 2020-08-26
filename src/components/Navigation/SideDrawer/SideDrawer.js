import React from 'react';
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
function SideDrawer(props) {
    let attached_classes = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attached_classes = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <Backdrop show={props.show} on_back_drop_clicked={props.on_side_drawer_closed}></Backdrop>
            <div className={attached_classes.join(' ')}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>

                <NavigationItems></NavigationItems>
            </div>
        </>
    );
}

export default SideDrawer;