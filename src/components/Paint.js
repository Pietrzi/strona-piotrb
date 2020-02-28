import React from 'react';
import Slide from './Slide';
import firstPaint from "./assets/raz.jpg";
import secondPaint from "./assets/dwa.jpg";
import thirdPaint from "./assets/trzy.jpg";


class Paint extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          images: [firstPaint, secondPaint, thirdPaint]
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
        let newImagesArray = this.state.images.slice(index, index + 3);
        if (newImagesArray.length < 3) {
        newImagesArray = newImagesArray.concat(
            this.state.images.slice(0, 3 - newImagesArray.length)
        );
        }

        return (
            <div className="temp__box">
                {newImagesArray.map((image, i) =>
                this.state.currentIndex === i ? (
                    <Slide key={i} url={image} alt="" />
                ) : null
                )}
                <div>left</div>
                <div>right</div>
            </div>
        )
    }
}

export default Paint;