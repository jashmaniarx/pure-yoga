import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Play, Clock, User, X, Filter } from "lucide-react";
import YouTube from "react-youtube";

interface Video {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  difficulty: string;
  category: string;
  subcategory: string;
  youtubeId: string;
  description: string;
  date: string;
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const videoDatabase: Video[] = [
  // Yoga Videos
  {
    id: 1,
    title: "Morning Sunrise Flow",
    instructor: "Sarah Chen",
    duration: "25 min",
    difficulty: "Beginner",
    category: "Yoga",
    subcategory: "Morning Flow",
    youtubeId: "v7AYKMP6rOE",
    description: "Start your day with gentle stretches and breathing exercises to awaken your body and mind.",
    date: "2024-12-15"
  },
  {
    id: 2,
    title: "Energizing Vinyasa",
    instructor: "Elena Rodriguez",
    duration: "30 min",
    difficulty: "Intermediate",
    category: "Yoga",
    subcategory: "Vinyasa",
    youtubeId: "GLy2rYHwUqY",
    description: "Dynamic flowing movements to energize your body and build strength.",
    date: "2024-11-20"
  },
  {
    id: 3,
    title: "Chair Yoga for Office Workers",
    instructor: "Marcus Johnson",
    duration: "15 min",
    difficulty: "Beginner",
    category: "Yoga",
    subcategory: "Chair Yoga",
    youtubeId: "M1vpB5WjLTM",
    description: "Perfect for those who spend long hours at a desk. Relief and rejuvenation in your chair.",
    date: "2024-10-10"
  },
  {
    id: 4,
    title: "Power Yoga Core Strength",
    instructor: "James Wilson",
    duration: "45 min",
    difficulty: "Advanced",
    category: "Yoga",
    subcategory: "Power Yoga",
    youtubeId: "4C-gxOE0j7s",
    description: "Intense core-focused power yoga session to build serious abdominal strength.",
    date: "2025-01-05"
  },
  {
    id: 5,
    title: "Restorative Evening Yoga",
    instructor: "Lisa Wang",
    duration: "35 min",
    difficulty: "Beginner",
    category: "Yoga",
    subcategory: "Restorative",
    youtubeId: "BiWnaZ2zjXI",
    description: "Gentle poses to release tension and prepare your body for restful sleep.",
    date: "2024-09-15"
  },
  {
    id: 6,
    title: "Hot 26 Bikram Sequence",
    instructor: "David Kim",
    duration: "90 min",
    difficulty: "Advanced",
    category: "Yoga",
    subcategory: "Bikram",
    youtubeId: "6p0DAz_30qQ",
    description: "Complete traditional Bikram sequence for deep detoxification and flexibility.",
    date: "2024-08-30"
  },
  // Meditation Videos
  {
    id: 7,
    title: "Mindfulness Meditation",
    instructor: "Dr. Amy Foster",
    duration: "20 min",
    difficulty: "All Levels",
    category: "Meditation",
    subcategory: "Mindfulness",
    youtubeId: "inpok4MKVLM",
    description: "Develop present-moment awareness through guided mindfulness practice.",
    date: "2024-12-01"
  },
  {
    id: 8,
    title: "Body Scan Relaxation",
    instructor: "Michael Torres",
    duration: "25 min",
    difficulty: "Beginner",
    category: "Meditation",
    subcategory: "Body Scan",
    youtubeId: "15q-N-_kkrU",
    description: "Progressive relaxation technique to release physical and mental tension.",
    date: "2024-11-15"
  },
  {
    id: 9,
    title: "Loving Kindness Meditation",
    instructor: "Sarah Chen",
    duration: "15 min",
    difficulty: "All Levels",
    category: "Meditation",
    subcategory: "Loving Kindness",
    youtubeId: "sz7cpV7ERsM",
    description: "Cultivate compassion and kindness towards yourself and others.",
    date: "2024-10-25"
  },
  {
    id: 10,
    title: "Deep Sleep Meditation",
    instructor: "Lisa Wang",
    duration: "60 min",
    difficulty: "Beginner",
    category: "Meditation",
    subcategory: "Sleep",
    youtubeId: "aXItOY0sLRY",
    description: "Guided meditation to help you fall into deep, restorative sleep.",
    date: "2024-09-20"
  }
];

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(videoDatabase);

  const categories = ["All", "Yoga", "Meditation"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    let filtered = videoDatabase.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || video.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
    
    setFilteredVideos(filtered);
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "difficulty-beginner";
      case "Intermediate": return "difficulty-intermediate";
      case "Advanced": return "difficulty-advanced";
      case "All Levels": return "difficulty-all";
      default: return "difficulty-beginner";
    }
  };

  if (!isOpen) return null;

  if (selectedVideo) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md modal-enter">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="glass rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gradient">{selectedVideo.title}</h2>
              <Button
                variant="glass"
                size="icon"
                onClick={() => setSelectedVideo(null)}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="youtube-player mb-6">
              <YouTube
                videoId={selectedVideo.youtubeId}
                opts={{
                  width: '100%',
                  height: '400',
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <User className="h-5 w-5 text-accent-aqua" />
                  <span className="text-text-secondary">{selectedVideo.instructor}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-5 w-5 text-accent-lavender" />
                  <span className="text-text-secondary">{selectedVideo.duration}</span>
                </div>
                <Badge className={`${getDifficultyColor(selectedVideo.difficulty)} mb-4`}>
                  {selectedVideo.difficulty}
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-text-primary">Description</h3>
                <p className="text-text-secondary leading-relaxed">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md modal-enter">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="glass m-4 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gradient">Video Library</h2>
            <Button
              variant="glass"
              size="icon"
              onClick={onClose}
              className="rounded-full ripple"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-aqua" />
              <Input
                placeholder="Search videos, instructors, or practice types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 glass border-glass-border custom-focus rounded-2xl h-12"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-accent-lavender" />
                <span className="text-sm text-text-muted">Category:</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "coral" : "glass"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-xl ripple"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">Difficulty:</span>
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "aqua" : "glass"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className="rounded-xl ripple"
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={() => setSelectedVideo(video)}
                getDifficultyColor={getDifficultyColor}
              />
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="glass rounded-3xl p-16 text-center">
              <p className="text-text-muted text-xl mb-4">No videos found matching your criteria.</p>
              <Button 
                variant="glass" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedDifficulty("All");
                }}
                className="rounded-2xl ripple"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({ video, onPlay, getDifficultyColor }: { 
  video: Video, 
  onPlay: () => void,
  getDifficultyColor: (difficulty: string) => string 
}) => (
  <div className="glass rounded-3xl overflow-hidden glass-hover group ripple cursor-pointer" onClick={onPlay}>
    <div className="relative h-48 bg-gradient-to-br from-accent-aqua/20 to-accent-lavender/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <Button variant="glass-glow" size="icon" className="rounded-full w-16 h-16 breathing-pulse">
          <Play className="h-6 w-6" />
        </Button>
      </div>
      <div className="text-6xl opacity-20">{video.category === 'Yoga' ? '🧘‍♀️' : '🧘‍♂️'}</div>
      <Badge className={`absolute top-4 right-4 ${getDifficultyColor(video.difficulty)} text-xs px-3 py-1`}>
        {video.difficulty}
      </Badge>
      <Badge className="absolute top-4 left-4 bg-accent-aqua/80 text-white text-xs px-3 py-1">
        {video.subcategory}
      </Badge>
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-lg text-text-primary mb-3 group-hover:text-accent-aqua transition-colors">
        {video.title}
      </h3>
      
      <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {video.instructor}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {video.duration}
        </div>
      </div>
      
      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
        {video.description}
      </p>
    </div>
  </div>
);

export default VideoModal;