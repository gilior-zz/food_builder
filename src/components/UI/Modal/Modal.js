import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
const Modal = (props) => {
    return (
        <>
        <Backdrop on_back_drop_clicked={props.on_modal_close} show={props.show}></Backdrop>
            <div style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }} className={classes.Modal}>
                {props.children}
            </div>
        </>

    )
}

export default Modal