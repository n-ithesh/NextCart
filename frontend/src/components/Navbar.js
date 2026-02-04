import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* <img src="/NextCart_logo.png" alt="Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} /> */}
                    NextCart
                </Link>
                <div className="navbar-links">
                    {!userInfo ? (
                        <>
                            <Link to="/login" className="nav-link">User Login</Link>
                            <Link to="/admin/login" className="nav-link">Admin Login</Link>
                        </>
                    ) : (
                        <>
                            {userInfo.role === 'admin' && <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>}
                            <span className="user-welcome">Hi, {userInfo.name}</span>
                             <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
