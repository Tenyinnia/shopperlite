import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import ProductDetail from './pages/ProductDetail';
import ViewMorePost from './pages/ViewMorePost';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Preloader from './components/PreLoader';  

function App() {
  return (
    <>
    <Preloader />

      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/blog/:id" element={<ViewMorePost />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <AppFooter />
    </>
  );
}

export default App;