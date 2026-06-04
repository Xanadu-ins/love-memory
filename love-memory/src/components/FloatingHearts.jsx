import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random()
      const size = Math.random() * 20 + 15
      const left = Math.random() * 100
      const duration = Math.random() * 3 + 4
      const delay = Math.random() * 2

      setHearts(prev => [...prev, { id, size, left, duration, delay }])

      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id))
      }, (duration + delay) * 1000)
    }

    const interval = setInterval(createHeart, 800)
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 300)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.left}%`,
            animation: `floatUp ${heart.duration}s ease-in-out ${heart.delay}s forwards`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-300 opacity-60"
            fill="#f9a8d4"
          />
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingHearts
