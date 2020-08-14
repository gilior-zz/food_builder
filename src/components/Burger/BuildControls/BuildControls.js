import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const ctrls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => 
  (  <div className={classes.BuildControls}> 
        {ctrls.map((ctrl) =>
            <BuildControl key={ctrl.label} label={ctrl.type} on_add={()=>props.on_add(ctrl.type)}></BuildControl>)}
    </div>)



export default BuildControls