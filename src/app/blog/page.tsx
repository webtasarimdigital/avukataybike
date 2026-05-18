import React from "react";
import { ArrowRight, Clock, Tag, Calendar, Phone } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    t: "Haksız İşten Çıkarılma Durumunda Yasal Başvuru Yolları",
    c: "İş Hukuku",
    d: "20.05.2024",
    slug: "haksiz-isten-cikarilmada-yasal-basvuru-yollari",
    summary: "Haksız fesih bildirimine maruz kalan işçilerin arabuluculuk ve iş mahkemesi süreçleri hakkında bilinmesi gereken yasal bilgiler.",
    readTime: "5 dk",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    t: "Boşanma Sürecinde Mal Rejimi ve Yasal Düzenlemeler",
    c: "Aile Hukuku",
    d: "10.05.2024",
    slug: "bosanma-surecinde-mal-rejimi-ve-yasal-duzenlemeler",
    summary: "Edinilmiş mallara katılma rejimi, mal paylaşımında esas alınan kriterler ve boşanma davalarında dikkat edilmesi gereken yasal süreler.",
    readTime: "7 dk",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    t: "Tüketici Olarak Haklarınız: Ayıplı Mal ve Hizmetlerde Başvuru Yolları",
    c: "Tüketici Hukuku",
    d: "01.05.2024",
    slug: "tuketici-haklari-ayipli-mal-ve-hizmetlerde-basvuru-yollari",
    summary: "Ayıplı ürün tesliminde iade, değişim ve onarım hakları ile tüketici hakem heyetine başvuru sürecine ilişkin yasal bilgiler.",
    readTime: "6 dk",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">

      {/* HERO */}
      <div className="relative w-full overflow-hidden pt-44 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628]">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #C9882A 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
            <Tag size={12} className="text-accent" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Hukuki Bilgi Merkezi</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
            Hukuki <span className="text-accent">Rehber</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Hukuk dünyasındaki son gelişmeler, yasal süreçler ve haklarınız hakkında uzman içerikler.
          </p>
        </div>
      </div>

      {/* KARTLAR */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl hover:-translate-y-2 hover:border-accent transition-all duration-400 flex flex-col"
            >
              {/* Fill animasyonu */}
              <div className="absolute inset-0 bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-3xl z-0" />

              {/* Görsel */}
              <div className="relative h-52 overflow-hidden z-10">
                <img
                  src={post.img}
                  alt={post.t}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow">
                  {post.c}
                </div>
              </div>

              {/* İçerik */}
              <div className="relative z-10 p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-3 text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1 text-accent group-hover:text-white transition-colors">
                    <Calendar size={11} strokeWidth={3} />{post.d}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400 group-hover:text-white/70 transition-colors">
                    <Clock size={11} />{post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-black text-primary group-hover:text-white mb-3 leading-snug transition-colors uppercase italic">
                  {post.t}
                </h3>
                <p className="text-neutral-500 group-hover:text-white/85 text-sm leading-relaxed flex-1 line-clamp-3 transition-colors">
                  {post.summary}
                </p>
                <div className="mt-5 flex items-center gap-2 text-accent group-hover:text-white text-[11px] font-black tracking-widest uppercase transition-colors">
                  Devamını Oku
                  <span className="w-7 h-7 rounded-full border-2 border-accent group-hover:border-white flex items-center justify-center transition-colors">
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary rounded-[40px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 space-y-3">
            <span className="text-accent font-bold tracking-widest text-xs uppercase italic">Hukuki Danışmanlık</span>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-tight">
              Sorunuz mu Var?<br /><span className="text-accent">Cevap Verelim.</span>
            </h3>
          </div>
          <div className="relative z-10 flex gap-4 shrink-0 flex-wrap">
            <a href="tel:05514882948" className="bg-accent hover:bg-white text-primary px-8 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center gap-3">
              <Phone size={18} /> Hemen Ara
            </a>
            <Link href="/iletisim" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all">
              İletişim Formu
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
