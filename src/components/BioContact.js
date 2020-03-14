import React from 'react';
import sample from '../assets/JUPI.mp4';

const BioContact = () => {
    return (
        <video src={sample} autoPlay={true} loop={true} muted></video>
    )
}

export default BioContact;