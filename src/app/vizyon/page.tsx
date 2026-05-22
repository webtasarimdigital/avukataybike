import Link from "next/link";
import { ArrowRight, Eye, Target, Star, TrendingUp } from "lucide-react";

export const metadata = { title: "Vizyonumuz | ASB Hukuk & Danışmanlık" };

export default function VizyonPage() {
  return (
    <main className="min-h-screen bg-[#F6F3ED]">

      {/* HERO */}
      <div className="relative bg-primary overflow-hidden pt-44 pb-24">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #C9882A 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[11px] font-black tracking-[0.3em] uppercase">Hedefimiz</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-tight mb-6">
            Vizyon<span className="text-accent">umuz</span>
          </h1>
          <div className="w-16 h-1.5 bg-accent rounded-full mx-auto mb-8" />
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Hukuki hizmet anlayışını modern, erişilebilir ve stratejik bir bakış açısıyla yeniden şekillendiriyoruz.
          </p>
        </div>
      </div>

      {/* İÇERİK */}
      <div className="container mx-auto px-6 max-w-5xl py-20 space-y-12">

        {/* Ana vizyon metni */}
        <div className="bg-white rounded-[40px] p-12 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -mr-36 -mt-36 blur-3xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8">
              <Eye size={28} className="text-accent" />
            </div>
            <p className="text-2xl md:text-3xl font-black text-primary leading-relaxed italic mb-6">
              "Hukuki hizmet anlayışını modern, erişilebilir ve stratejik bir bakış açısıyla yeniden şekillendirerek; Türkiye'nin güvenilir ve tercih edilen hukuk bürolarından biri olmak."
            </p>
            <div className="w-12 h-1.5 bg-accent rounded-full" />
          </div>
        </div>

        {/* Hedefler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Erişilebilir Hukuk", desc: "Hukuki hizmetleri yalnızca büyük kuruluşların değil, her bireyin ulaşabileceği bir şekilde sunmak." },
            { icon: Star, title: "Güvenilirlik", desc: "Şeffaf iletişim, etik ilkeler ve sonuç odaklı çalışma anlayışıyla sektörde referans nokta olmak." },
            { icon: TrendingUp, title: "Sürekli Gelişim", desc: "Değişen mevzuat ve yargı içtihatlarını takip ederek müvekkillerimize her zaman güncel hizmet vermek." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="font-black text-primary text-lg mb-3">{title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/hakkimizda" className="inline-flex items-center gap-2 text-accent font-black text-sm tracking-widest uppercase border-b-2 border-accent pb-1 hover:pb-2 transition-all">
            Hakkımızda Daha Fazla <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  );
}
