import { useState } from 'react';
import { Zap, Clock, Play, Dumbbell, Timer, TrendingUp } from 'lucide-react';

const AIWorkout = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        energy: 'Medium',
        duration: '15',
        focus: 'Mobility'
    });

    const generateWorkout = () => {
        setLoading(true);
        setResult(null);
        // Simulate AI Latency
        setTimeout(() => {
            const routines: Record<string, string> = {
                'Mobility': `**15 Min Desk Mobility Flow**\n- Neck Rotations (2m)\n- Wrist Stretch (2m)\n- Seated Cat-Cow (3m)\n- Wall Angels (3m)\n- Hip Openers (5m)`,
                'Strength': `**Quick Desk Strength**\n- Chair Dips (3x10)\n- Desk Pushups (3x12)\n- Bodyweight Squats (3x15)\n- Plank (3x45s)`,
                'Cardio': `**Energy Burst**\n- Jumping Jacks (2m)\n- High Knees (2m)\n- Mountain Climbers (2m)\n- Rest & Repeat x2`
            };

            setResult(routines[formData.focus] || routines['Mobility']);
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="card">
            <h3 style={{
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--accent-primary)'
            }}>
                <Zap size={24} /> AI-Powered Workout
            </h3>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
            }}>
                Personalized fitness routines tailored to your energy level
            </p>

            {!result && !loading && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{
                            display: 'block',
                            fontSize: '0.9rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem',
                            fontWeight: '500'
                        }}>
                            Energy Level
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                            {['Low', 'Medium', 'High'].map(l => (
                                <button
                                    key={l}
                                    onClick={() => setFormData({ ...formData, energy: l })}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: 'var(--radius-md)',
                                        background: formData.energy === l ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                                        color: formData.energy === l ? '#fff' : 'var(--text-secondary)',
                                        border: `1px solid ${formData.energy === l ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'}`,
                                        transition: 'var(--transition-fast)',
                                        fontWeight: formData.energy === l ? '500' : 'normal'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (formData.energy !== l) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (formData.energy !== l) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        }
                                    }}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label style={{
                            display: 'block',
                            fontSize: '0.9rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem',
                            fontWeight: '500'
                        }}>
                            Duration
                        </label>
                        <select
                            value={formData.duration}
                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-md)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                fontSize: '1rem'
                            }}>
                            <option value="15" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>15 Minutes</option>
                            <option value="30" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>30 Minutes</option>
                            <option value="45" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>45 Minutes</option>
                        </select>
                    </div>

                    <div>
                        <label style={{
                            display: 'block',
                            fontSize: '0.9rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem',
                            fontWeight: '500'
                        }}>
                            Focus Area
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                            {['Mobility', 'Strength', 'Cardio'].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFormData({ ...formData, focus: f })}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: 'var(--radius-md)',
                                        background: formData.focus === f ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                                        color: formData.focus === f ? '#fff' : 'var(--text-secondary)',
                                        border: `1px solid ${formData.focus === f ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'}`,
                                        transition: 'var(--transition-fast)',
                                        fontWeight: formData.focus === f ? '500' : 'normal',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.3rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (formData.focus !== f) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (formData.focus !== f) {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        }
                                    }}
                                >
                                    {f === 'Mobility' && <TrendingUp size={18} />}
                                    {f === 'Strength' && <Dumbbell size={18} />}
                                    {f === 'Cardio' && <Timer size={18} />}
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={generateWorkout}
                        className="btn-accent"
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                            padding: '1rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontSize: '1.1rem'
                        }}>
                        <Zap size={18} fill="black" /> Generate Custom Routine
                    </button>
                </div>
            )}

            {loading && (
                <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '250px'
                }}>
                    <div className="spinner" style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
                    <p>Analyzing your preferences...</p>
                    <p>Generating personalized routine...</p>
                    <div style={{
                        width: '100%',
                        height: '4px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '2px',
                        marginTop: '1rem',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '60%',
                            height: '100%',
                            background: 'var(--accent-primary)',
                            animation: 'pulse 1.5s infinite'
                        }} />
                    </div>
                </div>
            )}

            {result && (
                <div className="result fade-in" style={{
                    background: 'rgba(16, 185, 129, 0.05)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(16, 185, 129, 0.1)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1rem',
                            color: 'var(--text-primary)'
                        }}>
                            <Clock size={18} style={{ verticalAlign: 'middle' }} /> {formData.duration} min workout
                        </div>
                        <button
                            onClick={() => setResult(null)}
                            className="btn-secondary"
                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
                        >
                            New Routine
                        </button>
                    </div>
                    <div style={{
                        whiteSpace: 'pre-line',
                        lineHeight: '1.8',
                        fontSize: '1.1rem',
                        color: 'var(--text-primary)'
                    }}>
                        {result}
                    </div>
                    <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '0.8rem' }}>
                        <Play size={16} style={{ marginRight: '0.5rem' }} /> Start Workout
                    </button>
                </div>
            )}
        </div>
    );
};

export default AIWorkout;
