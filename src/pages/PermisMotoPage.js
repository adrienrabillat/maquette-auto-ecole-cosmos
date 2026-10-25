import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flag, GraduationCap, HardHat, Bike } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import FormuleCard from '../components/FormuleCard';

const avantages = [
  { title: 'Piste privée', desc: "Entraînement plateau dans des conditions optimales pour maîtriser les manœuvres.", icon: Flag },
  { title: 'Moniteurs spécialisés', desc: "Nos moniteurs moto sont passionnés et expérimentés. Ils vous transmettent leur savoir-faire.", icon: GraduationCap },
  { title: 'Équipement fourni', desc: "Casque, gants et gilet fournis pour vos leçons. Venez comme vous êtes.", icon: HardHat },
  { title: 'Moto récente', desc: "Parc moto entretenu et régulièrement renouvelé pour votre confort et sécurité.", icon: Bike },
];

export default function PermisMotoPage() {
  return (
    <>
      <SEOHead
        title="Permis Moto (A2)"
        description="Passez votre permis moto A2 à Levallois-Perret avec l'Auto-École Cosmos. Formation complète dès 750€, formation 125cc dès 250€. Moniteurs spécialisés moto."
        path="/permis-moto"
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
              Permis Deux-Roues
            </span>
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#2D3436',
              lineHeight: 1.1, marginBottom: '16px',
            }}>
              Permis <span style={{ color: '#8AB73B' }}>Moto A2</span>
            </h1>
            <p style={{ color: '#636E72', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
              Prenez la route en deux-roues avec confiance. Notre formation moto complète 
              vous prépare au plateau et à la circulation avec des moniteurs passionnés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formules */}
      <section className="section" style={{ background: '#F5F7F0' }}>
        <div className="container">
          <SectionTitle
            label="Nos formules"
            title={<>Formules <span style={{ color: '#8AB73B' }}>Permis Moto</span></>}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <FormuleCard
              title="Permis A2 Complet"
              price="750"
              popular
              features={[
                'Formation plateau complète',
                'Formation circulation',
                'Accompagnement examen plateau',
                'Accompagnement examen circulation',
                'Équipement de protection fourni',
              ]}
              delay={0}
            />
            <FormuleCard
              title="Formation 125cc"
              price="250"
              features={[
                'Formation 7 heures',
                'Accessible avec le permis B (2 ans)',
                'Conduite 125cc et scooter 3 roues',
                'Attestation de formation',
              ]}
              delay={0.1}
            />
            <FormuleCard
              title="Passerelle A2 → A"
              price="300"
              features={[
                'Formation 7 heures',
                'Après 2 ans de permis A2',
                'Accès aux motos toutes puissances',
                'Attestation de formation',
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionTitle
            label="Nos atouts"
            title={<>Pourquoi passer son permis moto <span style={{ color: '#8AB73B' }}>chez Cosmos</span></>}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {avantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8ECE0',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#8AB73B';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(138,183,59,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E8ECE0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                }}
              >
                <span style={{ fontSize: '2.5rem', display: 'flex', justifyContent: 'center', marginBottom: '16px', color: '#2D3436' }}>
                  <a.icon size={48} strokeWidth={1.5} />
                </span>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.95rem', fontWeight: 700, color: '#2D3436',
                  marginBottom: '10px',
                }}>
                  {a.title}
                </h3>
                <p style={{ color: '#636E72', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Envie de rouler en moto ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
              Contactez-nous pour démarrer votre formation moto dès maintenant.
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
