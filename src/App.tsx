import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import PrayerWidget from './components/PrayerWidget';
import WellnessTracker from './components/WellnessTracker';
import NutritionCard from './components/NutritionCard';
import AIWorkout from './components/AIWorkout';
import VerseWidget from './components/VerseWidget';
import ProgressDashboard from './components/ProgressDashboard';
import FreeFeatures from './components/FreeFeatures';
import UserProfile from './components/UserProfile';
import Onboarding from './components/Onboarding';
import CommunityFeed from './components/CommunityFeed';
import FriendsList from './components/FriendsList';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Check if user has completed onboarding
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Layout>
      <div className="grid-responsive">
        <div style={{ gridColumn: '1 / -1' }}>
          <ProgressDashboard />
        </div>

        {/* Column 1: Core Daily Flow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <UserProfile />
          <PrayerWidget />
          <WellnessTracker />
          <VerseWidget />
        </div>

        {/* Column 2: Health & Nutrition */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <AIWorkout />
          <NutritionCard />
          <FreeFeatures />
        </div>

        {/* Column 3: Social Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <FriendsList />
          <CommunityFeed />
        </div>
      </div>
    </Layout>
  );
}

export default App;
