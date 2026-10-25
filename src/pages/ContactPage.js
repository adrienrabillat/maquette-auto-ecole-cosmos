import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const horaires = [
  { jour: 'Lundi', heures: '15h00 - 19h00' },
  { jour: 'Mardi', heures: '10h00 - 13h00 / 15h00 - 19h00' },
  { jour: 'Mercredi', heures: '10h00 - 13h00 / 15h00 - 19h00' },
  { jour: 'Jeudi', heures: '10h00 - 13h00 / 15h00 - 19h00' },
  { jour: 'Vendredi', heures: '10h00 - 13h00 / 15h00 - 19h00' },
  { jour: 'Samedi', heures: '10h00 - 14h00' },
  { jour: 'Dimanche', heures: 'Fermé' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '', email: '', telephone: '', formation: '', message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande d'information - ${formData.formation || 'Général'}`);
    const body = encodeURIComponent(
      `Nom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nFormation souhaitée: ${formData.formation}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:cosmoslevallois@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#F5F7F0',
    border: '1px solid #E8ECE0',
    borderRadius: '8px',
    color: '#2D3436',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contactez l'Auto-École Cosmos à Levallois-Perret. 107 rue du Président Wilson, 92300. ☎ 01 47 39 11 04. Email: cosmoslevallois@gmail.com. Horaires et plan d'accès."
        path="/contact"
      />

      {/* Hero */}
      <section style={{
        paddingTop: '140px', paddingBottom: '60px',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F7F0 100%)',
        position: 'relative',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#8AB73B',
              display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px',
            }}>
              <span style={{ width: '30px', height: '3px', background: '#8AB73B', borderRadius: '2px' }} />
              Contactez-nous
            </span>
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#2D3436',
              lineHeight: 1.1, marginBottom: '16px',
            }}>
              Prenez <span style={{ color: '#8AB73B' }}>contact</span>
            </h1>
            <p style={{ color: '#636E72', fontSize: '1.1rem', maxWidth: '600px' }}>
              Une question ? Envie de vous inscrire ? Contactez-nous par téléphone, email, 
              ou passez directement à l'agence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {/* Info Panel Only - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}
            >
              {/* Contact Cards */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E8ECE0',
                borderRadius: '14px',
                padding: '32px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem', fontWeight: 600, color: '#8AB73B',
                  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px',
                }}>
                  Coordonnées
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <a href="tel:0147391104" style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    color: '#2D3436', fontSize: '1rem', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8AB73B'}
                  onMouseLeave={e => e.currentTarget.style.color = '#2D3436'}
                  >
                    <span style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'rgba(138,183,59,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0,
                    }}>☎</span>
                    <div>
                      <span style={{ fontWeight: 600, display: 'block' }}>01 47 39 11 04</span>
                      <span style={{ fontSize: '0.8rem', color: '#636E72' }}>Appelez-nous directement</span>
                    </div>
                  </a>
                  <a href="mailto:cosmoslevallois@gmail.com" style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    color: '#2D3436', fontSize: '1rem', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8AB73B'}
                  onMouseLeave={e => e.currentTarget.style.color = '#2D3436'}
                  >
                    <span style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'rgba(138,183,59,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0,
                    }}>✉</span>
                    <div>
                      <span style={{ fontWeight: 600, display: 'block' }}>cosmoslevallois@gmail.com</span>
                      <span style={{ fontSize: '0.8rem', color: '#636E72' }}>Réponse sous 24h</span>
                    </div>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'rgba(138,183,59,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0,
                    }}>📍</span>
                    <div>
                      <span style={{ fontWeight: 600, display: 'block', color: '#2D3436' }}>107 rue du Président Wilson</span>
                      <span style={{ fontSize: '0.8rem', color: '#636E72' }}>92300 Levallois-Perret</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E8ECE0',
                borderRadius: '14px',
                padding: '32px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem', fontWeight: 600, color: '#8AB73B',
                  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px',
                }}>
                  Horaires d'ouverture
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {horaires.map((h, i) => {
                    const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' });
                    const isToday = today.toLowerCase() === h.jour.toLowerCase();
                    const isClosed = h.heures === 'Fermé';
                    return (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '8px 12px',
                        background: isToday ? 'rgba(138,183,59,0.06)' : 'transparent',
                        borderRadius: '8px',
                        border: isToday ? '1px solid rgba(138,183,59,0.2)' : '1px solid transparent',
                      }}>
                        <span style={{
                          fontSize: '0.9rem',
                          color: isToday ? '#8AB73B' : '#636E72',
                          fontWeight: isToday ? 600 : 400,
                          display: 'flex', alignItems: 'center', gap: '8px',
                        }}>
                          {isToday && <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: '#8AB73B',
                          }} />}
                          {h.jour}
                        </span>
                        <span style={{
                          fontSize: '0.9rem',
                          color: isClosed ? '#FFFFFF' : '#2D3436', // Changed to White to hide it
                          fontWeight: isToday ? 600 : 400,
                        }}>
                          {h.heures}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: '64px',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid #E8ECE0',
              height: '400px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}
          >
            <iframe
              title="Auto-École Cosmos Levallois-Perret"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5!2d2.2883!3d48.8948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s107+Rue+du+Pr%C3%A9sident+Wilson%2C+92300+Levallois-Perret!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
