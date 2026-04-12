'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Halo! Saya asisten virtual VALF.io. Ada yang bisa saya bantu terkait layanan Web Development atau IoT kami?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const apiUrl = process.env.NEXT_PUBLIC_GEMINI_API_URL;

      const systemPrompt = `
        Anda adalah asisten virtual untuk VALF.io, sebuah perusahaan teknologi yang bergerak di bidang Web Development dan IoT (Internet of Things).
        Layanan kami meliputi:
        1. Modern Web Development: Membangun aplikasi web yang cepat, interaktif, dan SEO-optimized menggunakan Next.js dan React.
        2. Advanced IoT Solutions: Monitoring pintar, otomasi industri, dan hardware kustom.
        Founders kami adalah Alfi Ihktiar (CEO) dan Vargas Braja Pamungkas (CTO).
        Gunakan nada bicara yang profesional, inovatif, dan sangat menolong. Jawablah pertanyaan klien seputar jasa kami dengan detail dan menarik.
      `;

      const response = await fetch(`${apiUrl}?key=${apiKey}&alt=sse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: systemPrompt + "\n\nClient: " + input }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 1000,
          }
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch from Gemini');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.replace('data: ', ''));
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
              assistantContent += text;

              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = assistantContent;
                return newMessages;
              });
            } catch (e) {

            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Maaf, terjadi kesalahan saat menghubungi server. Silakan coba lagi nanti." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 ${isOpen ? 'bg-foreground text-background rotate-90' : 'bg-primary text-white'
          }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[500px] glass rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-6 bg-primary/10 border-b border-foreground/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">VALF AI Assistant</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-muted">Always Active</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-foreground/5 text-foreground rounded-tl-none border border-foreground/5'
                    }`}
                >
                  {m.content || (isLoading && i === messages.length - 1 ? <Loader2 className="animate-spin w-4 h-4" /> : null)}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-foreground/5 bg-background/50">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan sesuatu..."
                className="w-full bg-foreground/5 border border-foreground/10 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-2 text-primary hover:text-sky-500 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
