import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container ">
                <p>&copy; {new Date().getFullYear()} NextCart. All Rights Reserved.</p>
                <p> contact@NextCart.com</p>
            </div>
        </footer>
    );
};

export default Footer;
