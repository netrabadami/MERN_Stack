import React, {useState, Fragment} from 'react';

const BoxGenerator = props =>{
    const [listState, setListState] = useState({
            box: []
    })
    const [formState, setFormState] = useState({
        color: "",
        width: "",
        height: ""
    })
    const onChangeHandler = e =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        console.log(formState);
        setListState({
            box:[
                ...listState.box,
                { color:formState.color,
                  width:formState.width,
                  height:formState.height
                }
            ]
            
        })
        console.log(listState.box);
        setFormState({
            
            color:"",
            width: "",
            height: ""

        })
        document.getElementById("colorForm").reset();
        
    }
    return(
        <Fragment>
            <form onSubmit={onSubmitHandler} id="colorForm">
                Color: <input type="text" name="color" onChange={onChangeHandler} />
                Width: <input type="text" name="width" onChange={onChangeHandler} />
                Height: <input type="text" name="height" onChange={onChangeHandler} />
                <input type="submit" value="submit"/>
            </form>
            {
                listState.box.map((item,i) =>(
                    <div key={i} style={{backgroundColor:item.color,width:item.width+"px", height:item.height+"px",display:"inline-block",margin:"20px"}}></div>
                )

                )
            }
            

        </Fragment>
    );
//end of file
}

export default BoxGenerator;