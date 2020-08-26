import React, { Component } from "react"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const ING_PRICE = {
    salad: .2,
    cheese: .4,
    meat: 1.3,
    bacon: .7
}
class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0

            },
            total_price: 4,
            show_modal: false
        }
    }

    on_toggle_modal = () => {
        this.setState({ show_modal: true });
    }

    add_ing = (type) => {
        // const new_count = this.state.ingredients[type] + 1;
        const state_clone = { ...this.state.ingredients };
        state_clone[type] = state_clone[type] + 1;
        this.setState({ ingredients: state_clone });

        const price_to_add = ING_PRICE[type];
        this.setState({ total_price: this.state.total_price + price_to_add });
    }


    rem_ing = (type) => {
        const state_clone = { ...this.state.ingredients };
        state_clone[type] = Math.max(state_clone[type] - 1, 0);
        this.setState({ ingredients: state_clone });

        const price_to_add = ING_PRICE[type];
        this.setState({ total_price: Math.max(4, this.state.total_price - price_to_add) });
    }

    on_modal_close = () => {
        this.setState({ show_modal: false })
    }

    on_purchase_continue=()=>{
        console.log('u continue!')
    }
    render() {
        return (
            <>
                ?
                <Modal  on_modal_close={this.on_modal_close} show={this.state.show_modal}>
                    <OrderSummary total_price={this.state.total_price} on_purchase_continue={this.on_purchase_continue} on_cancel={this.on_modal_close} ingredients={this.state.ingredients}></OrderSummary>
                </Modal>



                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls on_toggle_modal={this.on_toggle_modal} total_price={this.state.total_price} ingredients={this.state.ingredients} on_rem={this.rem_ing} on_add={this.add_ing}></BuildControls>
            </>
        )
    }
}

export default BurgerBuilder;