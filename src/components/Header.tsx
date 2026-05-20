"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Menu, X, ChevronDown, Instagram, Facebook, Mail, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "BANKA VE TİCARET HUKUKU", slug: "banka-ve-ticaret-hukuku" },
  { title: "İŞ HUKUKU", slug: "is-hukuku" },
  { title: "MARKA VE PATENT HUKUKU", slug: "marka-ve-patent-hukuku" },
  { title: "AİLE HUKUKU", slug: "aile-hukuku" },
  { title: "SİGORTA HUKUKU", slug: "sigorta-hukuku" },
  { title: "İCRA VE İFLAS HUKUKU", slug: "icra-ve-iflas-hukuku" },
  { title: "SAĞLIK HUKUKU", slug: "saglik-hukuku" },
  { title: "TÜKETİCİ HUKUKU", slug: "tuketici-hukuku" },
  { title: "KİŞİSEL VERİLERİN KORUNMASI HUKUKU", slug: "kisisel-verilerin-korunmasi-hukuku" },
  { title: "KİRA HUKUKU", slug: "kira-hukuku" },
];

const kurumsal = [
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "Vizyonumuz", href: "/vizyon" },
  { title: "Misyonumuz", href: "/misyon" },
  { title: "Ekibimiz", href: "/hakkimizda#ekibimiz" },
  { title: "İş Başvurusu", href: "/is-basvurusu" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [kurumsalHovered, setKurumsalHovered] = useState(false);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ANA SAYFA", href: "/" },
    { name: "KURUMSAL", href: "#", id: "kurumsal" },
    { name: "HİZMETLER", href: "#", id: "services" },
    { name: "BLOG", href: "/blog" },
    { name: "İLETİŞİM", href: "/iletisim" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Info Bar */}
      <div className={`bg-primary transition-all duration-300 origin-top ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "hidden lg:flex h-[52px] opacity-100"}`}>
        <div className="w-full max-w-[1400px] mx-auto px-8 flex items-center justify-center h-full gap-5 text-[11.5px]">

          <a href="https://maps.google.com/?q=Eğitim+Mah.+Poyraz+Sk.+No:26/4+Kadıköy+İstanbul" target="_blank"
            className="flex items-center gap-1.5 text-white hover:text-accent transition-colors whitespace-nowrap">
            <MapPin size={12} className="text-accent shrink-0" />
            Eğitim Mah., Poyraz Sk. No:26/4 — Kadıköy / İst.
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:info@asblawoffice.com"
            className="flex items-center gap-1.5 text-white hover:text-accent transition-colors whitespace-nowrap">
            <Mail size={12} className="text-accent shrink-0" />
            info@asblawoffice.com
          </a>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5 text-white whitespace-nowrap">
            <Clock size={12} className="text-accent shrink-0" />
            Pzt–Cum: 09:00–18:00
          </div>
          <span className="text-white/20">|</span>
          <a href="tel:05514882948" className="flex items-center gap-1.5 text-white hover:text-accent transition-colors whitespace-nowrap">
            <Phone size={12} className="text-accent shrink-0" />
            0 551 488 29 48
          </a>
          <span className="text-white/20">|</span>
          <a href="https://www.instagram.com/asblawoffice.av/" target="_blank" rel="noopener noreferrer"
            className="text-white/70 hover:text-accent transition-colors">
            <Instagram size={15} />
          </a>
          <a href="https://wa.me/905514882948" target="_blank"
            className="text-white/70 hover:text-accent transition-colors">
            <MessageCircle size={15} />
          </a>

        </div>
      </div>

      {/* Main Nav Bar — Beyaz */}
      <div className={`transition-all duration-300 bg-white border-b border-gray-100 ${isScrolled ? "shadow-lg py-3" : "py-3 lg:py-4"}`}>
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden shrink-0">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-base md:text-xl leading-none tracking-tight">ASB HUKUK</span>
              <span className="text-accent font-bold text-[9px] md:text-[11px] tracking-[0.25em] mt-1 leading-none uppercase">Hukuk & Danışmanlık</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => {
              if (link.id === "kurumsal") {
                return (
                  <div
                    key={link.name}
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setKurumsalHovered(true)}
                    onMouseLeave={() => setKurumsalHovered(false)}
                  >
                    <button className="text-[14px] font-bold text-primary hover:text-accent transition-colors whitespace-nowrap tracking-widest flex items-center gap-1.5 py-4">
                      {link.name} <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${kurumsalHovered ? "rotate-180 text-accent" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {kurumsalHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[90%] left-1/2 -translate-x-1/2 min-w-[240px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden z-50 py-3"
                        >
                          {kurumsal.map((k, idx) => (
                            <Link
                              key={idx}
                              href={k.href}
                              className="px-6 py-3 text-[13px] font-bold text-primary hover:bg-neutral-50 hover:text-accent transition-all border-b last:border-b-0 border-gray-50 flex items-center justify-between group/item"
                              onClick={() => setKurumsalHovered(false)}
                            >
                              {k.title}
                              <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.id === "services") {
                return (
                  <div 
                    key={link.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setServicesHovered(true)}
                    onMouseLeave={() => setServicesHovered(false)}
                  >
                    <button className="text-[14px] font-bold text-primary hover:text-accent transition-colors whitespace-nowrap tracking-widest flex items-center gap-1.5 py-4">
                      {link.name} <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${servicesHovered ? "rotate-180 text-accent" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {servicesHovered && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[90%] left-1/2 -translate-x-1/2 min-w-[320px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden z-50 py-3"
                        >
                          {services.map((s, idx) => (
                            <Link 
                              key={idx}
                              href={`/hizmetler/${s.slug}`}
                              className="px-6 py-3 text-[13px] font-bold text-primary hover:bg-neutral-50 hover:text-accent transition-all border-b last:border-b-0 border-gray-50 flex items-center justify-between group/item"
                              onClick={() => setServicesHovered(false)}
                            >
                              {s.title}
                              <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-[14px] font-bold text-primary hover:text-accent transition-colors whitespace-nowrap tracking-widest py-4 uppercase"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link
              href="/iletisim"
              className="bg-accent text-primary px-8 py-3.5 rounded-xl font-bold text-[13px] tracking-widest hover:bg-white hover:text-primary transition-all shadow-lg shadow-accent/20 uppercase italic"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
             <button 
               className="text-primary p-1"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Megagöz style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-primary z-[300] lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/5">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white p-1">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white font-black text-lg tracking-tighter">ASB HUKUK</span>
               </div>
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"
               >
                 <X size={24} />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => {
                if (link.id === "kurumsal") {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-white/5 pb-4">
                      <button
                        onClick={() => setMobileKurumsalOpen(!mobileKurumsalOpen)}
                        className="flex items-center justify-between text-white font-black text-sm tracking-wide uppercase"
                      >
                        {link.name}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${mobileKurumsalOpen ? "rotate-180 text-accent" : "text-white/40"}`} />
                      </button>
                      <AnimatePresence>
                        {mobileKurumsalOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pt-6 space-y-4 overflow-hidden pl-4 border-l-2 border-accent/30"
                          >
                            {kurumsal.map((k, idx) => (
                              <Link
                                key={idx}
                                href={k.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white/60 font-bold text-sm hover:text-accent transition-colors"
                              >
                                {k.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.id === "services") {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-white/5 pb-4">
                       <button 
                         onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                         className="flex items-center justify-between text-white font-black text-sm tracking-wide uppercase"
                       >
                         {link.name}
                         <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-accent" : "text-white/40"}`} />
                       </button>
                       <AnimatePresence>
                         {mobileServicesOpen && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="flex flex-col pt-6 space-y-4 overflow-hidden pl-4 border-l-2 border-accent/30"
                           >
                             {services.map((s, idx) => (
                               <Link 
                                 key={idx}
                                 href={`/hizmetler/${s.slug}`} 
                                 onClick={() => setMobileMenuOpen(false)} 
                                 className="text-white/60 font-bold text-sm hover:text-accent transition-colors"
                               >
                                 {s.title}
                               </Link>
                             ))}
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="text-white font-black text-sm tracking-wide uppercase border-b border-white/5 pb-4"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="p-8 border-t border-white/5">
              <Link href="/iletisim" className="w-full bg-accent text-primary py-5 rounded-2xl flex items-center justify-center gap-3 font-black tracking-widest uppercase text-sm">
                İLETİŞİM
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
