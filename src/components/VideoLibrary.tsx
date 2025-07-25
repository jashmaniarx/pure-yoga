import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Clock, Users } from "lucide-react";
import yogaPose1 from "@/assets/yoga-pose-1.jpg";
import meditation1 from "@/assets/meditation-1.jpg";

const videos = [
  {
    id: 1,
    title: "Morning Sun Salutation",
    duration: "15 min",
    level: "Beginner",
    instructor: "Sarah Chen",
    thumbnail: yogaPose1,
    category: "yoga"
  },
  {
    id: 2,
    title: "Deep Breathing Meditation",
    duration: "10 min",
    level: "All Levels",
    instructor: "Marcus Bell",
    thumbnail: meditation1,
    category: "meditation"
  },
  {
    id: 3,
    title: "Warrior Flow Sequence",
    duration: "25 min",
    level: "Intermediate",
    instructor: "Luna Park",
    thumbnail: yogaPose1,
    category: "yoga"
  },
  {
    id: 4,
    title: "Mindfulness for Sleep",
    duration: "20 min",
    level: "All Levels",
    instructor: "Dr. James River",
    thumbnail: meditation1,
    category: "meditation"
  },
  {
    id: 5,
    title: "Power Yoga Challenge",
    duration: "35 min",
    level: "Advanced",
    instructor: "Alex Storm",
    thumbnail: yogaPose1,
    category: "yoga"
  },
  {
    id: 6,
    title: "Stress Relief Meditation",
    duration: "12 min",
    level: "Beginner",
    instructor: "Emma Calm",
    thumbnail: meditation1,
    category: "meditation"
  }
];

const VideoLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || video.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-20 px-4" id="videos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Video Library</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover guided yoga sessions and meditation practices for every level and mood
          </p>
        </div>

        {/* Search and Filters */}
        <div className="glass rounded-3xl p-6 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
              <Input
                placeholder="Search videos, instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 glass border-0 rounded-2xl h-12 text-base placeholder:text-text-muted"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={activeFilter === "all" ? "aqua" : "glass"}
                size="sm"
                onClick={() => setActiveFilter("all")}
              >
                All
              </Button>
              <Button
                variant={activeFilter === "yoga" ? "aqua" : "glass"}
                size="sm"
                onClick={() => setActiveFilter("yoga")}
              >
                Yoga
              </Button>
              <Button
                variant={activeFilter === "meditation" ? "aqua" : "glass"}
                size="sm"
                onClick={() => setActiveFilter("meditation")}
              >
                Meditation
              </Button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="glass rounded-3xl overflow-hidden glass-hover group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="glass-glow" size="icon" className="rounded-full h-16 w-16">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-text-primary">{video.level}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-text-primary">{video.title}</h3>
                <p className="text-text-secondary mb-4">with {video.instructor}</p>
                
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {video.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {Math.floor(Math.random() * 1000) + 100}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="glass rounded-3xl p-8 max-w-md mx-auto">
              <p className="text-text-secondary">No videos found matching your search.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoLibrary;