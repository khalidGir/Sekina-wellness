import { useState } from 'react';
import { User, MapPin, Coffee, Moon, HeartPulse, Utensils, ArrowRight, Check } from 'lucide-react';

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    location: '',
    occupation: '',
    wellnessGoals: [] as string[],
    notificationPreferences: [] as string[]
  });

  const steps = [
    {
      title: "Welcome to Sakinah Wellness",
      subtitle: "Let's personalize your wellness journey",
      icon: <HeartPulse size={48} className="text-emerald-400" />
    },
    {
      title: "Tell Us About Yourself",
      subtitle: "Help us customize your experience",
      icon: <User size={48} className="text-blue-400" />
    },
    {
      title: "Set Your Goals",
      subtitle: "Choose what matters most to you",
      icon: <Coffee size={48} className="text-amber-400" />
    },
    {
      title: "Notification Preferences",
      subtitle: "Stay motivated with timely reminders",
      icon: <Moon size={48} className="text-violet-400" />
    }
  ];

  const wellnessGoals = [
    "Maintain consistent prayer schedule",
    "Improve physical health",
    "Reduce work-related stress",
    "Enhance focus and productivity",
    "Build healthy eating habits",
    "Increase physical activity"
  ];

  const notificationTypes = [
    "Prayer time reminders",
    "Wellness check-ins",
    "Motivational quotes",
    "Nutrition suggestions",
    "Workout reminders"
  ];

  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    setUserData(prev => {
      if (prev.wellnessGoals.includes(goal)) {
        return { ...prev, wellnessGoals: prev.wellnessGoals.filter(g => g !== goal) };
      } else {
        return { ...prev, wellnessGoals: [...prev.wellnessGoals, goal] };
      }
    });
  };

  const handleNotificationToggle = (notification: string) => {
    setUserData(prev => {
      if (prev.notificationPreferences.includes(notification)) {
        return { ...prev, notificationPreferences: prev.notificationPreferences.filter(n => n !== notification) };
      } else {
        return { ...prev, notificationPreferences: [...prev.notificationPreferences, notification] };
      }
    });
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="card" style={{ 
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Progress indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        {steps.map((_, index) => (
          <div key={index} style={{ flex: 1, margin: '0 0.25rem' }}>
            <div 
              style={{ 
                height: '4px', 
                background: index <= step ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                borderRadius: '2px'
              }} 
            />
            <div 
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: index <= step ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                margin: '0.25rem auto 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {index < step && <Check size={8} color="var(--bg-primary)" />}
            </div>
          </div>
        ))}
      </div>

      {/* Step content */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          {steps[step].icon}
        </div>
        <h2 style={{ 
          margin: '0 0 0.5rem 0', 
          fontSize: '1.8rem',
          background: 'linear-gradient(90deg, var(--accent-primary), var(--gold))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          backgroundClip: 'text'
        }}>
          {steps[step].title}
        </h2>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          {steps[step].subtitle}
        </p>
      </div>

      {/* Form fields */}
      <div style={{ marginBottom: '2rem' }}>
        {step === 0 && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Sakinah Wellness helps tech professionals maintain spiritual, physical, and mental well-being through personalized guidance and culturally relevant resources.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ 
                background: 'rgba(16, 185, 129, 0.1)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)',
                minWidth: '120px'
              }}>
                <Coffee size={24} color="var(--accent-primary)" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Health Tracking</p>
              </div>
              <div style={{ 
                background: 'rgba(245, 158, 11, 0.1)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)',
                minWidth: '120px'
              }}>
                <Moon size={24} color="var(--gold)" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Prayer Times</p>
              </div>
              <div style={{ 
                background: 'rgba(139, 92, 246, 0.1)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)',
                minWidth: '120px'
              }}>
                <Utensils size={24} color="var(--accent-tertiary)" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Halal Nutrition</p>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Full Name
              </label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Location
              </label>
              <input
                type="text"
                value={userData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="City, Country"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Occupation
              </label>
              <input
                type="text"
                value={userData.occupation}
                onChange={(e) => handleInputChange('occupation', e.target.value)}
                placeholder="Your job title"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Select your wellness priorities
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {wellnessGoals.map((goal, index) => (
                <div 
                  key={index}
                  onClick={() => handleGoalToggle(goal)}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: userData.wellnessGoals.includes(goal) 
                      ? 'rgba(16, 185, 129, 0.2)' 
                      : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${userData.wellnessGoals.includes(goal) 
                      ? 'var(--accent-primary)' 
                      : 'rgba(255,255,255,0.1)'}`,
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    border: `2px solid ${userData.wellnessGoals.includes(goal) 
                      ? 'var(--accent-primary)' 
                      : 'rgba(255,255,255,0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {userData.wellnessGoals.includes(goal) && (
                      <Check size={14} color="var(--accent-primary)" />
                    )}
                  </div>
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Choose when you'd like to receive reminders
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {notificationTypes.map((notification, index) => (
                <div 
                  key={index}
                  onClick={() => handleNotificationToggle(notification)}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: userData.notificationPreferences.includes(notification) 
                      ? 'rgba(139, 92, 246, 0.2)' 
                      : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${userData.notificationPreferences.includes(notification) 
                      ? 'var(--accent-tertiary)' 
                      : 'rgba(255,255,255,0.1)'}`,
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    border: `2px solid ${userData.notificationPreferences.includes(notification) 
                      ? 'var(--accent-tertiary)' 
                      : 'rgba(255,255,255,0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {userData.notificationPreferences.includes(notification) && (
                      <Check size={14} color="var(--accent-tertiary)" />
                    )}
                  </div>
                  <span>{notification}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button 
          onClick={prevStep}
          disabled={step === 0}
          className="btn-secondary"
          style={{ 
            opacity: step === 0 ? 0.5 : 1,
            cursor: step === 0 ? 'not-allowed' : 'pointer',
            padding: '0.75rem 1.5rem'
          }}
        >
          Back
        </button>
        <button 
          onClick={nextStep}
          className={step === steps.length - 1 ? "btn-accent" : "btn-primary"}
          style={{ padding: '0.75rem 1.5rem', fontWeight: '500' }}
        >
          {step === steps.length - 1 ? 'Complete Setup' : 'Continue'} 
          <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;