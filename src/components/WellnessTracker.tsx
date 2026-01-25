import { useState, useEffect } from 'react';
import { Eye, Armchair, RotateCcw, Activity, Monitor, Coffee } from 'lucide-react';

const WellnessTracker = () => {
    const [eyeTimer, setEyeTimer] = useState(20 * 60); // seconds
    const [isEyeActive] = useState(true);

    // Posture check: Every hour
    const [postureTimer, setPostureTimer] = useState(60 * 60);
    // Hydration reminder: Every 30 mins
    const [hydrationTimer, setHydrationTimer] = useState(30 * 60);

    useEffect(() => {
        const postureInterval = setInterval(() => setPostureTimer(t => t > 0 ? t - 1 : 60 * 60), 1000);
        const hydrationInterval = setInterval(() => setHydrationTimer(t => t > 0 ? t - 1 : 30 * 60), 1000);

        return () => {
            clearInterval(postureInterval);
            clearInterval(hydrationInterval);
        };
    }, []);

    useEffect(() => {
        let interval: any = null;
        if (isEyeActive && eyeTimer > 0) {
            interval = setInterval(() => setEyeTimer(t => t - 1), 1000);
        } else if (eyeTimer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isEyeActive, eyeTimer]);

    const formatTime = (sec: number) => {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;

        if (h > 0) {
            return `${h}h ${m}m`;
        }
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const resetEye = () => setEyeTimer(20 * 60);
    const resetPosture = () => setPostureTimer(60 * 60);
    const resetHydration = () => setHydrationTimer(30 * 60);

    return (
        <div className="card wellness-tracker">
            <h3 style={{
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--accent-primary)'
            }}>
                <Activity size={24} /> Developer Wellness
            </h3>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
            }}>
                Maintaining your health during long coding sessions
            </p>

            {/* Eye Strain */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(56, 189, 248, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Eye size={18} color="var(--info)" />
                        </div>
                        <div>
                            <span style={{ fontWeight: '500' }}>Eye Strain Relief</span>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>20-20-20 Rule</div>
                        </div>
                    </div>
                    <span className="mono" style={{
                        color: eyeTimer < 60 ? 'var(--danger)' : 'var(--text-primary)',
                        fontWeight: '500'
                    }}>
                        {formatTime(eyeTimer)}
                    </span>
                </div>
                <div className="progress-bar" style={{ marginTop: '0.5rem' }}>
                    <div
                        className="progress-bar-fill"
                        style={{
                            width: `${(eyeTimer / (20 * 60)) * 100}%`,
                            background: eyeTimer < 60 ? 'var(--danger)' : 'var(--info)'
                        }}
                    />
                </div>
                <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                    <button
                        onClick={resetEye}
                        className="btn-secondary"
                        style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}
                    >
                        <RotateCcw size={14} style={{ marginRight: '0.3rem' }} /> Reset
                    </button>
                </div>
            </div>

            {/* Posture */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(16, 185, 129, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Monitor size={18} color="var(--accent-primary)" />
                        </div>
                        <div>
                            <span style={{ fontWeight: '500' }}>Posture Check</span>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Every hour</div>
                        </div>
                    </div>
                    <span className="mono" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                        {formatTime(postureTimer)}
                    </span>
                </div>
                <div className="progress-bar" style={{ marginTop: '0.5rem' }}>
                    <div
                        className="progress-bar-fill"
                        style={{
                            width: `${(postureTimer / (60 * 60)) * 100}%`,
                            background: 'var(--accent-primary)'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Sit straight, shoulders back!
                    </p>
                    <button
                        onClick={resetPosture}
                        className="btn-secondary"
                        style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}
                    >
                        Check In
                    </button>
                </div>
            </div>

            {/* Hydration */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(245, 158, 11, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Coffee size={18} color="var(--gold)" />
                        </div>
                        <div>
                            <span style={{ fontWeight: '500' }}>Hydration Reminder</span>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Every 30 mins</div>
                        </div>
                    </div>
                    <span className="mono" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                        {formatTime(hydrationTimer)}
                    </span>
                </div>
                <div className="progress-bar" style={{ marginTop: '0.5rem' }}>
                    <div
                        className="progress-bar-fill"
                        style={{
                            width: `${(hydrationTimer / (30 * 60)) * 100}%`,
                            background: 'var(--gold)'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Stay hydrated for focus
                    </p>
                    <button
                        onClick={resetHydration}
                        className="btn-secondary"
                        style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}
                    >
                        Drink Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WellnessTracker;
