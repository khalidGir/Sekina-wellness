import { Heart, MessageCircle, Share2, Users, Trophy, Star } from 'lucide-react';
import { useState } from 'react';

const CommunityFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Fatima Ali",
      role: "Software Engineer",
      avatar: "FA",
      content: "Just completed my 7th day of consistent prayer schedule! The reminder notifications really helped me stay on track. Alhamdulillah!",
      time: "2 hours ago",
      likes: 12,
      comments: 3,
      isLiked: false
    },
    {
      id: 2,
      author: "Omar Hassan",
      role: "Product Manager",
      avatar: "OH",
      content: "Tried the Ethiopian lentil stew recipe from the nutrition section today. So delicious and kept me energized through the afternoon!",
      time: "5 hours ago",
      likes: 8,
      comments: 2,
      isLiked: true
    },
    {
      id: 3,
      author: "Aisha Mohammed",
      role: "UX Designer",
      avatar: "AM",
      content: "Finished the 15-min desk mobility flow. My back pain has reduced significantly since I started doing this daily.",
      time: "Yesterday",
      likes: 15,
      comments: 5,
      isLiked: false
    }
  ]);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked } 
        : post
    ));
  };

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(56, 189, 248, 0.05))',
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
        color: 'var(--accent-tertiary)'
      }}>
        🤝
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <Users size={28} className="text-indigo-400" />
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--accent-tertiary)' }}>Community Feed</h3>
      </div>

      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '0.9rem', 
        marginBottom: '1.5rem',
        lineHeight: '1.6'
      }}>
        Connect with fellow tech professionals on their wellness journeys
      </p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', overflowX: 'auto', padding: '0.5rem 0' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          minWidth: '80px',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <Trophy size={24} className="text-yellow-400" />
          <span style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>24</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Streak</span>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          minWidth: '80px',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <Star size={24} className="text-emerald-400" />
          <span style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>18</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Achievements</span>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          minWidth: '80px',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <Heart size={24} className="text-rose-400" />
          <span style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>142</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Followers</span>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          minWidth: '80px',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <MessageCircle size={24} className="text-blue-400" />
          <span style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>36</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Comments</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button className="btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>
          All Posts
        </button>
        <button className="btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>
          Prayer
        </button>
        <button className="btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>
          Nutrition
        </button>
        <button className="btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>
          Fitness
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map(post => (
          <div 
            key={post.id} 
            className="stat-card"
            style={{ 
              padding: '1.25rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: '500',
                flexShrink: 0
              }}>
                {post.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {post.author}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {post.role}
                    </p>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {post.time}
                  </span>
                </div>
                <p style={{ margin: '1rem 0 0 0', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                  {post.content}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
              <button 
                onClick={() => handleLike(post.id)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: post.isLiked ? 'var(--danger)' : 'var(--text-secondary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
              >
                <Heart size={16} fill={post.isLiked ? 'currentColor' : 'none'} />
                <span>{post.likes}</span>
              </button>
              <button style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem'
              }}>
                <MessageCircle size={16} />
                <span>{post.comments}</span>
              </button>
              <button style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem'
              }}>
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default CommunityFeed;