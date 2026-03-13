import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { Send, Bot, User, Loader2 } from 'lucide-react';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'হ্যালো! আমি বর্ণালী সুপার হোমের এআই অ্যাসিস্ট্যান্ট। আমাদের হোস্টেল সম্পর্কে আপনার কোনো প্রশ্ন থাকলে আমাকে জিজ্ঞাসা করতে পারেন।',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Only scroll if there are new messages added by the user or AI
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', text: userMessage },
    ]);
    setIsLoading(true);

    try {
      const systemInstruction = `You are a helpful, polite, and professional virtual assistant for "Bornali Super Home" (বর্ণালী সুপার হোম), a premium bachelor hostel in Dhaka. 
      Answer questions in Bengali or English based on the user's language. 
      Keep answers concise, friendly, and highly relevant to the provided hostel information. Do not make up any information. If you don't know the answer, politely ask the user to contact the hostel directly.
      
      **Hostel Information:**
      - **Name:** Bornali Super Home (বর্ণালী সুপার হোম)
      - **Tagline:** আপনার নির্ভরযোগ্য ঠিকানা (Your reliable address)
      - **Address:** ফার্মগেট, কনকর্ড টাওয়ারের পিছনে, ঢাকা (Farmgate, Behind Concord Tower, Dhaka).
      - **Phone Number / Call Number:** 01612-550246
      - **WhatsApp Number:** 01612-550246
      
      **Facilities:**
      - ৩ বেলা খাবার (3 healthy and nutritious meals a day: breakfast, lunch, and dinner)
      - ফ্রি ওয়াই-ফাই (Free High-Speed Wi-Fi)
      - ২৪/৭ সিসিটিভি নিরাপত্তা (24/7 CCTV security and security guards)
      - বিশুদ্ধ খাবার পানি (Pure drinking water)
      - জেনারেটর (Generator backup)
      - এসি/নন-এসি রুম (AC and Non-AC rooms available)
      - লকার সুবিধা (Personal Locker facility)
      - কমন রুম (Common room for entertainment)
      - ২৪ ঘন্টা সার্ভিস (24-hour service)
      
      **Room Packages:**
      - **Standard Room:** Non-AC, Shared Bath.
      - **Premium Room:** AC, Shared Bath.
      - **VIP Room:** AC, Attached Bath, Single or Double occupancy.
      *(Note: For current pricing and availability, always advise the user to call or WhatsApp at 01612-550246).*
      
      **Rules & Booking:**
      - **Booking:** Can be done by visiting the office directly or contacting via Phone/WhatsApp (01612-550246). An advance payment is required to confirm the booking.
      - **Guests:** Guests are allowed but must follow specific rules and timings set by the hostel authority.
      
      **Key Instructions for AI:**
      - If anyone asks for the phone number, WhatsApp number, or contact details, provide: 01612-550246.
      - If anyone asks for the address or location, provide: ফার্মগেট, কনকর্ড টাওয়ারের পিছনে, ঢাকা.
      - Always be welcoming and encourage users to book a seat or visit the hostel.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: response.text || 'দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।',
        },
      ]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: 'দুঃখিত, একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden flex flex-col h-[500px]">
      <div className="p-4 bg-neutral-50 dark:bg-[#1a1a1a] border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#CA8A04]/20 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-[#CA8A04]" />
        </div>
        <div>
          <h3 className="font-bold text-neutral-900 dark:text-white">এআই অ্যাসিস্ট্যান্ট</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">যেকোনো প্রশ্ন করুন</p>
        </div>
      </div>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'user'
                  ? 'bg-neutral-200 dark:bg-neutral-800'
                  : 'bg-[#CA8A04]/20'
              }`}
            >
              {msg.role === 'user' ? (
                <User className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
              ) : (
                <Bot className="w-5 h-5 text-[#CA8A04]" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                msg.role === 'user'
                  ? 'bg-[#CA8A04] text-neutral-900 rounded-tr-none'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-none'
              }`}
            >
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#CA8A04]/20 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-[#CA8A04]" />
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
              <span className="text-sm text-neutral-500">টাইপ করছে...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#1a1a1a]">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="আপনার প্রশ্ন লিখুন..."
            className="flex-1 px-4 py-2 rounded-full bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-[#CA8A04] focus:border-transparent outline-none transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full bg-[#CA8A04] hover:bg-yellow-500 text-neutral-900 flex items-center justify-center shrink-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
