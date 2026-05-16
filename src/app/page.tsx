"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, MessageSquare, Scale, BookOpen, Gavel, Phone } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "BANKA VE TİCARET HUKUKU", slug: "banka-ve-ticaret-hukuku", icon: <Scale size={32} /> },
  { title: "İŞ HUKUKU", slug: "is-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "MARKA VE PATENT HUKUKU", slug: "marka-ve-patent-hukuku", icon: <BookOpen size={32} /> },
  { title: "AİLE HUKUKU", slug: "aile-hukuku", icon: <MessageSquare size={32} /> },
  { title: "SİGORTA HUKUKU", slug: "sigorta-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "GAYRİMENKUL HUKUKU", slug: "gayrimenkul-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "BİLİŞİM HUKUKU", slug: "bilisim-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "İCRA VE İFLAS HUKUKU", slug: "icra-ve-iflas-hukuku", icon: <Gavel size={32} /> },
  { title: "SAĞLIK HUKUKU", slug: "saglik-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "TÜKETİCİ HUKUKU", slug: "tuketici-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "YATIRIM HUKUKU", slug: "yatirim-hukuku", icon: <CheckCircle2 size={32} /> },
  { title: "ULUSLARARASI TİCARİ SÖZLEŞMELER", slug: "uluslararasi-ticari-sozlesmeler", icon: <CheckCircle2 size={32} /> },
  { title: "CEZA HUKUKU", slug: "ceza-hukuku", icon: <Scale size={32} /> },
  { title: "İDARE VE VERGİ HUKUKU", slug: "idare-ve-vergi-hukuku", icon: <CheckCircle2 size={32} /> },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* HERO SECTION — split screen */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden">

        {/* ── SOL: Açık / Krem Alan ── */}
        <div className="relative flex-1 lg:w-1/2 bg-[#F5F0E6] flex items-center pt-28 pb-16 lg:pt-0 lg:pb-0">
          {/* Hafif desen */}
          <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage:"radial-gradient(circle, #092f1a 1px, transparent 1px)", backgroundSize:"24px 24px"}} />
          {/* Sağ kenar yumuşak geçiş */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F5F0E6] to-transparent hidden lg:block" />

          <div className="relative z-10 w-full max-w-xl mx-auto px-8 lg:pl-16 lg:pr-8 space-y-8">
            {/* Etiket */}
            <div className="inline-flex items-center gap-3 bg-primary/8 border border-primary/15 px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary text-xs font-black tracking-[0.3em] uppercase">Hukuki Çözüm Ortağınız</span>
            </div>

            {/* Başlık */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight">
              Adalet İçin<br />
              <span className="text-accent italic">Güvenilir</span><br />
              Hukuki Destek.
            </h1>

            <p className="text-primary/55 text-lg leading-relaxed">
              Avukat Aybike Sultan Biçer olarak hukuki süreçlerinizde şeffaf, güvenilir ve çözüm odaklı yaklaşımımızla yanınızdayız.
            </p>

            {/* Stat kartları */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[["10+","Yıllık Deneyim"],["14","Hizmet Alanı"],["Kadıköy","İstanbul"]].map(([v,l])=>(
                <div key={l} className="border border-primary/12 rounded-2xl px-4 py-4 bg-white/60 backdrop-blur-sm">
                  <p className="text-accent font-black text-2xl italic leading-none">{v}</p>
                  <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest mt-1.5">{l}</p>
                </div>
              ))}
            </div>

            {/* Butonlar */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="tel:05514882948" className="bg-primary hover:bg-primary/90 text-white px-9 py-4 rounded-2xl font-black tracking-widest text-sm transition-all shadow-xl shadow-primary/25 flex items-center gap-3 uppercase">
                <Phone size={17} /> Hemen Ara
              </a>
              <Link href="/hakkimizda" className="bg-transparent hover:bg-primary/6 text-primary border-2 border-primary/20 hover:border-primary/40 px-9 py-4 rounded-2xl font-black tracking-widest text-sm transition-all flex items-center gap-3 uppercase">
                Hakkımızda <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── SAĞ: Koyu Yeşil / Fotoğraf ── */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center relative overflow-hidden py-28 px-12">
          {/* Desen */}
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle, #C9882A 1px, transparent 1px)", backgroundSize:"28px 28px"}} />
          {/* Köşe glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/6 rounded-full blur-3xl" />

          {/* Fotoğraf frame */}
          <div className="relative z-10 w-[320px]">
            {/* Gold köşe süsler */}
            <div className="absolute -top-3 -left-3 w-14 h-14 border-t-[3px] border-l-[3px] border-accent rounded-tl-xl z-20" />
            <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-[3px] border-r-[3px] border-accent rounded-br-xl z-20" />

            <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-black/40 border border-white/8">
              <img
                src="/avukat.jpg"
                alt="Av. Aybike Sultan Biçer"
                className="w-full h-[440px] object-cover object-top"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  (t.nextElementSibling as HTMLElement)?.style.setProperty("display","flex");
                }}
              />
              {/* Placeholder */}
              <div style={{display:"none"}} className="w-full h-[440px] flex-col items-center justify-center gap-5 bg-primary-light p-8">
                <div className="w-28 h-28 rounded-full border-4 border-accent/25 bg-white/5 flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-18 h-18 object-contain opacity-50" />
                </div>
                <p className="text-white/25 text-[11px] font-bold tracking-widest uppercase text-center">Fotoğraf Yüklenecek<br />/avukat.jpg</p>
              </div>

              {/* Alt isim bandı */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6 pt-16">
                <p className="text-white font-black text-base tracking-tight uppercase italic">Av. Aybike Sultan Biçer</p>
                <p className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase mt-1">Hukuk & Danışmanlık</p>
              </div>
            </div>

            {/* Telefon badge */}
            <div className="absolute -right-14 top-10 bg-accent text-primary rounded-2xl px-5 py-3.5 shadow-xl shadow-accent/20 z-30">
              <p className="font-black text-[9px] tracking-widest uppercase opacity-70">Randevu İçin</p>
              <p className="font-black text-[15px] leading-tight mt-0.5">0551 488 29 48</p>
            </div>
          </div>
        </div>

      </section>

      {/* HAKKIMIZDA SECTION */}
      <section id="hakkimizda" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-primary flex items-center justify-center p-20">
                 <img src="/logo.png" alt="Logo" className="w-full h-auto opacity-20 invert" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <Scale size={200} className="text-accent/20" />
                 </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-accent p-10 rounded-3xl shadow-2xl z-20 hidden md:block">
               <p className="text-primary font-black text-4xl italic leading-none">10+</p>
               <p className="text-primary/60 font-bold text-xs uppercase tracking-widest mt-2">Yıllık Tecrübe</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1px bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase italic">Kurumsal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
              Avukat Aybike Sultan Biçer <br /> <span className="text-neutral-400">Hukuk & Danışmanlık</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Müvekkillerimize ulusal ve uluslararası düzeyde hukuki danışmanlık ve dava takibi hizmetleri sunmaktayız. Şeffaflık, güven ve dürüstlük temel prensiplerimizdir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Şeffaf İletişim</h4>
                  <p className="text-sm text-neutral-500">Süreçler hakkında anlık bilgilendirme.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Scale size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Hukuki Uzmanlık</h4>
                  <p className="text-sm text-neutral-500">Geniş yelpazede hukuki deneyim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HİZMETLER SECTION (Nivdiş Hover Animation) */}
      <section id="hizmetler" className="py-24 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-accent font-black tracking-[0.4em] text-xs uppercase italic">Hizmetlerimiz</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary uppercase">Uzmanlık Alanlarımız</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={`/hizmetler/${service.slug}`} id={service.slug} className="service-card bg-white border border-neutral-100 p-8 rounded-3xl shadow-sm group block">
                <div className="fill-bg" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-black/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-primary leading-tight group-hover:text-black mb-4 uppercase tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-black/70 mb-8 font-medium">
                    {service.title} alanındaki tüm hukuki süreçlerinizi profesyonel bir titizlikle yönetiyoruz.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-primary group-hover:text-black font-bold text-xs tracking-widest uppercase italic">
                    Detaylı Bilgi <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN AYBIKE SULTAN BICER SECTION */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-neutral-50 -translate-y-full" />
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                 <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic">Neden Biz?</span>
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                   Neden Av. Aybike <br /> Sultan Biçer Olsun?
                 </h2>
              </div>
              <div className="grid grid-cols-1 gap-8">
                 {[
                   { t: "Kişiselleştirilmiş Hizmet", d: "Her müvekkilimizin durumuna özel, butik bir yaklaşım sergiliyoruz." },
                   { t: "Hızlı ve Etkin Çözüm", d: "Süreçleri uzatmadan, en hızlı ve kalıcı çözüme odaklanıyoruz." },
                   { t: "Güncel Hukuki Bilgi", d: "Değişen mevzuatları anlık takip ederek en doğru stratejiyi kuruyoruz." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                         <span className="text-xl font-black italic">{i+1}</span>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-white font-bold text-xl">{item.t}</h4>
                         <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative hidden lg:block">
              <div className="aspect-square bg-accent/10 rounded-[60px] border border-white/10 p-10 backdrop-blur-3xl animate-pulse">
                 <div className="w-full h-full border-2 border-dashed border-accent/20 rounded-[40px] flex items-center justify-center">
                    <Scale size={180} className="text-accent/10" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
               <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase italic">Blog</span>
               <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase">Son Yazılarımız</h2>
            </div>
            <Link href="/blog" className="group flex items-center gap-3 font-black text-xs tracking-widest text-primary uppercase border-b-2 border-accent pb-2 italic">
               Tüm Blog Yazıları <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Boşanma Davalarında Mal Paylaşımı", c: "Aile Hukuku", d: "20.05.2024", slug: "bosanma-davalarinda-mal-paylasimi" },
              { t: "İş Kazası Sonrası Haklarınız", c: "İş Hukuku", d: "18.05.2024", slug: "is-kazasi-sonrasi-haklariniz" },
              { t: "Kira Tahliye Süreçleri ve Haklar", c: "Gayrimenkul Hukuku", d: "15.05.2024", slug: "kira-tahliye-surecleri-ve-haklar" }
            ].map((blog, i) => (
              <Link key={i} href={`/blog/${blog.slug}`} className="group cursor-pointer block">
                <div className="aspect-[16/10] bg-neutral-100 rounded-3xl mb-6 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full z-10 tracking-widest italic">
                     {blog.c}
                   </div>
                   <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <BookOpen size={60} className="text-primary/10" />
                   </div>
                </div>
                <div className="space-y-3 px-2">
                   <p className="text-accent font-bold text-xs tracking-widest italic">{blog.d}</p>
                   <h3 className="text-2xl font-black text-primary leading-tight group-hover:text-accent transition-colors italic">
                     {blog.t}
                   </h3>
                   <p className="text-neutral-500 text-sm line-clamp-2">
                     Bu makalemizde ilgili hukuki süreçler ve dikkat edilmesi gereken noktalar hakkında detaylı bilgileri bulabilirsiniz...
                   </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SSS SECTION */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase italic">Merak Edilenler</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase">Sıkça Sorulan Sorular</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "İlk görüşme ücretli mi?", a: "Hukuki danışmanlık hizmetlerimiz kapsamındaki ilk görüşme detayları için lütfen iletişime geçiniz." },
              { q: "Dava süreci ne kadar sürer?", a: "Her davanın niteliği, mahkemelerin yoğunluğu ve delil durumuna göre süreçler değişkenlik göstermektedir." },
              { q: "Vekaletname nasıl çıkarılır?", a: "Noter kanalıyla çıkartılan vekaletnameler için gerekli bilgiler tarafımızca size iletilmektedir." },
              { q: "Duruşmalara katılmam zorunlu mu?", a: "Çoğu hukuk davasında avukatınızın olması durumunda bizzat katılımınız gerekmemektedir, ancak ceza davalarında durum farklılık gösterebilir." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h4 className="font-bold text-primary group-open:text-accent transition-colors">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-open:rotate-180 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-neutral-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM PRE-FOOTER (Cta) */}
      <section id="iletisim" className="py-24 md:py-32 bg-white relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="bg-primary rounded-[50px] p-12 md:p-24 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                     <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                       Hukuki <br /> Sorununuz <br /> <span className="text-accent italic">Çözümsüz Değil.</span>
                     </h2>
                     <p className="text-white/60 text-lg max-w-sm">
                       Hemen bizimle iletişime geçin, uzman ekibimizle en doğru stratejiyi belirleyelim.
                     </p>
                  </div>
                  <div className="flex flex-col gap-6">
                     <a href="tel:05514882948" className="bg-white hover:bg-accent text-primary px-10 py-6 rounded-3xl font-black tracking-widest text-lg transition-all flex items-center justify-between group shadow-2xl">
                        ŞİMDİ ARA <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                     </a>
                     <a href="https://wa.me/905514882948" target="_blank" className="bg-[#25D366] hover:bg-white hover:text-[#25D366] text-white px-10 py-6 rounded-3xl font-black tracking-widest text-lg transition-all flex items-center justify-between group shadow-2xl">
                        WHATSAPP MESAJ <MessageSquare size={24} />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
