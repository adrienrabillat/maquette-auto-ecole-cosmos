import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Bike, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';

const allFormations = [
  {
    category: 'Permis Auto (B)',
    icon: Car,
    link: '/permis-auto',
    items: [
      { name: 'Formule 20h', price: '1 150', desc: 'Code + 20h de conduite. La formule classique.', popular: false },
      { name: 'Formule 30h', price: '1 580', desc: 'Code + 30h de conduite. Plus de pratique pour plus de confiance.', popular: true },
      { name: 'Conduite accompagnée', price: '1 250', desc: 'AAC dès 15 ans. Code + 20h + suivi conduite accompagnée.', popular: false },
      { name: 'Accélérée Auto', price: null, desc: 'Permis auto en temps record. Leçons intensives.', popular: false },
    ],
  },
  {
    category: 'Permis Moto (A2)',
    icon: Bike,
    link: '/permis-moto',
    items: [
      { name: 'Formule Moto A2', price: '750', desc: 'Formation complète : plateau + circulation.', popular: true },
      { name: 'Formation 125cc (7h)', price: '250', desc: 'Formation 7h accessible avec le permis B.', popular: false },
      { name: 'Accélérée Moto', price: null, desc: 'Permis moto en accéléré.', popular: false },
    ],
  },
  {
    category: 'Code de la route',
    icon: BookOpen,
    link: '/formations',
    items: [
      { name: 'Code seul', price: '350', desc: 'Accès illimité cours et tests, en salle et en ligne.', popular: false },
      { name: 'Formule 17 ans', price: '980', desc: 'Code + préparation conduite accompagnée dès 15 ans.', popular: false },
    ],
  },
];

export default function FormationsPage() {
  return (
    <>
      <SEOHead
        title="Nos Formations"
        description="Toutes les formations Auto-École Cosmos Levallois-Perret : Permis B dès 1 150€, Permis Moto A2 dès 750€, Formation accélérée, Code de la route dès 350€."
        path="/formations"
      />

      {/* Hero */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F7F0 100%)',
        position: 'relative',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#8AB73B',
              display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px',
            }}>
              <span style={{ width: '30px', height: '3px', background: '#8AB73B', borderRadius: '2px' }} />
              Nos formations
            </span>
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#2D3436',
              lineHeight: 1.1, marginBottom: '16px',
            }}>
              Choisissez votre <span style={{ color: '#8AB73B' }}>formation</span>
            </h1>
            <p style={{ color: '#636E72', fontSize: '1.1rem', maxWidth: '600px' }}>
              Auto, moto, code de la route ou formation accélérée : découvrez toutes nos formules et trouvez celle qui vous correspond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formations Grid by Category */}
      {allFormations.map((cat, ci) => (
        <section key={ci} className="section" style={{
          background: ci % 2 === 0 ? '#FFFFFF' : '#F5F7F0',
        }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                marginBottom: '40px',
              }}
            >
              <span style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', color: '#2D3436' }}>
                <cat.icon size={36} strokeWidth={1.5} />
              </span>
              <div>
                <h2 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700,
                  color: '#2D3436',
                }}>
                  {cat.category}
                </h2>
                <Link to={cat.link} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.85rem',
                  color: '#8AB73B', display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontWeight: 500,
                }}>
                  En savoir plus →
                </Link>
              </div>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}>
              {cat.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    position: 'relative',
                    background: '#FFFFFF',
                    border: item.popular ? '2px solid #8AB73B' : '1px solid #E8ECE0',
                    borderRadius: '14px',
                    padding: '28px 24px',
                    boxShadow: item.popular ? '0 8px 30px rgba(138,183,59,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'all 0.4s',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#8AB73B';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(138,183,59,0.12)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = item.popular ? '#8AB73B' : '#E8ECE0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = item.popular ? '0 8px 30px rgba(138,183,59,0.12)' : '0 2px 12px rgba(0,0,0,0.04)';
                  }}
                >
                  {item.popular && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: 'linear-gradient(90deg, #8AB73B, #A3CE5A)',
                      borderRadius: '14px 14px 0 0',
                    }} />
                  )}
                  
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.95rem', fontWeight: 600, color: '#2D3436',
                    marginBottom: '8px',
                  }}>
                    {item.name}
                  </h3>
                  
                  <p style={{ color: '#636E72', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.desc}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    {item.price ? (
                      <div>
                        <span style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '2rem', fontWeight: 800, color: '#8AB73B',
                        }}>
                          {item.price}
                        </span>
                        <span style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '0.9rem', fontWeight: 600, color: '#8AB73B',
                          verticalAlign: 'super',
                        }}>€</span>
                      </div>
                    ) : (
                      <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '0.85rem', fontWeight: 600, color: '#8AB73B',
                      }}>
                        Nous consulter
                      </span>
                    )}
                    
                    <Link to="/contact" style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.75rem', fontWeight: 600, color: '#8AB73B',
                      border: '1px solid #8AB73B', borderRadius: '8px',
                      padding: '8px 16px',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = '#8AB73B';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#8AB73B';
                    }}
                    >
                      S'inscrire
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #8AB73B, #739C2E)',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700,
              color: '#FFFFFF', marginBottom: '16px',
            }}>
              Une question sur nos <span style={{ color: 'rgba(255,255,255,0.9)' }}>tarifs</span> ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '32px' }}>
              Contactez-nous pour un devis personnalisé ou pour toute information complémentaire.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:0147391104" className="btn" style={{ background: '#FFFFFF', color: '#8AB73B', fontWeight: 700, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>☎ 01 47 39 11 04</a>
              <Link to="/contact" className="btn" style={{ border: '2px solid #FFFFFF', color: '#FFFFFF' }}>Nous écrire →</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
