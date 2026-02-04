import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '', price: '', imageUrl: '' });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            const { data } = await api.get('/admin/products');
            setProducts(data);
        } catch (err) {
            setError('Failed to fetch products');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await api.put(`/admin/products/${editingId}`, formData);
            } else {
                await api.post('/admin/products', formData);
            }
            setFormData({ name: '', description: '', price: '', imageUrl: '' });
            setEditingId(null);
            fetchProducts();
        } catch (err) {
            setError(err.response?.data?.message || 'Operation failed');
        }
    };

    const handleEdit = (product) => {
        setFormData({ name: product.name, description: product.description, price: product.price, imageUrl: product.imageUrl });
        setEditingId(product._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/admin/products/${id}`);
                fetchProducts();
            } catch (err) {
                setError('Failed to delete product');
            }
        }
    };

    return (
        <div className="container manage-page">
            <h2>Manage Products</h2>
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="admin-form">
                <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
                <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
                <input type="text" placeholder="Image URL" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} required />
                <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Create'} Product</button>
            </form>

            <div className="product-list-admin">
                {products.map((product) => (
                    <div key={product._id} className="admin-product-item">
                        <img src={product.imageUrl} alt={product.name} width="50" />
                        <span>{product.name}</span>
                        <span>Rs {product.price}</span>
                        <div className="actions">
                            <button onClick={() => handleEdit(product)} className="btn btn-sm btn-edit">Edit</button>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-delete">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProducts;
