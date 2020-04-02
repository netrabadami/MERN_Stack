import React,{useState, Fragment} from 'react';

const ReactFrom = props =>{
    const [formState, setFormStata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:"",
        submitted: false,
        isFirstNameValid: false,
        isLastNameValid: false,
        isEmailValid: false,
        isPasswordValid: false

    })

    const onChangeHandler = e =>{
        console.log(formState);
        setFormStata({
            ...formState,
            [e.target.name]: e.target.value
        })
        if(formState.firstName?.length > 2 ){
            setFormStata({ isFirstNameValid:true});
        }
        if(formState.lastName?.length > 2 ){
            setFormStata({ isLastNameValid:true});
        }
        if(formState.email?.length > 5 ){
            setFormStata({ isEmailValid:true});
        }
        if(formState.password?.length > 8){
            setFormStata({ isPasswordValid:true});
        }
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        console.log(formState);
        setFormStata({
            ...formState,
            submitted:true
        })
    }

    // let msg = <h1>You have not submmitted the form</h1>;
    // if(formState.submitted){
    //     msg = <h1>You have submitted form</h1>;
    // }
    return(
        <Fragment>

        
        <div>
            {formState.submitted ? <h1>You have submitted form</h1> : <h1>You have not submmitted the form</h1>}
                <form onSubmit={onSubmitHandler}>
                    First Name: <input type="text" name="firstName" onChange={onChangeHandler} />
                    {formState.isFirstNameValid ? "" : <p style={{color: "orange"}}>First Name must be at least 2 characters.</p>}
                    <br/>
                    Last Name: <input type="text" name="lastName" onChange={onChangeHandler} />
                    {formState.isLastNameValid ? "" : <p style={{color: "orange"}}>Last Name must be at least 2 characters.</p>}
                    <br/>
                    Email: <input type="email" name="email" onChange={onChangeHandler} />
                    {formState.isEmailValid ? "" : <p style={{color: "orange"}}>Email must be at least 5 characters.</p>}
                    <br/>
                    Password: <input type="password" name="password" onChange={onChangeHandler} />
                    {formState.isPasswordValid ? "" : <p style={{color: "orange"}}>Password must be at least 8 characters.</p>}
                    {formState.isPasswordValid ? "" : <p style={{color: "orange"}}>Password should match.</p>}
                    <br/>
                    Confirm Password: <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
            <div>
            <p>{formState.firstName}</p>
            <p>{formState.lastName}</p>
            <p>{formState.email}</p>
            <p>{formState.password}</p>
            <p>{formState.confirmPassword}</p>
            </div>
        </Fragment>
    );
//End of File   
}

export default ReactFrom;