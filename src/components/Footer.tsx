import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
  { title: "Kişisel Verilerin Korunması", slug: "kisisel-verilerin-korunmasi-hukuku" },
  { title: "Kira Hukuku", slug: "kira-hukuku" },
  { title: "Ceza Hukuku", slug: "ceza-hukuku" },
];

export default function Footer() {
  return (
    <footer className="bg-cream-dark mt-16 md:mt-24 text-primary border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6 max-w-[1300px] pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 md:gap-x-12 gap-y-10 mb-12">
          {/* Column 1: Brand & Intro */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block bg-cream p-2 rounded-xl border border-primary/10">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-[14px] leading-relaxed text-primary-muted font-medium max-w-sm">
              ASB Hukuk, hukuk ve danışmanlık alanında profesyonel, şeffaf ve sonuç odaklı hizmetler sunarak müvekkillerinin haklarını en üst seviyede korumayı amaçlamaktadır.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/asblawoffice.av/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary-muted hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary-muted hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary-muted hover:bg-accent hover:text-primary hover:border-accent transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Kurumsal */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 min-w-0">
            <h4 className="text-primary font-bold tracking-widest uppercase text-[15px] mb-6">KURUMSAL</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[14px] text-primary-muted hover:text-accent transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-[14px] text-primary-muted hover:text-accent transition-colors">Hakkımızda</Link></li>
              <li><Link href="/blog" className="text-[14px] text-primary-muted hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/iletisim" className="text-[14px] text-primary-muted hover:text-accent transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 min-w-0">
            <h4 className="text-primary font-bold tracking-widest uppercase text-[15px] mb-6">HİZMETLERİMİZ</h4>
            <ul className="space-y-4">
              {services.map((s, idx) => (
                <li key={idx}>
                  <Link href={`/hizmetler/${s.slug}`} className="text-[14px] text-primary-muted hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: İletişim */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 min-w-0">
            <h4 className="text-primary font-bold tracking-widest uppercase text-[15px] mb-6">İLETİŞİM</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <p className="text-[14px] text-neutral-400 font-medium leading-relaxed">
                  Eğitim Mah., Poyraz Sokak, No:26/4, <br/>Kadıköy / İstanbul
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
                  <p className="text-[14px] font-bold text-primary mb-1">Çalışma Saatleri</p>
                  <p className="text-[13px] text-primary-muted">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[13px] text-primary-muted font-medium">
            © 2026 <strong>ASB Hukuk.</strong> Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[12px] text-primary-muted hover:text-primary transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="text-[12px] text-primary-muted hover:text-primary transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
