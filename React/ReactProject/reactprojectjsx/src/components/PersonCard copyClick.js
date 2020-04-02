import React,{Component, Fragment} from 'react';

class Personcard extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount +1
        })
    }
    render(){
        return(
            <Fragment>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <div>
                <button onClick={this.handleClick}>You have Clicked {this.state.clickCount} times</button>
            </div>
            </Fragment>
        );
    }
//end of file
}

export default Personcard;