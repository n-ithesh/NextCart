import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description.substring(0, 60)}...</p>
                <p className="price">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
