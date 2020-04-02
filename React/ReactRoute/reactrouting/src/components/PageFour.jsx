import React from 'react';
import '../bootstrap.css';
import '../style.css';

const PageFour = props => {
    return(
        <div className="container">
        <p style={{color:props.color,backgroundColor:props.bg}}>{props.word}</p>
        </div>
    )
}

export default PageFour;