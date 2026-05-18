"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase, Users, Shield, Heart, Gavel, ShoppingCart, Scale, ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Banka ve Ticaret Hukuku",
    slug: "banka-ve-ticaret-hukuku",
    Icon: Briefcase,
    desc: "Şirket kuruluşundan finansal yeniden yapılandırmaya, birleşme ve satın almalardan konkordato süreçlerine kadar.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "İş Hukuku",
    slug: "is-hukuku",
    Icon: Users,
    desc: "İş ilişkisinin kurulmasından sona ermesine kadar işçi ve işveren haklarının korunması.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Marka ve Patent Hukuku",
    slug: "marka-ve-patent-hukuku",
    Icon: Shield,
    desc: "Marka, patent, endüstriyel tasarım ve faydalı model tescil süreçleri ile ihlallerine karşı hukuki temsil.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Aile Hukuku",
    slug: "aile-hukuku",
    Icon: Heart,
    desc: "Boşanma, velayet, nafaka, mal paylaşımı ve aile uyuşmazlıklarında tecrübeli hukuki destek.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Sigorta Hukuku",
    slug: "sigorta-hukuku",
    Icon: Shield,
    desc: "Sigorta poliçesinden kaynaklanan alacak davaları ve mesleki mesuliyet uyuşmazlıkları.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "İcra ve İflas Hukuku",
    slug: "icra-ve-iflas-hukuku",
    Icon: Gavel,
    desc: "Alacaklı ve borçlu taraf için alacak takibi, icra işlemleri ve yeniden yapılandırma.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Sağlık Hukuku",
    slug: "saglik-hukuku",
    Icon: Heart,
    desc: "Tıbbi malpraktis, hasta hakları ve sağlık kurumlarına yönelik uyuşmazlıklarda hukuki destek.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Tüketici Hukuku",
    slug: "tuketici-hukuku",
    Icon: ShoppingCart,
    desc: "Ayıplı mal iadesi, cayma hakkı ve firmaların tüketici mevzuatı uyum süreçleri.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Kişisel Verilerin Korunması Hukuku",
    slug: "kisisel-verilerin-korunmasi-hukuku",
    Icon: Shield,
    desc: "KVKK uyum süreçleri, veri envanteri, VERBİS ve veri ihlali durumlarında hukuki destek.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80&auto=format&fit=crop",
  },
];


export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <div className="relative w-full min-h-[440px] flex items-end pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628] z-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80&auto=format&fit=crop"
            alt="Hukuk Bürosu"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-luminosity"
          />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,.03) 40px,rgba(255,255,255,.03) 80px)" }} />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <Link href="/" className="text-white/40 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Ana Sayfa</Link>
              <span className="text-white/20">/</span>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Hizmetler</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Uzmanlık Alanları</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
              Hukuki<br /><span className="text-accent">Hizmetlerimiz</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Her hukuki sürecin kendine özgü olduğunu biliyor; müvekkillerimize özel stratejiler ve uzman kadromuzla sonuç odaklı hizmet sunuyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SERVİS KARTLARI */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 -mt-24 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/hizmetler/${svc.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col border border-neutral-100 h-full"
              >
                {/* Görsel */}
                <div className="relative h-52 bg-primary overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Sadece alt gradient - görsel net görünsün */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Hover renk tonu */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
                  {/* İkon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/80 group-hover:border-transparent transition-all duration-400">
                    <svc.Icon size={22} className="text-white transition-colors duration-400" />
                  </div>
                  {/* Alt çizgi animasyonu */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* İçerik */}
                <div className="p-7 flex flex-col flex-1">
                  <span className="inline-flex items-center gap-1.5 text-accent text-[10px] font-black tracking-widest uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Hukuki Hizmet
                  </span>
                  <h3 className="font-black text-primary text-lg leading-tight mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary text-xs font-black tracking-widest uppercase border-t border-neutral-100 pt-5 group-hover:text-accent transition-colors duration-300">
                    Detaylı Bilgi
                    <ArrowRight size={13} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
