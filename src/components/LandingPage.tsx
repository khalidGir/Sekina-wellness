import { HeartPulse, Star, Users, Shield, ArrowRight, Download, Play } from 'lucide-react';

const LandingPage = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, var(--bg-primary), #0a0f1f)',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'var(--font-sans)'
    }}>
      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '4rem 1rem',
        marginBottom: '4rem'
      }}>
        <div style={{ 
          background: 'linear-gradient(90deg, var(--accent-primary), var(--gold))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          backgroundClip: 'text',
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '1rem'
        }}>
          SAKINAH WELLNESS
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          margin: '0 0 1rem 0',
          color: 'var(--text-primary)',
          lineHeight: '1.2'
        }}>
          Holistic Wellness for <span className="text-gradient">Tech Professionals</span>
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '700px',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          A premium wellness platform that integrates Islamic spiritual practices with modern wellness science, designed specifically for developers and tech workers.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: '600' }}>
            <Download size={20} style={{ marginRight: '0.5rem' }} /> Download App
          </button>
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: '600' }}>
            <Play size={20} style={{ marginRight: '0.5rem' }} /> Watch Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '2rem 1rem', marginBottom: '4rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: 'var(--text-primary')
        }}>
          Why Choose Sakinah Wellness?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'rgba(16, 185, 129, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.5rem',
              fontSize: '2rem'
            }}>
              <HeartPulse color="var(--accent-primary)" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Spiritual Integration</h3>
            <p style={{ color: 'var(--text-secondary) }}>
              Accurate prayer times, mindful transitions, and daily Quran verses with contextual reflections for modern challenges.
            </p>
          </div>
          
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'rgba(245, 158, 11, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.5rem',
              fontSize: '2rem'
            }}>
              <Star color="var(--gold)" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Culturally Relevant Wellness</h3>
            <p style={{ color: 'var(--text-secondary) }}>
              Ethiopian and halal nutrition suggestions, developer ergonomics, and AI-powered workouts for busy schedules.
            </p>
          </div>
          
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'rgba(139, 92, 246, 0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.5rem',
              fontSize: '2rem'
            }}>
              <Users color="var(--accent-tertiary)" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Community Support</h3>
            <p style={{ color: 'var(--text-secondary) }}>
              Connect with like-minded tech professionals, share achievements, and participate in wellness challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '2rem 1rem', marginBottom: '4rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: 'var(--text-primary')
        }}>
          What Our Users Say
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                AH
              </div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Ahmed Hassan</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Senior Developer</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1rem' }}>
              "Sakinah Wellness has transformed how I balance my spiritual life with my demanding career. The prayer time reminders perfectly sync with my work schedule."
            </p>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} color="var(--gold)" fill="var(--gold)" />
              ))}
            </div>
          </div>
          
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                MY
              </div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>Mariam Yusuf</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Data Scientist</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1rem' }}>
              "The nutrition suggestions have helped me maintain energy throughout long coding sessions. The Ethiopian recipes are a wonderful touch!"
            </p>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} color="var(--gold)" fill="var(--gold)" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(245, 158, 11, 0.1))',
        borderRadius: 'var(--radius-xl)',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '4rem'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--text-primary)',
          marginBottom: '1rem'
        }}>
          Ready to Transform Your Wellness Journey?
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          margin: '0 auto 2rem'
        }}>
          Join thousands of tech professionals who have improved their spiritual, physical, and mental well-being with Sakinah Wellness.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: '600' }}>
            Get Started Free
          </button>
          <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: '600' }}>
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Features</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Pricing</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 Sakinah Wellness. All rights reserved. Designed for tech professionals worldwide.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;