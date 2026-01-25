import React from 'react';
import { Home, HeartPulse, Utensils, Settings, Menu, X, Crown } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    // Toggle sidebar on mobile
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="layout" style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Mobile menu button */}
            <div className="mobile-menu-btn" style={{
                display: 'none',
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                zIndex: 100,
                background: 'var(--bg-secondary)',
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}>
                    {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside style={{
                width: sidebarOpen ? '240px' : '80px',
                background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-tertiary))',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '2rem',
                transition: 'var(--transition-normal)',
                boxShadow: 'var(--shadow-lg)',
                flexShrink: 0
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: sidebarOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}>
                    <Crown size={24} color="var(--gold)" />
                    <span className="premium-badge" style={{ fontSize: '1.2rem' }}>Sakinah</span>
                </div>

                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    width: '100%',
                    padding: '0 1rem'
                }}>
                    <div
                        title={sidebarOpen ? "Dashboard" : ""}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: 'var(--accent-primary)'
                        }}
                    >
                        <Home size={20} />
                        {sidebarOpen && <span>Dashboard</span>}
                    </div>
                    <div
                        title={sidebarOpen ? "Wellness" : ""}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            transition: 'var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <HeartPulse size={20} />
                        {sidebarOpen && <span>Wellness</span>}
                    </div>
                    <div
                        title={sidebarOpen ? "Nutrition" : ""}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            transition: 'var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <Utensils size={20} />
                        {sidebarOpen && <span>Nutrition</span>}
                    </div>
                    <div
                        title={sidebarOpen ? "Settings" : ""}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            transition: 'var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <Settings size={20} />
                        {sidebarOpen && <span>Settings</span>}
                    </div>
                </nav>

                {/* Free badge */}
                <div style={{
                    marginTop: 'auto',
                    padding: '1rem',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <div style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.8rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        color: 'var(--accent-primary)'
                    }}>
                        100% FREE
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                padding: '2rem',
                overflowY: 'auto',
                background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.05), transparent 70%), radial-gradient(ellipse at bottom, rgba(245, 158, 11, 0.05), transparent 70%)'
            }}>
                <header style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '3rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div>
                        <h1 style={{
                            margin: 0,
                            fontSize: '2rem',
                            background: 'linear-gradient(90deg, var(--accent-primary), var(--gold))',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Sakinah Wellness
                        </h1>
                        <p style={{
                            margin: '0.5rem 0 0 0',
                            color: 'var(--text-secondary)',
                            fontSize: '1rem'
                        }}>
                            Holistic Wellness for Tech Professionals
                        </p>
                    </div>
                    <div className="status-pill" style={{
                        background: 'var(--bg-secondary)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: '0.9rem',
                        border: '1px solid var(--accent-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: 'var(--success)'
                        }} />
                        Active Session
                    </div>
                </header>

                {children}
            </main>
        </div>
    );
};

export default Layout;
