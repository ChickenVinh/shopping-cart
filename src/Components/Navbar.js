import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className = "navbar">
            <ul>
                <li className = "title">Avocado Store</li>
                <li><Link to = {'/cart'}>My Cart</Link></li>
                <li><Link to = {'/'}>Shop</Link></li>
            </ul>
        </div>
    )
}

export default Navbar