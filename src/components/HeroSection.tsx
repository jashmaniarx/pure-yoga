import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 mb-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent-aqua" />
            <span className="text-sm font-medium text-text-secondary">Your Journey to Inner Peace</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Transform</span> Your Mind,{" "}
            <span className="text-gradient">Strengthen</span> Your Body
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect harmony of yoga and meditation with our curated collection 
            of guided sessions, peaceful music, and wellness wisdom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="coral" size="lg" className="w-full sm:w-auto">
              <Play className="h-5 w-5 mr-2" />
              Start Your Practice
            </Button>
            <Button variant="glass-glow" size="lg" className="w-full sm:w-auto">
              Explore Content
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="glass rounded-2xl p-4 text-center glass-hover">
            <div className="text-2xl font-bold text-accent-aqua">100+</div>
            <div className="text-sm text-text-muted">Yoga Videos</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center glass-hover">
            <div className="text-2xl font-bold text-accent-lavender">50+</div>
            <div className="text-sm text-text-muted">Meditations</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center glass-hover">
            <div className="text-2xl font-bold text-accent-coral">24/7</div>
            <div className="text-sm text-text-muted">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;