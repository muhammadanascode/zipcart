import React from 'react'
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import "./ComponentsCSS/Slider.css"

export default function Slider() {
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img3} className="d-block " id='img3' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block " id='img2' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block " id='img1' alt="..."/>
    </div>
  </div>
</div>
        </>
    )
}
