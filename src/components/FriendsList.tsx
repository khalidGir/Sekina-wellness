import { Search, UserPlus, Users, Award, Target } from 'lucide-react';

const FriendsList = () => {
  const friends = [
    { id: 1, name: "Ahmed Hassan", role: "Backend Developer", avatar: "AH", status: "online", streak: 12 },
    { id: 2, name: "Mariam Yusuf", role: "Data Scientist", avatar: "MY", status: "offline", streak: 8 },
    { id: 3, name: "Omar Ali", role: "DevOps Engineer", avatar: "OA", status: "online", streak: 15 },
    { id: 4, name: "Amina Ibrahim", role: "UI/UX Designer", avatar: "AI", status: "away", streak: 5 },
    { id: 5, name: "Yusuf Mohammed", role: "Product Manager", avatar: "YM", status: "online", streak: 21 }
  ];

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(16, 185, 129, 0.05))',
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
        color: 'var(--accent-secondary)'
      }}>
        👥
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Users size={28} className="text-sky-400" />
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--accent-secondary)' }}>Friends</h3>
      </div>

      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <Search size={18} color="var(--text-secondary)" />
        </div>
        <input
          type="text"
          placeholder="Search friends..."
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 2.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-primary)',
            fontSize: '1rem'
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          <UserPlus size={16} style={{ marginRight: '0.5rem' }} /> Add Friend
        </button>
        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          <Target size={16} style={{ marginRight: '0.5rem' }} /> Challenges
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {friends.map(friend => (
          <div 
            key={friend.id} 
            className="stat-card"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1rem'
            }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                {friend.avatar}
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                right: 0, 
                width: '14px', 
                height: '14px', 
                borderRadius: '50%', 
                border: '2px solid var(--bg-primary)',
                background: friend.status === 'online' ? 'var(--success)' : 
                           friend.status === 'away' ? 'var(--warning)' : 'var(--text-secondary)'
              }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {friend.name}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {friend.role}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Award size={16} color="var(--gold)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--gold)' }}>{friend.streak}</span>
                </div>
              </div>
            </div>
            
            <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Message
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
          View All Friends
        </button>
      </div>
    </div>
  );
};

export default FriendsList;