import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FormuleCard({ title, price, features, popular = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        position: 'relative',
        background: '#FFFFFF',
        border: popular ? '2px solid #8AB73B' : '1px solid #E8ECE0',
        borderRadius: '14px',
        padding: '36px 28px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: popular ? '0 8px 30px rgba(138,183,59,0.15)' : '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'all 0.4s',
        overflow: 'hidden',
      }}
    >
      {popular && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '-30px',
          background: '#8AB73B',
          color: '#FFFFFF',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 700,
          padding: '6px 40px',
          transform: 'rotate(45deg)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Populaire
        </div>
      )}

      {popular && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #8AB73B, #A3CE5A)',
          borderRadius: '14px 14px 0 0',
        }} />
      )}

      <h3 style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.95rem',
        fontWeight: 600,
        color: '#8AB73B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '16px',
      }}>
        {title}
      </h3>

      <div style={{ marginBottom: '24px' }}>
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '2.8rem',
          fontWeight: 800,
          color: '#2D3436',
          lineHeight: 1,
        }}>
          {price}
        </span>
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '1.2rem',
          fontWeight: 600,
          color: '#2D3436',
          verticalAlign: 'super',
        }}>€</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '32px',
        flex: 1,
      }}>
        {features.map((feature, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            fontSize: '0.9rem',
            color: '#636E72',
          }}>
            <Check size={16} color="#8AB73B" strokeWidth={3} style={{ marginTop: '3px', flexShrink: 0 }} />
            {feature}
          </div>
        ))}
      </div>

      <Link to="/contact" className={popular ? 'btn btn-primary' : 'btn btn-outline'} style={{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '0.85rem',
        padding: '14px',
      }}>
        S'inscrire
      </Link>
    </motion.div>
  );
}
