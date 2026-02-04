import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="container dashboard">
            <h2>Admin Dashboard</h2>
            <div className="dashboard-cards">
                <Link to="/admin/users" className="card dashboard-card">
                    <h3>Manage Users</h3>
                  
                </Link>
                <Link to="/admin/products" className="card dashboard-card ">
                    <h3>Manage Products</h3>
                </Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AdminDashboard;
