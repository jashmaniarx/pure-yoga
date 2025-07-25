import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, Waves, Wind, Mountain, TreePine, CloudRain } from "lucide-react";

const musicTracks = [
  {
    id: 1,
    title: "Ocean Waves",
    duration: "30:00",
    icon: Waves,
    color: "text-accent-aqua"
  },
  {
    id: 2,
    title: "Forest Breeze",
    duration: "25:00",
    icon: Wind,
    color: "text-accent-lavender"
  },
  {
    id: 3,
    title: "Mountain Stream",
    duration: "40:00",
    icon: Mountain,
    color: "text-accent-coral"
  },
  {
    id: 4,
    title: "Pine Forest",
    duration: "35:00",
    icon: TreePine,
    color: "text-accent-aqua"
  },
  {
    id: 5,
    title: "Gentle Rain",
    duration: "45:00",
    icon: CloudRain,
    color: "text-accent-lavender"
  }
];

const MeditationMusic = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [volumes, setVolumes] = useState<{ [key: number]: number }>({});

  const togglePlay = (trackId: number) => {
    setActiveTrack(activeTrack === trackId ? null : trackId);
  };

  const handleVolumeChange = (trackId: number, volume: number[]) => {
    setVolumes(prev => ({ ...prev, [trackId]: volume[0] }));
  };

  return (
    <section className="py-20 px-4" id="music">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meditation Sounds</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Immerse yourself in nature's calming sounds to enhance your meditation practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {musicTracks.map((track) => {
            const Icon = track.icon;
            const isActive = activeTrack === track.id;
            const volume = volumes[track.id] || 50;

            return (
              <div
                key={track.id}
                className={`glass rounded-3xl p-6 text-center glass-hover transition-all duration-500 ${
                  isActive ? "breathing-pulse glass-glow" : ""
                }`}
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4 ${track.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary mb-1">{track.title}</h3>
                  <p className="text-sm text-text-muted">{track.duration}</p>
                </div>

                <div className="space-y-4">
                  <Button
                    variant={isActive ? "coral" : "glass"}
                    size="icon"
                    onClick={() => togglePlay(track.id)}
                    className="w-12 h-12 rounded-full mx-auto"
                  >
                    {isActive ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-text-muted">
                      <Volume2 className="h-4 w-4" />
                      <span>{volume}%</span>
                    </div>
                    <Slider
                      value={[volume]}
                      onValueChange={(value) => handleVolumeChange(track.id, value)}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="glass rounded-3xl p-6 max-w-2xl mx-auto">
            <p className="text-text-secondary mb-4">
              Create your perfect ambient environment by mixing multiple sounds
            </p>
            <Button variant="aqua" size="lg">
              Explore Premium Sounds
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationMusic;