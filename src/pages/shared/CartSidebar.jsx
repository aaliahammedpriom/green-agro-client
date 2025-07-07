import React, { lazy, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const CartSidebar = () => {
    const { user, loading, refech, setRefech, isOpen } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://green-agro-server.vercel.app/addtocart/${user.email}`)
                .then(data => setCartItems(data.data))
                .catch(err => console.error(err));
        }
    }, [user, refech, isOpen]);

    const increaseQuantity = (product_id) => {
        axios.post(`https://green-agro-server.vercel.app/addtocart?email=${user.email}&product_id=${product_id}`)
            .then(res => {
                // console.log(res.data)
                setRefech(!refech)
            })
            .catch(error => {
                // console.log('Axios error:', error)
            });
    };

    const decreaseQuantity = (product_id) => {
        axios.post(`https://green-agro-server.vercel.app/addtocart?email=${user.email}&product_id=${product_id}&&decrease=${true}`)
            .then(res => {
                // console.log(res.data)
                setRefech(!refech)
            })
            .catch(error => {
                // console.log('Axios error:', error)
            });
    };

    const deleteItem = (product_id) => {
        axios.post(`https://green-agro-server.vercel.app/addtocart?email=${user.email}&product_id=${product_id}&&delete=${true}`)
            .then(res => {
                // console.log(res.data)
                setRefech(!refech)
            })
            .catch(error => {
                // console.log('Axios error:', error)
            });
    };

    const totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0);
    if (loading) {
        <span className="loading loading-bars loading-lg"></span>
        return
    }
    return (
        <div className={`w-80 pt-24 bg-base-100 p-4 shadow-xl ${isOpen ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

            {
                cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Cart is empty</p>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div
                                key={item._id}
                                className="flex items-center gap-4 p-3 rounded-lg bg-base-200 shadow-sm"
                            >
                                <img src={item.image} alt={item.title} className="w-16 h-16 rounded" />
                                <div className="flex-1">
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <p className="text-sm">Price: ${item.price}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <button
                                            className="btn btn-xs btn-circle btn-primary"
                                            onClick={() => decreaseQuantity(item.product_id)}
                                        >−</button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            className="btn btn-xs btn-circle btn-primary"
                                            onClick={() => increaseQuantity(item.
                                                product_id)}
                                        >+</button>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-xs btn-error"
                                    onClick={() => deleteItem(item.
                                        product_id)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }

            <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
                <button disabled={totalPrice <= 0} className="btn  btn-success w-full mt-2" onClick={() => document.getElementById('checkout_modal').showModal()}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartSidebar;
