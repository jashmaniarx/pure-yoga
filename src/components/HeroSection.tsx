import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  const scrollToVideos = () => {
    const element = document.getElementById('videos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center content-padding pt-24 section-spacing">
      {/* Background Image with Enhanced Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 backdrop-blur-md" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 mb-12 float-animation glass-hover">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-accent-aqua breathing-pulse" />
            <span className="text-sm font-medium text-text-secondary tracking-wide">Your Journey to Pure Wellness</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-gradient">Transform</span> Your Mind,{" "}
            <br className="hidden md:block" />
            <span className="text-gradient">Strengthen</span> Your Body
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            PureYoga exists to help you genuinely feel better—physically, mentally, and spiritually. 
            This isn't just another wellness site; it's your companion for real transformation and healing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="coral" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-4 text-lg glass-hover"
              onClick={scrollToVideos}
            >
              <Play className="h-6 w-6 mr-3" />
              Start Your Practice
            </Button>
            <Button 
              variant="glass-glow" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-4 text-lg glass-hover"
              onClick={scrollToVideos}
            >
              Explore Content
            </Button>
          </div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
          <div className="glass rounded-3xl p-6 text-center glass-hover breathing-pulse">
            <div className="text-3xl font-bold text-accent-aqua mb-2">70+</div>
            <div className="text-sm text-text-muted font-medium">Yoga Videos</div>
          </div>
          <div className="glass rounded-3xl p-6 text-center glass-hover breathing-pulse">
            <div className="text-3xl font-bold text-accent-lavender mb-2">50+</div>
            <div className="text-sm text-text-muted font-medium">Meditations</div>
          </div>
          <div className="glass rounded-3xl p-6 text-center glass-hover breathing-pulse">
            <div className="text-3xl font-bold text-accent-coral mb-2">∞</div>
            <div className="text-sm text-text-muted font-medium">Wellness</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;