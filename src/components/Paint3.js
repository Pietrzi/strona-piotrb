import React from 'react';
import Slide from './Slide';
// import Paint1 from "../assets/tn_5.jpg";
// import Paint2 from "../assets/tn_6.jpg";
// import Paint3 from "../assets/tn_10.jpg";
// import Paint4 from "../assets/tn_11.jpg";
// import Paint5 from "../assets/tn_13.jpg";
// import Paint6 from "../assets/tn_14.jpg";
// import Paint7 from "../assets/tn_18.jpg";
// import Paint8 from "../assets/tn_25.jpg";
// import Paint9 from "../assets/tn_42.jpg";
// import Paint10 from "../assets/tn_48.jpg";
// import Paint11 from "../assets/tn_49.jpg";
// import Paint12 from "../assets/tn_50.jpg";
// import Paint13 from "../assets/tn_51.jpg";
// import Paint14 from "../assets/tn_56.jpg";
// import Paint15 from "../assets/tn_4848484.jpg";
// import Paint16 from "../assets/tn_a(1).jpg";
// import Paint17 from "../assets/tn_a(2).jpg";
// import Paint18 from "../assets/tn_a(3).jpg";
// import Paint19 from "../assets/tn_a(4).jpg";
// import Paint20 from "../assets/tn_a(5).jpg";
// import Paint21 from "../assets/tn_a(6).jpg";
// import Paint22 from "../assets/tn_a(7).jpg";
// import Paint23 from "../assets/tn_a(8).jpg";
import Paint24 from "../assets/tn_a(9).jpg";
import Paint25 from "../assets/tn_a(10).jpg";
import Paint26 from "../assets/tn_a(11).jpg";
import Paint27 from "../assets/tn_a(12).jpg";
import Paint28 from "../assets/tn_a(13).jpg";
import Paint29 from "../assets/tn_a(14).jpg";
import Paint30 from "../assets/tn_a1.jpg";
import Paint31 from "../assets/tn_b1.jpg";
import Paint32 from "../assets/tn_d1.jpg";
import Paint33 from "../assets/tn_h1.jpg";
import Paint34 from "../assets/tn_i1.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [Paint24, Paint25, Paint26, Paint27, Paint28, Paint29, Paint30, Paint31, Paint32, Paint33, Paint34]
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