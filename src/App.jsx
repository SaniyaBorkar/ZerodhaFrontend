import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import SignUp from './landing_page/signup/SignUp';
import ProductPage from './landing_page/products/ProductPage.jsx';
import NotFound from './landing_page/NotFound.jsx';
import Login from './landing_page/login/Login.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
};

export default App;
