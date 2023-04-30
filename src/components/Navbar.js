import React, { useState } from 'react'
import "./ComponentsCSS/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {

    const [cartItem, setCartItems] = useState([])
    const [amount , setAmount] = useState(0)

    function addCart(item) {
        setCartItems([...cartItem, item])
    }

    function handleAmount(a){
        setAmount(a)
    }

    return (
        <>
            <nav>
                <FontAwesomeIcon icon={faCartArrowDown} size="lg" style={{ color: "#fff705", marginRight: "1%" }} />
                <div className='block'>
                    <p className='zipcart'>ZipKart</p>
                    <p className='explore'>Explore Plus</p>
                </div>
                <input className='search' type="text" placeholder='Search for products, brands and more' />
                <ul>
                    <li>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link className='link' to="/founder">Founder</Link>
                    </li>
                </ul>
            </nav>

            <Outlet context={[addCart, cartItem , handleAmount , amount]} />

        </>
    )
}
