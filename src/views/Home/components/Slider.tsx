import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide3 from "./slide1.svg";
import slide2 from "./slider2.svg";
import slide1 from "./slider3.svg";
import slide4 from "./slider4.svg";
import rightArrow from "./right-arrow.svg";
import leftArrow from "./left-arrow.svg"
import {ReactComponent as ReactLogo} from "./dot.svg"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      type='button'> 
      <img src={rightArrow} alt='next' /> 
      </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      type='button'> 
      <img src={leftArrow} alt='back' /> 
    </button>
  );
}

function Slide() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            marginBottom: `${window.innerWidth>865?"-50px":"0px"}`
          }}
        >
          <ul style={{ margin: "10px 0px" }} className="dotsList"> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <ReactLogo />
      )
    };
    return (
      <div className="slides">
        <Slider {...settings}>
          <div>
            <img src={slide1} alt='test'/>
          </div>
          <div>
          <img src={slide2} alt='test'/>
          </div>
          <div>
          <img src={slide3} alt='test'/>
          </div>
          <div>
          <img src={slide4} alt='test'/>
          </div>
        </Slider>
      </div>
    )

}

export default Slide