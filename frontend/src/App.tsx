import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages-/CheckoutPage';
import UserProfilePage from './pages/UserProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import DashboardPage from './pages/admin/DashboardPage';
import ProductListPage from './pages/admin/ProductListPage';
import CategoryListPage from './pages/admin/CategoryListPage';
import OrderListPage from './pages/admin/OrderListPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Route>
          <Route path="" element={<AdminRoute />}>
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/admin/products" element={<ProductListPage />} />
            <Route path="/admin/categories" element={<CategoryListPage />} />
            <Route path="/admin/orders" element={<OrderListPage />} />
          </Route>
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 ShopSmart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
