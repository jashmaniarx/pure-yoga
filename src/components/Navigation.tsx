import { Button } from "@/components/ui/button";
import { Leaf, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-6xl content-padding">
      <div className="glass rounded-3xl px-8 py-4 flex items-center justify-between glass-hover h-16">
        {/* Logo with enhanced design */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full glass-glow flex items-center justify-center">
              <Leaf className="h-6 w-6 text-accent-aqua" />
              <div className="absolute inset-0 w-10 h-10 text-accent-lavender opacity-40 transform rotate-12 flex items-center justify-center">
                <Leaf className="h-6 w-6" />
              </div>
            </div>
          </div>
          <span className="font-bold text-2xl text-gradient tracking-wide">PureYoga</span>
        </div>
        
        {/* Navigation Links with enhanced spacing */}
        <div className="hidden md:flex items-center space-x-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-3 text-text-primary hover:text-accent-aqua transition-all duration-300 ripple hover:glass-glow"
            onClick={() => scrollToSection('home')}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-3 text-text-primary hover:text-accent-aqua transition-all duration-300 ripple hover:glass-glow"
            onClick={() => scrollToSection('videos')}
          >
            Videos
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-3 text-text-primary hover:text-accent-aqua transition-all duration-300 ripple hover:glass-glow"
            onClick={() => scrollToSection('music')}
          >
            Music
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-3 text-text-primary hover:text-accent-aqua transition-all duration-300 ripple hover:glass-glow"
            onClick={() => scrollToSection('tips')}
          >
            Tips
          </Button>
        </div>

        {/* Enhanced Theme Toggle & Get Started */}
        <div className="flex items-center space-x-4">
          <Button
            variant="glass"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-12 h-12 glass-hover ripple"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-accent-gold" />
            ) : (
              <Moon className="h-5 w-5 text-accent-lavender" />
            )}
          </Button>
          
          <Button 
            variant="coral" 
            size="sm" 
            className="hidden sm:flex px-8 py-3 rounded-2xl ripple breathing-pulse"
            onClick={() => scrollToSection('home')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;