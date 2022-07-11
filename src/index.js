import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Switcher from './components/Switcher';
import HeaderBar from './components/HeaderBar';
import Announcement from './components/Announcement';
import Hero from './components/Hero';
import Products from './components/Products';
import Pride from './components/Pride';
import ProductScroll from './components/ProductScroll';
import OurFavorites from './components/OurFavorites';
import ProductGrid from './components/ProductGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Switcher />
    <HeaderBar />
    <Announcement />
    <Hero />
    <Products />
    <Pride />
    <ProductScroll />
    <OurFavorites />
    <ProductGrid />
    <Contact />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
