import Image from "next/image";

export default function Home() {
  const services = [
    "BANKA VE TİCARET HUKUKU", "İŞ HUKUKU", "MARKA VE PATENT HUKUKU", 
    "AİLE HUKUKU", "SİGORTA HUKUKU", "GAYRİMENKUL HUKUKU", 
    "BİLİŞİM HUKUKU", "İCRA VE İFLAS HUKUKU", "SAĞLIK HUKUKU", 
    "TÜKETİCİ HUKUKU", "YATIRIM HUKUKU", "ULUSLARARASI TİCARİ SÖZLEŞMELER", 
    "CEZA HUKUKU", "İDARE VE VERGİ HUKUKU"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans py-20">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col items-center z-10">
        {/* Logo */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl shadow-blue-900/20 mb-8 overflow-hidden flex items-center justify-center border-2 border-neutral-800 p-2">
          <Image 
            src="/logo.png" 
            alt="Avukat Aybike Sultan Biçer Logo" 
            width={160} 
            height={160} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2 text-center">
          Av. Aybike Sultan Biçer
        </h1>
        <h2 className="text-base md:text-lg text-neutral-400 font-light tracking-widest uppercase mb-10 text-center">
          Hukuk & Danışmanlık
        </h2>

        {/* Construction Badge */}
        <div className="inline-flex items-center space-x-3 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full mb-12 shadow-lg">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <span className="text-sm md:text-base font-medium text-neutral-300">
            Yeni Web Sitemiz Yapım Aşamasındadır
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-16">
          <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800/80 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-neutral-900 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-950/50 text-blue-400 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2">Adres</h3>
            <p className="text-neutral-400 text-sm">
              Eğitim Mah., Poyraz Sokak, No:26/4<br/>Kadıköy / İstanbul
            </p>
          </div>
          
          <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800/80 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-neutral-900 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-950/50 text-blue-400 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.075l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2">İletişim</h3>
            <a href="tel:05514882948" className="text-neutral-400 text-sm hover:text-blue-400 transition-colors">
              0551 488 29 48
            </a>
          </div>
        </div>

        {/* Services Marquee / List */}
        <div className="w-full mt-4">
          <p className="text-center text-neutral-500 text-sm mb-6 uppercase tracking-widest font-medium">Hizmetlerimiz</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {services.map((service, index) => (
              <span key={index} className="text-[11px] md:text-sm px-4 py-2 rounded-full border border-neutral-800/50 bg-neutral-900/30 text-neutral-400">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
