import React from "react";
import { ArrowRight, BookOpen, Clock, Tag, Calendar } from "lucide-react";
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
  },
  {
    id: 2,
    t: "Boşanma Sürecinde Mal Rejimi ve Yasal Düzenlemeler",
    c: "Aile Hukuku",
    d: "10.05.2024",
    slug: "bosanma-surecinde-mal-rejimi-ve-yasal-duzenlemeler",
    summary: "Edinilmiş mallara katılma rejimi, mal paylaşımında esas alınan kriterler ve boşanma davalarında dikkat edilmesi gereken yasal süreler.",
    readTime: "7 dk",
  },
  {
    id: 3,
    t: "Tüketici Olarak Haklarınız: Ayıplı Mal ve Hizmetlerde Başvuru Yolları",
    c: "Tüketici Hukuku",
    d: "01.05.2024",
    slug: "tuketici-haklari-ayipli-mal-ve-hizmetlerde-basvuru-yollari",
    summary: "Ayıplı ürün tesliminde iade, değişim ve onarım hakları ile tüketici hakem heyetine başvuru sürecine ilişkin yasal bilgiler.",
    readTime: "6 dk",
  },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ── HERO ── */}
      <div className="relative w-full min-h-[500px] flex items-end pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628]">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,.04) 40px,rgba(255,255,255,.04) 80px)"}} />
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 flex items-center justify-end pr-16"><BookOpen size={300} /></div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-28 space-y-5">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
            <Tag size={12} className="text-accent" /><span className="text-accent text-xs font-bold tracking-widest uppercase">Hukuki Bilgi Merkezi</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">Hukuki <span className="text-accent">Rehber</span></h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">Hukuk dünyasındaki son gelişmeler, dikkat edilmesi gereken yasal süreçler ve haklarınız hakkında uzman içerikler.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl -mt-16 pb-32 space-y-12">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group bg-white rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:shadow-xl transition-all block">
          <div className="relative bg-primary min-h-[300px] flex items-center justify-center p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,.05) 30px,rgba(255,255,255,.05) 60px)"}} />
            <div className="absolute top-6 left-6 bg-accent text-primary text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest z-10">Öne Çıkan</div>
            <div className="text-white/5 group-hover:text-white/10 transition-colors duration-700"><BookOpen size={160} /></div>
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/5 text-primary text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest">{featured.c}</span>
              <span className="flex items-center gap-2 text-neutral-400 text-xs font-bold"><Calendar size={12} className="text-accent" />{featured.d}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-primary uppercase italic leading-tight mb-4 group-hover:text-accent transition-colors">{featured.t}</h2>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">{featured.summary}</p>
            <div className="flex items-center gap-2 text-accent font-black text-xs tracking-widest uppercase">
              Devamını Oku <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-primary/5 flex items-center justify-center overflow-hidden">
                <BookOpen size={72} className="text-primary/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase px-4 py-2 rounded-full tracking-widest shadow-lg">{post.c}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-3 text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1 text-accent"><Calendar size={12} strokeWidth={3} />{post.d}</span>
                  <span className="flex items-center gap-1 text-neutral-400"><Clock size={12} />{post.readTime}</span>
                </div>
                <h3 className="text-lg font-black text-primary mb-3 leading-snug group-hover:text-accent transition-colors uppercase italic">{post.t}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{post.summary}</p>
                <div className="mt-auto flex items-center gap-2 text-primary font-black text-[11px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Devamını Oku <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-primary rounded-[40px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 space-y-3">
            <span className="text-accent font-bold tracking-widest text-xs uppercase italic">Hukuki Danışmanlık</span>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-tight">Sorunuz mu Var?<br /><span className="text-accent">Cevap Verelim.</span></h3>
          </div>
          <div className="relative z-10 flex gap-4 shrink-0 flex-wrap">
            <a href="tel:05514882948" className="bg-accent hover:bg-white text-primary px-8 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center gap-3">
              <Clock size={18} /> Hemen Ara
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
