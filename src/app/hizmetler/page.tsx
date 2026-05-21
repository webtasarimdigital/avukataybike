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
  {
    title: "Ceza Hukuku",
    slug: "ceza-hukuku",
    Icon: Gavel,
    desc: "Soruşturma ve kovuşturma süreçlerinde etkin savunma, ağır ceza davaları ve kanun yolları.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80&auto=format&fit=crop",
  },
];


export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* HERO */}
      <div className="relative w-full min-h-[440px] flex items-end pt-44 pb-0 overflow-hidden bg-cream-dark">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <Link href="/" className="text-primary/50 hover:text-primary text-xs font-bold tracking-widest uppercase transition-colors">Ana Sayfa</Link>
              <span className="text-primary/30">/</span>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Çalışma Alanları</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Uzmanlık Alanları</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight uppercase italic">
              Çalışma<br /><span className="text-accent">Alanlarımız</span>
            </h1>
            <p className="text-primary-muted text-xl leading-relaxed max-w-2xl">
              Her hukuki sürecin kendine özgü olduğunu biliyor; müvekkillerimize özel stratejiler ile sonuç odaklı hizmet sunuyoruz.
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
                className="group relative bg-white rounded-3xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col border border-neutral-100 hover:border-accent overflow-hidden h-full"
              >
                {/* Alttan yukarı dolma katmanı */}
                <div className="absolute inset-0 bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-3xl z-0" />

                {/* Görsel — içeride yuvarlak */}
                <div className="relative rounded-2xl overflow-hidden h-48 mb-5 shrink-0 z-10">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* İçerik */}
                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="font-black text-primary text-lg leading-tight mb-2 tracking-tight transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-primary-muted group-hover:text-primary/80 text-sm leading-relaxed flex-1 transition-colors duration-300">
                    {svc.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-accent group-hover:text-primary text-[11px] font-black tracking-widest uppercase transition-colors duration-300">
                    DETAYLAR
                    <span className="w-7 h-7 rounded-full border-2 border-accent group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
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
