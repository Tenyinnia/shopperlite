import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext';
import Preloader from './components/PreLoader';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>           {/* ← Wrap here */}
        <Preloader />
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
