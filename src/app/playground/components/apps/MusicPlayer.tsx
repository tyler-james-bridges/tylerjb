'use client';

import { useState, useRef, useEffect } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  url: string;
  videoId: string;
  duration: string;
  type: 'youtube' | 'local';
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: object) => {
        destroy: () => void;
        pauseVideo: () => void;
        playVideo: () => void;
      };
      PlayerState: {
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const progMetalTracks: Track[] = [
  {
    id: 'animals-as-leaders-physical-education',
    title: 'Physical Education',
    artist: 'Animals As Leaders',
    album: 'Weightless',
    url: 'https://www.youtube.com/embed/0jpOBd949O4',
    videoId: '0jpOBd949O4',
    duration: '4:02',
    type: 'youtube'
  },
  {
    id: 'protest-the-hero-bloodmeat',
    title: 'Bloodmeat',
    artist: 'Protest the Hero',
    album: 'Fortress',
    url: 'https://www.youtube.com/embed/rhMfz4HrcEA',
    videoId: 'rhMfz4HrcEA',
    duration: '3:33',
    type: 'youtube'
  },
  {
    id: 'chon-perfect-pillow',
    title: 'Perfect Pillow',
    artist: 'Chon',
    album: 'Grow',
    url: 'https://www.youtube.com/embed/3aSX_hYpVXg',
    videoId: '3aSX_hYpVXg',
    duration: '3:26',
    type: 'youtube'
  }
];


export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<{
    destroy: () => void;
    pauseVideo: () => void;
    playVideo: () => void;
  } | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setPlayerReady(true);
      };
    } else {
      setPlayerReady(true);
    }
  }, []);

  // Initialize YouTube player when track changes
  useEffect(() => {
    if (playerReady && currentTrack) {
      // Clear previous player container
      if (playerContainerRef.current) {
        playerContainerRef.current.innerHTML = '';
      }
      
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      // Create new div for player
      const playerDiv = document.createElement('div');
      playerDiv.id = `youtube-player-${currentTrack.id}`;
      playerDiv.className = 'w-full h-full';
      
      if (playerContainerRef.current) {
        playerContainerRef.current.appendChild(playerDiv);
        
        playerRef.current = new window.YT.Player(playerDiv.id, {
          height: '100%',
          width: '100%',
          videoId: currentTrack.videoId,
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onStateChange: (event: { data: number }) => {
              // Update playing state based on YouTube player state
              const state = event.data;
              setIsPlaying(state === window.YT.PlayerState.PLAYING);
            },
          },
        });
      }
    }
  }, [playerReady, currentTrack]);

  const selectTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };


  return (
    <div className="h-full flex flex-col bg-black text-white overflow-hidden">
      {/* Spotify-style Header */}
      <div className="bg-gradient-to-b from-green-600 to-green-800 p-3 md:p-6">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-lg md:text-2xl font-bold shadow-lg flex-shrink-0">
            🎵
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl md:text-3xl font-bold text-white truncate">Tyler&apos;s Prog-Metal Picks</h1>
            <p className="text-sm md:text-base text-green-100 truncate">Curated collection • Animals As Leaders, Protest the Hero, Chon</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Sidebar - Track List */}
        <div className="w-full md:w-2/5 bg-neutral-950 border-b md:border-b-0 md:border-r border-neutral-800">
          <div className="p-3 md:p-4 border-b border-neutral-800">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-medium">Tracks</h3>
              <span className="text-xs md:text-sm text-neutral-400">{progMetalTracks.length} songs</span>
            </div>
          </div>
          
          <div className="overflow-auto">
            {progMetalTracks.map((track, index) => (
              <div
                key={track.id}
                onClick={() => selectTrack(track)}
                style={{ touchAction: 'manipulation' }}
                className={`group p-2 md:p-3 hover:bg-neutral-800 cursor-pointer transition-colors border-b border-neutral-900/50 ${
                  currentTrack?.id === track.id ? 'bg-neutral-800' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Track Number / Play Icon */}
                  <div className="w-6 h-6 flex items-center justify-center relative">
                    {currentTrack?.id === track.id ? (
                      <button 
                        className="w-4 h-4 flex items-center justify-center text-green-400 hover:text-green-300 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayPause();
                        }}
                      >
                        {isPlaying ? '⏸' : '▶'}
                      </button>
                    ) : (
                      <>
                        <span className="text-neutral-400 text-sm group-hover:opacity-0 transition-opacity duration-150">{index + 1}</span>
                        <button 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white text-sm hover:text-green-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            selectTrack(track);
                          }}
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium truncate ${currentTrack?.id === track.id ? 'text-green-400' : 'text-white'}`}>
                      {track.title}
                    </div>
                    <div className="text-sm text-neutral-400 truncate">{track.artist}</div>
                  </div>
                  
                  {/* Album and Duration */}
                  <div className="hidden md:block text-sm text-neutral-400 w-32 truncate">
                    {track.album}
                  </div>
                  <div className="text-sm text-neutral-400 w-12 text-right">
                    {track.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Now Playing */}
        <div className="flex-1 bg-gradient-to-b from-neutral-900 to-black flex flex-col min-h-0">
          {currentTrack ? (
            <>
              {/* Track Info */}
              <div className="p-4 md:p-6 border-b border-neutral-800">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-xl md:text-2xl shadow-lg flex-shrink-0">
                    🎸
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-2xl font-bold text-white mb-1 truncate">{currentTrack.title}</h2>
                    <p className="text-base md:text-lg text-neutral-300 truncate">{currentTrack.artist}</p>
                    <p className="text-xs md:text-sm text-neutral-400 truncate">{currentTrack.album} • {currentTrack.duration}</p>
                  </div>
                  <button 
                    onClick={togglePlayPause}
                    className="w-10 h-10 md:w-12 md:h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl transition-colors flex-shrink-0"
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                </div>
              </div>
              
              {/* Video Player */}
              <div className="flex-1 p-2 md:p-6">
                <div className="w-full h-full bg-black rounded-lg overflow-hidden shadow-2xl">
                  <div 
                    ref={playerContainerRef}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center text-neutral-400 max-w-md">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl md:text-4xl mb-4 md:mb-6 mx-auto shadow-lg">
                  🎸
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Start listening</h3>
                <p className="text-base md:text-lg">Select a track to dive into Tyler&apos;s prog-metal journey</p>
                <p className="text-xs md:text-sm mt-2 text-neutral-500">Animals As Leaders • Protest the Hero • Chon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
