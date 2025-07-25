import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Play, Clock, User, ChevronDown, ChevronUp } from "lucide-react";
import yogaPose1 from "@/assets/yoga-pose-1.jpg";
import meditation1 from "@/assets/meditation-1.jpg";

const videoCategories = {
  "Morning Yoga": [
    {
      id: 1,
      title: "Sunrise Flow",
      instructor: "Sarah Chen",
      duration: "25 min",
      difficulty: "Beginner",
      subcategory: "Gentle Flow",
      thumbnail: yogaPose1,
      description: "Start your day with gentle stretches and breathing exercises"
    },
    {
      id: 2,
      title: "Energizing Vinyasa",
      instructor: "Elena Rodriguez",
      duration: "30 min",
      difficulty: "Intermediate",
      subcategory: "Dynamic Flow",
      thumbnail: yogaPose1,
      description: "Wake up your body with flowing movements"
    },
    {
      id: 3,
      title: "Morning Meditation",
      instructor: "Marcus Johnson",
      duration: "15 min",
      difficulty: "All Levels",
      subcategory: "Mindfulness",
      thumbnail: meditation1,
      description: "Set your intentions for the day ahead"
    }
  ],
  "Evening Yoga": [
    {
      id: 4,
      title: "Sunset Restorative",
      instructor: "Lisa Wang",
      duration: "35 min",
      difficulty: "Beginner",
      subcategory: "Restorative",
      thumbnail: yogaPose1,
      description: "Gentle poses to release the day's tension"
    },
    {
      id: 5,
      title: "Bedtime Yin",
      instructor: "David Kim",
      duration: "40 min",
      difficulty: "All Levels",
      subcategory: "Yin Yoga",
      thumbnail: yogaPose1,
      description: "Deep stretches to prepare for restful sleep"
    }
  ],
  "Power Yoga": [
    {
      id: 6,
      title: "Core Strength Flow",
      instructor: "James Wilson",
      duration: "45 min",
      difficulty: "Advanced",
      subcategory: "Strength Building",
      thumbnail: yogaPose1,
      description: "Build core strength and stability"
    },
    {
      id: 7,
      title: "Athletic Vinyasa",
      instructor: "Elena Rodriguez",
      duration: "50 min",
      difficulty: "Advanced",
      subcategory: "High Intensity",
      thumbnail: yogaPose1,
      description: "Challenge your limits with dynamic sequences"
    }
  ],
  "Chair Yoga": [
    {
      id: 8,
      title: "Office Break Stretches",
      instructor: "Lisa Wang",
      duration: "12 min",
      difficulty: "Beginner",
      subcategory: "Desk Yoga",
      thumbnail: yogaPose1,
      description: "Desk-friendly yoga stretches you can do anywhere"
    },
    {
      id: 9,
      title: "Senior Gentle Flow",
      instructor: "Marcus Johnson",
      duration: "20 min",
      difficulty: "Beginner",
      subcategory: "Accessible Yoga",
      thumbnail: yogaPose1,
      description: "Gentle movements for all ages and abilities"
    }
  ],
  "Meditation": [
    {
      id: 10,
      title: "Mindfulness Meditation",
      instructor: "David Kim",
      duration: "20 min",
      difficulty: "All Levels",
      subcategory: "Mindfulness",
      thumbnail: meditation1,
      description: "Develop present moment awareness"
    },
    {
      id: 11,
      title: "Body Scan Relaxation",
      instructor: "Sarah Chen",
      duration: "25 min",
      difficulty: "Beginner",
      subcategory: "Relaxation",
      thumbnail: meditation1,
      description: "Deep relaxation for body and mind"
    },
    {
      id: 12,
      title: "Walking Meditation",
      instructor: "James Wilson",
      duration: "30 min",
      difficulty: "All Levels",
      subcategory: "Movement Meditation",
      thumbnail: meditation1,
      description: "Mindful movement in nature"
    }
  ]
};

const VideoLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const difficulties = ["All", "Beginner", "All Levels", "Intermediate", "Advanced"];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getAllVideos = () => {
    return Object.values(videoCategories).flat();
  };

  const getFilteredVideos = () => {
    const allVideos = getAllVideos();
    return allVideos.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = selectedDifficulty === "All" || video.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesDifficulty;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "All Levels": return "bg-blue-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const handleSearchFocus = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <section className="section-spacing content-padding" id="videos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Video Library</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of yoga flows and guided meditations, expertly crafted for every level and lifestyle
          </p>
        </div>

        {/* Enhanced Search Bar - Always Visible */}
        <div className="glass rounded-3xl p-8 mb-12 max-w-4xl mx-auto glass-hover">
          <div className="relative mb-6">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-accent-aqua" />
            <Input
              placeholder="Search videos, instructors, or practice types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleSearchFocus}
              className="pl-16 pr-6 bg-transparent border-glass-border text-text-primary placeholder:text-text-muted rounded-2xl h-16 text-lg glass-hover"
            />
          </div>
          
          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "coral" : "glass"}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
                className="rounded-2xl px-6 py-3 text-sm font-medium glass-hover"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Expandable Video Categories */}
        <div className={`transition-all duration-700 ease-in-out ${isExpanded ? 'opacity-100 max-h-none' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {searchTerm ? (
            // Filtered Results View
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                Search Results ({getFilteredVideos().length} videos found)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredVideos().map((video) => (
                  <VideoCard key={video.id} video={video} getDifficultyColor={getDifficultyColor} />
                ))}
              </div>
            </div>
          ) : (
            // Categorized View
            <div className="space-y-12">
              {Object.entries(videoCategories).map(([category, videos]) => (
                <div key={category} className="glass rounded-3xl p-8 glass-hover">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between mb-6 text-left group"
                  >
                    <h3 className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform">
                      {category}
                    </h3>
                    <div className="glass rounded-full p-3 group-hover:scale-110 transition-transform">
                      {expandedCategories[category] ? (
                        <ChevronUp className="h-6 w-6 text-accent-aqua" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-accent-aqua" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${
                    expandedCategories[category] 
                      ? 'opacity-100 max-h-none' 
                      : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {videos
                        .filter(video => selectedDifficulty === "All" || video.difficulty === selectedDifficulty)
                        .map((video) => (
                          <VideoCard key={video.id} video={video} getDifficultyColor={getDifficultyColor} />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {searchTerm && getFilteredVideos().length === 0 && (
            <div className="glass rounded-3xl p-16 text-center">
              <p className="text-text-muted text-xl mb-4">No videos found matching your criteria.</p>
              <Button 
                variant="glass" 
                onClick={() => setSearchTerm("")}
                className="rounded-2xl px-6 py-3"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* Expand/Collapse Toggle */}
        {!isExpanded && (
          <div className="text-center mt-12">
            <Button
              variant="aqua"
              size="lg"
              onClick={() => setIsExpanded(true)}
              className="px-12 py-4 text-lg rounded-3xl glass-hover"
            >
              Explore All Videos
              <ChevronDown className="h-6 w-6 ml-3" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

// Video Card Component
const VideoCard = ({ video, getDifficultyColor }: { video: any, getDifficultyColor: (difficulty: string) => string }) => (
  <div className="glass rounded-3xl overflow-hidden glass-hover group ripple-click">
    <div className="relative">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <Button variant="glass-glow" size="icon" className="rounded-full w-20 h-20 breathing-pulse">
          <Play className="h-8 w-8" />
        </Button>
      </div>
      <Badge className={`absolute top-4 right-4 ${getDifficultyColor(video.difficulty)} text-white text-xs px-3 py-1`}>
        {video.difficulty}
      </Badge>
      <Badge className="absolute top-4 left-4 bg-accent-aqua/80 text-white text-xs px-3 py-1">
        {video.subcategory}
      </Badge>
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-xl text-text-primary mb-3 group-hover:text-accent-aqua transition-colors">
        {video.title}
      </h3>
      
      <div className="flex items-center gap-6 text-sm text-text-muted mb-4">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {video.instructor}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {video.duration}
        </div>
      </div>
      
      <p className="text-sm text-text-secondary leading-relaxed">
        {video.description}
      </p>
    </div>
  </div>
);

export default VideoLibrary;