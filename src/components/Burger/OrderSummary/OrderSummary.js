import React from 'react'
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {



    const ing_list = Object.keys(props.ingredients).map((ing, index) =>
        <li key={ing + index}>
            <span
                style={{ textTransform: 'capitalize' }}>
                {ing}
            </span>: {props.ingredients[ing]}
        </li>
    );
    return (
        <>
            <h3>ur order</h3>
            <p>ingredients:</p>
            <ul>
                {ing_list}
            </ul>
            <p>
                total price  <strong>{props.total_price.toFixed(2)}</strong>
            </p>
            <p>coninue 2 checkout?</p>
            <Button btn_type="Danger" on_click={props.on_cancel}>CANCEL</Button>
            <Button btn_type="Success" on_click={props.on_purchase_continue}>CONTINUE</Button>
        </>
    )
}


export default OrderSummary