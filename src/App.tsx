import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, ChevronRight, MapPin, Phone, CheckCircle2, Star, Shield, Wifi, Coffee, Home, Layers, ChevronDown, ChevronUp, ChevronLeft, Mail, Check, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

// --- Data ---
const ads = [
  "https://picsum.photos/seed/smart1/800/500",
  "https://picsum.photos/seed/smart2/800/500",
  "https://picsum.photos/seed/smart3/800/500",
  "https://picsum.photos/seed/smart4/800/500",
  "https://picsum.photos/seed/smart5/800/500",
  "https://picsum.photos/seed/smart6/800/500",
];

const branches = [
  {
    id: 'notunbazar',
    name: 'Notun Bazar (Boys)',
    nameBn: 'নতুনবাজার (বয়েজ ব্রাঞ্চ)',
    address: 'House# 13/23, Vatara Mor, Notunbazar, Dhaka-1212',
    addressBn: 'ভাটারা মোড়, নতুনবাজার',
    incharge: '01600-088466',
    director: '01600-088477',
    image: 'https://picsum.photos/seed/notunbazar/1200/800',
    packages: [
      { name: 'Single Bed', price: '6,299/=' },
      { name: '2 Bed', price: '4,499/=' },
      { name: '3 Bed', price: '3,899/=' },
      { name: '4 Bed (VIP)', price: '3,999/=' },
      { name: '4 Bed', price: '2,999/=' },
      { name: '6 Bed', price: '2,899/=' },
      { name: '9 Bed (AC)', price: '3,899/=' },
    ]
  },
  {
    id: 'shahjadpur',
    name: 'Shahjadpur (Boys)',
    nameBn: 'শাহজাদপুর (বয়েজ ব্রাঞ্চ)',
    address: 'Grillpotti Road, Khilbarirtek, Shahjadpur, Gulshan, Dhaka-1212',
    addressBn: 'গ্রিলপট্টি রোড, খিলবাড়িরটেক, শাহজাদপুর',
    incharge: '01339-890701',
    director: '01339-890703-04',
    image: 'https://picsum.photos/seed/shahjadpur/1200/800',
    packages: [
      { name: 'Single (Luxury)', price: '14,999/=' },
      { name: 'Single (Premium)', price: '7,999/=' },
      { name: 'Single (Non-Cozy)', price: '6,499/=' },
      { name: '2 Bed (Luxury)', price: '4,999/=' },
      { name: '2 Bed (Premium)', price: '4,899/=' },
      { name: '4 Bed (VIP)', price: '4,499/=' },
      { name: '6 Bed', price: '3,399/=' },
      { name: '8 Bed', price: '2,899/=' },
    ]
  },
  {
    id: 'satarkul',
    name: 'Satarkul (Ladies)',
    nameBn: 'সাঁতারকুল (লেডিস ব্রাঞ্চ)',
    address: 'Satarkul Road, Beside Chapra Mosque, Uttar Badda, Dhaka-1212',
    addressBn: 'সাঁতারকুল রোড, ছাপড়া মসজিদ সংলগ্ন, উত্তর বাড্ডা',
    incharge: '01974-159203',
    director: '01974-159204',
    note: 'DIU/UIU হতে ৫ মিনিটের পায়ে হাঁটা দূরত্ব',
    image: 'https://picsum.photos/seed/satarkul/1200/800',
    packages: [
      { name: 'Single Bed', price: '5,799/=' },
      { name: '2 Bed', price: '4,899/=' },
      { name: '3 Bed', price: '3,899/=' },
      { name: '4 Bed (VIP)', price: '3,099/=' },
      { name: '4 Bed', price: '2,899/=' },
      { name: '6 Bed', price: '2,899/=' },
    ]
  }
];

const topFacilities = [
  { icon: <Shield className="w-6 h-6" />, title: '24/7 Security', desc: 'সিসিটিভি ও গার্ড দ্বারা নিয়ন্ত্রিত' },
  { icon: <Wifi className="w-6 h-6" />, title: 'High-Speed WiFi', desc: 'সার্বক্ষণিক ইন্টারনেট সুবিধা' },
  { icon: <Coffee className="w-6 h-6" />, title: '3 Times Meal', desc: 'মানসম্মত খাবার (শর্ত প্রযোজ্য)' },
  { icon: <Star className="w-6 h-6" />, title: 'Fully Furnished', desc: 'খাট, টেবিল, লাইট, ফ্যান, লকার' },
];

const allFacilities = [
  'আধুনিক ভবন ও সম্পূর্ণ টাইলসকৃত রুম',
  'পড়াশোনার জন্য শান্ত ও উপযুক্ত পরিবেশ',
  'সার্বক্ষণিক বিদ্যুৎ ও বিশুদ্ধ পানির সু-ব্যবস্থা',
  'প্রতিটি রুম ও বাথরুম ক্লিনিং সার্ভিস',
  'উন্মুক্ত ছাদ ও আরামদায়ক পরিবেশ',
  'স্মার্ট লবি ও ক্যাফেটেরিয়া',
  '২৪ ঘন্টা জিম সুবিধা উন্মুক্ত',
  'স্মার্ট গেমিং জোন',
  'ফ্রিজ ও টিভি সুবিধা',
  'পার্কিং ও ক্যান্টিন এর সু-ব্যবস্থা',
  'অভিভাবক থাকার সু-ব্যবস্থা',
  'ক্যাশ, বিকাশ, ব্যাংক পেমেন্ট সিস্টেম',
  'ভর্তি হলেই থাকছে আকর্ষণীয় গিফট হ্যাম্পার'
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(true);
  const [isSocialOpen, setIsSocialOpen] = useState(true);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(true);
  const [activeBranch, setActiveBranch] = useState(branches[0]);
  const heroRef = useRef<HTMLElement>(null);

  // Dark mode toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Scroll and resize listener for navbar and popups
  useEffect(() => {
    const handleScrollOrResize = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const isDesktop = window.innerWidth >= 768;
      const heroHeight = heroRef.current ? heroRef.current.offsetHeight : (isDesktop ? window.innerHeight * 0.6 : window.innerHeight * 0.5);
      
      if (isDesktop) {
        // On desktop, containers are always visible, controlled only by arrow clicks
        setShowRightMenu(true);
        setShowSocialMenu(true);
      } else {
        // On mobile, keep the scroll-based auto-hide logic
        if (scrollY > heroHeight - 50) {
          if (scrollY > 2500) {
            setShowRightMenu(false);
          } else {
            setShowRightMenu(true);
          }
          setShowSocialMenu(false);
        } else {
          setShowRightMenu(false);
          setShowSocialMenu(true);
        }
      }
    };

    // Initial check on mount
    handleScrollOrResize();

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);
    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  // Auto-close right floating menu when reaching Packages section
  useEffect(() => {
    const packagesSection = document.getElementById('packages');
    if (!packagesSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsFloatingMenuOpen(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    observer.observe(packagesSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] overflow-x-hidden text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Dark Mode Toggle (Top Right) */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/20 hover:bg-black/40 transition-colors"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Floating Mobile Menu */}
      <div className={`fixed right-0 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col items-end transition-all duration-500 ${showRightMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
        <AnimatePresence>
          {isFloatingMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-[#333333] text-[#DCE775] rounded-l-[2rem] py-6 px-3 flex flex-col items-center gap-6 shadow-2xl border border-r-0 border-[#444]"
            >
              <div className="w-8 h-1.5 bg-white/20 rounded-full mb-2"></div>
              
              <a href="#home" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <Home className="w-6 h-6 text-[#DCE775]" />
                <span className="text-[10px] font-bold tracking-wider">Home</span>
              </a>
              <a href="#packages" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <Star className="w-6 h-6 text-[#DCE775]" />
                <span className="text-[10px] font-bold tracking-wider">Packages</span>
              </a>
              <a href="#facilities" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <Layers className="w-6 h-6 text-[#DCE775]" />
                <span className="text-[10px] font-bold tracking-wider">Facilities</span>
              </a>
              <a href="#branches" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                <MapPin className="w-6 h-6 text-[#DCE775]" />
                <span className="text-[10px] font-bold tracking-wider">Branches</span>
              </a>
              
              <button 
                onClick={() => setIsFloatingMenuOpen(false)}
                className="mt-2 p-2 bg-[#444] rounded-full text-[#DCE775] hover:bg-[#555] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isFloatingMenuOpen && (
          <button 
            onClick={() => setIsFloatingMenuOpen(true)}
            className="bg-[#4CAF50] text-white p-3 rounded-l-full shadow-2xl mt-4 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
      </div>

      {/* Social Media Floating Menu */}
      <div className={`fixed top-[30vh] md:top-[40vh] left-0 z-50 flex flex-row items-center transition-transform duration-500 ${showSocialMenu ? (isSocialOpen ? 'translate-x-0' : '-translate-x-[calc(100%-24px)]') : '-translate-x-full'}`}>
        <div className="bg-[#333333] p-2 md:p-3 rounded-r-2xl shadow-2xl border border-l-0 border-[#444] flex flex-col gap-3 md:gap-4">
          <a href="#" className="p-2 bg-white rounded-full text-blue-600 hover:scale-110 transition-transform shadow-sm">
            <Facebook className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-sky-500 hover:scale-110 transition-transform shadow-sm">
            <Twitter className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-red-600 hover:scale-110 transition-transform shadow-sm">
            <Youtube className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-pink-600 hover:scale-110 transition-transform shadow-sm">
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
        <button 
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          className="bg-[#333333] text-[#DCE775] p-1 rounded-r-md border border-l-0 border-[#444] shadow-md"
        >
          {isSocialOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative flex items-center justify-center overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/d/1_ieYrd0sx_hhv_D8nBiCFDrwBpFIcRF5" 
          alt="Smart Hostel" 
          className="w-full h-auto object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#eab308] text-neutral-900 px-2.5 py-0.5 md:px-4 md:py-1 rounded-full text-[9px] md:text-sm font-semibold mb-2 md:mb-4"
          >
            💫 নতুন বছরের বিশেষ ছাড়!
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-3 md:mb-6"
          >
            SMART HOSTEL
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-row items-center justify-center gap-2 md:gap-4"
          >
            <a href="#packages" className="px-2.5 py-1 md:px-8 md:py-3 border-2 border-white text-white rounded-md text-[9px] md:text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-lg">
              BOOKING
            </a>
            <a href="#packages" className="px-2.5 py-1 md:px-8 md:py-3 bg-[#DCE775] text-neutral-900 rounded-md text-[9px] md:text-sm font-semibold tracking-widest uppercase hover:bg-[#cddc39] transition-colors shadow-lg">
              PACKAGES
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="pt-16 pb-8 px-6 text-center w-full max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-7xl font-semibold text-black dark:text-white mb-4 uppercase tracking-[0.2em]">
          WELCOME
        </h3>
        <div className="w-full h-[2px] bg-black dark:bg-white mx-auto mb-8"></div>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg md:text-xl font-medium mb-4">
          মাসে মাত্র <span className="text-2xl font-bold text-[#eab308]">২৯০০</span> টাকা থেকে প্যাকেজ শুরু!
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
          পানি, বিদ্যুৎ, বুয়া, ওয়াইফাই, ময়লা, ক্লিনারসহ আরও ২৫+ সুবিধা — ইত্যাদি সব বিলসহ। আমাদের হোস্টেলে ব্যাচেলরদের জন্য নিরাপদ ও আরামদায়ক থাকার ব্যবস্থা রয়েছে।
        </p>
      </section>

      {/* Auto-Scrolling Advertisements */}
      <section className="py-6 overflow-hidden bg-neutral-50 dark:bg-[#111]">
        <div className="flex pause-on-hover group">
          <div className="flex animate-scroll whitespace-nowrap pl-4">
            {ads.map((ad, i) => (
              <div key={`ad-1-${i}`} className="inline-block px-2">
                <img 
                  src={ad} 
                  alt={`Smart Hostel Gallery ${i + 1}`} 
                  className="h-40 md:h-56 w-[250px] md:w-[350px] object-cover rounded-xl shadow-md opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-scroll whitespace-nowrap pl-4" aria-hidden="true">
            {ads.map((ad, i) => (
              <div key={`ad-2-${i}`} className="inline-block px-2">
                <img 
                  src={ad} 
                  alt={`Smart Hostel Gallery ${i + 1}`} 
                  className="h-40 md:h-56 w-[250px] md:w-[350px] object-cover rounded-xl shadow-md opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Branches Section */}
      <section id="packages" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Our Packages & Branches</h2>
          <p className="text-neutral-500 dark:text-neutral-400">সকল সুবিধা সহ ভাড়ার তালিকা</p>
        </div>

        {/* Branch Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch)}
              className={`px-6 py-3 text-sm md:text-base font-bold transition-all duration-300 rounded-xl shadow-sm ${
                activeBranch.id === branch.id
                  ? 'bg-[#FEF08A] text-neutral-900 scale-105'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Active Branch Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-start bg-white dark:bg-[#111] p-6 md:p-10 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-800"
          >
            {/* Image & Info */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={activeBranch.image} 
                  alt={activeBranch.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#CA8A04] dark:text-yellow-400 mb-2">{activeBranch.nameBn}</h3>
                <p className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 mb-4">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#eab308]" />
                  <span>{activeBranch.addressBn}</span>
                </p>
                {activeBranch.note && (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-4 bg-green-50 dark:bg-green-900/20 p-2 rounded-lg inline-block">
                    ✔️ {activeBranch.note}
                  </p>
                )}
                <div className="flex flex-col gap-2 bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl">
                  <p className="flex items-center gap-2 font-medium">
                    <Phone className="w-4 h-4 text-[#CA8A04] dark:text-yellow-400" /> 
                    ইনচার্জ: <a href={`tel:${activeBranch.incharge}`} className="text-[#CA8A04] dark:text-yellow-400 hover:underline">{activeBranch.incharge}</a>
                  </p>
                  <p className="flex items-center gap-2 font-medium">
                    <Phone className="w-4 h-4 text-[#CA8A04] dark:text-yellow-400" /> 
                    পরিচালক: <a href={`tel:${activeBranch.director}`} className="text-[#CA8A04] dark:text-yellow-400 hover:underline">{activeBranch.director}</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pricing Table */}
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 md:p-8">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#eab308]" />
                প্যাকেজ সমূহ (মাসিক)
              </h4>
              <div className="space-y-3">
                {activeBranch.packages.map((pkg, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-neutral-800">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{pkg.name}</span>
                    <span className="font-bold text-[#CA8A04] dark:text-yellow-400">{pkg.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href={`tel:${activeBranch.director}`} className="inline-flex items-center gap-2 px-8 py-3 bg-[#eab308] text-neutral-900 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-md w-full justify-center">
                  <Phone className="w-5 h-5" />
                  Call Now to Book
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-neutral-50 dark:bg-[#111] border-y border-neutral-200 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Premium Facilities</h2>
            <p className="text-neutral-500 dark:text-neutral-400">অত্যাধুনিক ২৫+ সুবিধাসহ থাকা-খাওয়া</p>
          </div>

          {/* Top Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {topFacilities.map((facility, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-[#CA8A04] dark:text-yellow-400 mb-4">
                  {facility.icon}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{facility.title}</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>

          {/* All Facilities List */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-center mb-8 text-[#CA8A04] dark:text-yellow-400">আমাদের সেবাসমূহ</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {allFacilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="inline-block bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-6 py-3 rounded-full font-bold text-sm md:text-base">
                📢 সিট সীমিত — আগ্রহীরা দ্রুত যোগাযোগ করুন!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="branches" className="bg-white dark:bg-[#0a0a0a] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold tracking-wider uppercase flex items-center gap-2 text-[#CA8A04] dark:text-yellow-400 mb-4">
                <Home className="w-8 h-8" />
                SMART HOSTEL
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 mb-6 font-medium">
                We Believe in Quality & Service.
                <br/>অচেনা শহরে চেনা সমাধান।
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:01600088477" className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors font-bold">
                  <Phone className="w-5 h-5" /> 01600-088477 (WhatsApp/Call)
                </a>
                <a href="mailto:smarthosteloffice@gmail.com" className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">
                  <Mail className="w-5 h-5" /> smarthosteloffice@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-neutral-500 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#packages" className="text-neutral-500 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Packages & Pricing</a></li>
                <li><a href="#facilities" className="text-neutral-500 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Facilities</a></li>
                <li><a href="https://facebook.com/স্মার্ট হোস্টেল" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#CA8A04] dark:hover:text-yellow-400 transition-colors">Facebook Page</a></li>
              </ul>
            </div>

            {/* Near From */}
            <div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">Near From</h4>
              <div className="flex flex-wrap gap-2">
                {['DIU', 'UIU', 'UITS', 'IUB', 'NSU', 'AIUB', 'EWU', 'BRACU', 'Gulshan', 'Banani', 'Badda'].map((uni, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 rounded-md text-sm font-medium">
                    {uni}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Smart Hostel. All rights reserved.</p>
            <p>Designed for Comfort & Security</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
