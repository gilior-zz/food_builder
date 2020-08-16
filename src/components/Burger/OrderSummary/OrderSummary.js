import React from 'react'

const OrderSummary = (props) => {

    const ing_list = Object.keys(props.ingredients).map((ing, index) =>
        <li key={ing+index}>
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
        </>
    )
}


export default OrderSummary