"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Scale, ArrowRight, CheckCircle2, Phone, Info, MessageSquare } from "lucide-react";
import Link from "next/link";

const serviceData: Record<string, any> = {
  "banka-ve-ticaret-hukuku": { title: "Banka ve Ticaret Hukuku", icon: <Scale size={60} /> },
  "is-hukuku": { title: "İş Hukuku", icon: <CheckCircle2 size={60} /> },
  "marka-ve-patent-hukuku": { title: "Marka ve Patent Hukuku", icon: <Scale size={60} /> },
  "aile-hukuku": { title: "Aile Hukuku", icon: <MessageSquare size={60} /> },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug] || { title: slug.split('-').map(w => w.toUpperCase()).join(' '), icon: <Scale size={60} /> };

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
              UZMANLIK ALANIMIZ
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 uppercase italic leading-tight">
            {service.title}
          </h1>
          
          <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Müvekkillerimize {service.title} alanında profesyonel danışmanlık ve etkili dava takibi sunuyoruz.
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping Sidebar & Content) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 -mt-24 md:-mt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-16">
             <div className="aspect-video bg-neutral-50 rounded-[32px] flex items-center justify-center p-12 border border-gray-100 shadow-inner group mb-12">
                <div className="text-primary/10 group-hover:text-accent transition-colors duration-700 group-hover:scale-110">
                   {service.icon}
                </div>
             </div>
             
             <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black text-primary uppercase italic leading-tight">
                   {service.title} <br /> <span className="text-accent">Hukuki Danışmanlık</span>
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-600 font-medium leading-relaxed">
                   <p>
                      {service.title} alanında, müvekkillerimizin karşılaştığı tüm hukuki uyuşmazlıklarda profesyonel danışmanlık ve temsil hizmetleri sunuyoruz. Mevzuatın karmaşık yapısı ve sürekli değişen uygulamalar karşısında, en güncel ve en güvenilir stratejileri geliştiriyoruz.
                   </p>
                   <p>
                      Süreçlerimizi şeffaflık ilkesi çerçevesinde yürütüyor, müvekkillerimizi davanın her aşamasında düzenli olarak bilgilendiriyoruz. Hedefimiz, hak kayıplarını önlemek ve en hızlı sonucu elde etmektir.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                   {[
                     "Sözleşmelerin Hazırlanması",
                     "Dava Takibi ve Yönetimi",
                     "Arabuluculuk Hizmetleri",
                     "Hukuki Risk Analizi",
                     "Mevzuat Takibi",
                     "Resmi Kurum Başvuruları"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 bg-neutral-50 p-6 rounded-2xl border border-gray-50 hover:bg-white hover:border-accent hover:shadow-lg transition-all group">
                        <CheckCircle2 size={24} className="text-accent shrink-0" />
                        <span className="font-bold text-primary text-[11px] uppercase tracking-wider group-hover:text-accent transition-colors">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
             {/* All Services Menu */}
             <div className="bg-primary p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h3 className="text-white font-black text-xl mb-8 border-b border-white/10 pb-4 italic uppercase">DİĞER HİZMETLERİMİZ</h3>
                <ul className="space-y-4">
                   {[
                     { t: "Banka ve Ticaret Hukuku", s: "banka-ve-ticaret-hukuku" },
                     { t: "İş Hukuku", s: "is-hukuku" },
                     { t: "Aile Hukuku", s: "aile-hukuku" },
                     { t: "Gayrimenkul Hukuku", s: "gayrimenkul-hukuku" },
                     { t: "Ceza Hukuku", s: "ceza-hukuku" },
                     { t: "Sigorta Hukuku", s: "sigorta-hukuku" }
                   ].map((item, i) => (
                     <li key={i}>
                        <Link href={`/hizmetler/${item.s}`} className={`flex items-center justify-between group transition-all font-bold text-xs uppercase tracking-widest ${slug === item.s ? "text-accent" : "text-white/40 hover:text-white"}`}>
                           {item.t} <ArrowRight size={16} className={`group-hover:translate-x-1 transition-transform ${slug === item.s ? "opacity-100" : "opacity-0 group-hover:opacity-100 text-accent"}`} />
                        </Link>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Help Box */}
             <div className="bg-accent p-10 rounded-[40px] shadow-xl relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mb-20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-primary font-black text-2xl mb-4 italic uppercase leading-none">PROFESYONEL <br /> DESTEK ALIN</h3>
                <p className="text-primary/70 text-xs font-bold mb-8 leading-relaxed uppercase tracking-wider">Hukuki sorunlarınıza birlikte çözüm üretelim.</p>
                <div className="space-y-4">
                   <a href="tel:05514882948" className="w-full bg-primary text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/10">
                      <Phone size={18} /> HEMEN ARA
                   </a>
                   <a href="/iletisim" className="w-full bg-white text-primary py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-xs tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                      <Info size={18} /> BİLGİ AL
                   </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
