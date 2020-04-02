import React,{useState} from 'react';
import '../bootstrap.css';
import '../style.css'
const Form = props =>{

    const [state, setState] = useState({
        pokeName:[]
    })
    const onClickHandler = event =>{
        (fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())    
        .then((response) => 
            //console.log(response);
            setState({
                pokeName:response.results
            })))
    }
    return (
        <div className="container">
            <button type="submit" onClick={onClickHandler}>Fetch Pokemon</button>
            <div class="name">
            {
                state.pokeName.map((items, i) => (
                <p key={i}>{ items.name} {i}</p>
                ))
           }
            </div>
          
        </div>
    )
}

export default Form;