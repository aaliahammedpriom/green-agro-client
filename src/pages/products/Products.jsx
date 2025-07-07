import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className="p-5 pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 justify-items-center">
            {products.map(product => (
                <ProductCart product={product} key={product._id} />
            ))}
        </div>
    );
};

export default Products;