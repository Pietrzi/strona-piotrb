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
            height: 55
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
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleMyNext />,
      prevArrow: <SampleMyPrev />,
      responsive: [
        {
          breakpoint: 1075,
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
                <img className="slider-img" src={require('../assets/Ach2.png')} alt="obrazek"/>
            </NavLink>
            <h3 className="slider-title">ach gdyby tak błądzę</h3>
          </div>
          <div className="slide-box">
            <NavLink to="/film2">
                <img className="slider-img" src={require('../assets/Egzul2.png')} alt="obrazek"/>
            </NavLink>
            <h3 className="slider-title">Egzul</h3>
          </div>
          <div className="slide-box">
          <NavLink to="/film3">
                <img className="slider-img" src={require('../assets/floofwall2.png')} alt="obrazek"/>
            </NavLink>
            <h3 className="slider-title">floating on fire</h3>
          </div>
          <div className="slide-box">
          <NavLink to="/film4">
                <img className="slider-img" src={require('../assets/zaba2.png')} alt="obrazek"/>
            </NavLink>
            <h3 className="slider-title">chłopiec z żabą</h3>
          </div>
          <div className="slide-box">
          <NavLink to="/film5">
                <img className="slider-img" src={require('../assets/sciezki2.png')} alt="obrazek"/>
            </NavLink>
            <h3 className="slider-title">ścieżki tekstu</h3>
          </div>
          <div className="slide-box">
          <NavLink to="/film6">
                <img className="slider-img" src={require('../assets/tangere.jpg')} alt="obrazek"/>
            </NavLink>
            <h3 className="slider-title">tangere</h3>
          </div>
            {/* <div className="movie__box">
                <NavLink to="/film1">
                    <div className="movie__display achgdyby"></div>
                </NavLink>
                <div className="movie__title__box">ach gdyby tak błądzę</div>
            </div>
            <div className="movie__box">
                <NavLink to="/film2">
                    <div className="movie__display egzul"></div>
                </NavLink>
                <div className="movie__title__box">egzul</div>
            </div>
            <div className="movie__box">
                <NavLink to="/film3">
                    <div className="movie__display flowfol"></div>
                </NavLink>
                <div className="movie__title__box">floating on fire</div>
            </div>
            <div className="movie__box">
                <NavLink to="/film4">
                    <div className="movie__display zaba"></div>
                </NavLink>
                <div className="movie__title__box">chłopiec z żabą</div>
            </div>
            <div className="movie__box">
                <NavLink to="/film5">
                    <div className="movie__display sciezki"></div>
                </NavLink>
                <div className="movie__title__box">ścieżki tekstu</div>
            </div>
            <div className="movie__box">
                <NavLink to="/film6">
                    <div className="movie__display tangere"></div>
                </NavLink>
                <div className="movie__title__box">tangere</div>
            </div> */}
        </Slider>
        </div>
        </div>
      </div>
    );
  }
}