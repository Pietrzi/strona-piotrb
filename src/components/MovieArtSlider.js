import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import Slider from "react-slick";

function SampleMyPrev(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={require('../assets/899.png')}
      className={className}
      alt={"arrow"}
      style={{ ...style, 
            display: "block",
            width: 55,
            height: 55,
            transform: "translate(-5px, -28px)"
            }}
      onClick={onClick}
    />
  );
}

function SampleMyNext(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={require('../assets/890.png')}
      className={className}
      alt={"arrow"}
      style={{ ...style,
             display: "block", 
             width: 50,
             height: 50
             }}
      onClick={onClick}
    />
  );
}



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleMyNext />,
      prevArrow: <SampleMyPrev />,
      responsive: [
        {
            breakpoint: 1510,
            settings: {
              slidesToShow: 4
            }
        },
        {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3
            }
        },
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 724,
            settings: {
              slidesToShow: 1
            }
        }
      ]
    };
    return (
      <div className="movies__container">
          <div className="movies__boxi">
            <div className="slick-container">
                <Slider {...settings}>
                  <div className="slide-box">
                    <NavLink to="/video-art1">
                      <img className="slider-img" src={require('../assets/buzki.jpg')} alt="obrazek"/>
                    </NavLink>
                    <h3 className="slider-title">ładne buźki</h3>
                  </div>
                  <div className="slide-box">
                    <NavLink to="/video-art2">
                      <img className="slider-img" src={require('../assets/kulki.png')} alt="obrazek"/>
                    </NavLink>
                    <h3 className="slider-title">kulki</h3>
                  </div>
                  <div className="slide-box">
                    <NavLink to="/video-art3">
                      <img className="slider-img" src={require('../assets/znikam.png')} alt="obrazek"/>
                    </NavLink>
                    <h3 className="slider-title">znikam</h3>
                  </div>
                  <div className="slide-box">
                    <NavLink to="/video-art4">
                      <img className="slider-img" src={require('../assets/samoloty.png')} alt="obrazek"/>
                    </NavLink>
                    <h3 className="slider-title">lot nr.0</h3>
                  </div>
                  <div className="slide-box">
                    <NavLink to="/video-art5">
                      <img className="slider-img" src={require('../assets/asia.png')} alt="obrazek"/>
                    </NavLink>
                    <h3 className="slider-title">dom wariatów</h3>
                  </div>
                  <div className="slide-box">
                      <NavLink to="/video-art6">
                        <img className="slider-img" src={require('../assets/flagi.png')} alt="obrazek"/>
                      </NavLink>
                    <h3 className="slider-title">flagi</h3>
                  </div>
                </Slider>
            </div>
        </div>
      </div>
    );
  }
}