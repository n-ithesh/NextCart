import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container ">
                <p>&copy; {new Date().getFullYear()} MiniShop. All Rights Reserved.</p>
                <p>Contact: contact@minishop.com</p>
            </div>
        </footer>
    );
};

export default Footer;
