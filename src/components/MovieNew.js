import React from 'react';
import sample from '../assets/filmos.mp4';
import MovieDisplay from './MovieDisplay';
import NewMovieDisplay from './NewMovieDisplay';
import MovieSlider from './MovieSlider';


class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 700px)").matches };
      }

    componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 700px)").addListener(handler);
    }


    render() {
        return (
            <>
            <div className="test-container">
                {this.state.matches && (<video src={sample} autoPlay={true} loop={true} muted className="test-video"></video>)}
                {!this.state.matches && (<div className="pic__background tower"></div>)}
                
            </div>
            <MovieSlider />
            {/* <MovieSlider clickRight={this.props.goRight} clickLeft={this.props.goLeft} right={this.props.right}/> */}
            </>
        )
    }
}

export default Movie;