import React from "react";
import { Scale, ShieldCheck, Users, Award, CheckCircle2 } from "lucide-react";

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
      </div>
    </main>
  );
}
