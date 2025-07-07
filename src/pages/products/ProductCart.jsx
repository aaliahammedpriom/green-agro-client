import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const ProductCart = ({ product }) => {
    const { user, refech, setRefech } = useContext(AuthContext)
    const { _id, image, title, price, unit } = product;
    const addToCart = (email, product_id, title,price,image,unit) => {
        axios.post(`https://green-agro-server.vercel.app/addtocart?email=${email}&product_id=${product_id}&title=${title}&price=${price}&image=${image}&unit=${unit}`)
            .then(res => {
                // console.log(res.data)
                setRefech(!refech)
            })
            .catch(error =>{
                // console.log('Axios error:', error)
            });
    }

    return (
        <div className="w-[200px] border rounded-xl shadow hover:shadow-lg transition-all p-4 bg-white text-sm">
            <img
                src={image}
                alt={title}
                className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h2 className="text-base font-semibold mb-1">{title}</h2>
            <p className="text-green-700 font-bold mb-3">Price: ${price} / {unit}</p>

            <div className="flex gap-2">
                <button onClick={() => addToCart(user.email, _id,title, price,image,unit)} className="w-full bg-[#36d399] hover:bg-green-600 text-white py-1 rounded">
                    Add to Cart
                </button>

                <Link to={`/products/${_id}`} className="w-full">
                    <button className="w-full bg-blue-400 hover:bg-blue-500 text-white py-1 rounded">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
