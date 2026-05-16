import { MapPin, Phone, Mail, Clock, PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Banka ve Ticaret Hukuku", slug: "banka-ve-ticaret-hukuku" },
  { title: "İş Hukuku", slug: "is-hukuku" },
  { title: "Aile Hukuku", slug: "aile-hukuku" },
  { title: "Gayrimenkul Hukuku", slug: "gayrimenkul-hukuku" },
  { title: "Ceza Hukuku", slug: "ceza-hukuku" },
  { title: "İcra ve İflas Hukuku", slug: "icra-ve-iflas-hukuku" },
];

export default function Footer() {
  return (
    <footer className="bg-primary mt-16 md:mt-24 text-white">
      {/* Pre-Footer Contact Bar */}
      <div className="w-full bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1300px]">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Item 1 */}
            <a href="tel:05514882948" className="flex-1 py-6 px-4 md:py-10 flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center justify-center shrink-0">
                <PhoneCall size={28} className="text-primary group-hover:text-accent transition-colors stroke-[2]" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-primary font-bold text-[14px] md:text-[16px] group-hover:text-accent transition-colors leading-tight">Bizimle İletişime Geçin</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">0 551 488 29 48</p>
              </div>
            </a>

            {/* Item 2 */}
            <a href="https://wa.me/905514882948" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 px-4 md:py-10 flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center justify-center shrink-0">
                <MessageCircle size={28} className="text-primary group-hover:text-accent transition-colors stroke-[2]" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-primary font-bold text-[14px] md:text-[16px] group-hover:text-accent transition-colors leading-tight">WhatsApp</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">Mesajlaşmak için tıklayın</p>
              </div>
            </a>

            {/* Item 3 */}
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 px-4 md:py-10 flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center justify-center shrink-0">
                <MapPin size={28} className="text-primary group-hover:text-accent transition-colors stroke-[2]" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-primary font-bold text-[14px] md:text-[16px] group-hover:text-accent transition-colors leading-tight">Bize Ulaşın</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">Konumumuz için tıklayın</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-[1300px] pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-10 mb-16">
          {/* Column 1: Brand & Intro */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 space-y-7">
            <Link href="/" className="inline-block bg-white p-2 rounded-full">
              <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-[14px] leading-relaxed text-neutral-400 font-medium max-w-sm">
              Avukat Aybike Sultan Biçer, hukuk ve danışmanlık alanında profesyonel, şeffaf ve sonuç odaklı hizmetler sunarak müvekkillerinin haklarını en üst seviyede korumayı amaçlamaktadır.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black hover:border-accent transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black hover:border-accent transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black hover:border-accent transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Kurumsal */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold tracking-widest uppercase text-[15px] mb-6">KURUMSAL</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">Hakkımızda</Link></li>
              <li><Link href="/blog" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/iletisim" className="text-[14px] text-neutral-400 hover:text-accent transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h4 className="text-white font-bold tracking-widest uppercase text-[15px] mb-6">HİZMETLERİMİZ</h4>
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

          {/* Column 4: İletişim */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h4 className="text-white font-bold tracking-widest uppercase text-[15px] mb-6">İLETİŞİM</h4>
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
                  info@aybikesultanbicer.com
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-[14px] font-bold text-white mb-1">Çalışma Saatleri</p>
                  <p className="text-[13px] text-neutral-500">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-8 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[13px] text-neutral-500 font-medium">
            © 2026 <strong>Av. Aybike Sultan Biçer.</strong> Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[12px] text-neutral-500 hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="text-[12px] text-neutral-500 hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
