import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <div className = "container">
                    <li className="brand-logo">Avocado Store</li>
                    <ul id="nav-mobile" className="right">
                        <li><Link to = '/'>Shop</Link></li>
                        <li><Link to = '/cart'>My Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar