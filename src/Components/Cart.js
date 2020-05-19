import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromCart, addQuantity, subtractQuantity} from './Actions'

const Cart = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const addedItems = state.addedItems.length ?
        (state.addedItems.map(item =>{
        return(
            <li className = 'collection-item avatar' key = {item.id}>
                <div className = "item-img">
                    <img src = {item.img} alt = {item.img} className = ''/>
                </div>
                <div className = 'item-desc'>
                    <span className = 'title'>{item.title}</span>
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}€</b></p>
                    <p><b>Quantity: {item.quantity}</b></p>
                    <div className = 'add-remove'>
                        <Link to='/cart'><i className='material-icons' onClick = {() => {dispatch(addQuantity(item.id))}}>arrow_drop_up</i></Link>
                        <Link to='/cart'><i className='material-icons' onClick = {() => {dispatch(subtractQuantity(item.id))}}>arrow_drop_down</i></Link>
                    </div>
                    <button className = 'waves-effect waves-light btn pink remove' onClick = {() => {dispatch(removeFromCart(item.id))}}>Remove</button>
                </div>
            </li>
        )
    })):
    (<p>Nothing.</p>)

    return(
       <div className = 'container'>
           <div className = 'cart'>
                <h5>You have ordered:</h5>
                <ul className = 'collection'>
                    {addedItems}
                </ul>
           </div>
       </div>
    )
}

export default Cart