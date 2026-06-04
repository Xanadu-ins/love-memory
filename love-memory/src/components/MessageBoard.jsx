import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const MessageBoard = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [author, setAuthor] = useState('小明')

  useEffect(() => {
    fetch('/data/messages.json')
      .then(res => res.json())
      .then(data => setMessages(data.messages))
  }, [])

  const handleSend = () => {
    if (!newMessage.trim()) return

    const msg = {
      id: Date.now(),
      author,
      content: newMessage,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, msg])
    setNewMessage('')
  }

  const colors = {
    '小明': 'from-pink-400 to-rose-400',
    '小红': 'from-purple-400 to-pink-400'
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-pink-600" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
        甜蜜留言
      </h2>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-8">
        <div className="flex gap-4 mb-4">
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="px-4 py-2 rounded-full border-2 border-pink-200 text-gray-700 focus:outline-none focus:border-pink-400"
          >
            <option value="小明">小明</option>
            <option value="小红">小红</option>
          </select>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="写下你想对TA说的话..."
            className="flex-1 px-4 py-2 rounded-full border-2 border-pink-200 focus:outline-none focus:border-pink-400"
          />
          <button
            onClick={handleSend}
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            发送
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center">
          提示：留言保存在本地，刷新后数据来自 JSON 文件
        </p>
      </div>

      <div className="space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${msg.author === '小明' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[70%] ${msg.author === '小明' ? 'order-2' : 'order-1'}`}>
              <div className={`bg-gradient-to-r ${colors[msg.author] || 'from-pink-400 to-rose-400'} rounded-2xl p-4 text-white shadow-md`}>
                <p className="text-lg">{msg.content}</p>
                <div className="flex items-center justify-end gap-2 mt-2 text-sm opacity-80">
                  <span>{msg.date} {msg.time}</span>
                  <Heart size={14} fill="white" />
                </div>
              </div>
              <p className={`text-sm text-gray-500 mt-1 ${msg.author === '小明' ? 'text-left' : 'text-right'}`}>
                {msg.author}
              </p>
            </div>
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${colors[msg.author] || 'from-pink-400 to-rose-400'} flex items-center justify-center text-white font-bold shadow-md ${msg.author === '小明' ? 'order-1 mr-3' : 'order-2 ml-3'}`}>
              {msg.author[0]}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MessageBoard
