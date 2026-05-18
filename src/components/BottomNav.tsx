"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Scale, MapPin, MessageCircle } from "lucide-react";

const items = [
  {
    label: "Ana Sayfa",
    href: "/",
    icon: Home,
    exact: true,
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    icon: Scale,
    exact: false,
  },
  {
    label: "Konum",
    href: "https://maps.google.com/?q=Eğitim+Mah.+Poyraz+Sk.+No:26/4+Kadıköy+İstanbul",
    icon: MapPin,
    exact: false,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905514882948",
    icon: MessageCircle,
    exact: false,
    external: true,
    accent: true,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-3 pt-0">
      <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_-4px_40px_rgba(0,0,0,0.12)] rounded-[28px] flex items-stretch overflow-hidden">
        {items.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          const Wrapper = item.external ? "a" : Link;
          const wrapperProps = item.external
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : { href: item.href, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) };

          return (
            <Wrapper
              key={item.label}
              {...(wrapperProps as any)}
              className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 relative transition-all duration-200
                ${item.accent
                  ? "text-white"
                  : isActive
                    ? "text-primary"
                    : "text-neutral-400 hover:text-primary"
                }`}
            >
              {/* Aktif arka plan */}
              {isActive && !item.accent && (
                <span className="absolute inset-x-2 inset-y-1.5 bg-primary/8 rounded-2xl" />
              )}

              {/* WhatsApp için yeşil pill */}
              {item.accent && (
                <span className="absolute inset-x-2 inset-y-1.5 bg-[#25D366] rounded-2xl shadow-lg shadow-[#25D366]/30" />
              )}

              <span className="relative z-10">
                <item.icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  className="transition-all duration-200"
                />
              </span>
              <span className={`relative z-10 text-[10px] font-black tracking-wide transition-all duration-200 ${isActive ? "text-primary" : item.accent ? "text-white" : ""}`}>
                {item.label}
              </span>
            </Wrapper>
          );
        })}
      </div>
    </nav>
  );
}
