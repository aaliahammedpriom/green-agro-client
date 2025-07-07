import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div>
                <span className="loading loading-bars loading-lg"></span>
                </div>
        )
    }
    if (!loading) (
        children
    );
};

export default Loading;