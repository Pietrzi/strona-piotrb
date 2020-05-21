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

import Paint1m from "../assets/22/1.jpg";
import Paint2m from "../assets/22/2.jpg";
import Paint3m from "../assets/22/3.jpg";
import Paint4m from "../assets/22/4.jpg";
import Paint5m from "../assets/22/5.jpg";
import Paint6m from "../assets/22/6.jpg";
import Paint7m from "../assets/22/7.jpg";
import Paint8m from "../assets/22/8.jpg";
import Paint9m from "../assets/22/9.jpg";
import Paint10m from "../assets/22/10.jpg";
import Paint11m from "../assets/22/11.jpg";
import Paint12m from "../assets/22/12.jpg";
import Paint13m from "../assets/22/13.jpg";
import Paint14m from "../assets/22/14.jpg";
import Paint15m from "../assets/22/15.jpg";
import Paint16m from "../assets/22/16.jpg";
import Paint17m from "../assets/22/17.jpg";
// import Paint18 from "../assets/22/18.jpg";
import Paint19m from "../assets/22/19.jpg";
import Paint20m from "../assets/22/20.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint1, Paint2, Paint3, Paint4, Paint5, Paint6, Paint7, Paint8, Paint9, Paint10, Paint11, Paint12, Paint13, Paint14, Paint15, Paint16, Paint17, Paint19, Paint20],
          mobileImages: [Paint1m, Paint2m, Paint3m, Paint4m, Paint5m, Paint6m, Paint7m, Paint8m, Paint9m, Paint10m, Paint11m, Paint12m, Paint13m, Paint14m, Paint15m, Paint16m, Paint17m, Paint19m, Paint20m],
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
        let newImagesArray = this.state.images.slice(index, index + 19);
        if (newImagesArray.length < 19) {
        newImagesArray = newImagesArray.concat(
            newImages.slice(0, 19 - newImagesArray.length)
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