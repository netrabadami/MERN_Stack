import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {FormControl,Paper,InputLabel,OutlinedInput,Button } from '@material-ui/core';
import '../bootstarp.css';
import '../style.css';

const styles = {
    paper: {
        width: "40rem", padding: "2rem",marginLeft:"20rem",height:"25rem",backgroundColor:"lightyellow"
    }
}

const ProductInfo = props => {

    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+props.id)
        .then(res =>{
            setProduct(res.data)
        })
        .catch(err => console.log(err))
    },[props.id])

    return(
        <div className="container-fluid">
            <Paper elevation={5} style={styles.paper}>
                <h1>Title: {product.title}</h1>
                <h1>Price: {product.price}</h1>
                <h1>Description: {product.description}</h1>
            </Paper>

            
        </div>
    )
//end of file
}

export default ProductInfo;