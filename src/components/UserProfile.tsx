import { User, MapPin, Calendar, Coffee, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "Ahmed Hassan",
    role: "Senior Frontend Developer",
    location: "Addis Ababa, Ethiopia",
    joinDate: "March 2024",
    dailyGoal: 85,
    weeklyGoal: 75
  });

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(139, 92, 246, 0.05))',
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
        👤
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}>
          AH
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-primary)' }}>
            {profile.name}
          </h3>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {profile.role}
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} color="var(--text-secondary)" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {profile.location}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={16} color="var(--text-secondary)" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Member since {profile.joinDate}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Daily Wellness Goal</span>
          <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
            {profile.dailyGoal}%
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${profile.dailyGoal}%`,
              background: 'linear-gradient(90deg, var(--accent-primary), var(--gold))' 
            }} 
          />
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Weekly Consistency</span>
          <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
            {profile.weeklyGoal}%
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${profile.weeklyGoal}%`,
              background: 'linear-gradient(90deg, var(--accent-tertiary), var(--accent-secondary))' 
            }} 
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className="btn-secondary" style={{ flex: 1, marginRight: '0.5rem' }}>
          <User size={16} style={{ marginRight: '0.5rem' }} /> Profile
        </button>
        <button className="btn-primary" style={{ flex: 1, marginLeft: '0.5rem' }}>
          <Sun size={16} style={{ marginRight: '0.5rem' }} /> Settings
        </button>
      </div>
    </div>
  );
};

export default UserProfile;