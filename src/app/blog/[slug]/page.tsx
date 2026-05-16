"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Calendar, User, ArrowLeft, BookOpen, Share2, Phone, MessageSquare, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const relatedPosts = [
  { t: "Boşanma Davalarında Mal Paylaşımı", c: "Aile Hukuku", slug: "bosanma-davalarinda-mal-paylasimi" },
  { t: "İş Kazası Sonrası Haklarınız", c: "İş Hukuku", slug: "is-kazasi-sonrasi-haklariniz" },
  { t: "Kira Tahliye Süreçleri ve Haklar", c: "Gayrimenkul Hukuku", slug: "kira-tahliye-surecleri-ve-haklar" },
  { t: "Marka Tescilinin Önemi", c: "Ticaret Hukuku", slug: "marka-tescilinin-onemi" },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const titleWords = slug.split("-");
  const category = titleWords.length > 2 ? "Hukuki Rehber" : "Genel";

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ── HERO ── */}
      <div className="relative w-full min-h-[480px] flex items-end pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628]">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,.04) 40px,rgba(255,255,255,.04) 80px)"}} />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 pb-28 space-y-6">
          <div className="flex items-center gap-3">
            <Link href="/blog" className="flex items-center gap-2 text-white/40 hover:text-accent text-xs font-bold tracking-widest uppercase transition-colors">
              <ArrowLeft size={16} /> Blog
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">{category}</span>
          </div>
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
            <Tag size={12} className="text-accent" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Hukuki Rehber</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic max-w-3xl">{title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white/40 text-xs font-bold tracking-widest uppercase">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> 20 Mayıs 2024</span>
            <span className="flex items-center gap-2"><User size={14} className="text-accent" /> Av. Aybike Sultan Biçer</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className="container mx-auto px-6 max-w-7xl -mt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Main Article */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-10 md:p-16">
              {/* Lead */}
              <p className="text-xl text-primary font-bold italic leading-relaxed mb-10 border-l-4 border-accent pl-8 py-2">
                Bu yazımızda <strong>{title}</strong> konusunu hukuki boyutları, güncel yargı kararları ve dikkat edilmesi gereken kritik noktalar eşliğinde ele alıyoruz.
              </p>

              <div className="prose prose-lg max-w-none space-y-6 text-neutral-600 leading-relaxed">
                <h2 className="text-2xl font-black text-primary uppercase italic">{title} Nedir?</h2>
                <p>
                  Hukuki süreçlerin en önemli aşamalarından biri olan {title} konusu, tarafların haklarını koruma altına alan ve gelecekte oluşabilecek uyuşmazlıkları önleyen kritik bir role sahiptir. Türk Medeni Kanunu ve ilgili mevzuat çerçevesinde şekillenen bu alan, uzman hukuki görüş ve deneyim gerektirmektedir.
                </p>
                <p>
                  Özellikle son dönemde artan dava sayısı ve değişen yargı kararları göz önünde bulundurulduğunda, bu konuda bilinçli olmak her bireyin ve kurumun temel hakkıdır. Hukuki süreçlerde geç kalınan adımlar telafisi güç hak kayıplarına yol açabilmektedir.
                </p>

                <h2 className="text-2xl font-black text-primary uppercase italic pt-4">Dikkat Edilmesi Gereken Hususlar</h2>
                <p>
                  Süreç boyunca tarafların beyanları, sunulan deliller ve yasal sürelerin titizlikle takibi hayati önem taşımaktadır. Hak kaybına uğramamak adına her adımın bir uzman eşliğinde planlanması büyük önem taşır.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {["Yasal süreleri kaçırmamak","Delilleri zamanında sunmak","Resmi yazışmalara dikkat etmek","Uzman avukat desteği almak","Beyanları dikkatlice hazırlamak","Tebliğ tarihlerini kayıt altına almak"].map((i,k)=>(
                    <div key={k} className="flex items-center gap-3 bg-neutral-50 border border-gray-100 p-4 rounded-2xl">
                      <div className="w-8 h-8 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 text-sm font-black">{k+1}</div>
                      <span className="text-primary font-bold text-sm">{i}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-black text-primary uppercase italic pt-4">Güncel Yargı Kararları</h2>
                <p>
                  Yargıtay'ın son dönemde verdiği kararlar, {title} konusundaki uygulamaları önemli ölçüde şekillendirmiştir. Özellikle ispat yüküne ilişkin getirilen yeni yorumlar ve delil standartlarındaki değişiklikler, dava stratejisini doğrudan etkilemektedir.
                </p>

                {/* Callout */}
                <div className="bg-primary rounded-3xl p-8 flex gap-6 items-start my-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg uppercase italic mb-2">Önemli Hatırlatma</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Bu yazı genel hukuki bilgilendirme amacıyla hazırlanmıştır. Bireysel durumunuz için mutlaka uzman bir avukattan kişisel danışmanlık almanızı tavsiye ederiz.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-primary uppercase italic pt-4">Sonuç</h2>
                <p>
                  {title} konusunda bilinçli olmak, haklarınızı zamanında ve eksiksiz kullanabilmeniz açısından kritik bir öneme sahiptir. Profesyonel hukuki destek alarak süreci doğru yönetmek, hem zaman hem de maddi açıdan önemli avantajlar sağlayacaktır.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg">A</div>
                  <div>
                    <p className="font-black text-primary text-sm">Av. Aybike Sultan Biçer</p>
                    <p className="text-neutral-400 text-xs">Hukuk & Danışmanlık</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Paylaş</span>
                  <button className="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-accent flex items-center justify-center text-primary transition-all"><Share2 size={16} /></button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-[40px] shadow-md border border-gray-100 p-10">
              <h3 className="text-xl font-black text-primary uppercase italic mb-6">İlgili Yazılar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.filter(p => p.slug !== slug).slice(0,4).map((p,i)=>(
                  <Link key={i} href={`/blog/${p.slug}`} className="group flex items-center gap-4 bg-neutral-50 hover:bg-accent/5 border border-gray-100 hover:border-accent p-5 rounded-2xl transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <BookOpen size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-primary text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2">{p.t}</p>
                      <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">{p.c}</span>
                    </div>
                    <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 shrink-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* CTA */}
            <div className="bg-accent rounded-[40px] p-10 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <h3 className="text-primary font-black text-2xl italic uppercase leading-tight mb-3">HUKUKI DESTEK<br />ALIN</h3>
              <p className="text-primary/70 text-xs font-bold uppercase tracking-widest mb-8">Sorularınız için uzman ekibimizle iletişime geçin.</p>
              <div className="space-y-3 relative z-10">
                <a href="tel:05514882948" className="w-full bg-primary text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs tracking-widest hover:bg-white hover:text-primary transition-all uppercase">
                  <Phone size={18} /> Hemen Ara
                </a>
                <a href="https://wa.me/905514882948" target="_blank" className="w-full bg-white text-primary py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs tracking-widest hover:bg-primary hover:text-white transition-all uppercase">
                  <MessageSquare size={18} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="bg-primary rounded-[40px] p-8 text-center">
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Tüm Yazılar</p>
              <Link href="/blog" className="inline-flex items-center gap-3 text-accent hover:text-white transition-colors font-black text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Blog Sayfasına Dön
              </Link>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8">
              <h3 className="text-primary font-black text-sm uppercase italic tracking-widest mb-5">Kategoriler</h3>
              <div className="flex flex-wrap gap-2">
                {["Aile Hukuku","İş Hukuku","Ticaret Hukuku","Ceza Hukuku","Gayrimenkul","Tüketici Hukuku","Bilişim"].map((t,i)=>(
                  <span key={i} className="bg-neutral-50 border border-gray-100 text-primary text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full hover:bg-accent hover:border-accent transition-all cursor-pointer">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
