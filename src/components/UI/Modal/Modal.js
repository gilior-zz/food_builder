import React, { Component } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
// const Modal = (props) => {
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Modal] componentWillUpdate')
    }


    render() {
        return (
            <>
                <Backdrop on_back_drop_clicked={this.props.on_modal_close} show={this.props.show}></Backdrop>
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }} className={classes.Modal}>
                    {this.props.children}
                </div>
            </>

        )
    }
}

export default Modal