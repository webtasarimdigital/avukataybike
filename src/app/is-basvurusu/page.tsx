"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Upload, FileText, X, CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function IsBasvurusuPage() {
  const [form, setForm] = useState({
    ad: "", soyad: "", email: "", telefon: "", pozisyon: "", mesaj: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileError("");
    if (!f) return;
    if (f.type !== "application/pdf") {
      setFileError("Yalnızca PDF dosyası yükleyebilirsiniz.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setFileError("Dosya boyutu en fazla 5 MB olabilir.");
      return;
    }
    setFile(f);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kvkk) {
      setSubmitError("Devam etmek için Gizlilik Sözleşmesi'ni onaylamanız gerekmektedir.");
      return;
    }
    if (!file) {
      setSubmitError("Lütfen CV'nizi PDF formatında yükleyin.");
      return;
    }
    setSubmitError("");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <div className="relative w-full min-h-[420px] flex items-end pt-44 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a1628] z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,.03) 40px,rgba(255,255,255,.03) 80px)" }} />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-36">
          <div className="max-w-2xl space-y-5">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-white/40 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Ana Sayfa</Link>
              <span className="text-white/20">/</span>
              <span className="text-accent text-xs font-bold tracking-widest uppercase">İş Başvurusu</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Kariyer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase italic">
              Ekibimize<br /><span className="text-accent">Katılın.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Dinamik ve uzman ekibimizde yer almak istiyorsanız başvurunuzu aşağıdaki form aracılığıyla iletebilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 -mt-24 pb-32">

        {submitted ? (
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-16 flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-black text-primary uppercase italic">Başvurunuz Alındı!</h2>
            <p className="text-neutral-500 text-lg max-w-md leading-relaxed">
              Başvurunuzu inceleyeceğiz ve kısa süre içinde sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.
            </p>
            <Link href="/" className="mt-4 bg-primary text-white px-10 py-4 rounded-xl font-bold tracking-widest uppercase text-sm hover:bg-accent hover:text-primary transition-all">
              Ana Sayfaya Dön
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-primary px-10 py-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Send size={22} className="text-accent" />
              </div>
              <div>
                <h2 className="text-white font-black text-xl uppercase italic">Başvuru Formu</h2>
                <p className="text-white/50 text-xs font-medium mt-0.5">Tüm alanları eksiksiz doldurunuz</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-8">

              {/* Ad / Soyad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-primary uppercase tracking-widest">Ad <span className="text-accent">*</span></label>
                  <input
                    type="text" name="ad" value={form.ad} onChange={handleChange} required
                    placeholder="Adınız"
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-primary uppercase tracking-widest">Soyad <span className="text-accent">*</span></label>
                  <input
                    type="text" name="soyad" value={form.soyad} onChange={handleChange} required
                    placeholder="Soyadınız"
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* E-posta / Telefon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-primary uppercase tracking-widest">E-posta <span className="text-accent">*</span></label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="ornek@email.com"
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-primary uppercase tracking-widest">Telefon <span className="text-accent">*</span></label>
                  <input
                    type="tel" name="telefon" value={form.telefon} onChange={handleChange} required
                    placeholder="05XX XXX XX XX"
                    className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* Başvurulan Pozisyon */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-primary uppercase tracking-widest">Başvurulan Pozisyon <span className="text-accent">*</span></label>
                <select
                  name="pozisyon" value={form.pozisyon} onChange={handleChange} required
                  className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none"
                >
                  <option value="">Pozisyon seçiniz</option>
                  <option value="avukat-stajyeri">Avukat Stajyeri</option>
                  <option value="avukat">Avukat</option>
                  <option value="hukuk-sekreteri">Hukuk Sekreteri</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              {/* Ön Yazı */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-primary uppercase tracking-widest">Ön Yazı</label>
                <textarea
                  name="mesaj" value={form.mesaj} onChange={handleChange} rows={4}
                  placeholder="Kendinizden ve başvurunuzdan kısaca bahsedin..."
                  className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              {/* PDF Yükleme */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-primary uppercase tracking-widest">CV / Özgeçmiş (PDF) <span className="text-accent">*</span></label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${file ? "border-accent bg-accent/5" : "border-gray-200 hover:border-accent/50 hover:bg-neutral-50"}`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/pdf"
                    onChange={handleFile}
                    className="hidden"
                  />
                  {file ? (
                    <div className="flex items-center gap-3">
                      <FileText size={28} className="text-accent" />
                      <div>
                        <p className="font-black text-primary text-sm">{file.name}</p>
                        <p className="text-neutral-400 text-xs mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                        className="ml-4 w-7 h-7 rounded-full bg-neutral-100 hover:bg-red-100 text-neutral-400 hover:text-red-500 flex items-center justify-center transition-all"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload size={32} className="text-neutral-300 mb-3" />
                      <p className="font-black text-primary text-sm">PDF dosyanızı yüklemek için tıklayın</p>
                      <p className="text-neutral-400 text-xs mt-1">Yalnızca PDF · Maks. 5 MB</p>
                    </>
                  )}
                </div>
                {fileError && (
                  <div className="flex items-center gap-2 text-red-500 text-xs font-bold mt-1">
                    <AlertCircle size={14} /> {fileError}
                  </div>
                )}
              </div>

              {/* KVKK / Gizlilik Sözleşmesi */}
              <div className="bg-neutral-50 rounded-2xl border border-gray-100 p-6">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Gizlilik Sözleşmesi</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, iş başvurusu sürecinde tarafınızdan alınan kişisel veriler (ad, soyad, iletişim bilgileri, özgeçmiş vb.) yalnızca başvuru değerlendirme amacıyla işlenecek ve üçüncü kişilerle paylaşılmayacaktır. Verileriniz, başvuru sürecinin sona ermesinin ardından mevzuata uygun süre içinde silinecektir. Kişisel verilerinize ilişkin haklarınızı kullanmak için{" "}
                  <Link href="/hizmetler/kisisel-verilerin-korunmasi-hukuku" className="text-accent font-bold hover:underline">
                    Kişisel Verilerin Korunması Hukuku
                  </Link>{" "}
                  sayfamızı inceleyebilirsiniz.
                </p>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <div
                    onClick={() => setKvkk(!kvkk)}
                    className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${kvkk ? "bg-accent border-accent" : "border-gray-300 bg-white"}`}
                  >
                    {kvkk && <CheckCircle2 size={12} className="text-primary" />}
                  </div>
                  <span className="text-sm font-medium text-neutral-600 leading-snug">
                    Kişisel verilerimin yukarıda belirtilen amaçlarla işlenmesini okudum, anladım ve onaylıyorum. <span className="text-accent font-bold">*</span>
                  </span>
                </label>
              </div>

              {submitError && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-red-600 text-sm font-bold">
                  <AlertCircle size={16} /> {submitError}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-accent hover:text-primary transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
              >
                <Send size={18} /> Başvuruyu Gönder
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
