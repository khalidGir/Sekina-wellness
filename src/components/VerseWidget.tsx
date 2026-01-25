import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Sparkles, Star } from 'lucide-react';

const VerseWidget = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card verse-widget" style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), transparent)',
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
                color: 'var(--accent-tertiary)'
            }}>
                ✨
            </div>

            <h3 style={{
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--accent-tertiary)',
                position: 'relative',
                zIndex: 1
            }}>
                <BookOpen size={24} /> Verse of the Day
            </h3>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
            }}>
                Wisdom for your spiritual and professional journey
            </p>

            <blockquote style={{
                borderLeft: '4px solid var(--accent-tertiary)',
                margin: '1rem 0',
                paddingLeft: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                position: 'relative',
                zIndex: 1
            }}>
                "Verily, with hardship comes ease." (Quran 94:6)
            </blockquote>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
            }}>
                <Star size={16} color="var(--gold)" fill="var(--gold)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Reflect on this wisdom</span>
            </div>

            <button
                onClick={() => setExpanded(!expanded)}
                className="btn-secondary"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '0.9rem',
                    position: 'relative',
                    zIndex: 1
                }}>
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {expanded ? 'Hide Reflection' : 'Expand Commentary'}
            </button>

            {expanded && (
                <div className="commentary fade-in" style={{
                    marginTop: '1.5rem',
                    padding: '1.25rem',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Sparkles size={16} color="var(--gold)" />
                        <strong style={{ color: 'var(--gold)' }}>Reflection:</strong>
                    </div>
                    <p>
                        This verse is a powerful reminder for developers facing complex bugs or burnout.
                        Just as the night is darkest before dawn, your breakthrough is often just one commit away.
                        Patience (Sabr) is key. Remember that every challenge is temporary and followed by relief.
                    </p>
                    <p style={{ marginTop: '0.75rem' }}>
                        Take a moment to breathe deeply and trust in the process. Your efforts are never wasted.
                    </p>
                </div>
            )}
        </div>
    );
};

export default VerseWidget;
