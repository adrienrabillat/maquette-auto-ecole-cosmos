import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import FormuleCard from '../components/FormuleCard';

const etapes = [
  { num: '01', title: 'Inscription', desc: "Rendez-vous à l'agence ou contactez-nous. Nous évaluons votre niveau et vous orientons vers la formule adaptée." },
  { num: '02', title: 'Code de la route', desc: "Préparez l'examen du code en salle et en ligne. Tests illimités et cours avec corrections." },
  { num: '03', title: 'Leçons de conduite', desc: "Apprenez avec nos moniteurs diplômés. Parcours adaptés dans Levallois et environs." },
  { num: '04', title: "Examen du permis", desc: "Nous vous accompagnons le jour J. Présentation à l'examen quand vous êtes prêt(e)." },
];

export default function PermisAutoPage() {
  return (
    <>
      <SEOHead
        title="Permis Auto (B)"
        description="Passez votre permis B à Levallois-Perret avec l'Auto-École Cosmos. Formules dès 1 150€, conduite accompagnée, formation accélérée. Moniteurs pédagogues, taux de réussite élevé."
        path="/permis-auto"
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
              Permis Voiture
            </span>
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#2D3436',
              lineHeight: 1.1, marginBottom: '16px',
            }}>
              Permis <span style={{ color: '#8AB73B' }}>Auto B</span>
            </h1>
            <p style={{ color: '#636E72', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
              Apprenez à conduire avec des moniteurs expérimentés et pédagogues. 
              Que ce soit pour une formation classique ou accélérée, nous vous accompagnons 
              jusqu'à l'obtention de votre permis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formules */}
      <section className="section" style={{ background: '#F5F7F0' }}>
        <div className="container">
          <SectionTitle
            label="Nos formules"
            title={<>Formules <span style={{ color: '#8AB73B' }}>Permis B</span></>}
            subtitle="Choisissez la formule adaptée à votre profil et votre budget."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            <FormuleCard
              title="Formule 20h"
              price="1 150"
              features={[
                "Frais d'inscription",
                'Forfait code illimité (salle + en ligne)',
                '20 heures de conduite',
                "Accompagnement à l'examen",
                "Livret d'apprentissage",
              ]}
              delay={0}
            />
            <FormuleCard
              title="Formule 30h"
              price="1 580"
              popular
              features={[
                "Frais d'inscription",
                'Forfait code illimité (salle + en ligne)',
                '30 heures de conduite',
                "Accompagnement à l'examen",
                "Livret d'apprentissage",
                '10h supplémentaires de pratique',
              ]}
              delay={0.1}
            />
            <FormuleCard
              title="Conduite Accompagnée"
              price="1 250"
              features={[
                'Accessible dès 15 ans',
                'Forfait code illimité',
                '20 heures de conduite',
                'Rendez-vous pédagogiques',
                'Suivi personnalisé',
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionTitle
            label="Comment ça marche"
            title={<>Les étapes vers <span style={{ color: '#8AB73B' }}>votre permis</span></>}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}>
            {etapes.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ position: 'relative', padding: '24px 0' }}
              >
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '3.5rem', fontWeight: 900,
                  color: 'rgba(138,183,59,0.1)',
                  position: 'absolute', top: '0', left: '0',
                  lineHeight: 1,
                }}>
                  {e.num}
                </span>
                <div style={{ position: 'relative', paddingTop: '20px', paddingLeft: '4px' }}>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.95rem', fontWeight: 700, color: '#8AB73B',
                    marginBottom: '10px',
                  }}>
                    {e.title}
                  </h3>
                  <p style={{ color: '#636E72', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {e.desc}
                  </p>
                </div>
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
              Passez votre permis B avec Cosmos
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
              Inscrivez-vous dès maintenant et commencez votre formation.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:0147391104" className="btn" style={{ background: '#FFFFFF', color: '#8AB73B', fontWeight: 700, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>☎ Appeler</a>
              <Link to="/contact" className="btn" style={{ border: '2px solid #FFFFFF', color: '#FFFFFF' }}>Contact →</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
