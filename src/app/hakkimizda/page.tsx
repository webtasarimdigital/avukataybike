import React from "react";
import { Scale, ShieldCheck, Users, Award, CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Banka ve Ticaret Hukuku", slug: "banka-ve-ticaret-hukuku" },
  { title: "İş Hukuku", slug: "is-hukuku" },
  { title: "Aile Hukuku", slug: "aile-hukuku" },
  { title: "Gayrimenkul Hukuku", slug: "gayrimenkul-hukuku" },
  { title: "Ceza Hukuku", slug: "ceza-hukuku" },
  { title: "Sigorta Hukuku", slug: "sigorta-hukuku" },
  { title: "Bilişim Hukuku", slug: "bilisim-hukuku" },
  { title: "İcra ve İflas Hukuku", slug: "icra-ve-iflas-hukuku" },
  { title: "Marka ve Patent Hukuku", slug: "marka-ve-patent-hukuku" },
  { title: "Tüketici Hukuku", slug: "tuketici-hukuku" },
  { title: "Yatırım Hukuku", slug: "yatirim-hukuku" },
  { title: "İdare ve Vergi Hukuku", slug: "idare-ve-vergi-hukuku" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Header Area (Megagöz Style) */}
      <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
           <div className="absolute inset-0 bg-primary-light/20 -skew-x-12 translate-x-1/4 pointer-events-none" />
           <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-accent" />
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs md:text-sm italic">
              KURUMSAL
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 uppercase italic">
            HAKKIMIZDA
          </h1>
          
          <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Avukat Aybike Sultan Biçer Hukuk ve Danışmanlık bürosunun köklü geçmişi ve ilkeleri.
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 -mt-20 md:-mt-24 pb-24">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="relative bg-neutral-50 p-12 flex items-center justify-center border-r border-gray-100">
                 <div className="relative z-10 w-full aspect-square max-w-md">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-8" />
                 </div>
                 <div className="absolute inset-0 bg-primary/5 -skew-y-6 translate-y-12" />
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center space-y-8">
                 <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight uppercase italic">
                      Hukuki Çözümlerde <br /> <span className="text-accent">Güvenilir Adres</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-accent rounded-full" />
                 </div>
                 <div className="space-y-6 text-neutral-600 leading-relaxed text-lg font-medium">
                    <p>
                       Avukat Aybike Sultan Biçer olarak, müvekkillerimize sunduğumuz şeffaf, güvenilir ve sonuç odaklı hizmetlerle hukuki süreçlerde güçlü bir savunma sağlıyoruz.
                    </p>
                    <p>
                       Kadıköy merkezli ofisimizde, geniş bir yelpazede hukuki danışmanlık ve dava takibi hizmetleri sunarak haklarınızı en üst seviyede korumayı amaçlıyoruz.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                    <div>
                       <p className="text-4xl font-black text-primary italic leading-none">10+</p>
                       <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-2">Yıllık Tecrübe</p>
                    </div>
                    <div>
                       <p className="text-4xl font-black text-primary italic leading-none">500+</p>
                       <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-2">Başarılı Dosya</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Values (3 Columns) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: <ShieldCheck size={40} />, t: "Güven ve Gizlilik", d: "Müvekkillerimizin tüm bilgileri en üst düzeyde gizlilik prensibiyle korunmaktadır." },
             { icon: <Users size={40} />, t: "Müvekkil Odaklılık", d: "Her davayı kendi özelinde değerlendiriyor ve sürekli iletişim halinde kalıyoruz." },
             { icon: <Award size={40} />, t: "Profesyonel Mükemmeliyet", d: "Hukukun her dalında en güncel ve doğru bilgiyi kullanarak stratejiler geliştiriyoruz." }
           ].map((item, i) => (
             <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
                <div className="w-20 h-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{item.t}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>

        {/* Hizmetlerimiz Grid */}
        <div className="mt-24">
          <div className="text-center mb-14 space-y-4">
            <span className="text-accent font-black tracking-[0.4em] text-xs uppercase italic">Uzmanlık Alanları</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase leading-tight">Hizmetlerimiz</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link key={i} href={`/hizmetler/${s.slug}`} className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent transition-all flex items-center justify-between gap-3">
                <span className="font-bold text-primary text-sm group-hover:text-accent transition-colors leading-tight">{s.title}</span>
                <ArrowRight size={16} className="shrink-0 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="mt-24 bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4">
              <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase italic">İletişim</span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
                Hukuki Sorununuz <br /><span className="text-accent italic">Çözümsüz Değil.</span>
              </h3>
              <p className="text-white/60 max-w-md">Hemen iletişime geçin, uzman ekibimizle en doğru stratejiyi birlikte belirleyelim.</p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <a href="tel:05514882948" className="bg-accent hover:bg-white text-primary px-10 py-5 rounded-2xl font-black tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-2xl uppercase">
                <Phone size={20} /> Hemen Ara
              </a>
              <Link href="/iletisim" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-5 rounded-2xl font-black tracking-widest text-sm transition-all flex items-center justify-center gap-3 uppercase">
                <MessageSquare size={20} /> İletişim Formu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
