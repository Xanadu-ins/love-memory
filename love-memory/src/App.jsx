import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Camera, Clock, MessageCircle } from 'lucide-react'
import FloatingHearts from './components/FloatingHearts'
import MusicPlayer from './components/MusicPlayer'
import PhotoWall from './components/PhotoWall'
import Timeline from './components/Timeline'
import MessageBoard from './components/MessageBoard'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [coupleData, setCoupleData] = useState(null)
  const [days, setDays] = useState(0)

  useEffect(() => {
    fetch('/data/timeline.json')
      .then(res => res.json())
      .then(data => {
        setCoupleData(data)
        const togetherDate = new Date(data.couple.togetherDate)
        const today = new Date()
        const diffTime = Math.abs(today - togetherDate)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        setDays(diffDays)
      })
  }, [])

  const tabs = [
    { id: 'home', label: '首页', icon: Heart },
    { id: 'photos', label: '相册', icon: Camera },
    { id: 'timeline', label: '时光', icon: Clock },
    { id: 'messages', label: '留言', icon: MessageCircle },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg flex gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md'
                    : 'text-gray-600 hover:bg-pink-50'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {coupleData && (
                <>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                      {coupleData.couple.name1} & {coupleData.couple.name2}
                    </h1>
                    <p className="text-2xl text-pink-400">永远在一起</p>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-md mx-auto"
                  >
                    <p className="text-gray-600 mb-2">我们已经在一起</p>
                    <div className="flex items-center justify-center gap-4">
                      <motion.span
                        className="text-7xl font-bold text-pink-500"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        {days}
                      </motion.span>
                      <span className="text-3xl text-gray-600">天</span>
                    </div>
                    <p className="text-gray-500 mt-4">
                      {new Date(coupleData.couple.togetherDate).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </motion.div>

                  <motion.div
                    className="mt-12 flex justify-center gap-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Heart
                        key={i}
                        className="text-pink-300"
                        size={24 + i * 8}
                        fill="#f9a8d4"
                      />
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>
          )}

          {activeTab === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <PhotoWall />
            </motion.div>
          )}

          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Timeline />
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <MessageBoard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
