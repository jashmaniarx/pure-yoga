import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import VideoModal from "./VideoModal";


const VideoLibrary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section-spacing content-padding" id="videos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Video Library</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Access 90+ premium yoga flows and guided meditations from expert instructors
            </p>
          </div>

          {/* Floating Search Bar - Collapsed State */}
          <div className="flex justify-center">
            <div 
              className="glass rounded-3xl p-8 max-w-2xl w-full glass-hover cursor-pointer ripple"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-accent-aqua breathing-pulse" />
                <Input
                  placeholder="Search 90+ videos, instructors, meditation guides..."
                  readOnly
                  className="pl-16 pr-6 bg-transparent border-none text-text-primary placeholder:text-text-muted rounded-2xl h-16 text-lg cursor-pointer focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-center mt-4 text-text-muted">
                <span className="text-sm">Click to explore our complete video library</span>
              </div>
            </div>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="glass rounded-3xl p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent-aqua mb-2">90+</div>
              <div className="text-sm text-text-muted">Video Sessions</div>
            </div>
            <div className="glass rounded-3xl p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent-lavender mb-2">15+</div>
              <div className="text-sm text-text-muted">Expert Instructors</div>
            </div>
            <div className="glass rounded-3xl p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent-coral mb-2">2024-25</div>
              <div className="text-sm text-text-muted">Latest Content</div>
            </div>
            <div className="glass rounded-3xl p-6 text-center glass-hover">
              <div className="text-3xl font-bold text-accent-gold mb-2">HD</div>
              <div className="text-sm text-text-muted">Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default VideoLibrary;