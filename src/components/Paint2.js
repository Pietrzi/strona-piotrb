import React from 'react';
import Slide from './Slide';
import Paint1 from "../assets/2/1.jpg";
import Paint2 from "../assets/2/2.jpg";
import Paint3 from "../assets/2/3.jpg";
import Paint4 from "../assets/2/4.jpg";
import Paint5 from "../assets/2/5.jpg";
import Paint6 from "../assets/2/6.jpg";
import Paint7 from "../assets/2/7.jpg";
import Paint8 from "../assets/2/8.jpg";
import Paint9 from "../assets/2/9.jpg";
import Paint10 from "../assets/2/10.jpg";
import Paint11 from "../assets/2/11.jpg";
import Paint12 from "../assets/2/12.jpg";
import Paint13 from "../assets/2/13.jpg";
import Paint14 from "../assets/2/14.jpg";
import Paint15 from "../assets/2/15.jpg";
import Paint16 from "../assets/2/16.jpg";
import Paint17 from "../assets/2/17.jpg";
// import Paint18 from "../assets/2/18.jpg";
import Paint19 from "../assets/2/19.jpg";
import Paint20 from "../assets/2/20.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint1, Paint2, Paint3, Paint4, Paint5, Paint6, Paint7, Paint8, Paint9, Paint10, Paint11, Paint12, Paint13, Paint14, Paint15, Paint16, Paint17, Paint19, Paint20]
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