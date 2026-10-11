import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './pages/Cart';
import { Faq } from './pages/Faq';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { NotFound } from './pages/NotFound';
import { Outlet } from './pages/Outlet';
import { OurStory } from './pages/OurStory';
import { Promo } from './pages/Promo';
import { Reservation } from './pages/Reservation';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/promo" element={<Promo />} />
              <Route path="/outlet" element={<Outlet />} />
              <Route path="/reservasi" element={<Reservation />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </MotionConfig>);

}