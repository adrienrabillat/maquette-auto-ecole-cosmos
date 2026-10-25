import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, MessageCircle, Trophy, Target, 
  Car, Bike, Zap, BookOpen, 
  GraduationCap, Euro, Clock, Medal, MapPin,
  CheckCircle, ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionTitle from '../components/SectionTitle';
import ReviewCard from '../components/ReviewCard';

const stats = [
  { value: '4.4/5', label: 'Note Google', icon: Star },
  { value: '111+', label: 'Avis clients', icon: MessageCircle },
  { value: '1er', label: 'Coup pour beaucoup', icon: Target },
];

const formations = [
  {
    title: 'Permis B',
    desc: 'Formation classique ou accélérée au permis voiture. Code et conduite avec des moniteurs pédagogues.',
    icon: Car,
    link: '/permis-auto',
    price: 'Dès 800€',
  },
  {
    title: 'Permis Moto A2',
    desc: 'Obtenez votre permis moto avec une formation complète : plateau + circulation.',
    icon: Bike,
    link: '/permis-moto',
    price: 'Dès 750€',
  },
  {
    title: 'Formation Accélérée',
    desc: 'Permis auto ou moto en un temps record. Idéal si vous êtes pressé.',
    icon: Zap,
    link: '/formations',
    price: 'Nous consulter',
  },
  {
    title: 'Code de la route',
    desc: "Préparation intensive à l'examen du code, en salle et en ligne.",
    icon: BookOpen,
    link: '/formations',
    price: 'Dès 350€',
  },
];

const reviews = [
  {
    name: 'Jade du Plessis',
    rating: 5,
    text: "Très bonne auto-école, permis du premier coup ! Ils sont disponibles et à l'écoute, les horaires sont flexibles. Benjamin, le moniteur, est très à l'écoute, et patient !",
    date: 'Juin 2024',
  },
  {
    name: 'Mehdi Raji',
    rating: 5,
    text: "Extrêmement rapide, sympathique et professionnel, avec une excellente pédagogie et une approche parfaitement adaptée aux élèves. Les tarifs sont abordables.",
    date: 'Décembre 2024',
  },
  {
    name: 'Johanna Remillier',
    rating: 5,
    text: "Très bon accompagnement par cette auto école. Cédric et Benjamin sont des moniteurs très investis pour la réussite des élèves.",
    date: '',
  },
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        description="Auto-École Cosmos à Levallois-Perret. Permis B, permis moto A2, formation accélérée. Tarifs compétitifs dès 800€, moniteurs pédagogues. Note Google 4.4/5. ☎ 01 47 39 11 04"
        path="/"
      />

      {/* ===== HERO ===== */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F7F0 50%, #EDF2E3 100%)',
      }}>
        {/* Subtle decorative shapes */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,183,59,0.08), transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,183,59,0.05), transparent 70%)',
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8AB73B',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <span style={{
                  width: '40px',
                  height: '3px',
                  background: '#8AB73B',
                  borderRadius: '2px',
                }} />
                Levallois-Perret · 92300
              </motion.span>

              <h1 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 800,
                color: '#2D3436',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}>
                Votre permis,{' '}
                <span style={{ color: '#8AB73B' }}>
                  notre mission
                </span>
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: '#636E72',
                lineHeight: 1.7,
                maxWidth: '550px',
                marginBottom: '40px',
              }}>
                Auto-école de confiance à Levallois-Perret. Formations auto &amp; moto, 
                moniteurs pédagogues, tarifs compétitifs. Rejoignez les centaines d'élèves 
                qui nous font confiance.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/formations" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Nos formations
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Nous contacter
                </Link>
              </div>

              {/* Google rating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  marginTop: '48px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 24px',
                  background: '#FFFFFF',
                  border: '1px solid #E8ECE0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i <= 4 ? '#fbbf24' : '#e5e7eb'} 
                      color={i <= 4 ? '#fbbf24' : '#e5e7eb'} 
                    />
                  ))}
                </div>
                <div>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#2D3436',
                  }}>4.4</span>
                  <span style={{ color: '#636E72', fontSize: '0.85rem', marginLeft: '6px' }}>
                    sur 111 avis Google
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Logo display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="hero-logo"
            >
              <img
                src="/logo-cosmos.png"
                alt="Auto-École Cosmos"
                style={{
                  maxWidth: '380px',
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 40px rgba(138,183,59,0.15))',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#B2BEC3', textTransform: 'uppercase' }}>
            Découvrir
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '20px',
              height: '30px',
              border: '2px solid #E8ECE0',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
            }}
          >
            <div style={{
              width: '3px',
              height: '6px',
              background: '#8AB73B',
              borderRadius: '2px',
            }} />
          </motion.div>
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            .hero-logo { display: none !important; }
          }
        `}</style>
      </section>

      {/* ===== STATS ===== */}
      <section style={{
        padding: '0',
        position: 'relative',
        zIndex: 2,
        marginTop: '-40px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1px',
            background: '#E8ECE0',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#FFFFFF',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'flex', justifyContent: 'center', color: '#8AB73B' }}>
                  <stat.icon size={32} strokeWidth={1.5} />
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#8AB73B',
                  display: 'block',
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: '0.8rem',
                  color: '#636E72',
                  letterSpacing: '0.05em',
                }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMATIONS ===== */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionTitle
            label="Nos formations"
            title={<>Trouvez la formule <span style={{ color: '#8AB73B' }}>qui vous correspond</span></>}
            subtitle="Du permis B au permis moto, en passant par la formation accélérée : nous avons la solution adaptée à vos besoins."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {formations.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ height: '100%' }}
              >
                <Link to={f.link} style={{ display: 'block', height: '100%' }}>
                  <div style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8ECE0',
                    borderRadius: '12px',
                    padding: '32px 24px',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                    transition: 'all 0.4s',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#8AB73B';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(138,183,59,0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#E8ECE0';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <span style={{ fontSize: '2rem', marginBottom: '16px', display: 'block', color: '#2D3436' }}>
                      <f.icon size={40} strokeWidth={1.5} />
                    </span>
                    <h3 style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#2D3436',
                      marginBottom: '10px',
                    }}>
                      {f.title}
                    </h3>
                    <p style={{ color: '#636E72', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 'auto' }}>
                      {f.desc}
                    </p>
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#8AB73B',
                      marginTop: '16px',
                    }}>
                      {f.price}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/formations" className="btn btn-outline">
              Voir toutes nos formations →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section" style={{
        background: '#F5F7F0',
      }}>
        <div className="container">
          <SectionTitle
            label="Pourquoi Cosmos"
            title={<>L'auto-école qui fait <span style={{ color: '#8AB73B' }}>la différence</span></>}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                title: 'Moniteurs pédagogues',
                desc: "Benjamin, Farid, Cédric et notre équipe vous accompagnent avec patience et bienveillance vers la réussite.",
                icon: GraduationCap,
              },
              {
                title: 'Tarifs compétitifs',
                desc: "Des formules à partir de 800€ pour le permis B. Les meilleurs tarifs de Levallois-Perret, sans compromis sur la qualité.",
                icon: Euro,
              },
              {
                title: 'Horaires flexibles',
                desc: "Ouvert du lundi au samedi avec des créneaux adaptés à votre emploi du temps. Conduite possible le soir.",
                icon: Clock,
              },
              {
                title: 'Taux de réussite élevé',
                desc: "De nombreux élèves obtiennent leur permis du premier coup grâce à notre méthode de formation éprouvée.",
                icon: Medal,
              },
              {
                title: 'Formation accélérée',
                desc: "Besoin de votre permis rapidement ? Nos formations accélérées auto et moto sont faites pour vous.",
                icon: Zap,
              },
              {
                title: 'Emplacement idéal',
                desc: "Situé au 107 rue du Président Wilson à Levallois-Perret, facilement accessible en transport.",
                icon: MapPin,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '8px 0',
                }}
              >
                <span style={{
                  fontSize: '1.5rem',
                  flexShrink: 0,
                  width: '52px',
                  height: '52px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(138,183,59,0.1)',
                  borderRadius: '12px',
                }}>
                  {/* Icon Render */}
                  <item.icon size={28} color="#8AB73B" />
                </span>
                <div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#2D3436',
                    marginBottom: '6px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#636E72', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AVIS ===== */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <SectionTitle
            label="Avis clients"
            title={<>Ce que disent <span style={{ color: '#8AB73B' }}>nos élèves</span></>}
            subtitle="Plus de 111 avis Google avec une note de 4.4/5. Découvrez les témoignages de nos élèves."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} delay={i * 0.1} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/avis" className="btn btn-outline">
              Voir tous les avis →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HORAIRES ===== */}
      <section className="section" style={{ background: '#F9FAF6' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            <div>
              <SectionTitle
                label="Horaires"
                title={<>Nos horaires <span style={{ color: '#8AB73B' }}>d'ouverture</span></>}
                subtitle="Venez nous rencontrer à l'agence pour plus d'informations ou pour vous inscrire."
              />
              <p style={{ marginBottom: '24px', color: '#636E72' }}>
                Nous sommes ouverts du lundi au samedi. N'hésitez pas à nous appeler avant de passer si vous souhaitez un rendez-vous particulier.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                 <a href="tel:0147391104" className="btn btn-primary">
                    Appeler l'agence
                 </a>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { day: 'Lundi', hours: '15h - 19h' },
                  { day: 'Mardi', hours: '10h-13h / 15h-19h' },
                  { day: 'Mercredi', hours: '10h-13h / 15h-19h' },
                  { day: 'Jeudi', hours: '10h-13h / 15h-19h' },
                  { day: 'Vendredi', hours: '10h-13h / 15h-19h' },
                  { day: 'Samedi', hours: '10h - 14h' },
                  { day: 'Dimanche', hours: 'Fermé', closed: true },
                ].map((schedule, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: i !== 6 ? '1px solid #F0F0F0' : 'none',
                    paddingBottom: i !== 6 ? '12px' : '0',
                  }}>
                    <span style={{ fontWeight: 600, color: '#2D3436' }}>{schedule.day}</span>
                    <span style={{ 
                      color: schedule.closed ? '#e74c3c' : '#636E72',
                      fontWeight: schedule.closed ? 600 : 400,
                    }}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #8AB73B 0%, #739C2E 100%)',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '16px',
            }}>
              Prêt à démarrer ?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.1rem',
              maxWidth: '500px',
              margin: '0 auto 32px',
            }}>
              Contactez-nous dès maintenant pour vous inscrire ou obtenir plus d'informations sur nos formations.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:0147391104" className="btn" style={{
                background: '#FFFFFF',
                color: '#8AB73B',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
              }}>
                ☎ Appeler maintenant
              </a>
              <Link to="/contact" className="btn" style={{
                border: '2px solid #FFFFFF',
                color: '#FFFFFF',
              }}>
                Nous écrire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
