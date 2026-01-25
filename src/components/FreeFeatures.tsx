import { Star, Zap, Shield, TrendingUp, Heart } from 'lucide-react';

const FreeFeatures = () => {
  const features = [
    {
      icon: <Heart size={24} className="text-emerald-400" />,
      title: "Prayer Time Reminders",
      description: "Accurate prayer times for your location with customizable notifications"
    },
    {
      icon: <Zap size={24} className="text-blue-400" />,
      title: "Wellness Tracking",
      description: "Track your eye strain, posture, and hydration throughout the day"
    },
    {
      icon: <Shield size={24} className="text-amber-400" />,
      title: "Halal Nutrition Guide",
      description: "Culturally relevant meal suggestions optimized for energy and focus"
    },
    {
      icon: <TrendingUp size={24} className="text-violet-400" />,
      title: "Progress Tracking",
      description: "Monitor your spiritual and wellness habits with detailed insights"
    }
  ];

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(56, 189, 248, 0.1))',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{ 
        position: 'absolute', 
        top: '1rem', 
        right: '1rem', 
        opacity: '0.05',
        fontSize: '6rem',
        color: 'var(--accent-primary)'
      }}>
        ⭐
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Star size={32} className="text-emerald-400" />
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Free Forever Features</h3>
      </div>

      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '0.9rem', 
        marginBottom: '1.5rem',
        lineHeight: '1.6'
      }}>
        All essential wellness features completely free - no credit card required
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '1.5rem'
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              {feature.icon}
            </div>
            <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              {feature.title}
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          padding: '0.8rem 2rem', 
          fontSize: '1.1rem', 
          fontWeight: '600',
          background: 'rgba(16, 185, 129, 0.2)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--accent-primary)',
          marginBottom: '1rem'
        }}>
          100% FREE FOREVER
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          No hidden fees • No premium lockouts • All features free
        </p>
      </div>
    </div>
  );
};

export default FreeFeatures;