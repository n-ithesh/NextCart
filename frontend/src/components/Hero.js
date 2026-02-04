import React, { useState, useEffect } from 'react';
import api from '../api/axiosInstance';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await api.get('/products');
                // Use first 5 products for slider
                setProducts(data.slice(0, 5));
            } catch (error) {
                console.error('Error fetching products for slider:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length === 0) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [products]);

    if (products.length === 0) {
        return (
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome to MiniShop</h1>
                    <p>Discover the best products at unbeatable prices.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="hero slider-hero" style={{ backgroundImage: `url(${products[currentSlide].imageUrl})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content slider-content">
                <h1>{products[currentSlide].name}</h1>
                <p>{products[currentSlide].description.substring(0, 100)}...</p>
                <div className="slider-price">${products[currentSlide].price}</div>
                <div className="slider-indicators">
                    {products.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
