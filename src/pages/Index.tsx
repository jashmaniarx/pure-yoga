import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoLibrary from "@/components/VideoLibrary";
import EnhancedMeditationMusic from "@/components/EnhancedMeditationMusic";
import WellnessTips from "@/components/WellnessTips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen smooth-scroll">
        <Navigation />
        <HeroSection />
        <VideoLibrary />
        <EnhancedMeditationMusic />
        <WellnessTips />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
