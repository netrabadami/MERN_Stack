import React, {Component, Fragment} from 'react';

const FunctionalComponents = props => {
    return (
        <Fragment>
            <div>
                <h1>{props.firstName} {props.lastName}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
            </div>
        </Fragment>
    );
}

export default FunctionalComponents;