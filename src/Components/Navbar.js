import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className = "navbar">
            <div className = "container">
                <p className = "title">Avocado Store</p>
                <ul>
                    <li><Link to = {'/cart'}>My Cart</Link></li>
                    <li><Link to = {'/'}>Shop</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar