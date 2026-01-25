import { CheckCircle, Trophy, Droplets, Heart, Star, Target } from 'lucide-react';

const ProgressDashboard = () => {
    return (
        <div className="card dashboard-stats" style={{
            gridColumn: '1 / -1',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(245, 158, 11, 0.05))',
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
                ♾️
            </div>

            <h3 style={{
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--gold)',
                position: 'relative',
                zIndex: 1
            }}>
                <Trophy size={28} color="var(--gold)" /> Today's Wellness Journey
            </h3>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
            }}>
                Track your spiritual, physical, and mental well-being
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginTop: '1rem',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Prayer Streak */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Star size={20} color="var(--gold)" />
                            <span style={{ fontWeight: '500', fontSize: '1rem' }}>Prayer Streak</span>
                        </div>
                        <span style={{ color: 'var(--gold)', fontWeight: '600' }}>4/5</span>
                    </div>
                    <div className="progress-bar" style={{ marginBottom: '0.5rem' }}>
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: '80%',
                                background: 'linear-gradient(90deg, var(--gold), #fbbf24)'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span>Today</span>
                        <span>+2 days streak</span>
                    </div>
                </div>

                {/* Wellness Checks */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Heart size={20} color="var(--accent-primary)" />
                            <span style={{ fontWeight: '500', fontSize: '1rem' }}>Wellness Checks</span>
                        </div>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>2/2</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="var(--success)" />
                                <span>Posture</span>
                            </div>
                            <span style={{ color: 'var(--success)' }}>✓ Done</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="var(--success)" />
                                <span>Eyes</span>
                            </div>
                            <span style={{ color: 'var(--success)' }}>✓ Done</span>
                        </div>
                    </div>
                </div>

                {/* Hydration */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Droplets size={20} color="#38bdf8" />
                            <span style={{ fontWeight: '500', fontSize: '1rem' }}>Hydration</span>
                        </div>
                        <span style={{ color: '#38bdf8', fontWeight: '600' }}>1.2L</span>
                    </div>
                    <div className="progress-bar" style={{ marginBottom: '0.5rem' }}>
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: '60%',
                                background: 'linear-gradient(90deg, #38bdf8, #0ea5e9)'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span>Goal: 2L</span>
                        <span>400ml left</span>
                    </div>
                </div>

                {/* Focus Time */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Target size={20} color="var(--accent-tertiary)" />
                            <span style={{ fontWeight: '500', fontSize: '1rem' }}>Focus Time</span>
                        </div>
                        <span style={{ color: 'var(--accent-tertiary)', fontWeight: '600' }}>3h 42m</span>
                    </div>
                    <div className="progress-bar" style={{ marginBottom: '0.5rem' }}>
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: '75%',
                                background: 'linear-gradient(90deg, var(--accent-tertiary), #a78bfa)'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span>Today's goal</span>
                        <span>5h</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressDashboard;
