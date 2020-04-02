import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../bootstrap.css';
import '../style.css'

const PokemonAxios = props =>{
    const [state, setState] = useState({
        pokeName:[]
    })

    const onClickHandler = event =>{
        
            axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response=>{
                let pokeName = response.data;
                setState({pokeName:response.data.results});
            })
        
    }
    return(
        <div className="container">
            <button type="submit" onClick={onClickHandler}>Fetch Pokemon</button>
            <div className="name">
            {
                state.pokeName.map((items, i) => (
                <p key={i}>{ items.name} {i}</p>
                ))
           }
            </div>
        </div>
        
    )

//end of file    
}

export default PokemonAxios;