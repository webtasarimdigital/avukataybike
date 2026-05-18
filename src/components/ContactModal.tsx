"use client";
import { useState, useEffect } from "react";
import { X, Send, Phone, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handler = () => setOpen(true);
    document.addEventListener("open-contact-modal", handler);
    return () => document.removeEventListener("open-contact-modal", handler);
  }, []);

  const close = () => {
    setOpen(false);
    setTimeout(() => setStatus("idle"), 400);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[500]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[510] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="bg-primary px-8 py-6 flex items-start justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -mr-24 -mt-24 blur-2xl" />
                <div className="relative z-10">
                  <p className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-1">Ücretsiz</p>
                  <h2 className="text-white font-black text-2xl uppercase italic">Bilgi Talebi</h2>
                  <p className="text-white/50 text-xs mt-1">En kısa sürede dönüş yapılacaktır.</p>
                </div>
                <button
                  onClick={close}
                  className="relative z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="px-8 py-7">
                {status === "success" ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-black text-primary text-xl uppercase">Talebiniz Alındı!</h3>
                    <p className="text-neutral-500 text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
                    <button onClick={close} className="mt-4 bg-accent text-primary px-8 py-3 rounded-xl font-black text-sm tracking-widest uppercase">
                      Kapat
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                        <input
                          required
                          placeholder="Ad Soyad *"
                          value={form.name}
                          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
                        />
                      </div>
                      <div className="relative">
                        <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                        <input
                          required
                          placeholder="Telefon *"
                          value={form.phone}
                          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                      <input
                        type="email"
                        placeholder="E-posta"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
                      />
                    </div>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-4 top-4 text-primary/30" />
                      <textarea
                        rows={3}
                        placeholder="Konunuzu kısaca açıklayın..."
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-xs font-bold">Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-accent hover:bg-primary text-primary hover:text-white py-4 rounded-xl font-black text-[13px] tracking-widest uppercase transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                      ) : (
                        <><Send size={15} /> Gönder</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
