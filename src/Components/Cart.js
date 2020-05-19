import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const state = useSelector(state => state)
    return(
        <div className ="container">
            <div className = "cart">
                <h5>You have ordered:</h5>
                <div className = "collection">
                
                    <p>Nothing.</p>
                </div>
            </div>
            <div className = "container">
                <div className = "collection">
                    <li className = "collection-item">
                        <label>
                            <input type = "checkbox" />
                            <span>Shipping (+6€)</span>
                        </label>
                    </li>
                    <li className = "collection-item">
                        <b>Total: {state.total} €</b>
                    </li>
                </div>
                <div className = "checkout">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart