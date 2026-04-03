import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import ProductDetail from './pages/ProductDetail';
import ViewMorePost from './pages/ViewMorePost'
import Cart from './pages/Cart'
import Preloader from './components/PreLoader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/blog/:id" element={<ViewMorePost />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </main>
      <Footer />
      
    </>
  )
}

export default App
