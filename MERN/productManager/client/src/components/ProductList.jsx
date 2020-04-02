import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {FormControl,Paper,InputLabel,OutlinedInput,Button } from '@material-ui/core';
import '../bootstarp.css';
import '../style.css';

const styles = {
    paper: {
        width: "30rem auto", padding: "2rem",marginLeft:"1rem",height:"25rem auto",backgroundColor:"lightyellow"
    },
    input: {
        marginBottom: "1rem",margin: "0.5rem",width:"20rem"
    },
    button: {
        width: "100%",color:"white"
    },

}

const ProductList = props =>{
    const [products, setProducts] = useState([]);
    const [updatedList, setUpdatedList] = useState(false);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            setProducts(res.data);
            setUpdatedList(!updatedList);
            
        })
        .catch(err => console.log(err));
    },[updatedList]);

    const {removeFromDom} = props;
    const deleteProduct = _id => {
        console.log("in delete")
        axios.delete('http://localhost:8000/api/products/' + _id)
            .then(res => {
                removeFromDom(_id)
            }).catch(err => console.log(err));
    }
    
    return(
        <div className="container-fluid">
            <Paper elevation={5} style={styles.paper}>
            <h1>Products Info</h1>
           
            <table border="1px solid black" className="table table-dark">
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                    
                </tr>
                
                {
                    products.map((product, i) =>
                        <tr key={i}>
                            <td><Link to={"/info/" + product._id}>{product.title}</Link></td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td> <Link to={"/edit/" + product._id}>EDIT</Link> | <Button onClick={e => {deleteProduct(product._id)}} style={{color:"#007bfe"}}>Delete</Button></td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            </Paper>
        </div>
    )

//End of File
}

export default ProductList;