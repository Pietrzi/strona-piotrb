import React from 'react';
import Slide from './Slide';
import Paint1 from "../assets/tn_13.jpg";
import Paint2 from "../assets/tn_14.jpg";
import Paint3 from "../assets/tn_18.jpg";
import Paint4 from "../assets/tn_19.jpg";
import Paint5 from "../assets/tn_34.jpg";
import Paint6 from "../assets/tn_42.jpg";
import Paint7 from "../assets/tn_47.jpg";
import Paint8 from "../assets/tn_49.jpg";
import Paint9 from "../assets/tn_50.jpg";
import Paint10 from "../assets/tn_51.jpg";
import Paint11 from "../assets/tn_9999.png";
import Paint12 from "../assets/tn_54545.jpg";
import Paint13 from "../assets/tn_4848484.jpg";
import Paint14 from "../assets/tn_444444444.jpg";
import Paint15 from "../assets/tn_32323232332323.jpg";
import Paint16 from "../assets/tn_2121212121212121.jpg";
import Paint17 from "../assets/tn_a1.jpg";
import Paint18 from "../assets/tn_b1.jpg";
import Paint19 from "../assets/tn_i1.jpg";



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