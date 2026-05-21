"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Scale, ArrowRight, CheckCircle2, Phone, MessageSquare, BookOpen, Gavel, Shield, Building2, Cpu, Heart, ShoppingCart, TrendingUp, Globe, FileText, ChevronDown, Star, Clock, Award } from "lucide-react";
import Link from "next/link";
import { serviceContent } from "../serviceData";

const allServices = [
  { t: "Banka ve Ticaret Hukuku", s: "banka-ve-ticaret-hukuku" },
  { t: "İş Hukuku", s: "is-hukuku" },
  { t: "Marka ve Patent Hukuku", s: "marka-ve-patent-hukuku" },
  { t: "Aile Hukuku", s: "aile-hukuku" },
  { t: "Sigorta Hukuku", s: "sigorta-hukuku" },
  { t: "Gayrimenkul Hukuku", s: "gayrimenkul-hukuku" },
  { t: "Bilişim Hukuku", s: "bilisim-hukuku" },
  { t: "İcra ve İflas Hukuku", s: "icra-ve-iflas-hukuku" },
  { t: "Sağlık Hukuku", s: "saglik-hukuku" },
  { t: "Tüketici Hukuku", s: "tuketici-hukuku" },
  { t: "Yatırım Hukuku", s: "yatirim-hukuku" },
  { t: "Uluslararası Ticari Sözleşmeler", s: "uluslararasi-ticari-sozlesmeler" },
  { t: "Ceza Hukuku", s: "ceza-hukuku" },
  { t: "İdare ve Vergi Hukuku", s: "idare-ve-vergi-hukuku" },
];

const iconMap: Record<string, React.ReactNode> = {
  "banka-ve-ticaret-hukuku": <Scale size={72} />,
  "is-hukuku": <CheckCircle2 size={72} />,
  "marka-ve-patent-hukuku": <BookOpen size={72} />,
  "aile-hukuku": <MessageSquare size={72} />,
  "sigorta-hukuku": <Shield size={72} />,
  "gayrimenkul-hukuku": <Building2 size={72} />,
  "bilisim-hukuku": <Cpu size={72} />,
  "icra-ve-iflas-hukuku": <Gavel size={72} />,
  "saglik-hukuku": <Heart size={72} />,
  "tuketici-hukuku": <ShoppingCart size={72} />,
  "yatirim-hukuku": <TrendingUp size={72} />,
  "uluslararasi-ticari-sozlesmeler": <Globe size={72} />,
  "ceza-hukuku": <Scale size={72} />,
  "idare-ve-vergi-hukuku": <FileText size={72} />,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceContent[slug];
  const icon = iconMap[slug] || <Scale size={72} />;
  const title = data?.title || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ── HERO ── */}
      <div className="relative w-full min-h-[520px] md:min-h-[620px] flex items-end pt-44 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628] z-0" />
          <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,.03) 40px,rgba(255,255,255,.03) 80px)"}} />
          <div className="absolute right-0 top-0 w-[55%] h-full opacity-5 flex items-center justify-end pr-12">{icon}</div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-32">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-white/40 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Ana Sayfa</Link>
              <span className="text-white/20">/</span>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Hizmetler</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Uzmanlık Alanımız</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic">{title}</h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              {data?.heroDesc || `${title} alanında müvekkillerimize profesyonel danışmanlık ve etkin dava takibi sunuyoruz.`}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/iletisim" className="bg-accent hover:bg-white text-primary px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center gap-3 shadow-xl shadow-accent/20">
                İletişim
              </Link>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-4 pb-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
              <p className="text-3xl font-black text-accent italic leading-none mb-2">10+</p>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-tight">Yıllık Deneyim</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
              <p className="text-3xl font-black text-accent italic leading-none mb-2">14</p>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-tight">Hizmet Alanı</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
              <p className="text-2xl font-black text-accent italic leading-none mb-2">Kadıköy</p>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-tight">İstanbul</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 -mt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── CONTENT ── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Intro Card */}
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-10 md:p-16">
              <div className="flex items-start gap-6 mb-10">
                <div className="w-20 h-20 rounded-3xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  {iconMap[slug] || <Scale size={40} />}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary uppercase italic leading-tight">
                    {title} <span className="text-accent block">Neden Önemlidir?</span>
                  </h2>
                </div>
              </div>
              <div className="space-y-5 text-neutral-600 text-lg leading-relaxed font-medium">
                <p>{data?.desc1 || `${title} alanında müvekkillerimizin karşılaştığı tüm hukuki uyuşmazlıklarda profesyonel danışmanlık ve temsil hizmetleri sunuyoruz.`}</p>
                <p>{data?.desc2 || `Süreçlerimizi şeffaflık ilkesi çerçevesinde yürütüyor, müvekkillerimizi davanın her aşamasında düzenli olarak bilgilendiriyoruz.`}</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-10 md:p-16">
              <h3 className="text-2xl font-black text-primary uppercase italic mb-8">Sunduğumuz Hizmetler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(data?.features || ["Hukuki Danışmanlık", "Dava Takibi", "Sözleşme Hazırlama", "Arabuluculuk"]).map((f, i) => (
                  <div key={i} className="flex items-center gap-4 bg-neutral-50 hover:bg-accent/5 hover:border-accent border border-transparent p-5 rounded-2xl transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-primary text-sm leading-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-primary rounded-[40px] shadow-xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <h3 className="text-2xl font-black text-white uppercase italic mb-10 relative z-10">Çalışma Sürecimiz</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {(data?.process || [
                  { step: "01", title: "Ön Görüşme", desc: "Durumunuzu dinleyip değerlendiriyoruz." },
                  { step: "02", title: "Strateji", desc: "Hukuki yol haritanızı belirliyoruz." },
                  { step: "03", title: "Uygulama", desc: "Süreci titizlikle yönetiyoruz." },
                  { step: "04", title: "Sonuç", desc: "Hedeflenen sonuca ulaşıyoruz." },
                ]).map((p, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all">
                      <span className="text-accent group-hover:text-primary font-black text-xl italic transition-colors">{p.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-lg mb-1">{p.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats (mobile) */}
            <div className="grid grid-cols-3 gap-4 lg:hidden">
              <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-gray-100">
                <p className="text-2xl font-black text-primary italic leading-none mb-1">10+</p>
                <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Yıllık Deneyim</p>
              </div>
              <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-gray-100">
                <p className="text-2xl font-black text-primary italic leading-none mb-1">14</p>
                <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Hizmet Alanı</p>
              </div>
              <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-gray-100">
                <p className="text-xl font-black text-primary italic leading-none mb-1">Kadıköy</p>
                <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest leading-tight">İstanbul</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 p-10 md:p-16">
              <h3 className="text-2xl font-black text-primary uppercase italic mb-8">Sıkça Sorulan Sorular</h3>
              <div className="space-y-3">
                {(data?.faq || []).map((item, i) => (
                  <div key={i} className={`border rounded-2xl overflow-hidden transition-all ${openFaq === i ? "border-accent shadow-lg" : "border-gray-100"}`}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left gap-4">
                      <span className="font-bold text-primary text-base leading-snug">{item.q}</span>
                      <ChevronDown size={20} className={`shrink-0 text-accent transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 text-neutral-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{item.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hukuki Bilgilendirme / Yasal Uyarı */}
            <div className="bg-neutral-50 rounded-[40px] border border-gray-100 p-10 md:p-14">
              <h3 className="text-xl font-black text-primary uppercase italic mb-6">Neden Hukuki Danışmanlık Almalısınız?</h3>
              <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
                <p>Hukuki süreçlerde yasal süreler çok kısa olabilmekte; süre aşımı durumunda dava açma hakkı tamamen ortadan kalkabilmektedir. Bu nedenle uyuşmazlık oluştuğu anda bir avukata başvurmanız büyük önem taşımaktadır.</p>
                <p>Her dava kendine özgü koşullar içermektedir. Benzer görünen davalarda farklı sonuçlar ortaya çıkabilir. Genel bilgilendirme niteliğindeki bu sayfadaki açıklamalar, kişisel hukuki danışmanlık yerine geçmez.</p>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-100">
                  <Clock size={20} className="text-accent" />
                  <span className="text-primary font-bold text-sm">Süre Takibi Kritik</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-100">
                  <Award size={20} className="text-accent" />
                  <span className="text-primary font-bold text-sm">Bireysel Değerlendirme</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-100">
                  <Shield size={20} className="text-accent" />
                  <span className="text-primary font-bold text-sm">Gizlilik İlkesi</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-4 space-y-8">

            {/* CTA Box */}
            <div className="bg-accent rounded-[40px] p-10 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <h3 className="text-primary font-black text-2xl italic uppercase leading-tight mb-3">HUKUKI DESTEK<br />ALIN</h3>
              <p className="text-primary/70 text-xs font-bold uppercase tracking-widest mb-8 leading-relaxed">Uyuşmazlığınız için doğru stratejiyi birlikte belirleyelim.</p>
              <div className="space-y-3 relative z-10">
                <Link href="/iletisim" className="w-full bg-primary text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs tracking-widest hover:bg-white hover:text-primary transition-all shadow-lg uppercase">
                  İletişim
                </Link>
              </div>
            </div>

            {/* All Services Menu */}
            <div className="bg-primary rounded-[40px] shadow-xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <h3 className="text-white font-black text-base mb-6 border-b border-white/10 pb-4 italic uppercase tracking-widest">Tüm Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {allServices.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/hizmetler/${item.s}`}
                      className={`flex items-center justify-between group transition-all font-bold text-xs uppercase tracking-wider py-1 border-b border-white/5 last:border-0 ${slug === item.s ? "text-accent" : "text-white/40 hover:text-white"}`}
                    >
                      <span>{item.t}</span>
                      <ArrowRight size={14} className={`transition-transform group-hover:translate-x-1 ${slug === item.s ? "opacity-100 text-accent" : "opacity-0 group-hover:opacity-100"}`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-[40px] shadow-md border border-gray-100 p-10">
              <h3 className="text-primary font-black text-base italic uppercase mb-6 tracking-widest">Ofis Bilgileri</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3"><span className="text-accent font-bold">📍</span><span className="text-neutral-500 font-medium">Eğitim Mah., Poyraz Sk. No:26/4, Kadıköy / İstanbul</span></div>
                <div className="flex gap-3"><span className="text-accent font-bold">📞</span><a href="tel:05514882948" className="text-neutral-500 font-medium hover:text-accent transition-colors">0551 488 29 48</a></div>
                <div className="flex gap-3"><span className="text-accent font-bold">🕐</span><span className="text-neutral-500 font-medium">Pzt–Cum: 09:00–18:00</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
