import { Link, useOutletContext } from "react-router-dom";
import "./ComponentsCSS/Cart.css"
import { useState, useEffect } from "react";

export default function Cart() {

  const [amount, setAmount] = useState(0)
  const [noOfItems, setNoOfItems] = useState(0)
  const [, cartItem , handleAmount] = useOutletContext();
  

  function totalAmount(a) {
    
    if (a.length !== 0) {
      let sum = 0
      for (let i = 0; i < a.length; i++) {
        sum += a[i].price
      }
      setAmount(sum)
      handleAmount(sum)
      setNoOfItems(a.length)

    }
  }

  useEffect(() => {
    totalAmount(cartItem)
    // eslint-disable-next-line
  }, [cartItem])


  return (
    <>
      <div className="flex">
        <div className="cart">
          {cartItem.length !== 0 ? cartItem.map((e) => {

            return <div key={e.id} className="items">
              <div className="cartFlex">
                <img src={e.image} alt="" className="image" />
                <div className="cartblock">
                  <p>{e.title}</p>
                  <p> Price : {e.price}$</p>
                </div>
              </div>
            </div>

          }) : <div className="noItem"> Add items to cart </div>}

        </div>

        {cartItem.length !== 0 ? <div className="Total">

          <div className="checkout">
            <p className="order">Order Summary</p>
            subtotal Items ({noOfItems} items)
            <div className="totalFlex">
              <p>Total</p>
              <p>RS {amount}$</p>
            </div>
            <Link to={"/checkout"} className="checkoutbtn">Proceed to CheckOut</Link>
          </div>
        </div>
          : null}

      </div>
    </>
  )
}
