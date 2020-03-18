import React from 'react';
import sample from '../assets/JUPI.mp4';

class BioContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 668px)").matches };
      }

    componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 668px)").addListener(handler);
    }


    render() {
        return (
            <div >
                {this.state.matches && (<video src={sample} autoPlay={true} loop={true} muted></video>)}
                {!this.state.matches && (<div className="pic__background"></div>)}
            </div>
            
        )
    }
}

export default BioContact;