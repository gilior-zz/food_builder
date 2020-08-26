import React, { Component } from 'react'
import Button from '../../UI/Button/Button';

// const OrderSummary = (props) => {
class OrderSummary extends Component {

    // constructor(props) {
    //     super(props);

    // }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        const ing_list = Object.keys(this.props.ingredients).map((ing, index) =>


            <li key={ing + index}>
                <span
                    style={{ textTransform: 'capitalize' }}>
                    {ing}
                </span>: {this.props.ingredients[ing]}
            </li>

        )
        return (
            <>
                <h3>ur order</h3>
                <p>ingredients:</p>
                <ul>
                    {this.ing_list}
                </ul>
                <p>
                    total price  <strong>{this.props.total_price.toFixed(2)}</strong>
                </p>
                <p>coninue 2 checkout?</p>
                <Button btn_type="Danger" on_click={this.props.on_cancel}>CANCEL</Button>
                <Button btn_type="Success" on_click={this.props.on_purchase_continue}>CONTINUE</Button>
            </>
        )
    }
}


export default OrderSummary