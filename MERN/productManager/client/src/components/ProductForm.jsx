import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {FormControl,Paper,InputLabel,OutlinedInput,Button } from '@material-ui/core';
import '../bootstarp.css';
import '../style.css';
import { navigate } from '@reach/router';

const styles = {
    paper: {
        width: "30rem", padding: "2rem",marginLeft:"23.5rem",height:"25rem",backgroundColor:"lightyellow"
    },
    input: {
        marginBottom: "1rem",margin: "0.5rem",width:"20rem"
    },
    button: {
        width: "100%"
    },

}
const ProductForm = props =>{

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

  
    const onSubmitHandler = e =>{
        console.log("on submit")
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
        .then(res=> navigate("/"))
        .catch(err=>console.log("error",err))
        
    }

    return(
    <div className="container-fluid">
        <Paper elevation={5} style={styles.paper}>
            <h2>New Product</h2>
                <form onSubmit={onSubmitHandler}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Title</InputLabel>
                        <OutlinedInput type="text" onChange={e => setTitle(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Price</InputLabel>
                        <OutlinedInput type="text" onChange={e => setPrice(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>description</InputLabel>
                        <OutlinedInput type="text" onChange={e => setDescription(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </form>
         </Paper>

    </div>
    )
//end of file    
}

export default ProductForm;