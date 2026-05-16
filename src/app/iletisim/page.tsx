import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactPage() {
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
              İLETİŞİM
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 uppercase italic">
            BİZE ULAŞIN
          </h1>
          
          <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Hukuki süreçleriniz hakkında bilgi almak ve randevu oluşturmak için bizimle iletişime geçin.
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping Form & Info) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 -mt-24 md:-mt-32 pb-24">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-12">
               <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-primary uppercase italic">OFİS BİLGİLERİ</h2>
                  <div className="w-16 h-1 bg-accent rounded-full" />
               </div>

               <div className="grid grid-cols-1 gap-10">
                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                        <MapPin size={28} />
                     </div>
                     <div>
                        <h4 className="font-bold text-primary text-xl mb-1">Adresimiz</h4>
                        <p className="text-neutral-500 font-medium leading-relaxed">Eğitim Mah., Poyraz Sokak, No:26/4, <br /> Kadıköy / İstanbul</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                        <Phone size={28} />
                     </div>
                     <div>
                        <h4 className="font-bold text-primary text-xl mb-1">Telefon</h4>
                        <p className="text-neutral-500 font-medium leading-relaxed tracking-wider">0 551 488 29 48</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                        <Mail size={28} />
                     </div>
                     <div>
                        <h4 className="font-bold text-primary text-xl mb-1">E-Posta</h4>
                        <p className="text-neutral-500 font-medium leading-relaxed tracking-tight">info@aybikesultanbicer.com</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-6 group pt-6 border-t border-gray-100">
                     <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                        <Clock size={28} />
                     </div>
                     <div>
                        <h4 className="font-bold text-primary text-xl mb-1 italic uppercase">Çalışma Saatleri</h4>
                        <p className="text-neutral-500 font-medium leading-relaxed">Pazartesi - Cuma: 09:00 - 18:00</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-neutral-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
               <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
                  <h3 className="text-2xl font-black text-primary uppercase italic">BİZE MESAJ GÖNDERİN</h3>
                  <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest">HIZLI BİLGİ VE RANDEVU FORMU</p>
               </div>
               
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Ad Soyad</label>
                     <input type="text" placeholder="Örn: Ahmet Yılmaz" className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Telefon No</label>
                     <input type="tel" placeholder="0 5XX XXX XX XX" className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                     <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Konu</label>
                     <select className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm appearance-none">
                        <option>Genel Danışmanlık</option>
                        <option>Hizmet Talebi</option>
                        <option>Randevu Talebi</option>
                     </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                     <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Mesajınız</label>
                     <textarea rows={4} placeholder="Size nasıl yardımcı olabiliriz?" className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                     <button type="submit" className="w-full bg-primary text-white rounded-2xl py-6 font-black tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10 group italic">
                        FORMU GÖNDER <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </form>
            </div>
          </div>
        </div>

        {/* Map Overlapping */}
        <div className="mt-16 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 h-[500px] relative group">
           <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 group-hover:opacity-0 transition-opacity" />
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6661159891823!2d29.0435163!3d40.9887719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab872659a8571%3A0x6b872b212f458123!2sE%C4%9Fitim%20Mah.%2C%20Poyraz%20Sk.%2C%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1715873000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
           ></iframe>
        </div>
      </div>
    </main>
  );
}
