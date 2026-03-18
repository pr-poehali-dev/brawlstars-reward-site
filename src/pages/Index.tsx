import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Rewards from '@/components/Rewards';
import HowTo from '@/components/HowTo';
import Leaderboard from '@/components/Leaderboard';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import NotificationBanner from '@/components/NotificationBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-brawl-dark">
      <Navbar />
      <Hero />
      <Rewards />
      <HowTo />
      <Leaderboard />
      <FAQ />
      <Contacts />
      <Footer />
      <NotificationBanner />
    </div>
  );
};

export default Index;
