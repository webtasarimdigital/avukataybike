"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone as PhoneIcon, Instagram, Facebook, MessageCircle, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { title: "BANKA VE TİCARET HUKUKU", slug: "banka-ve-ticaret-hukuku" },
  { title: "İŞ HUKUKU", slug: "is-hukuku" },
  { title: "MARKA VE PATENT HUKUKU", slug: "marka-ve-patent-hukuku" },
  { title: "AİLE HUKUKU", slug: "aile-hukuku" },
  { title: "SİGORTA HUKUKU", slug: "sigorta-hukuku" },
  { title: "GAYRİMENKUL HUKUKU", slug: "gayrimenkul-hukuku" },
  { title: "BİLİŞİM HUKUKU", slug: "bilisim-hukuku" },
  { title: "İCRA VE İFLAS HUKUKU", slug: "icra-ve-iflas-hukuku" },
  { title: "SAĞLIK HUKUKU", slug: "saglik-hukuku" },
  { title: "TÜKETİCİ HUKUKU", slug: "tuketici-hukuku" },
  { title: "YATIRIM HUKUKU", slug: "yatirim-hukuku" },
  { title: "ULUSLARARASI TİCARİ SÖZLEŞMELER", slug: "uluslararasi-ticari-sozlesmeler" },
  { title: "CEZA HUKUKU", slug: "ceza-hukuku" },
  { title: "İDARE VE VERGİ HUKUKU", slug: "idare-ve-vergi-hukuku" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    { name: "ANA SAYFA", href: "/" },
    { name: "HAKKIMIZDA", href: "#hakkimizda" },
    {
      name: "HİZMETLER",
      href: "#hizmetler",
      submenu: services.map((s) => ({
        name: s.title,
        href: `#${s.slug}`,
      })),
    },
    { name: "BLOG", href: "#blog" },
    { name: "İLETİŞİM", href: "#iletisim" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex bg-primary text-white py-2 px-6 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[12px] font-medium tracking-wide">
          <div className="flex gap-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Eğitim+Mah.,+Poyraz+Sokak,+No:26/4,+Kadıköy/İstanbul"
              target="_blank"
              className="flex items-center gap-2 hover:text-accent transition-all cursor-pointer"
            >
              <MapPin size={16} className="text-accent" />
              Eğitim Mah., Poyraz Sk. No:26/4, Kadıköy/İST
            </a>
            <a
              href="tel:05514882948"
              className="flex items-center gap-2 hover:text-accent transition-all cursor-pointer"
            >
              <PhoneIcon size={16} className="text-accent" />
              0551 488 29 48
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={14} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-accent transition-colors"><MessageCircle size={14} /></a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Çalışma Saatleri: 09:00 - 18:00
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 top-0 lg:top-[37px] ${isScrolled ? "lg:!top-0 bg-white shadow-xl py-3" : "bg-white/95 backdrop-blur-md py-5 border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-xl transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-xl md:text-2xl leading-none tracking-tighter">AYBİKE SULTAN</span>
              <span className="text-accent font-bold text-[10px] md:text-[12px] tracking-[0.3em] mt-1 leading-none uppercase">Hukuk & Danışmanlık</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-primary font-bold text-[13px] tracking-widest hover:text-accent transition-colors flex items-center gap-1"
                  onClick={link.submenu ? (e) => toggleDropdown(link.name, e) : undefined}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === link.name ? "rotate-180" : ""}`} />}
                </Link>

                {link.submenu && (
                  <div className={`absolute left-0 top-full pt-5 transition-all duration-300 ${openDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}`}>
                    <div className="bg-white shadow-2xl rounded-2xl py-4 min-w-[280px] border border-gray-50 grid grid-cols-1 gap-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="px-6 py-2.5 text-[12px] font-bold text-gray-600 hover:text-accent hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-accent"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="https://wa.me/905514882948" target="_blank" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest hover:bg-accent hover:text-primary transition-all shadow-lg shadow-primary/10 uppercase">
              Tıkla Bilgi Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isMenuOpen ? "visible" : "invisible pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-primary/95 backdrop-blur-xl transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[85%] bg-white shadow-2xl transition-transform duration-500 p-8 flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-12">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            <button className="bg-gray-100 p-3 rounded-xl text-primary" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto pr-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-50 pb-4">
                <Link
                  href={link.href}
                  className="text-primary font-black text-xl tracking-tight flex justify-between items-center"
                  onClick={link.submenu ? (e) => toggleDropdown(link.name, e) : () => setIsMenuOpen(false)}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={20} className={openDropdown === link.name ? "rotate-180" : ""} />}
                </Link>

                {link.submenu && openDropdown === link.name && (
                  <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-accent">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="text-gray-500 font-bold text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <a href="tel:05514882948" className="w-full bg-accent text-primary p-5 rounded-2xl flex items-center justify-center gap-3 font-black tracking-widest uppercase text-sm mb-4">
              <PhoneIcon size={20} /> HEMEN ARA
            </a>
            <div className="flex justify-center gap-8 text-primary/30">
              <Instagram size={24} />
              <Facebook size={24} />
              <MessageCircle size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
