import React from 'react';
import sample from '../assets/pies.mp4';

class Main extends React.Component {
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
            <div className="test-container2">
                {/* <video src={sample} autoPlay={true} loop={true} muted></video> */}
                {this.state.matches && (<video src={sample} autoPlay={true} loop={true} muted className="test-video2"></video>)}
                {!this.state.matches && (<div className="pic__background main"></div>)}
            </div>
            
        )
    }
}

export default Main;