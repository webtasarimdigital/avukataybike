"use client";
import { useState } from "react";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function FloatingActions() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* DESKTOP - Floating Instagram bottom right */}
      <div className="fixed bottom-8 right-8 z-[100] hidden md:flex flex-col gap-4">
        <a
          href="https://www.instagram.com/asblawoffice.av/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        >
          <i className="fab fa-instagram text-2xl"></i>
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Instagram</span>
        </a>
      </div>

      {/* MOBILE - Expandable floating button bottom-left */}
      <div className="fixed bottom-6 left-6 z-[250] md:hidden flex flex-col items-start gap-3">
        {/* Sub-buttons (visible when open) */}
        {mobileOpen && (
          <div className="flex flex-col gap-3 items-start">
            <a
              href="tel:05514882948"
              className="flex items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-2xl px-5 py-3 text-primary font-black text-sm tracking-wide hover:bg-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0">
                <Phone size={16} strokeWidth={2.5} />
              </div>
              ARA
            </a>
            <a
              href="https://wa.me/905514882948"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-2xl px-5 py-3 text-primary font-black text-sm tracking-wide hover:bg-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0">
                <MessageCircle size={16} strokeWidth={2.5} />
              </div>
              WHATSAPP
            </a>
            <Link
              href="/iletisim"
              className="flex items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-2xl px-5 py-3 text-primary font-black text-sm tracking-wide hover:bg-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-cream shrink-0 text-xs font-black">
                @
              </div>
              İLETİŞİM
            </Link>
          </div>
        )}

        {/* Main toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2.5 bg-accent text-primary px-5 py-3.5 rounded-2xl shadow-2xl font-black text-sm tracking-widest uppercase transition-all hover:bg-primary hover:text-cream"
        >
          {mobileOpen ? <X size={18} /> : <ChevronUp size={18} />}
          {mobileOpen ? "KAPAT" : "İLETİŞİM"}
        </button>
      </div>
    </>
  );
}
