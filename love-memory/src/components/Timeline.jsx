import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Gift, Plane, Star, Cake, Calendar } from 'lucide-react'

const iconMap = {
  heart: Heart,
  gift: Gift,
  plane: Plane,
  star: Star,
  cake: Cake,
}

const Timeline = () => {
  const [data, setData] = useState(null)
  const [nextAnniversary, setNextAnniversary] = useState(null)

  useEffect(() => {
    fetch('/data/timeline.json')
      .then(res => res.json())
      .then(d => {
        setData(d)
        const today = new Date()
        const currentYear = today.getFullYear()

        let nearest = null
        let nearestDiff = Infinity

        d.anniversaries.forEach(ann => {
          const [month, day] = ann.date.split('-').map(Number)
          const annDate = new Date(currentYear, month - 1, day)
          if (annDate < today) {
            annDate.setFullYear(currentYear + 1)
          }
          const diff = annDate - today
          if (diff > 0 && diff < nearestDiff) {
            nearestDiff = diff
            nearest = { ...ann, dateObj: annDate }
          }
        })

        setNextAnniversary(nearest)
      })
  }, [])

  if (!data) return null

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-pink-600" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
        时光记忆
      </h2>

      {nextAnniversary && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl p-6 text-white text-center mb-12 shadow-xl"
        >
          <Calendar className="mx-auto mb-2" size={32} />
          <p className="text-lg opacity-90">即将到来</p>
          <h3 className="text-2xl font-bold">{nextAnniversary.name}</h3>
          <p className="text-3xl font-bold mt-2">
            {Math.ceil((nextAnniversary.dateObj - new Date()) / (1000 * 60 * 60 * 24))} 天后
          </p>
        </motion.div>
      )}

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-200 rounded-full" />

        {data.events.map((event, index) => {
          const Icon = iconMap[event.icon] || Heart
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg ${isLeft ? 'mr-4' : 'ml-4'}`}>
                  <p className="text-sm text-pink-400 font-medium">{event.date}</p>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center shadow-lg z-10">
                <Icon size={24} className="text-white" />
              </div>

              <div className="w-1/2" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
