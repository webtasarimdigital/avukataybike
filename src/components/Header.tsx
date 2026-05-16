"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Eğitim Mah., Poyraz Sk. No:26/4, Kadıköy/İST
            </a>
            <a
              href="tel:05514882948"
              className="flex items-center gap-2 hover:text-accent transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              0551 488 29 48
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" className="hover:text-accent transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-accent transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank" className="hover:text-accent transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary/95 backdrop-blur-md py-3 shadow-2xl" : "bg-primary py-5"
        } text-white px-6 md:px-20`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Aybike Sultan Biçer Logo" className="h-12 w-auto bg-white rounded-full p-1" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none group-hover:text-accent transition-colors">AV. AYBİKE SULTAN BİÇER</span>
                <span className="text-[10px] tracking-[0.3em] font-light text-neutral-400 uppercase">Hukuk & Danışmanlık</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-wider uppercase">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.submenu ? (
                  <div
                    className="hover:text-accent transition-colors flex items-center gap-1 py-2 cursor-pointer"
                    onClick={(e) => toggleDropdown(link.name, e)}
                  >
                    {link.name}
                    <span
                      className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                ) : (
                  <Link
                    className="hover:text-accent transition-colors flex items-center gap-1 py-2"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
                {link.submenu && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 bg-primary min-w-[280px] shadow-2xl rounded-b-xl py-4 transition-all duration-300 border-t-2 border-accent ${
                      openDropdown === link.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-6 py-2.5 hover:bg-accent hover:text-black transition-all text-[11px] font-bold uppercase"
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
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-accent hover:text-black transition-all"
            >
              <span className="material-symbols-outlined text-[28px]">{isMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/905514882948"
              target="_blank"
              className="bg-accent hover:bg-white text-black px-6 py-3 rounded-xl font-bold text-[12px] transition-all shadow-lg hover:shadow-accent/20 flex items-center gap-2 group"
            >
              TIKLA BİLGİ AL <span className="material-symbols-outlined text-[16px] font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div
            className={`absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-primary shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto bg-white rounded-full p-1" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/5 pb-3 mb-1 last:border-0">
                  {link.submenu ? (
                    <div className="text-[11px] font-black tracking-[0.2em] text-accent uppercase mb-3 mt-1">
                      {link.name}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[14px] font-bold tracking-wide text-white/80 hover:text-accent transition-colors flex items-center justify-between py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.submenu && (
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-white/10 ml-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="text-[12px] font-medium text-white/50 hover:text-accent transition-colors uppercase"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-6 border-t border-white/5 bg-black/10">
              <a
                href="https://wa.me/905514882948"
                target="_blank"
                className="w-full bg-accent text-black py-4 rounded-xl font-bold text-[13px] tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                TIKLA BİLGİ AL <span className="material-symbols-outlined font-black text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
