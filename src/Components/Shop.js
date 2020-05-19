import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './Actions'

const Shop = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const itemList = state.items.map(item => {
        return(
            <div className = "card" key = {item.id}>
                <div className = "card-image">
                    <img src = {item.img} alt = {item.titel} />
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light green" onClick = {()=>{dispatch(addToCart(item.id))}}><i className="material-icons">add</i></span>
                </div>
                <div className = "card-content">
                    <p className = "card-title">{item.title}</p>
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}€</b></p>
                </div>
            </div>
        )
    })

    return(
        <div className = "container">
            <h3 className = "center">Our items</h3>
            <div className = "box">
                {itemList}
            </div>
        </div>
    )
}

export default Shop