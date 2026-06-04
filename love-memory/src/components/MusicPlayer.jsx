import { useState, useRef, useEffect } from 'react'
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        preload="auto"
      />

      {showPanel && (
        <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 w-48">
          <div className="flex items-center gap-2 mb-3">
            <Music size={18} className="text-pink-500" />
            <span className="text-sm text-gray-600">背景音乐</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center hover:bg-pink-200 transition-all"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowPanel(!showPanel)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Music size={24} />
      </button>
    </div>
  )
}

export default MusicPlayer
