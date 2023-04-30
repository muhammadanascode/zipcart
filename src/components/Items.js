import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./ComponentsCSS/Items.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from "react-router-dom";


function Items() {

    const [item, setItem] = useState([])  //state of products
    const [addCart] = useOutletContext();

    const url = "https://fakestoreapi.com/products"

    function handleClick(e) {
        addCart(e)
        
    }

    useEffect(() => {
        //Fetching products
        const request = async () => {
            const res = await axios.get(url)
            // console.log(res)
            setItem(res.data)
        }
        request()

    }, [])
    return (
        <>
            <div className='row' style={{ width: "100vw", }}>

                <p className='heading'>
                    <FontAwesomeIcon icon={faBagShopping} beatFade size="lg" style={{ color: "#e1ff00", marginRight: "5%" }} />
                    HOT FEATURED PRODUCTS
                    <FontAwesomeIcon icon={faBagShopping} beatFade size="lg" style={{ color: "#e1ff00", marginLeft: "5%" }} />
                </p>
                {item.length !== 0 ? item.map((e) => {

                    return <div className="col-md-4" key={e.id} >
                        <div className='nestedCol'>
                            <img id='img' src={e.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><b>Title:</b> {e.title}</h5>
                                <p className="card-text"><b>Description:</b> {e.description.length < 40 ? e.description : e.description.slice(0, 40)}</p>
                                <p><b>Price:</b> {e.price}$</p>
                                <button onClick={() => handleClick(e)} type="button" className="btn btn-primary" >
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} />
                                    Add to Cart</button>
                            </div>
                        </div>
                    </div>
                })
                    : null}

            </div>
        </>
    )
}

export { Items }
