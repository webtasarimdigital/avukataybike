"use client";

import { FormEvent, useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", topic: "Genel Danışmanlık", message: "" });

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `İletişim Formu — ${form.topic}`,
          from_name: form.name || "Ziyaretçi",
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: `Konu: ${form.topic}\n\n${form.message}`,
          replyto: form.email,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", topic: "Genel Danışmanlık", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <div className="relative w-full pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628] z-0" />

        <div className="relative z-20 container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">İletişim</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase italic leading-tight">
            Bize Ulaşın
          </h1>

          <p className="text-white/60 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mt-5">
            Hukuki süreçleriniz hakkında bilgi almak için bizimle iletişime geçin.
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping Form & Info) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 -mt-8 pb-24">
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
                    <h4 className="font-bold text-primary text-xl mb-1">Adres</h4>
                    <p className="text-neutral-500 font-medium leading-relaxed">Eğitim Mahallesi, Poyraz Sokak, No:26/4, <br />Kadıköy / İstanbul</p>
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
                    <p className="text-neutral-500 font-medium leading-relaxed tracking-tight">info@asblawoffice.av.tr</p>
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
                <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest">İLETİŞİM FORMU</p>
              </div>

              <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""} />
                <input type="hidden" name="subject" value={`İletişim Formu — ${form.topic}`} />

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Ad Soyad</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Telefon No</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="0 5XX XXX XX XX"
                    className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Konu</label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))}
                    className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm appearance-none"
                  >
                    <option>Genel Danışmanlık</option>
                    <option>Hizmet Talebi</option>
                    <option>Randevu Talebi</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-1">Mesajınız</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Size nasıl yardımcı olabiliriz?"
                    className="bg-white border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:ring-2 focus:ring-accent/50 transition-all font-bold text-sm shadow-sm resize-none"
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="md:col-span-2 bg-red-50 border border-red-100 text-red-700 rounded-2xl p-4 text-sm">
                    Gönderimde bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}
                {status === "success" && (
                  <div className="md:col-span-2 bg-green-50 border border-green-100 text-green-700 rounded-2xl p-4 text-sm">
                    Mesajınız başarıyla gönderildi. En kısa sürede iletişime geçeceğiz.
                  </div>
                )}

                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary text-white rounded-2xl py-6 font-black tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10 group italic disabled:opacity-60"
                  >
                    {status === "loading" ? "Gönderiliyor..." : "FORMU GÖNDER"}
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5315529571035!2d29.036915090285884!3d40.99173744658874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8743dd60435%3A0x382be194a608da08!2zRcSfaXRpbSwgUG95cmF6IFNrLiBObzoyNi80LCAzNDczNCBLYWTEsWvDtnkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1779364256946!5m2!1str!2str"
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
