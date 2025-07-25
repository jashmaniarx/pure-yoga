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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl content-padding">
      <div className="glass rounded-3xl px-8 py-4 flex items-center justify-between glass-hover h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Leaf className="h-7 w-7 text-accent-aqua" />
            <div className="absolute inset-0 h-7 w-7 text-accent-lavender opacity-60 transform rotate-12">
              <Leaf className="h-7 w-7" />
            </div>
          </div>
          <span className="font-bold text-xl text-gradient tracking-wide">PureYoga</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-2 text-text-primary hover:text-accent-aqua transition-colors"
            onClick={() => scrollToSection('home')}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-2 text-text-primary hover:text-accent-aqua transition-colors"
            onClick={() => scrollToSection('videos')}
          >
            Videos
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-2 text-text-primary hover:text-accent-aqua transition-colors"
            onClick={() => scrollToSection('music')}
          >
            Music
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-2xl px-6 py-2 text-text-primary hover:text-accent-aqua transition-colors"
            onClick={() => scrollToSection('tips')}
          >
            Tips
          </Button>
        </div>

        {/* Theme Toggle & Get Started */}
        <div className="flex items-center space-x-4">
          <Button
            variant="glass"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-12 h-12 glass-hover"
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
            className="hidden sm:flex px-6 py-2 rounded-2xl"
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