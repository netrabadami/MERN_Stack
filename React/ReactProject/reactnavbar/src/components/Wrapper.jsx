import React,{useState} from 'react';
import JustContext from './JustContext'


const Wrapper = props =>{
    const [state, setState] = useState({
        name:""
    })

    return (
        <div>
            <JustContext.Provider value={{state, setState}}>
                {props.children}
            </JustContext.Provider>
        </div>
    )
}

export default Wrapper;