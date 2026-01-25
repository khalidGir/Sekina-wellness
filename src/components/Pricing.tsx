import { Check, Star, Crown, Zap, Shield, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with wellness",
      features: [
        "Prayer times for your location",
        "Basic wellness tracking",
        "Standard nutrition suggestions",
        "Community access",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "monthly",
      description: "For dedicated wellness enthusiasts",
      features: [
        "Advanced analytics",
        "AI-powered recommendations",
        "Personalized workout plans",
        "Exclusive nutrition guides",
        "Priority customer support",
        "Offline access",
        "Customizable themes"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and organizations",
      features: [
        "Everything in Premium",
        "Team wellness programs",
        "Admin dashboard",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced reporting",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, var(--bg-primary), #0a0f1f)',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'var(--font-sans)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            margin: '0 0 1rem 0',
            color: 'var(--text-primary'),
            lineHeight: '1.2'
          }}>
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Choose the plan that fits your wellness journey. All plans include our core spiritual and wellness features.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="card"
              style={{ 
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                ...(plan.popular ? { 
                  border: '2px solid var(--accent-primary)',
                  transform: 'scale(1.05)',
                  zIndex: 1
                } : {})
              }}
            >
              {plan.popular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  right: '50%', 
                  transform: 'translateX(50%)',
                  background: 'var(--accent-primary)',
                  color: 'var(--bg-primary)',
                  padding: '0.25rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Star size={14} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  margin: '0 0 0.5rem 0', 
                  color: plan.popular ? 'var(--accent-primary)' : 'var(--text-primary)'
                }}>
                  {plan.name}
                </h2>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.25rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  {plan.description}
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.75rem', 
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    <Check size={20} color="var(--success)" style={{ marginTop: '0.25rem' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={plan.popular ? "btn-accent" : "btn-primary"}
                style={{ 
                  width: '100%', 
                  padding: '1rem',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <details style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
              <summary style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', cursor: 'pointer' }}>
                What makes Sakinah Wellness different from other wellness apps?
              </summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                Unlike generic wellness apps, Sakinah Wellness is specifically designed for tech professionals, 
                integrating Islamic spiritual practices with modern wellness science. We understand the unique 
                challenges of working in tech and provide culturally relevant solutions.
              </p>
            </details>
            
            <details style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
              <summary style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', cursor: 'pointer' }}>
                Can I use Sakinah Wellness if I'm not Muslim?
              </summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                Absolutely! While we integrate Islamic spiritual practices, our wellness features like 
                ergonomics, nutrition guidance, and fitness routines are beneficial for everyone. 
                We welcome all tech professionals committed to holistic wellness.
              </p>
            </details>
            
            <details style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
              <summary style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)', cursor: 'pointer' }}>
                How does the free trial work for Premium?
              </summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                Our Premium free trial gives you full access to all premium features for 7 days. 
                No payment information is required to start. At the end of the trial, you can 
                choose to upgrade or continue with the Basic plan.
              </p>
            </details>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Still Have Questions?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Our support team is here to help you on your wellness journey
          </p>
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;