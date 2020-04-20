import React from 'react';
import Slide from './Slide';
import Paint20 from "../assets/tn_5.jpg";
import Paint21 from "../assets/tn_6a.jpg";
import Paint22 from "../assets/tn_8.jpg";
import Paint23 from "../assets/tn_10.jpg";
import Paint24 from "../assets/tn_12new.png";
import Paint25 from "../assets/tn_26.jpg";
import Paint26 from "../assets/tn_56.jpg";
import Paint27 from "../assets/tn_111111.jpg";
import Paint28 from "../assets/tn_12341234.jpg";
import Paint29 from "../assets/tn_898989898.jpg";
import Paint30 from "../assets/tn_1111111111111111111.jpg";
import Paint31 from "../assets/tn_a (7).jpg";
import Paint32 from "../assets/tn_d1.jpg";
import Paint33 from "../assets/tn_g1.jpg";
import Paint34 from "../assets/tn_h1.jpg";
import Paint35 from "../assets/tn_j.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint20, Paint21, Paint22, Paint23, Paint24, Paint25, Paint26, Paint27, Paint28, Paint29, Paint30, Paint31, Paint32, Paint33, Paint34, Paint35]
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
        let newImagesArray = this.state.images.slice(index, index + 16);
        if (newImagesArray.length < 16) {
        newImagesArray = newImagesArray.concat(
            this.state.images.slice(0, 16 - newImagesArray.length)
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