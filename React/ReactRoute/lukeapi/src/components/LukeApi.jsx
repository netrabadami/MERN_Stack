import React, {useState} from 'react';
import axios from 'axios';
import '../bootstrap.css';
import '../style.css'

const LukeApi = props => {

    const [searchType, setSearchType] = useState("");
    const [searchTypeID, setSearchTypeID] = useState();
    const [searchResult, setSearchResult] = useState({}); 

    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log(event);
        console.log(searchType);
        console.log(searchTypeID);

        axios.get("https://swapi.co/api/"+searchType+"/"+searchTypeID)
        .then(response =>{
            setSearchResult(response.data);
        })
        .catch(err => {
            console.log("These aren't the droids you're looking for")
        })
        console.log("https://swapi.co/api/"+searchType+"/"+searchTypeID);
    }

    return(
        <div className="container-fluid">
            <div className="row">
                
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                        <label className="text">Search For: </label>
                                <select className="form-control" onChange={ e => setSearchType(e.target.value)}>
                                    <option value="people">People</option>
                                    <option value="films">Films</option>
                                    <option value="starships">Starships</option>
                                    <option value="vehicles">Vehicles</option>
                                    <option value="species">Species</option>
                                    <option value="planets">Planets</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <label className="text">Id: </label>
                            <input type="text" className="form-group" onChange={ e => setSearchTypeID(e.target.value)}/>
                        </div>

                        <input type="submit" value="Search"/>
                    </form>
                
            </div>
            <div className="row">

            
            <div className="col col-4">
                {
                    searchType === "people"? 
                        <>
                            <p>Name: {searchResult.name}</p>
                            <p>Hair Color: {searchResult.hair_color}</p>
                            <p>Eye Color: {searchResult.eye_color}</p>
                            <p>Height: {searchResult.height}</p>
                        </>
                        : ""
                }

                {
                    searchType === 'films' ?
                        <>
                            <p>Title: {searchResult.title}</p>
                            <p>Release Date: {searchResult.release_date}</p>
                        </>
                        : ""
                }

                {
                    searchType === 'starships' ?
                    <>
                        <p>Model: {searchResult.model}</p>
                        <p>Cost: {searchResult.cost_in_credits}</p>
                        <p>Max Speed: {searchResult.max_atmosphering_speed}</p>
                    </>
                    :""
                }

                {
                    searchType === 'vehicles' ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Model: {searchResult.model}</p>
                        <p>Cost: {searchResult.cost_in_credits}</p>
                    </>
                    :""
                }
                {
                    searchType === 'planets' ?
                    <>
                        <p>Name: {searchResult.name}</p>
                        <p>Climate: {searchResult.climate}</p>
                        <p>Terrain: {searchResult.terrain}</p>
                        <p>Surface Water: {searchResult.surface_water}</p>
                        <p>Population: {searchResult.population}</p>
                    </>
                    :""
                }
            </div>
            </div> 
        </div>
    )
//End of file
}

export default LukeApi;