import React from 'react';
import classes from './BuildControls.module.css'
import classes_order from './order-button-code.module.css'
import BuildControl from './BuildControl/BuildControl'
const ctrls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) =>
    (<div className={classes.BuildControls}>
        <p>{props.total_price}</p>
        {ctrls.map((ctrl) =>
            <BuildControl
                zero={props.ingredients[ctrl.type] == 0}
                on_rem={() => props.on_rem(ctrl.type)}
                key={ctrl.label} label={ctrl.type}
                on_add={() => props.on_add(ctrl.type)}>

            </BuildControl>)

        }
        <button onClick={props.on_toggle_modal} disabled={props.total_price == 4} className={classes_order.OrderButton}>Order Now</button>
    </div>)



export default BuildControls