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

      nextSlide = () => {
          const index = this.state.currentIndex;
          if (index === this.state.images.length -1) {
              this.setState({
                  currentIndex: 0
              })
          }
      }
    
      render() {
        const index = this.state.currentIndex;
        let newImagesArray = this.state.images.slice(index, index + 6);
        if (newImagesArray.length < 6) {
          newImagesArray = newImagesArray.concat(
            this.state.images.slice(0, 6 - newImagesArray.length)
          );
        }
        return (
          <div className="paint__container">
            {newImagesArray.map((image, i) =>
              this.state.currentIndex === i ? (
                <Slide key={i} url={image} alt="" />
              ) : null
            )}
                <div className="left__arrow" onClick={this.prevSlide}></div>
                <div className="right__arrow" onClick={this.nextSlide}></div>
          </div>
        );
    }
}

export default Emotes;