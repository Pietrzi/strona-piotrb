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
            width: "55px",
            height: "55px",
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
                  <NavLink to="/film1">
                      <img className="slider-img" src={require('../assets/tangere.jpg')} alt="obrazek"/>
                  </NavLink>
                  <h3 className="slider-title">tangere</h3>
                </div>
                <div className="slide-box">
                  <NavLink to="/film2">
                      <img className="slider-img" src={require('../assets/Ach2.png')} alt="obrazek"/>
                  </NavLink>
                  <h3 className="slider-title">ach gdyby tak błądzę</h3>
                </div>
                <div className="slide-box">
                  <NavLink to="/film3">
                      <img className="slider-img" src={require('../assets/Egzul2.png')} alt="obrazek"/>
                  </NavLink>
                  <h3 className="slider-title">Egzul</h3>
                </div>
                <div className="slide-box">
                  <NavLink to="/film4">
                      <img className="slider-img" src={require('../assets/floofwall2.png')} alt="obrazek"/>
                  </NavLink>
                  <h3 className="slider-title">floating on fire</h3>
                </div>
                <div className="slide-box">
                  <NavLink to="/film5">
                      <img className="slider-img" src={require('../assets/zaba2.png')} alt="obrazek"/>
                  </NavLink>
                  <h3 className="slider-title">chłopiec z żabą</h3>
                </div>
                <div className="slide-box">
                  <NavLink to="/film6">
                      <img className="slider-img" src={require('../assets/sciezki2.png')} alt="obrazek"/>
                  </NavLink>
                  <h3 className="slider-title">ścieżki tekstu</h3>
                </div>
              </Slider>
            </div>
        </div>
      </div>
    );
  }
}