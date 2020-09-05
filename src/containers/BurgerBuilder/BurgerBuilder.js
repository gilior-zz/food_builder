import React, { Component } from "react"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../components/withErrorHandler/withErrorHandler";
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
            ingredients: null,
            total_price: 4,
            show_modal: false,
            is_fetching: false,
            error: false
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

    componentDidMount() {
        axios.get('https://food-builder-lg.firebaseio.com/ingredients.json')
            .then((response) => {
                this.setState({ ingredients: response.data })
            })
            .catch(err => {
                // console.log(err);
                this.setState({ error: true })
            })
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


    on_purchase_continue = async () => {
        this.setState({ is_fetching: true })
        console.log('u continue!');
        const data = {
            ingredients: this.state.ingredients,
            price: this.state.total_price,
            customer: {
                name: 'lior',
                address: {
                    street: 'test_street',
                    zip_code: 65346,
                    country: 'israel'

                },
                email: 'sf@sdf.com',

            },
            delivery_method: 'fastest'
        }
        try {
            const response = await axios.post('/orders.json', data);
            console.log(response);
            this.setState({ is_fetching: false, show_modal: false })
        }

        catch (error) {
            console.log(error);
            this.setState({ show_modal: false })
        }


    }

    render() {
        let burger = this.state.error ? <p>ingredients cannot be loaded</p> : <Spinner></Spinner>
        let order_summary = <Spinner></Spinner>;
        if (this.state.ingredients) {
            burger = (
                <>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls on_toggle_modal={this.on_toggle_modal} total_price={this.state.total_price} ingredients={this.state.ingredients} on_rem={this.rem_ing} on_add={this.add_ing}></BuildControls>

                </>
            )
            order_summary = <OrderSummary
                total_price={this.state.total_price}
                on_purchase_continue={this.on_purchase_continue}
                on_cancel={this.on_modal_close}
                ingredients={this.state.ingredients}>

            </OrderSummary>
        }
        if (this.state.is_fetching)
            order_summary = <Spinner></Spinner>
        return (
            <>

                <Modal on_modal_close={this.on_modal_close} show={this.state.show_modal}>
                    {order_summary}
                </Modal>
                {burger}


            </>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);