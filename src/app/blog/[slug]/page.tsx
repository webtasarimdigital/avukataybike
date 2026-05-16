"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Clock, Calendar, User, ArrowLeft, BookOpen, Share2 } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="pt-24 pb-24">
      {/* Header Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <div className="flex flex-col gap-6 items-center">
            <Link href="/blog" className="flex items-center gap-2 text-accent font-bold text-xs tracking-widest uppercase hover:text-white transition-colors">
               <ArrowLeft size={16} /> Blog'a Dön
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">{title}</h1>
            <div className="flex items-center gap-6 text-white/50 font-bold text-[11px] tracking-widest uppercase">
               <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> 20 Mayıs 2024</span>
               <span className="flex items-center gap-2"><User size={14} className="text-accent" /> Av. Aybike Sultan Biçer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-neutral-600 font-medium leading-relaxed">
             <p className="text-xl text-primary font-bold italic leading-relaxed mb-10 border-l-4 border-accent pl-8">
                Bu yazımızda {title} konusunu hukuki boyutları, güncel yargıtay kararları ve dikkat edilmesi gereken kritik noktalar eşliğinde ele alıyoruz.
             </p>
             
             <h3 className="text-2xl font-black text-primary uppercase mt-12 mb-6 tracking-tight italic">{title} Nedir?</h3>
             <p>
                Hukuki süreçlerin en önemli aşamalarından biri olan {title}, tarafların haklarını koruma altına alan ve gelecekte oluşabilecek uyuşmazlıkları önleyen bir yapıya sahiptir. Türk Medeni Kanunu ve ilgili mevzuat çerçevesinde şekillenen bu süreç, uzman bir görüş gerektirmektedir.
             </p>

             <h3 className="text-2xl font-black text-primary uppercase mt-12 mb-6 tracking-tight italic">Dikkat Edilmesi Gereken Hususlar</h3>
             <p>
                Süreç boyunca tarafların beyanları, sunulan deliller ve yasal sürelerin takibi hayati önem taşımaktadır. Hak kaybına uğramamak adına her adımın titizlikle planlanması gerekir.
             </p>
             
             <div className="bg-neutral-50 p-10 rounded-[40px] my-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                   <BookOpen size={40} />
                </div>
                <div className="space-y-2">
                   <h4 className="text-xl font-black text-primary uppercase">Uzman Yardımı Alın</h4>
                   <p className="text-sm text-neutral-500">Hukuki süreçler karmaşık olabilir. Profesyonel bir destek almak, davanızın seyrini olumlu yönde etkileyecektir.</p>
                </div>
             </div>

             <p>
                Sonuç olarak {title}, hukuki güvenliğin sağlanması açısından vazgeçilmez bir unsurdur. Detaylı bilgi ve danışmanlık için ofisimizle iletişime geçebilirsiniz.
             </p>
          </div>

          {/* Post Footer */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center gap-4">
                <span className="text-xs font-black text-primary uppercase tracking-widest italic">Yazıyı Paylaş:</span>
                <div className="flex gap-4">
                   <button className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-primary hover:bg-accent transition-all"><Share2 size={16} /></button>
                </div>
             </div>
             <Link href="/iletisim" className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-accent hover:text-primary transition-all italic">
                RANDEVU AL
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
