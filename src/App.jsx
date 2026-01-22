import { Routes, Route, Navigate } from 'react-router-dom'
import './styles/index.scss'

import Home from './pages/HomePage.jsx'
import Products from './pages/ProductsPage.jsx'
import ProductDetail from './pages/ProductDetailPage.jsx'
import Cart from './pages/CartPage.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
