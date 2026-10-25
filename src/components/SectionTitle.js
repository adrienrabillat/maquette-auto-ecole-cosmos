import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: align, marginBottom: '56px' }}
    >
      {label && (
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8AB73B',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
        }}>
          <span style={{
            width: '28px', height: '3px',
            background: '#8AB73B',
            borderRadius: '2px',
            display: align === 'center' ? 'inline-block' : 'none',
          }} />
          {label}
          <span style={{
            width: '28px', height: '3px',
            background: '#8AB73B',
            borderRadius: '2px',
            display: align === 'center' ? 'inline-block' : 'none',
          }} />
        </span>
      )}
      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        color: light ? '#FFFFFF' : '#2D3436',
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
        marginTop: label ? '8px' : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '1.05rem',
          color: light ? 'rgba(255,255,255,0.7)' : '#636E72',
          maxWidth: '600px',
          margin: align === 'center' ? '16px auto 0' : '16px 0 0',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
