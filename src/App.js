import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FormationsPage from './pages/FormationsPage';
import PermisAutoPage from './pages/PermisAutoPage';
import PermisMotoPage from './pages/PermisMotoPage';
import AvisPage from './pages/AvisPage';
import ContactPage from './pages/ContactPage';
import './styles/globals.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/permis-auto" element={<PermisAutoPage />} />
            <Route path="/permis-moto" element={<PermisMotoPage />} />
            <Route path="/avis" element={<AvisPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
