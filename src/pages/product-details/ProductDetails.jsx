import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const {user, refech, setRefech}= useContext(AuthContext)
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://green-agro-server.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);
    const addToCart = (email, product_id, title,price,image,unit) => {
        axios.post(`https://green-agro-server.vercel.app/addtocart?email=${email}&product_id=${product_id}&title=${title}&price=${price}&image=${image}&unit=${unit}`)
            .then(res => {
                // console.log(res.data)
                setRefech(!refech)
            })
            .catch(error => {
                // console.log('Axios error:', error)
            });
    }
    
    if (loading) return <div className="p-6 text-center text-lg">Loading...</div>;
    if (!product) return <div className="p-6 text-center text-red-600">Product not found</div>;

    const { image, title, description, price, category, stock, unit } = product;

    return (
        <div className="max-w-xl mx-auto pt-20 p-6 bg-white shadow-lg rounded-lg mt-6">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded mb-4" />

            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-600 mb-3">{description}</p>

            <div className="text-lg font-semibold text-green-700 mb-2">
                Price: ${price} / {unit}
            </div>

            <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
            <p className="text-sm text-gray-500 mb-4">Stock: {stock} {unit}</p>

            <button onClick={() => addToCart(user.email, id,title, price,image,unit)} className="w-full bg-[#36d399] hover:bg-green-600 text-white py-1 rounded">
                    Add to Cart
                </button>
        </div>
    );
};

export default ProductDetails;
