import React from 'react'
import img from "../images/mypic.jpg"
import "./ComponentsCSS/Founder.css"

export default function Founder() {
  return (
    <>
      <div className='container'>


        <div className='msg'>
          <h6>Founder Message</h6>
          <div className='line'></div>
          <h3>Going Beyond Sales</h3>
          <p id='paragraph'>Zipkart sales solutions exists so that you can focus on what you do well and we focus on increasing your sales revenue through honest and proven sales strategies that are built to grow your revenue . the name Zipkart came from the idea of opportunity  to partner with entrepeneurs and small business owners and pursue our dreams and goals together what I loved about our business model is that we only grown as a company if our clients grow.</p>
          <div className='block'>
            <h6 id='anas'>Muhammad Anas</h6>
            <p id='ceo'>Zipkart founder & CEO</p>
          </div>
        </div>


        <div className='img'>
          <img src={img} alt="" id='founderimg' />
        </div>
      </div>
    </>
  )
}
