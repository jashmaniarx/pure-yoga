import { Button } from "@/components/ui/button";
import { Heart, Home, Play, BookOpen, Music } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="glass rounded-3xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-accent-coral" />
          <span className="font-bold text-lg text-gradient">Serenity</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="rounded-xl">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button variant="ghost" size="sm" className="rounded-xl">
            <Play className="h-4 w-4 mr-2" />
            Videos
          </Button>
          <Button variant="ghost" size="sm" className="rounded-xl">
            <Music className="h-4 w-4 mr-2" />
            Music
          </Button>
          <Button variant="ghost" size="sm" className="rounded-xl">
            <BookOpen className="h-4 w-4 mr-2" />
            Tips
          </Button>
        </div>

        <Button variant="coral" size="sm" className="hidden sm:flex">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;