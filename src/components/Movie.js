import React from 'react';
import sample from '../assets/filmtf.mp4';


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
            <div >
                {/* <video src={sample} autoPlay={true} loop={true} muted></video> */}
                {this.state.matches && (<video src={sample} autoPlay={true} loop={true} muted></video>)}
                {!this.state.matches && (<div className="pic__background tower"></div>)}
            </div>
            
        )
    }
}

export default Movie;