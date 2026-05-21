import Link from "next/link";
import { ArrowRight, Handshake, Shield, Users, Scale } from "lucide-react";

export const metadata = { title: "Misyonumuz | ASB Hukuk & Danışmanlık" };

export default function MisyonPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* HERO */}
      <div className="relative bg-cream-dark overflow-hidden pt-44 pb-24">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[11px] font-black tracking-[0.3em] uppercase">Amacımız</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-primary uppercase italic leading-tight mb-6">
            Misyon<span className="text-accent">umuz</span>
          </h1>
          <div className="w-16 h-1.5 bg-accent rounded-full mx-auto mb-8" />
          <p className="text-primary-muted text-xl leading-relaxed max-w-2xl mx-auto">
            Müvekkillerimize yalnızca hukuki temsil değil; güçlü bir iş ortaklığı sunuyoruz.
          </p>
        </div>
      </div>

      {/* İÇERİK */}
      <div className="container mx-auto px-6 max-w-5xl py-20 space-y-12">

        {/* Ana misyon metni */}
        <div className="bg-cream-dark border border-primary/10 rounded-[40px] p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full -mr-36 -mt-36 blur-3xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
              <Handshake size={28} className="text-accent" />
            </div>
            <p className="text-2xl md:text-3xl font-black text-primary leading-relaxed italic mb-6">
              "Müvekkillerimize yalnızca hukuki temsil sunmak değil; süreci doğru yöneten, riskleri öngören ve sürdürülebilir çözümler üreten güçlü bir iş ortağı olmak."
            </p>
            <div className="w-12 h-1.5 bg-accent rounded-full" />
          </div>
        </div>

        {/* İlkeler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Risk Öngörüsü", desc: "Hukuki süreçlerin olası risklerini önceden tespit ederek müvekkillerimizi proaktif biçimde bilgilendiriyoruz." },
            { icon: Users, title: "Güçlü İş Ortaklığı", desc: "Dava süreciyle sınırlı kalmayıp müvekkillerimizin yanında uzun vadeli bir danışmanlık ilişkisi kuruyoruz." },
            { icon: Scale, title: "Sürdürülebilir Çözüm", desc: "Anlık çözümler yerine kalıcı ve sürdürülebilir hukuki stratejiler geliştirerek müvekkillerimizi güvence altına alıyoruz." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-8 border border-primary/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="font-black text-primary text-lg mb-3">{title}</h3>
              <p className="text-primary-muted text-sm leading-relaxed">{desc}</p>
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
