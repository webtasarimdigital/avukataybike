"use client";
import React, { useState } from "react";
import {
  Scale, Gavel, Shield, Briefcase, Users, Building2, Globe,
  Monitor, Heart, ShoppingCart, TrendingUp, Landmark,
  CheckCircle2, ArrowRight, MessageSquare, Phone,
  MapPin, FileText, Clock,
} from "lucide-react";
import Link from "next/link";

type SvcType = { title: string; slug: string; Icon: React.ElementType; desc: string };

const services: SvcType[] = [
  { title: "Banka ve Ticaret Hukuku", slug: "banka-ve-ticaret-hukuku", Icon: Briefcase, desc: "Ticari uyuşmazlıklar, şirket sözleşmeleri ve banka işlemleri." },
  { title: "İş Hukuku", slug: "is-hukuku", Icon: Users, desc: "İş sözleşmesi, haksız fesih ve tazminat davaları." },
  { title: "Marka ve Patent Hukuku", slug: "marka-ve-patent-hukuku", Icon: Shield, desc: "Fikri mülkiyet tescili ve ihlallerine karşı hukuki temsil." },
  { title: "Aile Hukuku", slug: "aile-hukuku", Icon: Heart, desc: "Boşanma, velayet, nafaka ve mal paylaşımı davaları." },
  { title: "Sigorta Hukuku", slug: "sigorta-hukuku", Icon: Shield, desc: "Sigorta tazminat talepleri ve uyuşmazlık süreçleri." },
  { title: "Gayrimenkul Hukuku", slug: "gayrimenkul-hukuku", Icon: Building2, desc: "Tapu iptali, kira tahliyesi ve inşaat hukuku davaları." },
  { title: "Bilişim Hukuku", slug: "bilisim-hukuku", Icon: Monitor, desc: "Siber suçlar, veri gizliliği ve dijital uyuşmazlıklar." },
  { title: "İcra ve İflas Hukuku", slug: "icra-ve-iflas-hukuku", Icon: Gavel, desc: "Alacak takibi, haciz işlemleri ve iflas süreçleri." },
  { title: "Sağlık Hukuku", slug: "saglik-hukuku", Icon: Heart, desc: "Tıbbi uygulama hataları ve hasta hakları savunuculuğu." },
  { title: "Tüketici Hukuku", slug: "tuketici-hukuku", Icon: ShoppingCart, desc: "Ayıplı ürün/hizmet talepleri ve tüketici hakları süreçleri." },
  { title: "Yatırım Hukuku", slug: "yatirim-hukuku", Icon: TrendingUp, desc: "Yabancı sermaye ve yatırım uyuşmazlıklarında danışmanlık." },
  { title: "Uluslararası Ticari Sözleşmeler", slug: "uluslararasi-ticari-sozlesmeler", Icon: Globe, desc: "Sınır ötesi ticaret ve uluslararası tahkim süreçleri." },
  { title: "Ceza Hukuku", slug: "ceza-hukuku", Icon: Scale, desc: "Ceza davaları, soruşturma ve kovuşturma aşamalarında temsil." },
  { title: "İdare ve Vergi Hukuku", slug: "idare-ve-vergi-hukuku", Icon: Landmark, desc: "İdari işlem iptali ve vergi uyuşmazlıklarında hukuki destek." },
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
  { t: "Haksız İşten Çıkarılmada Yasal Başvuru Yolları", c: "İş Hukuku", d: "20.05.2024", slug: "haksiz-isten-cikarilmada-yasal-basvuru-yollari", Icon: Users },
  { t: "Boşanma Sürecinde Mal Rejimi ve Yasal Düzenlemeler", c: "Aile Hukuku", d: "10.05.2024", slug: "bosanma-surecinde-mal-rejimi-ve-yasal-duzenlemeler", Icon: Heart },
  { t: "Tüketici Haklarınız: Ayıplı Mal ve Hizmetlerde Başvuru Yolları", c: "Tüketici Hukuku", d: "01.05.2024", slug: "tuketici-haklari-ayipli-mal-ve-hizmetlerde-basvuru-yollari", Icon: ShoppingCart },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ══════════════════════════════════════
          HERO — Yatay Split
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden pt-[92px] lg:pt-[100px]">

        {/* SOL — Metin */}
        <div className="relative flex-1 lg:w-[52%] bg-[#F7F4EE] flex items-center">
          {/* Hafif desen */}
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle, #092f1a 1px, transparent 1px)", backgroundSize:"24px 24px"}} />
          {/* Sağ kenara terazi watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.06] pointer-events-none hidden lg:block">
            <TeraziSVG className="w-80 h-80 text-primary" />
          </div>

          <div className="relative z-10 w-full max-w-2xl px-8 md:px-14 lg:px-16 xl:pl-24 py-16 lg:py-0 space-y-8">
            {/* Etiket */}
            <div className="inline-flex items-center gap-3 bg-primary/8 border border-primary/12 px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary text-[11px] font-black tracking-[0.35em] uppercase">Hukuki Çözüm Ortağınız</span>
            </div>

            {/* Başlık */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight uppercase">
              Adalet İçin<br />
              <span className="text-accent italic">Güvenilir</span><br />
              Hukuki Destek.
            </h1>

            <p className="text-primary/55 text-lg leading-relaxed max-w-md">
              Avukat Aybike Sultan Biçer olarak hukuki süreçlerinizde şeffaf, güvenilir ve çözüm odaklı yaklaşımla yanınızdayım.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-3">
              {[["10+","Yıl Deneyim"],["14","Hizmet Alanı"],["7/24","Danışma"]].map(([v,l]) => (
                <div key={l} className="bg-white/70 border border-primary/8 rounded-2xl px-4 py-4">
                  <p className="text-accent font-black text-2xl italic leading-none">{v}</p>
                  <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest mt-1.5">{l}</p>
                </div>
              ))}
            </div>

            {/* Butonlar */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="tel:05514882948"
                className="bg-primary hover:bg-primary/90 text-white px-9 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                <Phone size={17} /> Hemen Ara
              </a>
              <Link href="/hakkimizda"
                className="border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary px-9 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center gap-2">
                Hakkımızda <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* SAĞ — Yuvarlak fotoğraf */}
        <div className="relative lg:w-[48%] min-h-[520px] lg:min-h-0 bg-[#F7F4EE] flex items-center justify-center py-16 lg:py-12 overflow-hidden">

          {/* Dekoratif daireler */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full border border-primary/6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full border border-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-square rounded-full bg-primary/4" />

          {/* Terazi dekoratif — sağ alt */}
          <div className="absolute bottom-8 right-8 opacity-[0.07] pointer-events-none">
            <TeraziSVG className="w-28 h-28 text-primary" />
          </div>

          {/* Ana yuvarlak fotoğraf alanı */}
          <div className="relative z-10 flex flex-col items-center gap-6">

            {/* Oval/yuvarlak fotoğraf */}
            <div className="relative">
              {/* Dış halka (accent border) */}
              <div className="absolute -inset-3 rounded-full border-2 border-accent/30" />
              {/* İç halka (beyaz) */}
              <div className="absolute -inset-1.5 rounded-full border-4 border-white shadow-2xl shadow-primary/20" />
              {/* Fotoğraf */}
              <div className="w-64 h-80 lg:w-72 lg:h-[360px] rounded-full overflow-hidden relative">
                <img
                  src="/avukat.jpg"
                  alt="Av. Aybike Sultan Biçer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                {/* Alt gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                {/* Fotoğraf yoksa fallback */}
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <TeraziSVG className="w-20 h-20 text-white/20" />
                </div>
              </div>

              {/* Deneyim rozeti — sağ üst */}
              <div className="absolute -top-2 -right-4 bg-accent text-primary rounded-2xl px-4 py-3 shadow-xl shadow-accent/25 z-20">
                <p className="font-black text-[9px] tracking-widest uppercase opacity-70 leading-none">Deneyim</p>
                <p className="font-black text-xl leading-tight">10+</p>
                <p className="font-black text-[9px] uppercase opacity-70 tracking-wide">Yıl</p>
              </div>

              {/* Baro rozeti — sol alt */}
              <div className="absolute -bottom-2 -left-6 bg-primary text-white rounded-2xl px-4 py-3 shadow-xl z-20 flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <div>
                  <p className="font-black text-[9px] tracking-wide uppercase opacity-60 leading-none">Üye</p>
                  <p className="font-black text-[11px] leading-tight">İstanbul Barosu</p>
                </div>
              </div>
            </div>

            {/* İsim kartı */}
            <div className="bg-white rounded-2xl px-8 py-4 shadow-lg shadow-primary/8 text-center border border-primary/6">
              <p className="text-primary font-black text-base uppercase italic tracking-tight">Av. Aybike Sultan Biçer</p>
              <p className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase mt-1">Hukuk & Danışmanlık · Kadıköy</p>
            </div>
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
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-primary aspect-[4/5] flex items-end">
              <img src="/avukat.jpg" alt="Av. Aybike Sultan Biçer"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.style.display="none"; }} />
              {/* Büyük terazi arka plan dekoratifi */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <TeraziSVG className="w-3/4 h-3/4 text-accent/10" />
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8">
                <p className="text-white font-black text-xl italic uppercase tracking-tight">Av. Aybike Sultan Biçer</p>
                <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mt-1">Hukuk & Danışmanlık — Kadıköy, İstanbul</p>
              </div>
            </div>
            {/* Deneyim rozeti */}
            <div className="absolute -bottom-8 -right-8 bg-accent text-primary rounded-3xl p-8 shadow-2xl shadow-accent/20 hidden md:block">
              <p className="font-black text-5xl italic leading-none">10+</p>
              <p className="font-bold text-[10px] uppercase tracking-widest mt-2 opacity-70">Yıllık Tecrübe</p>
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
              İstanbul Barosu'na kayıtlı avukat olarak ticaret hukukundan aile hukukuna, ceza hukukundan gayrimenkul uyuşmazlıklarına kadar geniş bir alanda hukuki danışmanlık ve dava takibi hizmeti sunmaktayım.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              Her müvekkile şeffaf, dürüst ve kişiselleştirilmiş bir hizmet anlayışıyla yaklaşıyor; hukuki süreçlerin her adımında yanında oluyorum.
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
          HİZMETLER — Hover → Koyu Yeşil Dolum
      ══════════════════════════════════════ */}
      <section id="hizmetler" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent font-black tracking-[0.35em] text-[11px] uppercase">Uzmanlık Alanları</span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase leading-tight">Hukuki Hizmetlerimiz</h2>
            <p className="text-neutral-500">Üzerine gelince koyu yeşile dönen kartlara tıklayarak ilgili hizmet detayına ulaşabilirsiniz.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((svc) => (
              <Link key={svc.slug} href={`/hizmetler/${svc.slug}`}
                className="service-card bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm group block hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="fill-bg" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="svc-icon w-14 h-14 rounded-xl bg-primary/6 text-primary flex items-center justify-center mb-6 transition-all duration-500">
                    <svc.Icon size={28} />
                  </div>
                  <h3 className="font-black text-primary text-base leading-tight mb-3 transition-colors duration-500 tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed flex-1 transition-colors duration-500">
                    {svc.desc}
                  </p>
                  <div className="svc-link mt-5 flex items-center gap-2 text-primary text-xs font-black tracking-widest uppercase transition-colors duration-500">
                    Detaylı Bilgi <ArrowRight size={13} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SÜREÇ — Nasıl Çalışıyoruz
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#F8F5EF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent font-black tracking-[0.35em] text-[11px] uppercase">Çalışma Sürecimiz</span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase">Nasıl İlerleriz?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n:"01", icon: Phone,        t:"İletişime Geçin",   d:"Telefon, WhatsApp veya e-posta ile randevu alın." },
              { n:"02", icon: FileText,     t:"Dosya Değerlendirme", d:"Durumunuzu ve belgelerinizi birlikte inceleriz." },
              { n:"03", icon: Scale,        t:"Strateji Belirleme", d:"Hukuki durumunuza uygun en doğru yol haritasını çizeriz." },
              { n:"04", icon: CheckCircle2, t:"Süreci Takip",       d:"Dava veya danışmanlık sürecini başından sonuna yönetiriz." },
            ].map((step) => (
              <div key={step.n} className="relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-6 right-6 text-6xl font-black text-primary/5 leading-none select-none">{step.n}</div>
                <div className="w-14 h-14 rounded-xl bg-primary text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <step.icon size={26} />
                </div>
                <h3 className="font-black text-primary text-lg mb-3">{step.t}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TERÂZİ BANNER — Alıntı + Büyük SVG
      ══════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle, #C9882A 1px, transparent 1px)", backgroundSize:"30px 30px"}} />
        <div className="absolute right-0 top-0 h-full w-1/3 flex items-center justify-center opacity-8 pointer-events-none">
          <TeraziSVG className="w-full h-full text-accent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto">
            <TeraziSVG className="w-9 h-9 text-accent" />
          </div>
          <blockquote className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl mx-auto">
            "Hukuk, <span className="text-accent italic">güçlünün değil</span>,<br className="hidden md:block"/> haklının yanında durur."
          </blockquote>
          <p className="text-white/40 text-sm font-bold tracking-widest uppercase">Hukuki Danışmanlık · Dava Takibi · Arabuluculuk</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="tel:05514882948"
              className="bg-accent hover:bg-white text-primary px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3">
              <Phone size={17} /> Hemen Ara
            </a>
            <a href="https://wa.me/905514882948" target="_blank"
              className="bg-white/8 hover:bg-white/15 border border-white/15 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3">
              <MessageSquare size={17} /> WhatsApp
            </a>
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
                  <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle, #C9882A 1px, transparent 1px)", backgroundSize:"22px 22px"}} />
                  <div className="absolute inset-0 flex items-center justify-center text-accent/20 group-hover:scale-110 transition-transform duration-700">
                    <post.Icon size={72} />
                  </div>
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
