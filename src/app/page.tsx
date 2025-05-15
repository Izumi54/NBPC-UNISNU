import HeroSection from '@/components/home/HeroSection';
import SponsorSection from '@/components/home/SponsorSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TimelineSection from '@/components/home/TimelineSection';
import PamphletSection from '@/components/home/PamphletSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PamphletSection />
      <SponsorSection />
      <AboutSection />
      <FeaturesSection />
      <TimelineSection />
    </>
  );
}
