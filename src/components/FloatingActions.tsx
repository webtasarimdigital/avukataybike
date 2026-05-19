"use client";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingActions() {
  return (
    <>
      {/* DESKTOP (Web) VERSION - Floating Icons Bottom Right */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 hidden md:flex">
        <a 
          href="https://www.instagram.com/asblawoffice.av/" 
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
        <a href="/iletisim" className="w-[40%] flex items-center justify-center bg-accent text-primary hover:bg-white transition-colors h-full border-r border-primary/5">
          <span className="font-black tracking-widest uppercase text-[13px] text-center leading-tight">
            İLETİŞİM
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
