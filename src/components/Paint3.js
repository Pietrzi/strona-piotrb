import React from 'react';
import Slide from './Slide';
import Paint34 from "../assets/88.jpg";
import Paint35 from "../assets/tn_6.jpg";
import Paint36 from "../assets/tn_11.jpg";
import Paint37 from "../assets/tn_444.jpg";
import Paint38 from "../assets/tn_767.jpg";
import Paint39 from "../assets/tn_7777.jpg";
import Paint40 from "../assets/tn_777778.jpg";
import Paint41 from "../assets/tn_08080800.jpg";
import Paint42 from "../assets/tn_77777777.jpg";
import Paint43 from "../assets/tn_8585858585.jpg";
import Paint44 from "../assets/tn_jupiii.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint34, Paint35, Paint36, Paint37, Paint38, Paint39, Paint40, Paint41, Paint42, Paint43, Paint44]
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
        let newImagesArray = this.state.images.slice(index, index + 11);
        if (newImagesArray.length < 11) {
        newImagesArray = newImagesArray.concat(
            this.state.images.slice(0, 11 - newImagesArray.length)
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