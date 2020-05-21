import React from 'react';
import Slide from './Slide';
import Paint1 from "../assets/1/1.jpg";
import Paint2 from "../assets/1/2.jpg";
import Paint3 from "../assets/1/3.png";
import Paint4 from "../assets/1/4.jpg";
import Paint5 from "../assets/1/5.jpg";
import Paint6 from "../assets/1/6.jpg";
import Paint7 from "../assets/1/7.jpg";
import Paint8 from "../assets/1/8.jpg";
import Paint9 from "../assets/1/9.jpg";
import Paint11 from "../assets/1/11.jpg";
import Paint12 from "../assets/1/12.jpg";
import Paint13 from "../assets/1/13.jpg";
import Paint14 from "../assets/1/14.jpg";

import Paint1m from "../assets/11/1.jpg";
import Paint2m from "../assets/11/2.jpg";
import Paint3m from "../assets/11/3.jpg";
import Paint4m from "../assets/11/4.jpg";
import Paint5m from "../assets/11/5.jpg";
import Paint6m from "../assets/11/6.jpg";
import Paint7m from "../assets/11/7.jpg";
import Paint8m from "../assets/11/8.jpg";
import Paint9m from "../assets/11/9.jpg";
import Paint11m from "../assets/11/11.jpg";
import Paint12m from "../assets/11/12.jpg";
import Paint13m from "../assets/11/13.jpg";
import Paint14m from "../assets/11/14.jpg";



class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint1, Paint2, Paint3, Paint4, Paint5, Paint6, Paint7, Paint8, Paint9, Paint11, Paint12, Paint13, Paint14],
          mobileImages: [Paint1m, Paint2m, Paint3m, Paint4m, Paint5m, Paint6m, Paint7m, Paint8m, Paint9m, Paint11m, Paint12m, Paint13m, Paint14m],
          matches: window.matchMedia("(min-width: 800px)").matches
        };
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 800px)").addListener(handler);
    }

    prevSlide = () => {
    const lastIndex = this.state.matches ? this.state.images.length - 1 : this.state.mobileImages.length - 1;
    const resetIndex = this.state.currentIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
    this.setState({
        currentIndex: index
        });
    };
    nextSlide = () => {
    const lastIndex = this.state.matches ? this.state.images.length - 1 : this.state.mobileImages.length - 1;
    const resetIndex = this.state.currentIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentIndex + 1;
    this.setState({
        currentIndex: index
        });
    };
    
    render() {

        const newImages = this.state.matches ? this.state.images : this.state.mobileImages;
        const index = this.state.currentIndex;
        let newImagesArray = this.state.matches ? this.state.images.slice(index, index + 13) : this.state.mobileImages.slice(index, index + 13);
        if (newImagesArray.length < 13) {
        newImagesArray = newImagesArray.concat(
            newImages.slice(0, 13 - newImagesArray.length)
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