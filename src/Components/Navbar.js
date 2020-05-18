import React from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'
import Cart from './Cart'

const Navbar = () => {
    return(
        <nav>
            <div class="nav-wrapper">
                <div className = "container">
                    <a href="#" class="brand-logo">Shopping</a>
                    <ul id="nav-mobile" class="right">
                        <li><Link to = '/'>Shop</Link></li>
                        <li><Link to = '/cart'>My Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar