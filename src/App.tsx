import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, MapPin, Phone, CheckCircle2, Star, Shield, Wifi, Coffee, Home, Layers, Mail, Facebook, Twitter, Youtube, Instagram, Building2, Users, BookOpen, ShieldCheck, Car, Zap, Bell, PlayCircle, ExternalLink, Utensils, Droplets, Tv, Wind, Lock, Clock, HeartPulse, Flame, ChevronDown, MessageCircle } from 'lucide-react';
import Chatbot from './components/Chatbot';

// --- Placeholder Data for Bornali Super Home ---

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'admission2026'>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const openBookingModal = (pkg: string) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
    setIsBookingSuccess(false);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedPackage(null);
    setIsBookingSuccess(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsBookingSuccess(true);
    setTimeout(() => {
      closeBookingModal();
    }, 3000);
  };

  // Dark mode toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  if (currentPage === 'admission2026') {
    return (
      <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] overflow-x-hidden text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 md:h-20 bg-white dark:bg-[#111] shadow-md flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img 
              src="https://lh3.googleusercontent.com/d/1vWll2Y0J6kie1_ZcXXKQ0Uf9MTUHbyx0" 
              alt="Bornali Super Home Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold tracking-wider uppercase text-neutral-900 dark:text-white leading-tight">
                Bornali Super Home
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">
                আপনার নির্ভরযোগ্য ঠিকানা
              </span>
            </div>
          </div>
          <button 
            onClick={() => setCurrentPage('home')}
            className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-md font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Back to Home
          </button>
        </header>

        <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
          <div className="bg-neutral-50 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-[#eab308] text-neutral-900 text-xs md:text-sm font-bold px-6 py-2 rounded-bl-xl">
              Admission 2026
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6 pr-32">📢 ভর্তি পরীক্ষার্থী ২০২৬!</h3>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              ভর্তি প্রস্তুতি মানেই শুধু কোচিং নয়— প্রয়োজন একটি শান্ত, নিরাপদ ও শৃঙ্খলাপূর্ণ থাকার পরিবেশ। মেডিকেল, ইঞ্জিনিয়ারিং ও বিশ্ববিদ্যালয় ভর্তি প্রস্তুতির জন্য নিরাপদ ও আরামদায়ক আবাসন চাই?
            </p>
            <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-bold mb-8">
              ✅ ছেলে ও মেয়েদের জন্য আলাদা সুবিধা রয়েছে।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 flex-1">
              <div className="flex items-center gap-3 bg-white dark:bg-[#111] p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#eab308]" />
                <span className="text-sm md:text-base font-medium">২৪/৭ সিকিউরিটি ও CCTV</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-[#111] p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                <Layers className="w-6 h-6 text-[#eab308]" />
                <span className="text-sm md:text-base font-medium">এলিভেটর সার্ভিস</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-[#111] p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                <Zap className="w-6 h-6 text-[#eab308]" />
                <span className="text-sm md:text-base font-medium">পাওয়ার ব্যাকআপ</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-[#111] p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                <Coffee className="w-6 h-6 text-[#eab308]" />
                <span className="text-sm md:text-base font-medium">বিশুদ্ধ খাবার পানি</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-[#111] p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                <Home className="w-6 h-6 text-[#eab308]" />
                <span className="text-sm md:text-base font-medium">প্রশস্ত ছাদ (Roof Terrace)</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-[#111] p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                <Car className="w-6 h-6 text-[#eab308]" />
                <span className="text-sm md:text-base font-medium">পার্কিং সুবিধা</span>
              </div>
            </div>

            <div className="flex items-start gap-4 text-neutral-600 dark:text-neutral-400 mb-8 bg-white dark:bg-[#111] p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
              <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <span className="text-base md:text-lg">ফার্মগেট, কনকর্ড টাওয়ারের পিছনে (রেটিনা, উদ্ভাস, উন্মেষের পাশে)</span>
            </div>

            <a href="tel:01612550246" className="flex items-center justify-center gap-3 w-full bg-[#eab308] text-neutral-900 font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg shadow-md">
              <Phone className="w-6 h-6" />
              বিস্তারিত জানতে কল করুন: ০১৬১২-৫৫০২৪৬
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] overflow-x-hidden text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 md:h-20 bg-white dark:bg-[#111] shadow-md flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
        {/* Left: Logo & Name */}
        <a href="#home" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img 
            src="https://lh3.googleusercontent.com/d/1vWll2Y0J6kie1_ZcXXKQ0Uf9MTUHbyx0" 
            alt="Bornali Super Home Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold tracking-wider uppercase text-neutral-900 dark:text-white leading-tight">
              Bornali Super Home
            </span>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">
              আপনার নির্ভরযোগ্য ঠিকানা
            </span>
          </div>
        </a>
        
        {/* Middle/Right: Desktop Nav & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 mr-2">
            <a href="#home" className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-[#eab308] transition-colors">Home</a>
            <a href="#packages" className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-[#eab308] transition-colors">Packages</a>
            <a href="#facilities" className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-[#eab308] transition-colors">Facilities</a>
            <a href="#branches" className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-[#eab308] transition-colors">Branches</a>
          </nav>
          <a href="tel:01612550246" className="flex items-center gap-1.5 text-sm font-bold text-neutral-900 dark:text-white bg-[#eab308] px-4 py-1.5 rounded-full hover:bg-yellow-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span>01612-550246</span>
          </a>
        </div>

        {/* Right: Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Right Side Popup Menu (Drawer) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white dark:bg-[#111] z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800">
                <span className="text-xl font-bold text-[#eab308] uppercase">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-4 overflow-y-auto flex-1">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-[#eab308] transition-colors py-2 border-b border-neutral-100 dark:border-neutral-800">Home</a>
                <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-[#eab308] transition-colors py-2 border-b border-neutral-100 dark:border-neutral-800">Packages</a>
                <a href="#facilities" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-[#eab308] transition-colors py-2 border-b border-neutral-100 dark:border-neutral-800">Facilities</a>
                <a href="#branches" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-[#eab308] transition-colors py-2 border-b border-neutral-100 dark:border-neutral-800">Branches</a>
              </div>
              <div className="p-6 border-t border-neutral-100 dark:border-neutral-800">
                <a href="tel:01612550246" className="flex items-center justify-center gap-2 text-base font-bold text-neutral-900 dark:text-white bg-[#eab308] px-4 py-3 rounded-md hover:bg-yellow-400 transition-colors w-full">
                  <Phone className="w-5 h-5" />
                  <span>01612-550246</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative flex items-center justify-center overflow-hidden w-full h-[250px] md:h-[350px] lg:h-[calc(100vh-260px)] mt-16 md:mt-20">
        <img 
          src="https://lh3.googleusercontent.com/d/1_ieYrd0sx_hhv_D8nBiCFDrwBpFIcRF5" 
          alt="Bornali Super Home" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#eab308] text-neutral-900 px-3 py-1 md:px-4 md:py-1 rounded-full text-[10px] md:text-sm font-bold mb-2 md:mb-4"
          >
            💫 স্বাগতম
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 md:mb-6 uppercase"
          >
            BORNALI SUPER HOME
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-row items-center justify-center gap-2 md:gap-4"
          >
            <a href="#packages" className="px-4 py-1.5 md:px-6 md:py-2 border-2 border-white text-white rounded-md text-[10px] md:text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-lg">
              BOOKING
            </a>
            <a href="#packages" className="px-4 py-1.5 md:px-6 md:py-2 bg-[#DCE775] text-neutral-900 rounded-md text-[10px] md:text-sm font-bold tracking-widest uppercase hover:bg-[#cddc39] transition-colors shadow-lg">
              PACKAGES
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="pt-8 pb-4 md:pt-16 md:pb-8 lg:h-[180px] px-4 text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white uppercase tracking-[0.2em] mb-4 md:mb-6 underline decoration-[#eab308] decoration-4 md:decoration-8 underline-offset-[12px] md:underline-offset-[20px]">
          WELCOME
        </h2>
      </section>

      {/* Intro & Main Content Section */}
      <section id="packages" className="py-4 md:py-16 px-2 md:px-4 max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-4xl font-bold text-neutral-900 dark:text-white mb-1 md:mb-4">ফার্মগেট এলাকায় সেরা হোস্টেল খুঁজছেন?</h2>
          <p className="text-sm md:text-lg text-neutral-600 dark:text-neutral-400 font-medium">Bornali Super Home — আপনার নির্ভরযোগ্য ঠিকানা</p>
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mt-3 md:mt-6">
            <span className="flex items-center gap-1 md:gap-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-medium"><Building2 className="w-3 h-3 md:w-4 md:h-4 text-[#eab308]"/> ৫টি শাখা</span>
            <span className="flex items-center gap-1 md:gap-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-medium"><Users className="w-3 h-3 md:w-4 md:h-4 text-[#eab308]"/> ছেলে ও মেয়েদের জন্য আলাদা হোস্টেল</span>
            <span className="flex items-center gap-1 md:gap-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-medium"><BookOpen className="w-3 h-3 md:w-4 md:h-4 text-[#eab308]"/> পড়াশোনার জন্য শান্ত পরিবেশ</span>
          </div>
        </div>

        {/* Notice Board Marquee */}
        <div 
          onClick={() => setCurrentPage('admission2026')}
          className="w-full bg-white dark:bg-[#111] border-2 border-[#eab308] rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all mb-8 md:mb-12 group"
        >
          {/* Top Line: Notice Board Title & Current Notice Name */}
          <div className="bg-[#eab308] text-neutral-900 px-3 py-2 md:px-4 md:py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm md:text-base">
              <Bell className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
              <span>নোটিশ বোর্ড</span>
            </div>
            <div className="bg-neutral-900 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full">
              🗣️ ভর্তি পরীক্ষা ২০২৬
            </div>
          </div>
          
          {/* Bottom Line: Scrolling Text */}
          <div className="py-3 md:py-4 overflow-hidden relative flex items-center bg-yellow-50/50 dark:bg-neutral-900/50">
            <div className="flex animate-scroll whitespace-nowrap">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 tracking-wide px-4">
                  📢 ভর্তি পরীক্ষার্থী ২০২৬! মেডিকেল, ইঞ্জিনিয়ারিং ও বিশ্ববিদ্যালয় ভর্তি প্রস্তুতির জন্য নিরাপদ ও আরামদায়ক আবাসন। বিস্তারিত জানতে এখানে ক্লিক করুন...
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-white mb-6 uppercase tracking-wider">
            Video Gallery
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto">
            {/* Video 1 */}
            <a href="https://www.facebook.com/share/r/1DTNg6onpe/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[9/16] bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-neutral-200 dark:border-neutral-700 block">
              <img src="https://lh3.googleusercontent.com/d/1LrqtNSWxCf1-4cApDE0Hf70WeFTZDsf3" alt="Video Thumbnail 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <PlayCircle className="w-12 h-12 md:w-16 md:h-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
              </div>
            </a>
            {/* Video 2 */}
            <a href="https://www.facebook.com/share/v/1BwVGZSBYe/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[9/16] bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-neutral-200 dark:border-neutral-700 block">
              <img src="https://lh3.googleusercontent.com/d/10iu-kOOavPvslXQ2_1iKtwtdWGFkvPqZ" alt="Video Thumbnail 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <PlayCircle className="w-12 h-12 md:w-16 md:h-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
              </div>
            </a>
          </div>
        </div>



        {/* Our Location / Branches Section */}
        <div id="branches" className="mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 uppercase tracking-wider">
              Our Location
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">ব্রাঞ্চ সমূহ</p>
          </div>

          <div className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm flex flex-row">
            {/* Left Side: Details */}
            <div className="p-4 md:p-10 w-[55%] md:w-1/2 flex flex-col justify-center">
              <h3 className="text-sm md:text-3xl font-bold text-neutral-900 dark:text-white mb-3 md:mb-4">
                ফার্মগেট ব্রাঞ্চ (মেইন)
              </h3>
              
              <div className="flex items-start gap-2 md:gap-3 text-neutral-600 dark:text-neutral-400 mb-3 md:mb-6">
                <MapPin className="w-4 h-4 md:w-6 md:h-6 text-red-500 shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <p className="text-xs md:text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-0.5 md:mb-1">ঠিকানা:</p>
                  <p className="text-[10px] md:text-base leading-relaxed">
                    ফার্মগেট, কনকর্ড টাওয়ারের পিছনে<br />
                    (রেটিনা, উদ্ভাস, উন্মেষের পাশে), ঢাকা।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3 text-neutral-600 dark:text-neutral-400 mb-4 md:mb-8">
                <Phone className="w-4 h-4 md:w-6 md:h-6 text-[#eab308] shrink-0 mt-0.5 md:mt-1" />
                <div>
                  <p className="text-xs md:text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-0.5 md:mb-1">যোগাযোগ:</p>
                  <p className="text-[10px] md:text-base">০১৬১২-৫৫০২৪৬</p>
                </div>
              </div>

              <a 
                href="https://share.google/enFxSDMDKNpP3AAb0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 md:gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold py-2 px-2 md:py-3 md:px-6 rounded-lg md:rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-full md:w-auto text-[10px] md:text-base"
              >
                <MapPin className="w-3 h-3 md:w-5 md:h-5" />
                <span className="whitespace-nowrap">Google Map এ দেখুন</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="w-[45%] md:w-1/2 relative bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1fMJOawywzE1tCY44AsakEAOZ0f9eM_RC" 
                alt="Bornali Super Home Farmgate Branch" 
                className="absolute inset-0 w-full h-full object-contain p-2 md:p-4"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Important Areas Single Line */}
          <div className="mt-4 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 md:p-4 flex items-center gap-3 overflow-hidden">
            <MapPin className="w-5 h-5 text-[#CA8A04] shrink-0" />
            <div className="flex-1 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <span className="font-bold text-neutral-900 dark:text-white mr-2">গুরুত্বপূর্ণ এলাকা:</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                ফার্মগেট • কারওয়ান বাজার • পান্থপথ • গ্রিন রোড • তেজগাঁও • ইন্দিরা রোড • রাজাবাজার • সংসদ ভবন
              </span>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div id="packages" className="mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 uppercase tracking-wider">
              Packages & Pricing
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">আমাদের প্যাকেজসমূহ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Package 1 */}
            <div className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Standard Room</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">Non-AC, Shared Bath</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#CA8A04] dark:text-yellow-400">৳---</span>
                <span className="text-neutral-500 dark:text-neutral-400"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>৩ বেলা খাবার</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>ফ্রি ওয়াই-ফাই</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>লকার সুবিধা</span>
                </li>
              </ul>
              <button 
                onClick={() => openBookingModal('Standard Room')}
                className="w-full py-3 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-medium rounded-xl transition-colors"
              >
                Book Now
              </button>
            </div>

            {/* Package 2 */}
            <div className="bg-neutral-900 dark:bg-neutral-800 border border-neutral-800 dark:border-neutral-700 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all relative overflow-hidden group transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-[#CA8A04] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">POPULAR</div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Room</h3>
              <p className="text-neutral-400 text-sm mb-6">AC, Attached Bath</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-yellow-400">৳---</span>
                <span className="text-neutral-400"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>৩ বেলা খাবার</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>ফ্রি ওয়াই-ফাই</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>লকার সুবিধা</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>এসি সুবিধা</span>
                </li>
              </ul>
              <button 
                onClick={() => openBookingModal('Premium Room')}
                className="w-full py-3 px-4 bg-[#CA8A04] hover:bg-yellow-600 text-white font-medium rounded-xl transition-colors"
              >
                Book Now
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">VIP Room</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">AC, Single Bed, Attached Bath</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#CA8A04] dark:text-yellow-400">৳---</span>
                <span className="text-neutral-500 dark:text-neutral-400"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>৩ বেলা স্পেশাল খাবার</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>ফ্রি ওয়াই-ফাই</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>লকার সুবিধা</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>এসি সুবিধা</span>
                </li>
              </ul>
              <button 
                onClick={() => openBookingModal('VIP Room')}
                className="w-full py-3 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-medium rounded-xl transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div id="facilities" className="mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 uppercase tracking-wider">
              Facilities
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">আমাদের সুবিধাসমূহ</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6">
            {[
              { icon: Utensils, title: "৩ বেলা খাবার", desc: "স্বাস্থ্যসম্মত ও পুষ্টিকর" },
              { icon: Wifi, title: "ফ্রি ওয়াই-ফাই", desc: "উচ্চ গতির ইন্টারনেট" },
              { icon: ShieldCheck, title: "নিরাপত্তা", desc: "২৪/৭ সিসিটিভি" },
              { icon: Droplets, title: "বিশুদ্ধ পানি", desc: "ফিল্টার করা খাবার পানি" },
              { icon: Zap, title: "জেনারেটর", desc: "নিরবচ্ছিন্ন বিদ্যুৎ" },
              { icon: Wind, title: "এসি/নন-এসি", desc: "আরামদায়ক পরিবেশ" },
              { icon: Lock, title: "লকার সুবিধা", desc: "ব্যক্তিগত জিনিসপত্রের জন্য" },
              { icon: Tv, title: "কমন রুম", desc: "টিভি ও বিনোদন" },
              { icon: Clock, title: "২৪ ঘন্টা সার্ভিস", desc: "যেকোনো প্রয়োজনে" },
              { icon: Coffee, title: "ক্যান্টিন", desc: "চা ও স্ন্যাকস" },
              { icon: HeartPulse, title: "ফার্স্ট এইড", desc: "প্রাথমিক চিকিৎসা" },
              { icon: Flame, title: "গিজার", desc: "গরম পানির সুবিধা" }
            ].map((facility, index) => (
              <div key={index} className="bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 md:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-50 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-2 md:mb-4 text-[#eab308]">
                  <facility.icon className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h4 className="text-xs md:text-lg font-bold text-neutral-900 dark:text-white mb-0.5 md:mb-2 leading-tight">
                  {facility.title}
                </h4>
                <p className="hidden md:block text-sm text-neutral-500 dark:text-neutral-400">
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 uppercase tracking-wider">
              Photo Gallery
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl mx-auto px-4">
              এক নজরে দেখে নিন আমাদের হোস্টেলের সুন্দর, পরিপাটি ও নিরাপদ পরিবেশের কিছু মুহূর্ত।
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="relative aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm group">
                <img 
                  src={`https://picsum.photos/seed/hostel${index}/800/800`} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8 md:mb-12 max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 uppercase tracking-wider">
              সচরাচর জিজ্ঞাসা
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">আপনার প্রশ্ন, আমাদের উত্তর</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  q: "আপনাদের হোস্টেলে কি কি সুবিধা আছে?",
                  a: "আমাদের হোস্টেলে ৩ বেলা খাবার, ফ্রি ওয়াই-ফাই, ২৪/৭ সিসিটিভি নিরাপত্তা, বিশুদ্ধ খাবার পানি, জেনারেটর, এসি/নন-এসি রুম, লকার সুবিধা, কমন রুম এবং ২৪ ঘন্টা সার্ভিস রয়েছে।"
                },
                {
                  q: "খাবার ব্যবস্থা কেমন?",
                  a: "আমরা স্বাস্থ্যসম্মত ও পুষ্টিকর ৩ বেলা খাবার পরিবেশন করি। সকালের নাস্তা, দুপুরের খাবার এবং রাতের খাবার আমাদের প্যাকেজের অন্তর্ভুক্ত।"
                },
                {
                  q: "হোস্টেলের নিরাপত্তা ব্যবস্থা কেমন?",
                  a: "আমাদের হোস্টেলে ২৪/৭ সিসিটিভি ক্যামেরা এবং সার্বক্ষণিক সিকিউরিটি গার্ড রয়েছে, যা আপনার সর্বোচ্চ নিরাপত্তা নিশ্চিত করে।"
                },
                {
                  q: "বুকিং করার নিয়ম কি?",
                  a: "আপনি সরাসরি আমাদের অফিসে এসে অথবা আমাদের ফোন নম্বরে যোগাযোগ করে সিট বুকিং করতে পারবেন। বুকিংয়ের জন্য নির্দিষ্ট পরিমাণ অগ্রিম প্রদান করতে হয়।"
                },
                {
                  q: "গেস্ট আসার কোনো নিয়ম আছে কি?",
                  a: "হ্যাঁ, গেস্ট আসার নিয়ম রয়েছে। তবে গেস্টদের জন্য নির্দিষ্ট সময় এবং নিয়মাবলী মেনে চলতে হয়, যা হোস্টেল কর্তৃপক্ষ দ্বারা নির্ধারিত।"
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">
                    <span className="text-base md:text-lg pr-4">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                  </summary>
                  <div className="p-5 md:p-6 pt-0 text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed border-t border-neutral-100 dark:border-neutral-800/50 mt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            
            <div className="h-full">
              <Chatbot />
            </div>
          </div>
        </div>

      </section>

      {/* Footer / Contact Placeholder */}
      <footer className="bg-neutral-50 dark:bg-black pt-16 pb-8 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold tracking-wider uppercase flex items-center gap-2 text-[#CA8A04] dark:text-yellow-400 mb-4">
                <img 
                  src="https://lh3.googleusercontent.com/d/1vWll2Y0J6kie1_ZcXXKQ0Uf9MTUHbyx0" 
                  alt="Bornali Super Home Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-neutral-900 dark:text-white">BORNALI SUPER HOME</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 font-medium">
                We Believe in Quality & Service.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                আরাম, নিরাপত্তা আর সুবিধার পারফেক্ট কম্বিনেশন এখন এক জায়গায়! Bornali Super Home দিচ্ছে ব্যাচেলরদের জন্য আধুনিক ও সম্পূর্ণ ফার্নিশড হোস্টেল সুবিধা। 👨‍💼 চাকরিজীবী ও ছাত্র ব্যাচেলরদের জন্য উপযোগী।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-neutral-600 dark:text-neutral-400 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#packages" className="text-neutral-600 dark:text-neutral-400 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Packages & Pricing</a></li>
                <li><a href="#facilities" className="text-neutral-600 dark:text-neutral-400 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Facilities</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-5 h-5 text-[#CA8A04] dark:text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-sm">ফার্মগেট, কনকর্ড টাওয়ারের পিছনে (রেটিনা, উদ্ভাস, উন্মেষের পাশে), ঢাকা।</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <Phone className="w-5 h-5 text-[#CA8A04] dark:text-yellow-400 shrink-0" />
                  <span className="text-sm">০১৬১২-৫৫০২৪৬</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
            <p>© {new Date().getFullYear()} Bornali Super Home. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBookingModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl z-[90] overflow-hidden border border-neutral-200 dark:border-neutral-800"
            >
              <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-[#111]">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {isBookingSuccess ? 'Booking Confirmed!' : 'Book Your Seat'}
                </h3>
                <button
                  onClick={closeBookingModal}
                  className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {isBookingSuccess ? (
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Thank You!</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Your booking request for <span className="font-bold text-[#eab308]">{selectedPackage}</span> has been received. We will contact you shortly.
                  </p>
                  <button
                    onClick={closeBookingModal}
                    className="px-6 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Selected Package</label>
                    <input
                      type="text"
                      value={selectedPackage || ''}
                      readOnly
                      className="w-full px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border-none text-neutral-500 dark:text-neutral-400 focus:ring-0 cursor-not-allowed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-[#eab308] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-[#eab308] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-[#eab308] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#eab308] hover:bg-yellow-500 text-neutral-900 font-bold rounded-xl transition-colors shadow-md hover:shadow-lg transform active:scale-[0.98] duration-200"
                    >
                      Confirm Booking Request
                    </button>
                    <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mt-3">
                      We will contact you shortly to confirm your booking.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-4 flex flex-col gap-3"
            >
              <a
                href="https://wa.me/8801612550246?text=আমি%20সিট%20বুকিং%20করতে%20চাই"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white px-4 py-3 rounded-full shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group"
              >
                <span className="font-medium text-sm">WhatsApp</span>
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
              </a>
              
              <a
                href="https://www.facebook.com/share/1Zwn878BWt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white px-4 py-3 rounded-full shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group"
              >
                <span className="font-medium text-sm">Facebook</span>
                <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4" />
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          {!isChatMenuOpen && (
            <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
          )}
          <button
            onClick={() => setIsChatMenuOpen(!isChatMenuOpen)}
            className="relative w-14 h-14 bg-[#25D366] hover:bg-green-600 text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] flex items-center justify-center transition-transform hover:scale-105 focus:outline-none"
            aria-label="Chat options"
          >
            {isChatMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
