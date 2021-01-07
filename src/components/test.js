import React from 'react';
import Slide from './Slide';

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";



class Test extends React.Component {
        state = {
        currentIndex: 0,
        images: [img1, img2, img3, img4, img5, img6]
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

export default Test;