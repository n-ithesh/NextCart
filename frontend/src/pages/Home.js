import React, { useEffect, useState, useRef } from 'react';
import api from '../api/axiosInstance';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await api.get('/products');
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = 300; // Adjust scroll distance as needed
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="home-page">
            <Hero />
            <div className="container sections">
                <h2 className="section-title">Popular Products</h2>

                {products.length > 4 ? (
                    <div className="product-scroll-wrapper">
                        <button className="scroll-btn left" onClick={() => scroll('left')}>&#10094;</button>
                        <div className="product-scroll-container" ref={scrollContainerRef}>
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                        <button className="scroll-btn right" onClick={() => scroll('right')}>&#10095;</button>
                    </div>
                ) : (
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
