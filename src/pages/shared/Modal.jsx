import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Modal = () => {
    const { user, refech, setRefech } = useContext(AuthContext)
    const submitCheckout = (e) => {
        e.preventDefault();
        axios.delete(`https://green-agro-server.vercel.app/addtocart/${user.email}`)
            .then(res => {
                // console.log(res.data)
                setRefech(!refech)
                alert("Order placed successfully!");
                document.getElementById('checkout_modal').close();
            })
            .catch(error =>{
                // console.log('Axios error:', error)
            });

    }
    return (
        <dialog id="checkout_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Checkout</h3>

                {/* Checkout Form */}
                <form method="dialog" className="space-y-4 mt-4" onSubmit={(e) => submitCheckout(e)}>
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input type="text" name='name' required className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" name='email' required className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Address</label>
                        <textarea required name='address' className="textarea textarea-bordered w-full"></textarea>
                    </div>

                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn" onClick={() => document.getElementById('checkout_modal').close()}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default Modal;