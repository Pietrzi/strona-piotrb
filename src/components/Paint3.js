import React from 'react';
import Slide from './Slide';
import Paint1 from "../assets/3/1.jpg";
import Paint2 from "../assets/3/2.jpg";
import Paint3 from "../assets/3/3.jpg";
import Paint4 from "../assets/3/4.jpg";
import Paint5 from "../assets/3/5.jpg";
import Paint6 from "../assets/3/6.jpg";
import Paint7 from "../assets/3/7.jpg";
import Paint8 from "../assets/3/8.jpg";
import Paint9 from "../assets/3/9.jpg";
import Paint10 from "../assets/3/10.jpg";
import Paint11 from "../assets/3/11.jpg";
import Paint12 from "../assets/3/12.jpg";
import Paint13 from "../assets/3/13.jpg";
import Paint14 from "../assets/3/14.jpg";
import Paint15 from "../assets/3/15.jpg";
import Paint16 from "../assets/3/16.jpg";
import Paint17 from "../assets/3/17.jpg";

import Paint1m from "../assets/33/1.jpg";
import Paint2m from "../assets/33/2.jpg";
import Paint3m from "../assets/33/3.jpg";
import Paint4m from "../assets/33/4.jpg";
import Paint5m from "../assets/33/5.jpg";
import Paint6m from "../assets/33/6.jpg";
import Paint7m from "../assets/33/7.jpg";
import Paint8m from "../assets/33/8.jpg";
import Paint9m from "../assets/33/9.jpg";
import Paint10m from "../assets/33/10.jpg";
import Paint11m from "../assets/33/11.jpg";
import Paint12m from "../assets/33/12.jpg";
import Paint13m from "../assets/33/13.jpg";
import Paint14m from "../assets/33/14.jpg";
import Paint15m from "../assets/33/15.jpg";
import Paint16m from "../assets/33/16.jpg";
import Paint17m from "../assets/33/17.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint1, Paint2, Paint3, Paint4, Paint5, Paint6, Paint7, Paint8, Paint9, Paint10, Paint11, Paint12, Paint13, Paint14, Paint15, Paint16, Paint17],
          mobileImages: [Paint1m, Paint2m, Paint3m, Paint4m, Paint5m, Paint6m, Paint7m, Paint8m, Paint9m, Paint10m, Paint11m, Paint12m, Paint13m, Paint14m, Paint15m, Paint16m, Paint17m],
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
        let newImagesArray = this.state.images.slice(index, index + 17);
        if (newImagesArray.length < 17) {
        newImagesArray = newImagesArray.concat(
            newImages.slice(0, 17 - newImagesArray.length)
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