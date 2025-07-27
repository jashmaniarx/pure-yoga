import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, Waves, Wind, Mountain, TreePine, CloudRain, Flame, Coffee, Zap } from "lucide-react";

const ambientSounds = [
  {
    id: 1,
    title: "Ocean Waves",
    icon: Waves,
    color: "text-accent-aqua",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/water_waves_ocean_gentle_lapping_loop_001.mp3"
  },
  {
    id: 2,
    title: "Forest Breeze",
    icon: Wind,
    color: "text-accent-lavender",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/nature_forest_wind_light_breeze_through_trees_loop_001.mp3"
  },
  {
    id: 3,
    title: "Mountain Stream",
    icon: Mountain,
    color: "text-accent-coral",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/water_stream_small_flowing_loop_001.mp3"
  },
  {
    id: 4,
    title: "Pine Forest",
    icon: TreePine,
    color: "text-accent-aqua",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/nature_forest_birds_chirping_loop_001.mp3"
  },
  {
    id: 5,
    title: "Gentle Rain",
    icon: CloudRain,
    color: "text-accent-lavender",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/weather_rain_light_on_leaves_loop_001.mp3"
  },
  {
    id: 6,
    title: "Crackling Fire",
    icon: Flame,
    color: "text-accent-coral",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/fire_fireplace_crackling_loop_001.mp3"
  },
  {
    id: 7,
    title: "Coffee Shop",
    icon: Coffee,
    color: "text-accent-aqua",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/ambience_cafe_chatter_background_loop_001.mp3"
  },
  {
    id: 8,
    title: "Thunder Storm",
    icon: Zap,
    color: "text-accent-lavender",
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/weather_thunder_distant_rumble_loop_001.mp3"
  },
  {
    id: 9,
    title: "Bamboo Forest",
    icon: TreePine,
    color: "text-accent-coral",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 10,
    title: "Night Crickets",
    icon: Mountain,
    color: "text-accent-aqua",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 11,
    title: "Tibetan Bowls",
    icon: Waves,
    color: "text-accent-lavender",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 12,
    title: "Wind Chimes",
    icon: Wind,
    color: "text-accent-coral",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  }
];

interface AudioState {
  [key: number]: {
    audio: HTMLAudioElement | null;
    isPlaying: boolean;
    volume: number;
  };
}

const EnhancedMeditationMusic = () => {
  const [audioStates, setAudioStates] = useState<AudioState>({});
  const [masterVolume, setMasterVolume] = useState(50);

  useEffect(() => {
    // Initialize audio objects
    const initialStates: AudioState = {};
    ambientSounds.forEach(sound => {
      const audio = new Audio(sound.url);
      audio.loop = true;
      audio.volume = 0.5;
      initialStates[sound.id] = {
        audio,
        isPlaying: false,
        volume: 50
      };
    });
    setAudioStates(initialStates);

    // Cleanup on unmount
    return () => {
      Object.values(initialStates).forEach(state => {
        if (state.audio) {
          state.audio.pause();
          state.audio.src = '';
        }
      });
    };
  }, []);

  const toggleSound = (soundId: number) => {
    setAudioStates(prev => {
      const newStates = { ...prev };
      const currentState = newStates[soundId];
      
      if (currentState && currentState.audio) {
        if (currentState.isPlaying) {
          currentState.audio.pause();
          newStates[soundId] = { ...currentState, isPlaying: false };
        } else {
          currentState.audio.play().catch(console.error);
          newStates[soundId] = { ...currentState, isPlaying: true };
        }
      }
      
      return newStates;
    });
  };

  const handleVolumeChange = (soundId: number, volume: number[]) => {
    const newVolume = volume[0];
    setAudioStates(prev => {
      const newStates = { ...prev };
      const currentState = newStates[soundId];
      
      if (currentState && currentState.audio) {
        currentState.audio.volume = (newVolume / 100) * (masterVolume / 100);
        newStates[soundId] = { ...currentState, volume: newVolume };
      }
      
      return newStates;
    });
  };

  const handleMasterVolumeChange = (volume: number[]) => {
    const newMasterVolume = volume[0];
    setMasterVolume(newMasterVolume);
    
    // Update all audio volumes
    Object.entries(audioStates).forEach(([soundId, state]) => {
      if (state.audio) {
        state.audio.volume = (state.volume / 100) * (newMasterVolume / 100);
      }
    });
  };

  const playAll = () => {
    Object.entries(audioStates).forEach(([soundId, state]) => {
      if (state.audio && !state.isPlaying) {
        state.audio.play().catch(console.error);
      }
    });
    
    setAudioStates(prev => {
      const newStates = { ...prev };
      Object.keys(newStates).forEach(soundId => {
        newStates[parseInt(soundId)].isPlaying = true;
      });
      return newStates;
    });
  };

  const stopAll = () => {
    Object.entries(audioStates).forEach(([soundId, state]) => {
      if (state.audio) {
        state.audio.pause();
        state.audio.currentTime = 0;
      }
    });
    
    setAudioStates(prev => {
      const newStates = { ...prev };
      Object.keys(newStates).forEach(soundId => {
        newStates[parseInt(soundId)].isPlaying = false;
      });
      return newStates;
    });
  };

  return (
    <section className="section-spacing content-padding" id="music">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Ambient Soundscapes</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Layer natural sounds to create your perfect meditation environment. Mix and match for endless ambient combinations.
          </p>
        </div>

        {/* Master Controls */}
        <div className="glass rounded-3xl p-6 mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary">Master Controls</h3>
            <div className="flex gap-4">
              <Button variant="aqua" size="sm" onClick={playAll}>
                Play All
              </Button>
              <Button variant="glass" size="sm" onClick={stopAll}>
                Stop All
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Volume2 className="h-5 w-5 text-text-secondary" />
            <Slider
              value={[masterVolume]}
              onValueChange={handleMasterVolumeChange}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-text-secondary w-12">{masterVolume}%</span>
          </div>
        </div>

        {/* Sound Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ambientSounds.map((sound) => {
            const Icon = sound.icon;
            const state = audioStates[sound.id];
            const isActive = state?.isPlaying || false;
            const volume = state?.volume || 50;

            return (
              <div
                key={sound.id}
                className={`glass rounded-3xl p-6 text-center glass-hover transition-all duration-500 ripple ${
                  isActive ? "breathing-pulse glass-glow" : ""
                }`}
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4 ${sound.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary mb-1">{sound.title}</h3>
                </div>

                <div className="space-y-4">
                  <Button
                    variant={isActive ? "coral" : "glass"}
                    size="icon"
                    onClick={() => toggleSound(sound.id)}
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

        {/* Info Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto glass-hover">
            <h3 className="text-2xl font-bold text-gradient mb-4">Perfect Sound Layering</h3>
            <p className="text-text-secondary mb-6 text-lg">
              Create immersive soundscapes by combining multiple ambient tracks. Each sound can be controlled independently for the perfect meditation atmosphere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌊</div>
                <h4 className="font-semibold text-text-primary mb-1">Natural Environments</h4>
                <p className="text-sm text-text-muted">Authentic nature recordings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎛️</div>
                <h4 className="font-semibold text-text-primary mb-1">Independent Controls</h4>
                <p className="text-sm text-text-muted">Individual volume and playback</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎵</div>
                <h4 className="font-semibold text-text-primary mb-1">Endless Combinations</h4>
                <p className="text-sm text-text-muted">Mix sounds for unique atmospheres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedMeditationMusic;