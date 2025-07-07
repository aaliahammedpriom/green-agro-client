import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user, isOpen, setIsOpen, signInWithGoogle,cartItems } = useContext(AuthContext)
    const googleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                if(result.user){
                    alert("welcome")
                }
            })
    }
    const links = <>
        <NavLink to={"/"}><li>HOME</li></NavLink>
        <NavLink to={"/products"}><li>PRODUCTS</li></NavLink>
        <NavLink to={"/add-products"}><li>ADD PRODUCT</li></NavLink>
        {/* {
        
        user && user.email ? `${user.email}` : <button onClick={googleSignIn}><li>SIGN IN</li></button>
        } */}
    </>


    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white ">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Green Agro</a>
            </div>
            <div className="navbar-end pr-5">
                <ul className="menu flex gap-3 menu-horizontal px-5">
                    {links}
                </ul>
                <div onClick={() => setIsOpen(!isOpen)} className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
            </div>


        </div>
    );
};

export default Navbar;