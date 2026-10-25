import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#2D3436',
      padding: '60px 0 30px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.5rem', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)', display: 'block',
              }}>Auto-École</span>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.5rem', fontWeight: 800,
                color: '#8AB73B', letterSpacing: '0.08em',
              }}>COSMOS</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Votre auto-école de confiance à Levallois-Perret depuis plus de 15 ans. 
              Formation auto et moto, permis accéléré.
            </p>
          </div>

          {/* Navigation */}
          <div className="mobile-hidden">
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#8AB73B',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { to: '/', label: 'Accueil' },
                { to: '/formations', label: 'Nos formations' },
                { to: '/permis-auto', label: 'Permis Auto' },
                { to: '/permis-moto', label: 'Permis Moto' },
                { to: '/avis', label: 'Avis clients' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link key={link.to} to={link.to} style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#8AB73B'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Horaires */}
          <div className="mobile-hidden">
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#8AB73B',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Horaires d'ouverture
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)' }}>
                <span>Lundi</span><span style={{ color: 'rgba(255,255,255,0.8)' }}>15h - 19h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)' }}>
                <span>Mar - Ven</span><span style={{ color: 'rgba(255,255,255,0.8)' }}>10h-13h / 15h-19h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)' }}>
                <span>Samedi</span><span style={{ color: 'rgba(255,255,255,0.8)' }}>10h - 14h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)' }}>
                <span>Dimanche</span><span style={{ color: '#e74c3c' }}>Fermé</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#8AB73B',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:0147391104" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8AB73B' }}>☎</span> 01 47 39 11 04
              </a>
              <a href="mailto:cosmoslevallois@gmail.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8AB73B' }}>✉</span> cosmoslevallois@gmail.com
              </a>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#8AB73B' }}>📍</span> 107 rue du Président Wilson<br />92300 Levallois-Perret
              </span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.1)',
          marginBottom: '24px',
        }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Auto-École Cosmos — Levallois-Perret. Tous droits réservés.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            Agrément préfectoral n° E 13 092 00240
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .mobile-hidden {
            display: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
