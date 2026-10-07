import { useState } from 'react';
import { api } from '../services/api';
import { Bot, User, Send, FileText, AlertTriangle } from 'lucide-react';

export default function AIResearch() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string, sources?: any[] }[]>([
    { role: 'ai', content: 'Hello! I am the IntoTheSpace AI Research Assistant. Ask me anything about microgravity combustion, flame behavior, or spacecraft fire safety.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const res = await api.chat(userMsg);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: res.answer,
        sources: res.sources
      }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Error connecting to AI service. Please try again.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col h-[calc(100vh-4rem)]">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI Research Assistant</h1>
        <span className="text-xs bg-card px-2 py-1 rounded border border-white/10 flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> System Ready
        </span>
      </div>
      
      <div className="flex-grow glass-panel overflow-hidden flex flex-col">
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary' : 'bg-accent'}`}>
                  {msg.role === 'user' ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                </div>
                <div className={`p-4 rounded-xl ${msg.role === 'user' ? 'bg-primary/20 rounded-tr-none border border-primary/30' : 'bg-white/5 rounded-tl-none border border-white/10'}`}>
                  <div className="prose prose-invert max-w-none text-sm md:text-base leading-relaxed">
                    {msg.content}
                  </div>
                  
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Retrieved Sources</p>
                      <ul className="space-y-2">
                        {msg.sources.map((src, idx) => (
                          <li key={idx} className="flex items-start text-xs bg-black/30 p-2 rounded">
                            <FileText className="w-3 h-3 mr-2 mt-0.5 text-primary shrink-0" />
                            <span className="text-gray-300">
                              <span className="font-medium text-white">{src.title}</span> - {src.source}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex items-start text-xs text-yellow-500/80">
                        <AlertTriangle className="w-3 h-3 mr-1.5 shrink-0 mt-0.5" />
                        AI-generated summary based on retrieved research. This is not official NASA safety guidance.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Bot className="w-6 h-6 animate-pulse" />
                </div>
                <div className="bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-black/40 border-t border-white/10">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question about combustion research..."
              className="w-full bg-card border border-white/20 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-primary transition text-sm md:text-base"
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading || !input.trim()}
              className="absolute right-2 p-2 text-primary hover:text-white disabled:opacity-50 transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="mt-2 text-center text-xs text-gray-500">
            IntoTheSpace uses a local RAG pipeline with Fallback AI for demonstrations.
          </div>
        </div>
      </div>
    </div>
  );
}
