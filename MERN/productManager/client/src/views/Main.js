import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { Router, Link } from '@reach/router';
import ProductInfo from '../components/ProductInfo';
import ProductEdit from '../components/ProductEdit';
export default () =>{
    const [product, setproduct] = useState([]);


    return(
        <Router>
            <ProductForm path="/create"/>
            <ProductList path="/" />
            <ProductInfo path="info/:id" />
            <ProductEdit path="edit/:id" />
        </Router>
    )

 //End of file   
}

