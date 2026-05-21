import { MapPin, Phone, Mail, Clock, PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Banka ve Ticaret Hukuku", slug: "banka-ve-ticaret-hukuku" },
  { title: "Ä°ÅŸ Hukuku", slug: "is-hukuku" },
  { title: "Marka ve Patent Hukuku", slug: "marka-ve-patent-hukuku" },
  { title: "Aile Hukuku", slug: "aile-hukuku" },
  { title: "Sigorta Hukuku", slug: "sigorta-hukuku" },
  { title: "Ä°cra ve Ä°flas Hukuku", slug: "icra-ve-iflas-hukuku" },
  { title: "SaÄŸlÄ±k Hukuku", slug: "saglik-hukuku" },
  { title: "TÃ¼ketici Hukuku", slug: "tuketici-hukuku" },
  { title: "KiÅŸisel Verilerin KorunmasÄ±", slug: "kisisel-verilerin-korunmasi-hukuku" },
  { title: "Kira Hukuku", slug: "kira-hukuku" },
  { title: "Ceza Hukuku", slug: "ceza-hukuku" },
];

export default function Footer() {
  return (
    <footer className="bg-primary mt-16 md:mt-24 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1300px] pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 md:gap-x-12 gap-y-10 mb-12">
          {/* Column 1: Brand & Intro */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-[14px] leading-relaxed text-neutral-400 font-medium max-w-sm">
              ASB Hukuk, hukuk ve danÄ±ÅŸmanlÄ±k alanÄ±nda profesyonel, ÅŸeffaf ve sonuÃ§ odaklÄ± hizmetler sunarak mÃ¼vekkillerinin haklarÄ±nÄ± en Ã¼st seviyede korumayÄ± amaÃ§lamaktadÄ±r.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/asblawoffice.av/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black hover:border-accent transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Kurumsal */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 min-w-0">
            <h4 className="text-white font-bold tracking-widest uppercase text-[15px] mb-6">KURUMSAL</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">HakkÄ±mÄ±zda</Link></li>
              <li><Link href="/blog" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/iletisim" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">Ä°letiÅŸim</Link></li>
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 min-w-0">
            <h4 className="text-white font-bold tracking-widest uppercase text-[15px] mb-6">HÄ°ZMETLERÄ°MÄ°Z</h4>
            <ul className="space-y-4">
              {services.map((s, idx) => (
                <li key={idx}>
                  <Link href={`/hizmetler/${s.slug}`} className="text-[14px] text-neutral-400 hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Ä°letiÅŸim */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 min-w-0">
            <h4 className="text-white font-bold tracking-widest uppercase text-[15px] mb-6">Ä°LETÄ°ÅÄ°M</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <p className="text-[14px] text-neutral-400 font-medium leading-relaxed">
                  EÄŸitim Mah., Poyraz Sokak, No:26/4, <br/>KadÄ±kÃ¶y / Ä°stanbul
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-accent shrink-0 mt-1" />
                <p className="text-[14px] text-neutral-400 font-medium leading-relaxed">
                  0 551 488 29 48
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-accent shrink-0 mt-1" />
                <p className="text-[14px] text-neutral-400 font-medium leading-relaxed">
                  info@asblawoffice.com
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-[14px] font-bold text-white mb-1">Ã‡alÄ±ÅŸma Saatleri</p>
                  <p className="text-[13px] text-neutral-500">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-8 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[13px] text-neutral-500 font-medium">
            Â© 2026 <strong>ASB Hukuk.</strong> TÃ¼m HaklarÄ± SaklÄ±dÄ±r.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[12px] text-neutral-500 hover:text-white transition-colors">Gizlilik PolitikasÄ±</Link>
            <Link href="#" className="text-[12px] text-neutral-500 hover:text-white transition-colors">KullanÄ±m KoÅŸullarÄ±</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

