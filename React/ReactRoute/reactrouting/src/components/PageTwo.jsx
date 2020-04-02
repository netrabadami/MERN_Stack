import React from 'react';
import '../bootstrap.css';
import '../style.css'


const PageTwo = props => {

    if(isNaN(props.id)){
        return (
            <div className="container">
                <p>The word is {props.id}</p>
            </div>
            
        )
    }else{
        return(
            <div className="container">
                <p>The number is {props.id}</p>
            </div>
        )
    }
   
}

export default PageTwo;