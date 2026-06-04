import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'

const PhotoWall = () => {
  const [photos, setPhotos] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [filter, setFilter] = useState('全部')

  useEffect(() => {
    fetch('/data/photos.json')
      .then(res => res.json())
      .then(data => setPhotos(data.photos))
  }, [])

  const categories = ['全部', ...new Set(photos.map(p => p.category))]

  const filteredPhotos = filter === '全部'
    ? photos
    : photos.filter(p => p.category === filter)

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-pink-600" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
        我们的相册
      </h2>

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-pink-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-pink-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="photo-card relative rounded-2xl overflow-hidden cursor-pointer bg-white p-2 shadow-md"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-3">
              <h3 className="font-medium text-gray-800">{photo.title}</h3>
              <p className="text-sm text-gray-500">{photo.date}</p>
            </div>
            <div className="absolute top-4 right-4">
              <Heart size={20} className="text-pink-400" fill="#f9a8d4" />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-gray-600 hover:bg-white transition-all z-10"
            >
              <X size={20} />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedPhoto.title}</h3>
              <p className="text-gray-600">{selectedPhoto.description}</p>
              <p className="text-sm text-pink-400 mt-2">{selectedPhoto.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default PhotoWall
