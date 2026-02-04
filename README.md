# Mini E-Commerce Application (MiniShop)

A full-stack Mini E-Commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This project is a working proof-of-concept featuring user and admin authentication, product management, and a public-facing storefront.

## 🚀 Live Demo
<!-- Add live link here if deployed -->
N/A (Local Setup)

## 🛠️ Tech Stack

**Backend:**
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (with Mongoose)
*   **Authentication**: JWT (JSON Web Tokens) & bcryptjs

**Frontend:**
*   **Framework**: React (Vite)
*   **Routing**: React Router DOM
*   **HTTP Client**: Axios
*   **Styling**: Vanilla CSS (Custom modern design)

## ✨ Features

### Public Interface
*   **Home Page**: Responsive hero section with dynamic product slider.
*   **Product Listing**: "Popular Products" section fetching real data from the database.
*   **Product Details**: Cards displaying product image, price, and description.

### Authentication & Security
*   **User & Admin Login**: Separate login flows for users and administrators.
*   **Secure Passwords**: Password hashing using bcryptjs.
*   **Route Protection**: JWT-based protected routes for Admin and User capabilities.
*   **Role-Based Access Control (RBAC)**: Middleware to ensure only admins can access dashboard features.

### Admin Dashboard
*   **Dashboard UI**: Dedicated area for administrative tasks.
*   **User Management (CRUD)**: View, Create, Edit, and Delete users.
*   **Product Management (CRUD)**: View, Create, Edit, and Delete products.
*   **Instant Updates**: Changes in the admin panel are immediately reflected on the public site.

## 📂 Project Structure

```bash
/
├── backend/            # Express Server & API
│   ├── config/         # DB Connection
│   ├── controllers/    # Request Handlers
│   ├── middleware/     # Auth & Error Middleware
│   ├── models/         # Mongoose Models
│   └── routes/         # API Routes
└── frontend/           # React Application
    ├── src/
    │   ├── api/        # Axios Instance
    │   ├── components/ # Reusable UI Components
    │   └── pages/      # Page Views
```

## ⚡ Getting Started

### Prerequisites
*   Node.js installed
*   MongoDB installed and running locally on `mongodb://localhost:27017`

### 1. Setup Backend

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server (runs on port 5000):
    ```bash
    npm run dev
    ```

### 2. Setup Frontend

1.  Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server (runs on port 5173):
    ```bash
    npm run dev
    ```

### 3. Initial Setup (Admin User)

Since the database is initially empty, you need to create an Admin user to access the dashboard. 

You can use a tool like **Postman** to create the first user:

*   **URL**: `POST http://localhost:5000/api/auth/register`
*   **Body (JSON)**:
    ```json
    {
      "name": "Super Admin",
      "email": "admin@example.com",
      "password": "password123",
      "role": "admin"
    }
    ```

*Alternatively, you can implement a registration page or use the backend seeder script if created.*

## 🔌 API Endpoints

### Authentication
*   `POST /api/auth/user/login` - User login
*   `POST /api/auth/admin/login` - Admin login
*   `POST /api/auth/register` - Register new user

### Public
*   `GET /api/products` - Get all products
*   `GET /api/products/:id` - Get single product

### Admin (Protected)
*   **Users**: `GET`, `POST`, `PUT`, `DELETE` -> `/api/admin/users`
*   **Products**: `GET`, `POST`, `PUT`, `DELETE` -> `/api/admin/products`

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).
