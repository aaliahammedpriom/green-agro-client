import React, { useState } from 'react';
import Banner from './banner/Banner';
import ProductCart from '../products/ProductCart';
import Products from '../products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;