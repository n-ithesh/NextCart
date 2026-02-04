import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    if (!userInfo || userInfo.role !== 'admin') {
        return <Navigate to="/admin/login" />;
    }
    return children;
};

export default AdminRoute;
