import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom";
import "./ComponentsCSS/CheckOut.css"
import img from "../images/tick.png"

export default function CheckOut() {

  const [, , , amount] = useOutletContext();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [account, setAccount] = useState("")
  const [pin, setPin] = useState("")
  const [required, setRequired] = useState(false)
  const [paymentDone, setPaymentDone] = useState(false)


  function handleFirstname(e) {
    setFirstName(e.target.value)
  }

  function handleLastname(e) {
    setLastName(e.target.value)
  }

  function handleAddress(e) {
    setAddress(e.target.value)
  }

  function handleAccount(e) {
    setAccount(e.target.value)
  }

  function handlePin(e) {
    setPin(e.target.value)
  }

  function handlePayment() {
    if (firstName.length > 3 && lastName.length > 3 && address.length > 10 && account.length === 16 && pin.length === 4) {
      setFirstName("")
      setLastName("")
      setAddress("")
      setAccount("")
      setPin("")
      console.log("Payment done")
      setRequired(false)
      setPaymentDone(true)
    }
    else {
      console.log("Please fill the required field correctly")
      setRequired(true)
      
    }
  }

  return (
    <>
      {paymentDone ?

       <div className='paymentsuccessful'>
        <h2>Payment has been done successfully</h2>
        <img src={img} alt="" />
      </div>

        :

        <div className='container'>

          <div className='container1'>
            <h3 id='makeapayment'>Make a Payment</h3>
            <p i>We are heare to make your payment easy</p>

            <div className='inputFlex'>
              <input onChange={handleFirstname} value={firstName} type="text" id='firstName' placeholder='First Name' />
              <input onChange={handleLastname} value={lastName} type="text" id='lastName' placeholder='Lastname' />
            </div>


            <input onChange={handleAddress} value={address} type="text" placeholder='Address' id='address' />

            <div className='details'>
              <p>Select the mode of payment</p>
              <select name="" id="">
                <option value="Paypal">Paypal</option>
                <option value="Payoneer">Payoneer</option>
              </select>
              <div>
                <input onChange={handleAccount} value={account} type="number" placeholder='Enter a 16 digit account number' id='accountnumber' />
              </div>
              <input onChange={handlePin} value={pin} type="password" placeholder='Enter 4 digit pin' id='pin' />
            </div>

            <p id='total'>Total {amount}$</p>

            {required ? <div id='req'>* Please fill the above field correctly</div> : null}

            <button id='pay' onClick={handlePayment}>Pay Now</button>

          </div>
        </div>}

    </>
  )
}
