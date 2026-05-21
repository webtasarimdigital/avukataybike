import React from "react";
import { Scale, ShieldCheck, Users, Award, CheckCircle2, ArrowRight, Phone, MessageSquare, BookOpen, Gavel, MapPin, Clock, Mail } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Banka ve Ticaret Hukuku", slug: "banka-ve-ticaret-hukuku" },
  { title: "İş Hukuku", slug: "is-hukuku" },
  { title: "Marka ve Patent Hukuku", slug: "marka-ve-patent-hukuku" },
  { title: "Aile Hukuku", slug: "aile-hukuku" },
  { title: "Sigorta Hukuku", slug: "sigorta-hukuku" },
  { title: "İcra ve İflas Hukuku", slug: "icra-ve-iflas-hukuku" },
  { title: "Sağlık Hukuku", slug: "saglik-hukuku" },
  { title: "Tüketici Hukuku", slug: "tuketici-hukuku" },
  { title: "Kişisel Verilerin Korunması Hukuku", slug: "kisisel-verilerin-korunmasi-hukuku" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ── HERO ── */}
      <div className="relative w-full min-h-[580px] flex items-end pt-44 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628] z-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80&auto=format&fit=crop"
            alt="Hukuk Bürosu"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.13] mix-blend-luminosity"
          />
          <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,.03) 40px,rgba(255,255,255,.03) 80px)"}} />
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 flex items-center justify-end">
            <Scale size={400} />
          </div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-36">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-white/40 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Ana Sayfa</Link>
              <span className="text-white/20">/</span>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Hakkımızda</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Kurumsal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
              Hukuki Güç,<br /><span className="text-accent">Güvenilir Temsil.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Hukukun yalnızca mevzuattan değil; strateji, iletişim ve doğru yaklaşımın birleşiminden oluştuğuna inanıyoruz.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 -mt-24 pb-32 space-y-16">

        {/* ── AVUKAT TANITIM KARTI ── */}
        <div className="bg-white rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Sol – Ofis Görseli */}
            <div className="relative bg-primary p-10 md:p-16 flex items-center justify-center min-h-[420px] overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,.04) 20px,rgba(255,255,255,.04) 40px)"}} />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-48 h-48 rounded-[40px] bg-white/10 border border-white/20 p-1 backdrop-blur-sm overflow-hidden">
                  <img src="/Aybike-sultan-bicer.jpeg" alt="Av. Aybike Sultan Biçer" className="w-full h-full object-cover rounded-[36px]" />
                </div>
                <div className="text-center">
                  <p className="text-white font-black text-2xl italic uppercase">Av. Aybike Sultan Biçer</p>
                  <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mt-1">Kurucu Avukat</p>
                  <div className="mt-3 space-y-1">
                    <p className="text-white/50 text-[11px] font-medium">Marmara Üniversitesi Hukuk Fakültesi (2021)</p>
                    <p className="text-white/50 text-[11px] font-medium">İstanbul Barosu (2021)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ – Metin */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-3 mb-8">
                <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic">Kimiz?</span>
                <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight uppercase italic">
                  Hukuki Çözümlerde <span className="text-accent">Güvenilir Adres</span>
                </h2>
                <div className="w-16 h-1.5 bg-accent rounded-full" />
              </div>
              <div className="space-y-5 text-neutral-600 text-base leading-relaxed font-medium mb-10">
                <p>
                  ASB Hukuk, Türkiye'nin önde gelen hukuk fakültelerinden mezun, alanlarında uzman ve güncel hukuki gelişmeleri yakından takip eden dinamik bir ekip tarafından kurulmuştur. Bireysel ve kurumsal müvekkillerimize; hızlı, erişilebilir ve sonuç odaklı hukuki hizmet sunmayı temel ilke olarak benimsiyoruz.
                </p>
                <p>
                  Her hukuki sürecin kendine özgü olduğunu biliyor; müvekkillerimizin ihtiyaçlarını standart çözümler yerine özel stratejilerle değerlendiriyoruz. Dava takibinden hukuki danışmanlığa, sözleşme süreçlerinden uyuşmazlık yönetimine kadar her aşamada şeffaf iletişim ve profesyonel yaklaşımı ön planda tutuyoruz.
                </p>
                <p>
                  Büromuz; şirketler, girişimler ve bireysel müvekkiller için güvenilir bir çözüm ortağı olmayı hedeflemekte; yalnızca mevcut sorunlara değil, gelecekte oluşabilecek hukuki risklere karşı da koruyucu danışmanlık sağlamaktadır.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck size={22} />, t: "Tam Gizlilik" },
                  { icon: <Clock size={22} />, t: "Hızlı Dönüş" },
                  { icon: <CheckCircle2 size={22} />, t: "Şeffaf Süreç" },
                  { icon: <Award size={22} />, t: "Kanıtlı Başarı" },
                ].map((f,i)=>(
                  <div key={i} className="flex items-center gap-3 bg-neutral-50 rounded-2xl p-4 border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">{f.icon}</div>
                    <span className="font-bold text-primary text-sm">{f.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── VİZYON & MİSYON ── */}
        <div id="vizyon" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vizyon */}
          <div className="relative bg-primary rounded-[40px] p-12 overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-56 h-56 bg-accent/10 rounded-full -mr-28 -mt-28 blur-3xl" />
            <div className="relative z-10">
              <span className="text-accent font-black tracking-[0.4em] text-xs uppercase italic">Hedefimiz</span>
              <h3 className="text-3xl font-black text-white uppercase italic mt-2 mb-5">Vizyonumuz</h3>
              <div className="w-12 h-1.5 bg-accent rounded-full mb-6" />
              <p className="text-white/70 text-base leading-relaxed">
                Hukuki hizmet anlayışını modern, erişilebilir ve stratejik bir bakış açısıyla yeniden şekillendirerek; Türkiye'nin güvenilir ve tercih edilen hukuk bürolarından biri olmak.
              </p>
            </div>
          </div>
          {/* Misyon */}
          <div id="misyon" className="relative bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-56 h-56 bg-accent/5 rounded-full -mr-28 -mt-28 blur-3xl" />
            <div className="relative z-10">
              <span className="text-accent font-black tracking-[0.4em] text-xs uppercase italic">Amacımız</span>
              <h3 className="text-3xl font-black text-primary uppercase italic mt-2 mb-5">Misyonumuz</h3>
              <div className="w-12 h-1.5 bg-accent rounded-full mb-6" />
              <p className="text-neutral-600 text-base leading-relaxed">
                Müvekkillerimize yalnızca hukuki temsil sunmak değil; süreci doğru yöneten, riskleri öngören ve sürdürülebilir çözümler üreten güçlü bir iş ortağı olmak.
              </p>
            </div>
          </div>
        </div>

        {/* ── ÖZGEÇMİŞ ── */}
        <div id="ekibimiz" className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            <div className="bg-primary p-10 flex flex-col items-center justify-center gap-5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,.04) 20px,rgba(255,255,255,.04) 40px)"}} />
              <div className="relative z-10 w-32 h-32 rounded-[28px] bg-white/10 border border-white/20 p-1 overflow-hidden">
                <img src="/Aybike-sultan-bicer.jpeg" alt="Av. Aybike Sultan Biçer" className="w-full h-full object-cover rounded-[24px]" />
              </div>
              <div className="relative z-10 text-center">
                <p className="text-white font-black text-lg italic uppercase leading-tight">Av. Aybike Sultan Biçer</p>
                <p className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mt-1">Kurucu Avukat</p>
              </div>
              <div className="relative z-10 flex flex-col gap-2 w-full mt-2">
                <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Baro</p>
                  <p className="text-white text-xs font-black mt-0.5">İstanbul Barosu</p>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Mezuniyet</p>
                  <p className="text-white text-xs font-black mt-0.5">Marmara Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="space-y-3 mb-8">
                <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic"></span>
                <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight uppercase italic">Kurucu Avukat <span className="text-accent"></span></h3>
                <div className="w-12 h-1.5 bg-accent rounded-full" />
              </div>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                1997 yılında İstanbul'da doğmuştur. Lise eğitimini Kırıkkale Anadolu Öğretmen Lisesi'nde tamamladıktan sonra Marmara Üniversitesi Hukuk Fakültesi'ni bitirmiştir. Mesleğe başladığı tarihten itibaren Ticaret Hukuku, İş Hukuku, Fikri Mülkiyet Hukuku, Aile Hukuku, Kişisel Verilerin Korunması Hukuku, Miras Hukuku alanlarında danışmanlık ve dava takibi süreçlerinde çalışmalarını sürdürmektedir.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                Güncel mevzuata uygun, çözüm odaklı ve etik ilkelere bağlı bir yaklaşımla hukuki destek sunmakta; İngilizce dilinde de hizmet vermektedir.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Ticaret Hukuku","İş Hukuku","Fikri Mülkiyet","Aile Hukuku","KVKK","Miras Hukuku"].map((alan) => (
                  <span key={alan} className="bg-primary/5 text-primary text-xs font-black px-4 py-2 rounded-full border border-primary/10 uppercase tracking-wide">{alan}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── ORTAK AVUKAT ÖZGEÇMİŞ ── */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            <div className="bg-[#0a1628] p-10 flex flex-col items-center justify-center gap-5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,.04) 20px,rgba(255,255,255,.04) 40px)"}} />
              <div className="relative z-10 w-32 h-32 rounded-[28px] bg-white/10 border border-white/20 p-1 overflow-hidden">
                <img src="/Aysenur-simsek.jpeg" alt="Av. Ayşe Nur Şimşek Kırkıncı" className="w-full h-full object-cover rounded-[24px]" />
              </div>
              <div className="relative z-10 text-center">
                <p className="text-white font-black text-lg italic uppercase leading-tight">Av. Ayşe Nur Şimşek Kırkıncı</p>
                <p className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mt-1">Ortak Avukat</p>
              </div>
              <div className="relative z-10 flex flex-col gap-2 w-full mt-2">
                <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Baro</p>
                  <p className="text-white text-xs font-black mt-0.5">İstanbul Barosu</p>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Mezuniyet</p>
                  <p className="text-white text-xs font-black mt-0.5">Marmara Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="space-y-3 mb-8">
                <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic"></span>
                <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight uppercase italic">Ortak Avukat <span className="text-accent"></span></h3>
                <div className="w-12 h-1.5 bg-accent rounded-full" />
              </div>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                1998 yılında Zonguldak'ta doğmuştur. Lise eğitimini Kocaeli Körfez Anadolu Öğretmen Lisesi'nde tamamladıktan sonra Marmara Üniversitesi Hukuk Fakültesi'ni bitirmiştir. Mesleğe başladığı tarihten itibaren İcra İflas Hukuku, Ticaret Hukuku, Tüketici Hukuku, İş Hukuku, Aile Hukuku, Miras Hukuku alanlarında danışmanlık ve dava takibi süreçlerinde çalışmalarını sürdürmektedir.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                Güncel mevzuata uygun, çözüm odaklı ve etik ilkelere bağlı bir yaklaşımla hukuki destek sunmakta; İngilizce dilinde de hizmet vermektedir.
              </p>
              <div className="flex flex-wrap gap-2">
                {["İcra İflas Hukuku","Ticaret Hukuku","Tüketici Hukuku","İş Hukuku","Aile Hukuku","Miras Hukuku"].map((alan) => (
                  <span key={alan} className="bg-primary/5 text-primary text-xs font-black px-4 py-2 rounded-full border border-primary/10 uppercase tracking-wide">{alan}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── DEĞERLER ── */}
        <div>
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase italic">Temel İlkelerimiz</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={44} />, t: "Güven ve Gizlilik", d: "Müvekkillerimizin tüm bilgileri avukatlık meslek sırrı kapsamında en üst düzeyde gizlilik prensibiyle korunmaktadır. Her müvekkil ilişkisi mutlak bir güven zeminine dayanır." },
              { icon: <Users size={44} />, t: "Müvekkil Odaklılık", d: "Her davayı kendi özgün koşulları içinde değerlendiriyor, müvekkillerimizle sürekli iletişim halinde kalıyoruz. Süreçteki her gelişmeden anında haberdar edilirsiniz." },
              { icon: <BookOpen size={44} />, t: "Güncel Hukuki Bilgi", d: "Değişen mevzuat ve yargıtay kararlarını anlık takip ederek müvekkillerimize her zaman en güncel ve doğru hukuki danışmanlığı sunuyoruz." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-primary mb-3 uppercase italic">{item.t}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── HİZMETLER GRID ── */}
        <div className="bg-primary rounded-[48px] p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div className="space-y-3">
                <span className="text-accent font-black tracking-[0.4em] text-xs uppercase italic">Uzmanlık Alanları</span>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic leading-tight">Hizmetlerimiz</h2>
              </div>
              <Link href="/#hizmetler" className="text-white/50 hover:text-accent transition-colors text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                Tümünü Gör <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {services.map((s, i) => (
                <Link key={i} href={`/hizmetler/${s.slug}`} className="group bg-white/5 hover:bg-accent border border-white/10 hover:border-accent p-5 rounded-2xl transition-all flex items-center justify-between gap-2">
                  <span className="font-bold text-white/70 group-hover:text-primary text-xs uppercase tracking-wider leading-tight">{s.title}</span>
                  <ArrowRight size={14} className="shrink-0 text-accent group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── YASAL BİLGİLENDİRME ── */}
        <div className="bg-neutral-50 rounded-[40px] border border-gray-100 p-10 md:p-14">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0"><Scale size={28} /></div>
            <div className="space-y-3">
              <h3 className="text-xl font-black text-primary uppercase italic">Avukatlık Hizmetleri Hakkında</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Bu internet sitesi yalnızca genel bilgilendirme amacıyla hazırlanmıştır; hukuki danışmanlık hizmeti yerine geçmez. Her hukuki uyuşmazlık kendine özgü koşullar içermekte olup benzer görünen davalarda farklı sonuçlar ortaya çıkabilir. Kişisel durumunuz için lütfen bir avukata başvurunuz.</p>
            </div>
          </div>
        </div>

        {/* ── OFİS & İLETİŞİM CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ofis Bilgileri */}
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 md:p-14 space-y-8">
            <div className="space-y-2">
              <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic">Bize Ulaşın</span>
              <h3 className="text-3xl font-black text-primary uppercase italic">Ofis Bilgileri</h3>
              <div className="w-12 h-1.5 bg-accent rounded-full" />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0"><MapPin size={22} /></div>
                <div>
                  <p className="font-black text-primary text-sm uppercase tracking-wider mb-1">Adres</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">Eğitim Mah., Poyraz Sokak, No:26/4,<br />Kadıköy / İstanbul</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0"><Phone size={22} /></div>
                <div>
                  <p className="font-black text-primary text-sm uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:05514882948" className="text-neutral-500 text-sm hover:text-accent transition-colors font-medium">0551 488 29 48</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0"><Mail size={22} /></div>
                <div>
                  <p className="font-black text-primary text-sm uppercase tracking-wider mb-1">E-Posta</p>
                  <a href="mailto:info@avukataybike.com" className="text-neutral-500 text-sm hover:text-accent transition-colors font-medium">info@avukataybike.com</a>
                </div>
              </div>


              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0"><Clock size={22} /></div>
                <div>
                  <p className="font-black text-primary text-sm uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                  <p className="text-neutral-500 text-sm font-medium">Pazartesi – Cuma: 09:00 – 18:00</p>
                  <p className="text-neutral-400 text-xs mt-1">Cumartesi randevuyla</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-[40px] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -mr-36 -mt-36 blur-3xl" />
            <div className="relative z-10 space-y-4 mb-10">
              <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic">Danışmanlık</span>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-tight">
                Hukuki Sorununuz<br /><span className="text-accent">Çözümsüz Değil.</span>
              </h3>
              <p className="text-white/60 leading-relaxed">Hukuki süreçlerinizde doğru stratejiyi birlikte belirleyelim.</p>
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <Link href="/iletisim" className="bg-accent hover:bg-white text-primary px-8 py-5 rounded-2xl font-black tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent/20 uppercase">
                İletişim
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
