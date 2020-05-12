import React from 'react';
import Slide from './Slide';
import Paint1 from "../assets/1/1.1.tif";
import Paint2 from "../assets/1/1.2.jpg";
import Paint3 from "../assets/1/1.3.jpg";
import Paint4 from "../assets/1/1.4.jpg";
import Paint5 from "../assets/1/1.5.jpg";
import Paint6 from "../assets/1/1.6.jpg";
import Paint7 from "../assets/1/1.7.jpg";
import Paint8 from "../assets/1/1.8.jpg";
import Paint9 from "../assets/1/1.9.jpg";
import Paint10 from "../assets/1/1.10.jpg";
import Paint11 from "../assets/1/1.11.png";
import Paint12 from "../assets/1/1.12.jpg";
import Paint13 from "../assets/1/1.13.jpg";
import Paint14 from "../assets/1/1.14.jpg";
import Paint15 from "../assets/1/1.15.jpg";
import Paint16 from "../assets/1/1.16.jpg";
import Paint17 from "../assets/1/1.17.jpg";
import Paint18 from "../assets/1/1.18.jpg";
import Paint19 from "../assets/1/1.19.jpg";



class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint1, Paint2, Paint3, Paint4, Paint5, Paint6, Paint7, Paint8, Paint9, Paint10, Paint11, Paint12, Paint13, Paint14, Paint15, Paint16, Paint17, Paint18, Paint19]
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
        let newImagesArray = this.state.images.slice(index, index + 19);
        if (newImagesArray.length < 19) {
        newImagesArray = newImagesArray.concat(
            this.state.images.slice(0, 19 - newImagesArray.length)
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
        )
    }
}

export default Paint;