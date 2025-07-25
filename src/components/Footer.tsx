import { Button } from "@/components/ui/button";
import { Heart, Instagram, Youtube, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Heart className="h-6 w-6 text-accent-coral" />
                <span className="font-bold text-xl text-gradient">PureYoga</span>
              </div>
              <p className="text-text-secondary text-sm">
                Your digital sanctuary for yoga, meditation, and pure wellness
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <Button variant="glass" size="icon" className="rounded-full glass-hover">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="rounded-full glass-hover">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="rounded-full glass-hover">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="rounded-full glass-hover">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Developer Credit */}
            <div className="text-center md:text-right">
              <p className="text-text-muted text-sm">
                Crafted with ♡ by{" "}
                <span className="font-semibold text-gradient">Jash Maniar</span>
              </p>
              <p className="text-xs text-text-muted mt-1">
                © 2024 PureYoga. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;