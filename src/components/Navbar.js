import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/formations', label: 'Formations' },
  { path: '/permis-auto', label: 'Permis Auto' },
  { path: '/permis-moto', label: 'Permis Moto' },
  { path: '/avis', label: 'Avis' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '10px 0' : '16px 0',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #E8ECE0' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.04)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/logo-cosmos.png" 
              alt="COSMOS Auto-École" 
              style={{ 
                height: scrolled ? '50px' : '65px',
                width: 'auto',
                transition: 'height 0.3s ease',
              }} 
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }} className="desktop-nav">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#8AB73B' : '#2D3436',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(138,183,59,0.08)' : 'transparent',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.target.style.color = '#8AB73B';
                      e.target.style.background = 'rgba(138,183,59,0.06)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.target.style.color = '#2D3436';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href="tel:0147391104" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginLeft: '16px',
              padding: '10px 22px',
              background: '#8AB73B',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: '0 4px 14px rgba(138,183,59,0.3)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.target.style.background = '#739C2E';
              e.target.style.boxShadow = '0 6px 20px rgba(138,183,59,0.4)';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = '#8AB73B';
              e.target.style.boxShadow = '0 4px 14px rgba(138,183,59,0.3)';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              ☎ 01 47 39 11 04
            </a>
          </div>

          {/* Mobile Controls (Phone + Burger) */}
          <div className="mobile-controls" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
            <a href="tel:0147391104" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#8AB73B',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(138,183,59,0.3)',
            }}>
              <Phone size={20} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-burger"
              aria-label="Menu"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1002,
              }}
            >
              <span style={{
                width: '24px', height: '2px', background: mobileOpen ? '#8AB73B' : '#2D3436',
                borderRadius: '2px', transition: 'all 0.3s',
                transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                width: '24px', height: '2px', background: '#2D3436',
                borderRadius: '2px', transition: 'all 0.3s',
                opacity: mobileOpen ? 0 : 1,
              }} />
              <span style={{
                width: '24px', height: '2px', background: mobileOpen ? '#8AB73B' : '#2D3436',
                borderRadius: '2px', transition: 'all 0.3s',
                transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.3rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#8AB73B' : '#636E72',
                      padding: '16px 32px',
                      display: 'block',
                      textAlign: 'center',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.a
              href="tel:0147391104"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: '24px',
                padding: '14px 28px',
                background: '#8AB73B',
                color: '#FFFFFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(138,183,59,0.3)',
              }}
            >
              ☎ 01 47 39 11 04
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}
