import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-6 w-6 text-accent-coral" />
            <p className="text-text-secondary text-sm text-center">
              © 2025 PureYoga | Developed by Jash Maniar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;