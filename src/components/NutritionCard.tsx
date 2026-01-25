import { useState } from 'react';
import { Utensils, RefreshCw, Flame, Leaf, Clock } from 'lucide-react';

const MEALS = [
    {
        name: "Shiro w/ Gomen",
        type: "Lunch",
        benefits: "High protein, light, no crash.",
        calories: "420 kcal",
        prepTime: "15 min",
        icon: "🥙"
    },
    {
        name: "Firfir (Injera based)",
        type: "Breakfast",
        benefits: "Carb load for energy.",
        calories: "380 kcal",
        prepTime: "10 min",
        icon: "🥞"
    },
    {
        name: "Grilled Fish (Asa)",
        type: "Dinner",
        benefits: "Omega-3 for brain function.",
        calories: "320 kcal",
        prepTime: "25 min",
        icon: "🐟"
    },
    {
        name: "Bula Genfo",
        type: "Snack",
        benefits: "Slow release energy.",
        calories: "280 kcal",
        prepTime: "5 min",
        icon: "🍲"
    },
    {
        name: "Suf Fitfit",
        type: "Lunch",
        benefits: "Cooling, light, easy digestion.",
        calories: "350 kcal",
        prepTime: "12 min",
        icon: "🥗"
    }
];

const NutritionCard = () => {
    const [meal, setMeal] = useState(MEALS[0]);

    const randomize = () => {
        const random = MEALS[Math.floor(Math.random() * MEALS.length)];
        setMeal(random);
    };

    return (
        <div className="card nutrition-card" style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent)',
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
                color: 'var(--gold)'
            }}>
                🍽️
            </div>

            <h3 style={{
                marginTop: 0,
                color: 'var(--gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 1
            }}>
                <Utensils size={24} /> Ethiopian Halal Nutrition
            </h3>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
            }}>
                Culturally relevant meals for optimal performance
            </p>

            <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: 'rgba(0, 0, 0, 0.1)',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{meal.icon}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--gold)', marginBottom: '0.5rem' }}>{meal.name}</div>
                <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent-primary)',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Flame size={14} /> {meal.calories}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {meal.prepTime}</span>
                </div>
                <div style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.5rem'
                }}>
                    "{meal.benefits}"
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                        padding: '0.3rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--accent-primary)',
                        fontSize: '0.8rem'
                    }}>
                        Halal
                    </span>
                    <span style={{
                        padding: '0.3rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(245, 158, 11, 0.1)',
                        color: 'var(--gold)',
                        fontSize: '0.8rem'
                    }}>
                        Ethiopian
                    </span>
                    <span style={{
                        padding: '0.3rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(34, 197, 94, 0.1)',
                        color: 'var(--success)',
                        fontSize: '0.8rem'
                    }}>
                        Brain Food
                    </span>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem', position: 'relative', zIndex: 1 }}>
                <button
                    onClick={randomize}
                    className="btn-accent"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        margin: '0 auto'
                    }}
                >
                    <RefreshCw size={16} /> Suggest Another Meal
                </button>
            </div>
        </div>
    );
};

export default NutritionCard;
