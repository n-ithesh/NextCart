import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        try {
            const { data } = await api.get('/admin/users');
            setUsers(data);
        } catch (err) {
            setError('Failed to fetch users');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await api.put(`/admin/users/${editingId}`, formData);
            } else {
                await api.post('/admin/users', formData);
            }
            setFormData({ name: '', email: '', password: '', role: 'user' });
            setEditingId(null);
            fetchUsers();
        } catch (err) {
            setError(err.response?.data?.message || 'Operation failed');
        }
    };

    const handleEdit = (user) => {
        setFormData({ name: user.name, email: user.email, password: '', role: user.role });
        setEditingId(user._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/admin/users/${id}`);
                fetchUsers();
            } catch (err) {
                setError('Failed to delete user');
            }
        }
    };

    return (
        <div className="container manage-page">
            <h2>Manage Users</h2>
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="admin-form">
                <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                <input type="password" placeholder="Password (leave blank if not changing)" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required={!editingId} />
                <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Create'} User</button>
            </form>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEdit(user)} className="btn btn-sm btn-edit">Edit</button>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
