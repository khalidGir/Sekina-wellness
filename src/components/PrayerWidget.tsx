import { usePrayerTimes } from '../hooks/usePrayerTimes';
import { Moon, Clock, CheckCircle } from 'lucide-react';

const PrayerWidget = () => {
    const { prayers, nextPrayer, loading } = usePrayerTimes();

    if (loading) return (
        <div className="card prayer-widget" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <div style={{ textAlign: 'center' }}>
                <div className="spinner" style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌙</div>
                <p>Loading Salah Times...</p>
            </div>
        </div>
    );

    return (
        <div className="card prayer-widget" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative element */}
            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                opacity: '0.1',
                fontSize: '4rem',
                color: 'var(--accent-primary)'
            }}>
                ☪
            </div>

            <h3 style={{
                color: 'var(--accent-primary)',
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 1
            }}>
                <Moon size={24} /> Prayer Times (Addis Ababa)
            </h3>

            {nextPrayer && (
                <div className="next-prayer" style={{
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    padding: '1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                    }}>
                        <Clock size={16} /> Next Prayer
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gold)' }}>{nextPrayer.name}</div>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>in {nextPrayer.timeLeft}</div>

                    {/* Prayer progress bar */}
                    <div className="progress-bar" style={{ marginTop: '1rem' }}>
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: '40%',
                                background: 'linear-gradient(90deg, var(--accent-primary), var(--gold))'
                            }}
                        />
                    </div>
                </div>
            )}

            <div className="prayer-list" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 1
            }}>
                {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((p) => (
                    <div key={p} className="prayer-item stat-card" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.75rem',
                        background: nextPrayer?.name === p ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: nextPrayer?.name === p ? '1px solid var(--accent-primary)' : 'none'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {nextPrayer?.name === p && <CheckCircle size={14} color="var(--accent-primary)" />}
                            <span>{p}</span>
                        </div>
                        <span className="mono">{prayers?.[p]}</span>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 1
            }}>
                "Indeed, prayer has been decreed upon the believers a decree of specified times" - Quran 4:103
            </div>
        </div>
    );
};

export default PrayerWidget;
