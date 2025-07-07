import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';
import CartSidebar from '../pages/shared/CartSidebar';
import { AuthContext } from '../provider/AuthProvider';
import Modal from '../pages/shared/Modal';

const Main = () => {
    const { isOpen } = useContext(AuthContext)
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <Modal></Modal>
            <div className="flex-grow">
                <div className='flex'>
                    <div className={isOpen ? 'w-[80vw]' : "w-full"}>
                        <Outlet></Outlet>
                    </div>
                    {isOpen && <CartSidebar></CartSidebar>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
