import React from 'react';
import Slide from './Slide';

import Paint1 from "../assets/emotes/1a.jpg";
import Paint2 from "../assets/emotes/2a.jpg";
import Paint3 from "../assets/emotes/3a.jpg";
import Paint4 from "../assets/emotes/4a.jpg";
import Paint5 from "../assets/emotes/5a.jpg";
import Paint6 from "../assets/emotes/6a.jpg";



class Emotes extends React.Component {
    constructor() {
        super();
        this.state = {
        currentIndex: 0,
        images: [Paint1, Paint2, Paint3, Paint4, Paint5, Paint6]
        };
    }

    prevSlide = () => {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
        this.setState({
          currentIndex: index
        });
      };
      
      nextSlide = () => {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentIndex + 1;
        this.setState({
          currentIndex: index
        });
      };

      render() {
        const index = this.state.currentIndex;
        const images = this.state.images;
    
        return (
            <div className="paint__container">
                <Slide url={images[index]} alt="" />
                <div className="left__arrow" onClick={this.prevSlide}></div>
                <div className="right__arrow" onClick={this.nextSlide}></div>
            </div>
        );
    }
    
}

export default Emotes;