import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import { AuthProvider } from './landing_page/context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      
        <Navbar/>
        <App />
        <Footer/>
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
