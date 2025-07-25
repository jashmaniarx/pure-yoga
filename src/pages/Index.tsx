import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoLibrary from "@/components/VideoLibrary";
import MeditationMusic from "@/components/MeditationMusic";
import WellnessTips from "@/components/WellnessTips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VideoLibrary />
      <MeditationMusic />
      <WellnessTips />
      <Footer />
    </div>
  );
};

export default Index;
