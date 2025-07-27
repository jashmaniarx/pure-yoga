import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoLibrary from "@/components/VideoLibrary";
import EnhancedMeditationMusic from "@/components/EnhancedMeditationMusic";
import WellnessTips from "@/components/WellnessTips";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen smooth-scroll relative">
        <ParallaxBackground />
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <VideoLibrary />
          <EnhancedMeditationMusic />
          <WellnessTips />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
