"use client";
import { useState, useEffect } from "react";
import { MapPin, Phone, X, CalendarClock, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FloatingActions() {
  const [isWidgetClosed, setIsWidgetClosed] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsWidgetClosed(false);
    }
  }, []);

  return (
    <>
      {/* 24/7 RIGHT APPOINTMENT WIDGET (Global) */}
      <div 
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[110] transition-transform duration-500 ease-in-out flex items-center ${isWidgetClosed ? "translate-x-full" : "translate-x-0"}`}
      >
        {/* Closed Tab (Expander) */}
        <button 
          onClick={() => setIsWidgetClosed(false)}
          className={`absolute left-0 -translate-x-full w-10 md:w-12 h-14 md:h-16 bg-accent text-black rounded-l-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white ${isWidgetClosed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <CalendarClock size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Main active panel */}
        <a 
          href="https://wa.me/905514882948"
          target="_blank"
          className="relative w-[70px] h-[150px] md:w-[85px] md:h-[190px] flex flex-col shadow-[-5px_0_20px_rgba(0,0,0,0.2)] overflow-hidden hover:scale-[1.03] origin-right rounded-l-xl md:rounded-l-2xl z-40 bg-white group transition-transform text-left"
        >
          <div className="bg-primary flex-1 w-full flex flex-col items-center justify-center border-b border-white/10 relative">
            {/* Close Button */}
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsWidgetClosed(true); }}
              className="absolute top-1 left-1 md:top-1.5 md:left-1.5 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-red-500 rounded-full p-1 z-50"
            >
               <X size={12} className="md:w-[14px] md:h-[14px]" />
            </button>

            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
               <span className="text-accent material-symbols-outlined text-4xl">contact_support</span>
            </div>
          </div>
          <div className="bg-accent group-hover:bg-white transition-colors flex-1 w-full flex items-center justify-center text-center text-black font-black text-[11px] md:text-[13px] leading-snug tracking-wider px-1 md:px-2">
            <div>TIKLA BİLGİ AL</div>
          </div>
        </a>
      </div>

      {/* DESKTOP (Web) VERSION - Floating Icons Bottom Right */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 hidden md:flex">
        <a 
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        >
          <i className="fab fa-instagram text-2xl"></i>
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Instagram</span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/905514882948" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">WhatsApp Destek</span>
        </a>

        {/* Location Button */}
        <a 
          href="https://maps.google.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#4285F4] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        >
          <MapPin size={28} />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Yol Tarifi</span>
        </a>
      </div>

      {/* MOBILE VERSION - Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[250] md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 flex shadow-[0_-10px_30px_rgba(0,0,0,0.08)] pb-safe h-[70px]">
        
        {/* BILGI AL - Priority Button */}
        <a href="https://wa.me/905514882948" target="_blank" className="w-[40%] flex items-center justify-center bg-accent text-black hover:bg-white transition-colors h-full border-r border-black/5">
          <span className="font-black tracking-widest uppercase text-[13px] text-center leading-tight">
            BİLGİ AL
          </span>
        </a>

        {/* ICONS (Location, Phone, WA) */}
        <div className="w-[60%] flex items-center justify-evenly h-full">
          {/* KONUM */}
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-sm mb-1">
              <MapPin size={18} strokeWidth={2.5} />
            </div>
            <span className="text-[9px] font-bold text-primary tracking-wide">KONUM</span>
          </a>

          {/* ARA */}
          <a href="tel:05514882948" className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 transition-colors border-l border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-sm mb-1">
              <Phone size={18} strokeWidth={2.5} />
            </div>
            <span className="text-[9px] font-bold text-primary tracking-wide">ARA</span>
          </a>

          {/* WHATSAPP */}
          <a href="https://wa.me/905514882948" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 transition-colors border-l border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm mb-1">
              <MessageCircle size={18} strokeWidth={2.5} />
            </div>
            <span className="text-[9px] font-bold text-primary tracking-wide">WHATSAPP</span>
          </a>
        </div>
      </div>
    </>
  );
}
