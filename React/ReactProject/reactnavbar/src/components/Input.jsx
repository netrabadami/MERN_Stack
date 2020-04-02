import React,{useContext} from 'react';
import JustContext from './JustContext'

const Input = () =>{
    const contextName = useContext(JustContext);

    const onChangeHandler = event =>{
        contextName.setState({
            name:event.target.value
        })
    }
    return(
        <div className="container">
            Your Name: <input type="text" name="name" onChange={onChangeHandler}/>
        </div>
    )
}

export default Input;