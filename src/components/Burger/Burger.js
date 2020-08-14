import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let ingredients_Arr = Object.keys(props.ingredients).map((ing) =>
        [...Array(props.ingredients[ing])].map((_, i) =>
            <BurgerIngredient key={ing + i} type={ing}></BurgerIngredient>
        )).reduce((arr, el) => {
            return arr.concat(el);
        }, []
        )

    console.log(ingredients_Arr);
    if (!ingredients_Arr.length)
        ingredients_Arr = <p>plz add ingredients</p>
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>

            {ingredients_Arr}
            {/* <BurgerIngredient type='cheese'></BurgerIngredient>
            <BurgerIngredient type='meat'></BurgerIngredient> */}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default Burger