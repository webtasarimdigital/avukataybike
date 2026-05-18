"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale, Gavel, Shield, Briefcase, Users,
  Heart, ShoppingCart, Award, Target,
  CheckCircle2, ArrowRight, MessageSquare, Phone,
  MapPin, FileText, Clock,
} from "lucide-react";
import Link from "next/link";

type SvcType = { title: string; slug: string; Icon: React.ElementType; desc: string; img: string };

const services: SvcType[] = [
  { title: "Banka ve Ticaret Hukuku", slug: "banka-ve-ticaret-hukuku", Icon: Briefcase, desc: "Ticari uyuşmazlıklar, şirket sözleşmeleri ve banka işlemleri.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop" },
  { title: "İş Hukuku", slug: "is-hukuku", Icon: Users, desc: "İş sözleşmesi, haksız fesih ve tazminat davaları.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop" },
  { title: "Marka ve Patent Hukuku", slug: "marka-ve-patent-hukuku", Icon: Shield, desc: "Fikri mülkiyet tescili ve ihlallerine karşı hukuki temsil.", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format&fit=crop" },
  { title: "Aile Hukuku", slug: "aile-hukuku", Icon: Heart, desc: "Boşanma, velayet ve nafaka süreçlerinde hukuki destek.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop" },
  { title: "Sigorta Hukuku", slug: "sigorta-hukuku", Icon: Shield, desc: "Sigorta tazminat uyuşmazlıkları ve poliçe itirazları.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop" },
  { title: "İcra ve İflas Hukuku", slug: "icra-ve-iflas-hukuku", Icon: Gavel, desc: "Alacak takibi, icra işlemleri ve iflas süreçleri.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop" },
  { title: "Sağlık Hukuku", slug: "saglik-hukuku", Icon: Heart, desc: "Tıbbi malpraktis ve hasta hakları uyuşmazlıkları.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop" },
  { title: "Tüketici Hukuku", slug: "tuketici-hukuku", Icon: ShoppingCart, desc: "Ayıplı ürün, tüketici hakları ve hakem heyeti.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop" },
  { title: "Kişisel Verilerin Korunması Hukuku", slug: "kisisel-verilerin-korunmasi-hukuku", Icon: Shield, desc: "KVKK uyum, veri envanteri ve veri ihlali danışmanlığı.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80&auto=format&fit=crop" },
];

const TeraziSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="60" y1="10" x2="60" y2="114" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="60" cy="10" r="6" fill="currentColor"/>
    <rect x="34" y="112" width="52" height="8" rx="4" fill="currentColor"/>
    <rect x="44" y="108" width="32" height="6" rx="3" fill="currentColor" opacity="0.45"/>
    <line x1="16" y1="42" x2="104" y2="42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="27" y1="42" x2="20" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="27" y1="42" x2="34" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 68 Q27 83 42 68" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.13" strokeLinecap="round"/>
    <line x1="93" y1="42" x2="86" y2="73" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="93" y1="42" x2="100" y2="73" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M78 73 Q93 89 108 73" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.13" strokeLinecap="round"/>
  </svg>
);

const faqs = [
  { q: "İlk görüşme ücretli mi?", a: "Hukuki danışmanlık hizmetlerimiz kapsamındaki görüşme ücret bilgileri için lütfen iletişime geçiniz." },
  { q: "Dava süreci ne kadar sürer?", a: "Her davanın niteliği, mahkemelerin iş yoğunluğu ve delil durumuna göre süreçler değişkenlik göstermektedir." },
  { q: "Vekaletname nasıl çıkarılır?", a: "Noter kanalıyla çıkartılan vekaletnameler için gerekli belgeler ve işlem adımları tarafımızca bildirilmektedir." },
  { q: "Duruşmalara bizzat katılmam gerekiyor mu?", a: "Çoğu hukuk davasında avukatın temsil etmesi yeterlidir; ceza davalarında durum farklılık gösterebilir." },
  { q: "Online danışmanlık hizmeti veriyor musunuz?", a: "Evet, görüntülü görüşme yoluyla uzaktan hukuki danışmanlık hizmeti verilmektedir." },
];

const blogPosts = [
  { t: "Haksız İşten Çıkarılmada Yasal Başvuru Yolları", c: "İş Hukuku", d: "20.05.2024", slug: "haksiz-isten-cikarilmada-yasal-basvuru-yollari", Icon: Users, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&auto=format&fit=crop" },
  { t: "Boşanma Sürecinde Mal Rejimi ve Yasal Düzenlemeler", c: "Aile Hukuku", d: "10.05.2024", slug: "bosanma-surecinde-mal-rejimi-ve-yasal-duzenlemeler", Icon: Heart, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop" },
  { t: "Tüketici Haklarınız: Ayıplı Mal ve Hizmetlerde Başvuru Yolları", c: "Tüketici Hukuku", d: "01.05.2024", slug: "tuketici-haklari-ayipli-mal-ve-hizmetlerde-basvuru-yollari", Icon: ShoppingCart, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ══════════════════════════════════════
          HERO — Yatay Split
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden" style={{paddingTop:"var(--header-h,92px)"}}>

        {/* Arka plan: hukuk kitaplığı tam kaplıyor */}
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1800&q=80&auto=format&fit=crop"
          alt="Hukuk Bürosu"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay: soldan sağa koyulaşan gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/70 to-primary/20 z-10" />

        {/* SOL — Metin (overlay üstünde) */}
        <div className="relative z-20 flex-1 lg:w-[55%] flex items-center justify-center py-20 lg:py-0 px-8 md:px-14">
          <div className="w-full max-w-[540px] space-y-7">

            {/* Etiket */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span className="text-white/80 text-[10px] font-black tracking-[0.3em] uppercase">Hukuki Çözüm Ortağınız</span>
            </div>

            {/* Başlık */}
            <h1 className="text-5xl md:text-[58px] lg:text-[68px] font-black text-white leading-[1] tracking-tight uppercase">
              Adalet İçin<br />
              <span className="text-accent italic">Güvenilir</span><br />
              Hukuki Destek.
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
              Avukat Aybike Sultan Biçer olarak hukuki süreçlerinizde şeffaf, güvenilir ve çözüm odaklı yaklaşımla yanınızdayım.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[["10+","Yıl Deneyim"],["14","Hizmet Alanı"],["7/24","Danışma"]].map(([v,l]) => (
                <div key={l} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-4 py-4">
                  <p className="text-accent font-black text-2xl italic leading-none">{v}</p>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1.5">{l}</p>
                </div>
              ))}
            </div>

            {/* Butonlar */}
            <div className="flex gap-3 pt-1">
              <a href="tel:05514882948"
                className="flex-1 bg-accent hover:bg-accent/90 text-primary px-4 py-4 rounded-2xl font-black text-[12px] tracking-widest uppercase transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2">
                <Phone size={15} /> Hemen Ara
              </a>
              <Link href="/hakkimizda"
                className="flex-1 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-4 py-4 rounded-2xl font-black text-[12px] tracking-widest uppercase transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                Hakkımızda <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* SAĞ — Avukat portresi */}
        <div className="relative z-20 lg:w-[45%] flex items-end justify-center pt-12 lg:pt-0">
          <img
            src="/avukat.jpg"
            alt="Av. Aybike Sultan Biçer"
            className="h-full max-h-[700px] lg:max-h-none lg:h-[90vh] w-auto object-cover object-top drop-shadow-2xl"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=85&auto=format&fit=crop&crop=top";
            }}
          />
          {/* İsim etiketi */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/15 text-white rounded-2xl px-6 py-3 text-center whitespace-nowrap">
            <p className="font-black text-sm uppercase italic tracking-tight">Av. Aybike Sultan Biçer</p>
            <p className="text-accent text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">Hukuk & Danışmanlık · İstanbul Barosu</p>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════ */}
      <div className="bg-primary border-b border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
          {[
            [CheckCircle2, "İstanbul Barosu Üyesi"],
            [Scale,        "14 Hizmet Alanı"],
            [Shield,       "Gizlilik & Güven"],
            [Clock,        "Hızlı Geri Dönüş"],
            [MapPin,       "Kadıköy / İstanbul"],
          ].map(([Icon, label]) => (
            <div key={label as string} className="flex items-center gap-2 text-white/55 text-[11px] font-bold tracking-widest uppercase">
              {React.createElement(Icon as React.ElementType, { size: 14, className: "text-accent" })}
              {label as string}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          HAKKIMIZDA
      ══════════════════════════════════════ */}
      <section id="hakkimizda" className="py-24 md:py-32 bg-[#F8F5EF]">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Sol: görsel */}
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-primary aspect-[3/2] flex items-end">
              <img
                src="/avukat.jpg"
                alt="Av. Aybike Sultan Biçer"
                className="absolute inset-0 w-full h-full object-cover object-top z-10"
                onError={(e) => { e.currentTarget.style.display="none"; }}
              />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                alt="Hukuk Bürosu Ofis"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Büyük terazi arka plan dekoratifi */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <TeraziSVG className="w-3/4 h-3/4 text-accent/10" />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8">
                <p className="text-white font-black text-xl italic uppercase tracking-tight">Av. Aybike Sultan Biçer</p>
                <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mt-1">Hukuk & Danışmanlık — Kadıköy, İstanbul</p>
              </div>
            </div>
            {/* Terazi rozeti sol üst */}
            <div className="absolute -top-6 -left-6 bg-primary rounded-3xl p-5 shadow-xl hidden md:flex items-center justify-center">
              <TeraziSVG className="w-12 h-12 text-accent" />
            </div>
          </div>

          {/* Sağ: metin */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-black tracking-[0.3em] text-[11px] uppercase">Hakkımızda</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.05] tracking-tight">
              Aybike Sultan Biçer<br />
              <span className="text-neutral-400 font-black">Hukuk Bürosu</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Türkiye'nin seçkin hukuk fakültelerinden mezun, alanında uzman ve dinamik kadromuzla; bireysel ve kurumsal müvekkillerimize modern, hızlı ve sonuç odaklı hukuki hizmet sunuyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {[
                [CheckCircle2, "Şeffaf İletişim", "Sürecin her aşamasında bilgilendirme."],
                [Scale,        "Geniş Uygulama Alanı", "14 farklı hukuk dalında deneyim."],
                [Shield,       "Gizlilik İlkesi", "Müvekkil bilgileri kesinlikle gizlidir."],
                [FileText,     "Belge Takibi", "Tüm evrak süreçleri titizlikle yönetilir."],
              ].map(([Icon, title, desc]) => (
                <div key={title as string} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    {React.createElement(Icon as React.ElementType, { size: 20 })}
                  </div>
                  <div>
                    <p className="font-black text-primary text-sm">{title as string}</p>
                    <p className="text-neutral-500 text-xs mt-0.5 leading-relaxed">{desc as string}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="/hakkimizda"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
                Daha Fazla <ArrowRight size={16} />
              </Link>
              <a href="tel:05514882948"
                className="border-2 border-primary/20 hover:border-primary/50 text-primary px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center gap-2">
                <Phone size={16} /> Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HİZMETLER — Görsel Kart Yapısı
      ══════════════════════════════════════ */}
      <section id="hizmetler" className="py-24 md:py-32 bg-[#F8F5EF]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Başlık */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent font-black tracking-[0.35em] text-[11px] uppercase">Uzmanlık Alanları</span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase leading-tight">Hukuki Hizmetlerimiz</h2>
            <p className="text-neutral-500 text-lg">Hukuki Sorunlarınız İçin Uzman Çözümler</p>
          </div>

          {/* Kart Izgarası */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/hizmetler/${svc.slug}`}
                className="group bg-white hover:bg-accent rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col border border-neutral-100 hover:border-accent"
              >
                {/* Görsel — içeride yuvarlak */}
                <div className="relative rounded-2xl overflow-hidden h-48 mb-5 shrink-0">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* İçerik */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-black text-primary group-hover:text-white text-lg leading-tight mb-2 tracking-tight transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-500 group-hover:text-white/80 text-sm leading-relaxed flex-1 transition-colors duration-300">
                    {svc.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-accent group-hover:text-white text-[11px] font-black tracking-widest uppercase transition-colors duration-300">
                    DETAYLAR
                    <span className="w-7 h-7 rounded-full border-2 border-accent group-hover:border-white flex items-center justify-center transition-colors duration-300">
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Alt CTA */}
          <div className="text-center mt-14">
            <Link href="/hizmetler"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-primary/20">
              Tüm Hizmetlerimizi İnceleyin <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SÜREÇ — Nasıl Çalışıyoruz
      ══════════════════════════════════════ */}
      <section className="pb-24 md:pb-32 bg-primary">
        <div className="container mx-auto px-6 max-w-7xl pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-4"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent font-black tracking-[0.35em] text-[11px] uppercase">Çalışma Sürecimiz</span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Nasıl İlerleriz?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n:"01", icon: Phone,        t:"İletişime Geçin",   d:"Telefon, WhatsApp veya e-posta ile randevu alın." },
              { n:"02", icon: FileText,     t:"Dosya Değerlendirme", d:"Durumunuzu ve belgelerinizi birlikte inceleriz." },
              { n:"03", icon: Scale,        t:"Strateji Belirleme", d:"Hukuki durumunuza uygun en doğru yol haritasını çizeriz." },
              { n:"04", icon: CheckCircle2, t:"Süreci Takip",       d:"Dava veya danışmanlık sürecini başından sonuna yönetiriz." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-5 right-5 text-5xl font-black text-white/5 leading-none select-none">{step.n}</div>
                <div className="w-14 h-14 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <step.icon size={26} />
                </div>
                <h3 className="font-black text-white text-lg mb-3">{step.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEĞERLER — Merkez görsel + özellikler
      ══════════════════════════════════════ */}
      <section className="bg-[#F8F5EF] py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Quote — üst */}
          <div className="text-center mb-12">
            <blockquote className="text-2xl md:text-3xl font-black text-primary leading-snug">
              "Hukuk, <span className="text-accent italic">güçlünün değil</span>, haklının yanında durur."
            </blockquote>
            <p className="text-primary/40 text-[11px] font-bold tracking-[0.3em] uppercase mt-3">Hukuki Danışmanlık · Dava Takibi · Arabuluculuk</p>
          </div>

          {/* 3 sütun: sol özellikler | merkez görsel | sağ özellikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Sol */}
            <div className="flex flex-col gap-8">
              {[
                { icon: Shield, title: "Gizlilik İlkesi", desc: "Müvekkillerimize ait tüm bilgiler mutlak gizlilik içinde, meslek etiği çerçevesinde korunur." },
                { icon: Scale, title: "Şeffaf İletişim", desc: "Hukuki sürecin her aşamasında açık, anlaşılır ve zamanında bilgilendirme yapılır." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 text-right flex-row-reverse md:flex-row md:text-left">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-base mb-1">{title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Merkez görsel */}
            <div className="flex justify-center">
              <div className="relative w-72 h-80 md:w-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=800&q=85&auto=format&fit=crop"
                  alt="Adalet Terazisi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <span className="bg-accent text-primary text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full">
                    ASB Hukuk &amp; Danışmanlık
                  </span>
                </div>
              </div>
            </div>

            {/* Sağ */}
            <div className="flex flex-col gap-8">
              {[
                { icon: Award, title: "Uzman Kadro", desc: "İstanbul Barosu üyesi, alanında deneyimli avukat kadrosuyla profesyonel hizmet." },
                { icon: Target, title: "Sonuç Odaklı", desc: "Hukuki hedeflere ulaşmak için kararlı, stratejik ve sistematik bir çalışma anlayışı." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-base mb-1">{title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOG
      ══════════════════════════════════════ */}
      <section id="blog" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-accent font-black tracking-[0.35em] text-[11px] uppercase">Blog</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase">Hukuki Bilgilendirme</h2>
            </div>
            <Link href="/blog" className="group flex items-center gap-3 font-black text-xs tracking-widest text-primary uppercase border-b-2 border-accent pb-2">
              Tüm Yazılar <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/9] rounded-2xl mb-6 overflow-hidden relative bg-primary">
                  <img
                    src={post.img}
                    alt={post.t}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-black uppercase px-3 py-1.5 rounded-full z-10 tracking-widest">
                    {post.c}
                  </div>
                </div>
                <div className="space-y-2 px-1">
                  <p className="text-accent font-bold text-[11px] tracking-widest uppercase">{post.d}</p>
                  <h3 className="text-xl font-black text-primary leading-tight group-hover:text-accent transition-colors line-clamp-2">
                    {post.t}
                  </h3>
                  <div className="flex items-center gap-2 pt-1 text-primary/40 font-black text-[11px] uppercase tracking-widest group-hover:text-accent transition-colors">
                    Devamını Oku <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SSS
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F8F5EF]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-32">
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-accent font-black tracking-[0.35em] text-[11px] uppercase">SSS</span>
              </div>
              <h2 className="text-4xl font-black text-primary uppercase leading-tight">Sıkça Sorulan Sorular</h2>
              <p className="text-neutral-500 leading-relaxed text-sm">Merak ettiklerinizi bulamadıysanız bize doğrudan ulaşabilirsiniz.</p>
              <a href="tel:05514882948"
                className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3.5 rounded-xl font-black text-sm tracking-widest uppercase transition-all hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Phone size={16} /> Ara
              </a>
            </div>
            <div className="lg:col-span-3 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className={`font-black text-sm pr-4 transition-colors ${openFaq===i?"text-accent":"text-primary"}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${openFaq===i?"bg-primary text-white rotate-180":"bg-primary/5 text-primary"}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-neutral-500 text-sm leading-relaxed border-t border-neutral-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — İletişim
      ══════════════════════════════════════ */}
      <section id="iletisim" className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative bg-primary rounded-[48px] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize:"28px 28px"}} />
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
              <TeraziSVG className="w-96 h-96 text-white" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <TeraziSVG className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                  Hukuki Sorununuz<br />
                  <span className="text-accent italic">Çözümsüz Değil.</span>
                </h2>
                <p className="text-white/55 text-lg max-w-md leading-relaxed">
                  Hukuki süreçlerde doğru adımı atmak için bizimle iletişime geçin.
                </p>
                <div className="flex items-center gap-3 text-white/30 text-[11px] font-bold tracking-widest uppercase">
                  <MapPin size={13} className="text-accent" />
                  Eğitim Mah., Poyraz Sk. No:26/4, Kadıköy / İstanbul
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a href="tel:05514882948"
                  className="bg-white hover:bg-accent text-primary px-10 py-6 rounded-2xl font-black tracking-widest text-base transition-all flex items-center justify-between group shadow-2xl">
                  <span>ŞİMDİ ARA</span>
                  <div className="flex items-center gap-3 text-accent group-hover:text-primary">
                    <span className="text-sm font-black">0551 488 29 48</span>
                    <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                  </div>
                </a>
                <a href="https://wa.me/905514882948" target="_blank"
                  className="bg-[#25D366] hover:bg-white hover:text-[#25D366] text-white px-10 py-6 rounded-2xl font-black tracking-widest text-base transition-all flex items-center justify-between group shadow-2xl">
                  <span>WHATSAPP İLE YAZ</span>
                  <MessageSquare size={22} />
                </a>
                <Link href="/iletisim"
                  className="bg-white/8 hover:bg-white/15 border border-white/15 text-white px-10 py-5 rounded-2xl font-black tracking-widest text-sm transition-all flex items-center justify-between">
                  <span>İLETİŞİM FORMU</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
