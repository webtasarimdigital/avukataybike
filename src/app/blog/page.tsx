import React from "react";
import { ArrowRight, BookOpen, Clock, Tag, Calendar } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  { id: 1, t: "Boşanma Davalarında Mal Paylaşımı", c: "Aile Hukuku", d: "20.05.2024", slug: "bosanma-davalarinda-mal-paylasimi" },
  { id: 2, t: "İş Kazası Sonrası Haklarınız", c: "İş Hukuku", d: "18.05.2024", slug: "is-kazasi-sonrasi-haklariniz" },
  { id: 3, t: "Kira Tahliye Süreçleri ve Haklar", c: "Gayrimenkul Hukuku", d: "15.05.2024", slug: "kira-tahliye-surecleri-ve-haklar" },
  { id: 4, t: "Bilişim Suçları ve Savunma Yöntemleri", c: "Bilişim Hukuku", d: "12.05.2024", slug: "bilisim-suclari-ve-savunma-yontemleri" },
  { id: 5, t: "Marka Tescilinin Önemi", c: "Ticaret Hukuku", d: "10.05.2024", slug: "marka-tescilinin-onemi" },
  { id: 6, t: "Tüketici Hakem Heyeti Süreçleri", c: "Tüketici Hukuku", d: "08.05.2024", slug: "tuketici-hakem-heyeti-surecleri" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header Area (Megagöz Style) */}
      <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
           <div className="absolute inset-0 bg-primary-light/20 -skew-x-12 translate-x-1/4 pointer-events-none" />
           <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-accent" />
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs md:text-sm italic">
              BLOG
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 uppercase italic">
            HUKUKİ REHBER
          </h1>
          
          <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Hukuk dünyasındaki son gelişmeleri ve merak ettiğiniz konuları ele aldığımız güncel makaleler.
          </p>
        </div>
      </div>

      {/* Main Blog Grid (Overlapping) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 -mt-20 md:-mt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100 flex items-center justify-center">
                 <BookOpen size={60} className="text-primary/5 transition-transform duration-500 group-hover:scale-125" />
                 <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase px-4 py-2 rounded-full z-10 tracking-widest italic shadow-lg">
                    {post.c}
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-accent mb-4 text-[10px] font-black uppercase tracking-widest italic">
                   <Calendar size={14} strokeWidth={3} />
                   <span>{post.d}</span>
                </div>
                
                <h3 className="text-xl font-black text-primary mb-4 leading-snug group-hover:text-accent transition-colors uppercase tracking-tight italic">
                  {post.t}
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 font-medium">
                  {post.t} konusuyla ilgili merak edilen hukuki süreçleri, dikkat edilmesi gereken noktaları ve en güncel gelişmeleri bu makalemizde bulabilirsiniz.
                </p>

                <div className="mt-auto flex items-center gap-2 text-primary font-black text-[11px] tracking-widest uppercase italic group-hover:text-accent transition-colors">
                  DEVAMINI OKU
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-4">
           <button className="w-12 h-12 rounded-2xl bg-primary text-white font-black flex items-center justify-center shadow-xl shadow-primary/20">1</button>
           <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-primary font-black flex items-center justify-center hover:bg-accent hover:border-accent transition-all">2</button>
           <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-primary font-black flex items-center justify-center hover:bg-accent hover:border-accent transition-all">3</button>
        </div>
      </div>
    </main>
  );
}
