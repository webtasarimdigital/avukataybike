"use client";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Instagram, X } from "lucide-react";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

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

      {/* MOBILE VERSION - Sticky Bottom Left Launcher */}
      <div className="md:hidden">
        {open && (
          <div className="fixed inset-0 z-[240] bg-black/20" onClick={() => setOpen(false)} />
        )}

        {open && (
          <div className="fixed inset-x-4 bottom-[90px] z-[250] rounded-[36px] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl p-4 grid grid-cols-2 gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary/5 text-primary py-4 px-3 text-center transition hover:bg-primary/10"
              onClick={() => setOpen(false)}
            >
              <div className="w-12 h-12 rounded-3xl bg-blue-500 flex items-center justify-center text-white shadow-sm">
                <MapPin size={22} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.18em]">Konum</span>
            </a>
            <a
              href="tel:05514882948"
              className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary/5 text-primary py-4 px-3 text-center transition hover:bg-primary/10"
              onClick={() => setOpen(false)}
            >
              <div className="w-12 h-12 rounded-3xl bg-green-600 flex items-center justify-center text-white shadow-sm">
                <Phone size={22} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.18em]">Ara</span>
            </a>
            <a
              href="https://wa.me/905514882948"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary/5 text-primary py-4 px-3 text-center transition hover:bg-primary/10"
              onClick={() => setOpen(false)}
            >
              <div className="w-12 h-12 rounded-3xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                <MessageCircle size={22} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.18em]">WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/asblawoffice.av/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary/5 text-primary py-4 px-3 text-center transition hover:bg-primary/10"
              onClick={() => setOpen(false)}
            >
              <div className="w-12 h-12 rounded-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <Instagram size={22} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.18em]">Instagram</span>
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="fixed bottom-4 left-4 z-[260] w-14 h-14 rounded-full bg-accent text-primary shadow-2xl shadow-accent/30 flex items-center justify-center transition-transform duration-200 hover:scale-105"
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </>
  );
}

