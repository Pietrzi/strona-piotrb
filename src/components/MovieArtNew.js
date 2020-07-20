import React from 'react';
import sample from '../assets/kulkii.mp4';
import MovieArtDisplay from './MovieArtDisplay';

class MovieArt extends React.Component {
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
            <div >
                {this.state.matches && (<video src={sample} autoPlay={true} loop={true} muted></video>)}
                {!this.state.matches && (<div className="pic__background kulki-pic"></div>)}
            </div>
            <MovieArtDisplay />
            </>
        )
    }
}

export default MovieArt;