import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, X, Waves, Wind, Mountain, TreePine, CloudRain, Flame, Snowflake, Sun } from "lucide-react";
import YouTube from "react-youtube";

interface AmbientSound {
  id: number;
  title: string;
  youtubeId: string;
  icon: any;
  color: string;
  category: string;
}

interface SoundMixerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ambientSounds: AmbientSound[] = [
  {
    id: 1,
    title: "Ocean Waves",
    youtubeId: "V1PrZZhjr3E",
    icon: Waves,
    color: "text-accent-aqua",
    category: "Water"
  },
  {
    id: 2,
    title: "Forest Breeze",
    youtubeId: "eKFTSSKCzWA",
    icon: Wind,
    color: "text-accent-lavender",
    category: "Nature"
  },
  {
    id: 3,
    title: "Mountain Stream",
    youtubeId: "xNN7iTA57jM",
    icon: Mountain,
    color: "text-accent-coral",
    category: "Water"
  },
  {
    id: 4,
    title: "Pine Forest",
    youtubeId: "d0tU18Ybcvk",
    icon: TreePine,
    color: "text-accent-aqua",
    category: "Nature"
  },
  {
    id: 5,
    title: "Gentle Rain",
    youtubeId: "mPZkdNFkNps",
    icon: CloudRain,
    color: "text-accent-lavender",
    category: "Weather"
  },
  {
    id: 6,
    title: "Crackling Fire",
    youtubeId: "L_LUpnjgPso",
    icon: Flame,
    color: "text-accent-coral",
    category: "Fire"
  },
  {
    id: 7,
    title: "Winter Wind",
    youtubeId: "DbsqiVJ6MzY",
    icon: Snowflake,
    color: "text-accent-aqua",
    category: "Weather"
  },
  {
    id: 8,
    title: "Summer Meadow",
    youtubeId: "45LqY96c7ss",
    icon: Sun,
    color: "text-accent-gold",
    category: "Nature"
  }
];

const SoundMixer = ({ isOpen, onClose }: SoundMixerProps) => {
  const [activeSounds, setActiveSounds] = useState<{ [key: number]: boolean }>({});
  const [volumes, setVolumes] = useState<{ [key: number]: number }>({});
  const [players, setPlayers] = useState<{ [key: number]: any }>({});

  const handleToggleSound = (soundId: number) => {
    const player = players[soundId];
    if (player) {
      if (activeSounds[soundId]) {
        player.pauseVideo();
        setActiveSounds(prev => ({ ...prev, [soundId]: false }));
      } else {
        player.playVideo();
        setActiveSounds(prev => ({ ...prev, [soundId]: true }));
      }
    }
  };

  const handleVolumeChange = (soundId: number, volume: number[]) => {
    setVolumes(prev => ({ ...prev, [soundId]: volume[0] }));
    const player = players[soundId];
    if (player) {
      player.setVolume(volume[0]);
    }
  };

  const onPlayerReady = (event: any, soundId: number) => {
    setPlayers(prev => ({ ...prev, [soundId]: event.target }));
    setVolumes(prev => ({ ...prev, [soundId]: 50 }));
    event.target.setVolume(50);
  };

  const categorizedSounds = ambientSounds.reduce((acc, sound) => {
    if (!acc[sound.category]) {
      acc[sound.category] = [];
    }
    acc[sound.category].push(sound);
    return acc;
  }, {} as { [key: string]: AmbientSound[] });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md modal-enter">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="glass rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">Premium Sound Mixer</h2>
              <p className="text-text-secondary">Mix and layer ambient sounds to create your perfect atmosphere</p>
            </div>
            <Button
              variant="glass"
              size="icon"
              onClick={onClose}
              className="rounded-full ripple"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mixing Console */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ambientSounds.map((sound) => {
              const Icon = sound.icon;
              const isActive = activeSounds[sound.id];
              const volume = volumes[sound.id] || 50;

              return (
                <div
                  key={sound.id}
                  className={`glass rounded-3xl p-6 text-center glass-hover transition-all duration-500 ${
                    isActive ? "breathing-pulse glass-glow" : ""
                  }`}
                >
                  {/* Hidden YouTube Player */}
                  <div className="hidden">
                    <YouTube
                      videoId={sound.youtubeId}
                      opts={{
                        width: '1',
                        height: '1',
                        playerVars: {
                          autoplay: 0,
                          loop: 1,
                          playlist: sound.youtubeId,
                        },
                      }}
                      onReady={(event) => onPlayerReady(event, sound.id)}
                    />
                  </div>

                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4 ${sound.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg text-text-primary mb-1">{sound.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {sound.category}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <Button
                      variant={isActive ? "coral" : "glass"}
                      size="icon"
                      onClick={() => handleToggleSound(sound.id)}
                      className="w-12 h-12 rounded-full mx-auto ripple"
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
                        onValueChange={(value) => handleVolumeChange(sound.id, value)}
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

          {/* Global Controls */}
          <div className="mt-8 glass rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gradient mb-4 text-center">Master Controls</h3>
            <div className="flex justify-center gap-4">
              <Button
                variant="aqua"
                onClick={() => {
                  Object.values(players).forEach((player) => {
                    if (player) player.pauseVideo();
                  });
                  setActiveSounds({});
                }}
                className="ripple"
              >
                Stop All
              </Button>
              <Button
                variant="aqua"
                onClick={() => {
                  Object.keys(players).forEach((soundId) => {
                    const id = parseInt(soundId);
                    const player = players[id];
                    if (player) {
                      player.playVideo();
                      setActiveSounds(prev => ({ ...prev, [id]: true }));
                    }
                  });
                }}
                className="ripple"
              >
                Play All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundMixer;