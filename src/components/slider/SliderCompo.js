import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCompo.module.css";

function Slides() {
  const settings = {
    slide: "img",
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    arrows: false,
  };

  return (
    <div className="wrapper">
      <h1 className="summer">
        Midso<span>mmar</span>
      </h1>
      <h5 className="summer-collection">Summer Collections</h5>
      <Slider className="slider-right" {...settings}>
        <div className="slide-right">
          <img src={`${process.env.PUBLIC_URL}/img/slider1_1.png`} alt="" />
        </div>
        <div className="slide-right">
          <img src={`${process.env.PUBLIC_URL}/img/slider2_1.png`} alt="" />
        </div>
        <div className="slide-right">
          <img src={`${process.env.PUBLIC_URL}/img/slider3_1.png`} alt="" />
        </div>
      </Slider>
      <div className="slider-left2">
        <div className="left-img-1 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider1_3.png`} alt="" />
        </div>
        <div className="left-img-2 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider1_2.png`} alt="" />
        </div>
        <div className="left-img-3 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider3_5.png`} alt="" />
        </div>
        <div className="left-img-4 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider2_2.png`} alt="" />
        </div>
        <div className="left-img-5 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider3_3.png`} alt="" />
        </div>
        <div className="left-img-6 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider1_4.png`} alt="" />
        </div>
        <div className="left-img-7 slide-left">
          <img src={`${process.env.PUBLIC_URL}/img/slider1_5.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Slides;
