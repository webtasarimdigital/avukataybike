export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  heroDesc: string;
  desc1: string;
  desc2: string;
  features: string[];
  process: ServiceProcess[];
  faq: ServiceFaq[];
  stats: { label: string; value: string }[];
}

export const serviceContent: Record<string, ServiceItem> = {
  "banka-ve-ticaret-hukuku": {
    title: "Banka ve Ticaret Hukuku",
    subtitle: "Finansal ve Ticari Uyuşmazlıklarda Etkin Hukuki Çözümler",
    heroDesc: "Şirket kuruluşundan finansal yeniden yapılandırmaya, birleşme ve satın almalardan konkordato süreçlerine kadar ticari hayatın her aşamasında yanınızdayız.",
    desc1: "Banka ve Ticaret hukuku alanında tecrübeli avukatları ile hizmet veren ofisimiz, şirketlerin uluslararası normlara uygun olarak kurulması sürecinden, yaşadıkları finansal zorlukların yönetimine, şirket birleşme, ayrılma ve satın alma süreçlerinden ortaklığın sonlandırılmasına kadar farklı alanlarda müvekkillerinin haklarını korumaktadır.",
    desc2: "Konjonktürel olarak kaygan olabilen ekonomik zemin nedeniyle zora düşen firmalara, tecrübesinin yüksek olduğu finansal hukuk alanında yol gösterici bir danışmanlık gösteren ofisimiz kimi zaman 5-6 yıla yayılabilen süreçleri başarıyla yöneterek bu alanda oldukça başarılı sonuçlara imza atmıştır. Hukuk büromuz; Ticaret Hukuku, Banka Hukuku, Finansal Yeniden Yapılandırma ve Konkordato süreç yönetimi konusunda deneyimli hukukçu kadrosu ile, etkin ve değer yaratan hukuki çözümler sağlamaktadır.",
    features: [
      "Şirketlerin uluslararası normlara uygun kurulumu",
      "Şirket birleşme, ayrılma ve satın alma süreçleri",
      "Ortaklık yapılandırması ve ortaklığın sonlandırılması",
      "Finansal zorluk yönetimi ve yeniden yapılandırma",
      "Konkordato süreç yönetimi",
      "Banka ve finansman uyuşmazlıkları",
      "Ticari sözleşmelerin hazırlanması ve müzakeresi",
      "Kambiyo senetleri ve icra takibi",
    ],
    process: [
      { step: "01", title: "İlk Değerlendirme", desc: "Şirketinizin veya ticari uyuşmazlığınızın hukuki boyutunu kapsamlı biçimde inceliyoruz." },
      { step: "02", title: "Strateji Geliştirme", desc: "Duruma özgü en etkin hukuki yol haritasını ve çözüm stratejisini belirliyoruz." },
      { step: "03", title: "Süreç Yönetimi", desc: "Uzun soluklu süreçleri (5-6 yıla yayılanlar dahil) disiplinle ve şeffaflıkla yönetiyoruz." },
      { step: "04", title: "Sonuç ve Raporlama", desc: "Her aşamada müvekkili bilgilendiriyor, en avantajlı sonuca ulaşmak için kararlılıkla çalışıyoruz." },
    ],
    faq: [
      { q: "Ticari uyuşmazlıklarda hangi yollar izlenir?", a: "Öncelikle arabuluculuk zorunlu bir ön koşul olarak uygulanmaktadır. Arabuluculukta sonuç alınamazsa Asliye Ticaret Mahkemesi'ne dava açılabilir." },
      { q: "Konkordato nedir, firmam başvurabilir mi?", a: "Konkordato, borçlarını ödeyemeyen firmaların mahkeme denetiminde alacaklılarıyla anlaşarak faaliyetini sürdürmesini sağlayan hukuki bir süreçtir. Başvuru koşulları ve süreç yönetimi için hukuki destek almanız kritik önem taşır." },
      { q: "Şirket birleşmesinde hukuki süreç nasıl işler?", a: "Birleşme öncesinde due diligence (hukuki durum tespiti) yapılması, sözleşme yapısının kurulması ve yasal bildirim/onay süreçlerinin eksiksiz yürütülmesi gerekir. Ofisimiz bu sürecin tamamında danışmanlık ve temsil hizmeti vermektedir." },
      { q: "Banka ile uyuşmazlığımda ne yapmalıyım?", a: "Tüm yazışma ve sözleşme belgelerini muhafaza edin. Hukuki danışmanlık alarak tüketici hakem heyeti veya mahkeme yollarını değerlendirmenizi tavsiye ederiz." },
    ],
    stats: [
      { label: "Çözüme Kavuşturulan Dosya", value: "200+" },
      { label: "Kurumsal Müvekkil", value: "50+" },
      { label: "Yıllık Deneyim", value: "10+" },
    ],
  },

  "is-hukuku": {
    title: "İş Hukuku",
    subtitle: "İşçi ve İşveren Haklarında Uzman Hukuki Destek",
    heroDesc: "İş ilişkisinin kurulmasından sona ermesine kadar tüm süreçlerde işçi ve işveren haklarını en üst düzeyde koruyoruz.",
    desc1: "İş hayatımızda yaygın olarak kullanılan hukuk dallarından biri de hiç şüphesiz İş Hukukudur. İş yaşamında bulunan her çalışanın, çalışma hayatını düzenleyen bu hukuk dalı hakkında bilgi sahibi olması çok önemlidir. Özellikle iş ilişkisinin kurulması aşaması, çalışırken ve çalışma ilişkisi sona erdikten sonra uyması gereken rekabet yasağı, kişisel verilerin korunması ve gizliliği gibi düzenlemeler, işverene ve işyerine karşı haklarının ve yükümlülüklerinin farkında olması, iş ilişkisinin devamı ve sona ermesi gibi önemli hukuki sonuçlar doğurabilecek konularda çalışanların profesyonel hukuki destek alması çok önemlidir. İş Hukukundan kaynaklanan uyuşmazlıkların iş hayatında yaşanması kaçınılmaz olup en çok uyuşmazlığın yaşandığı hukuk alanıdır. Hukuk ekibimiz tarafından iş kazaları sebebi ile uğranılan zarara yönelik tazminat, işe iade, kıdem ve ihbar gibi tazminat alacakları, işçilik alacakları ve benzeri nitelikteki davalar titizlikle takip edilmekte ve müvekkiller için en avantajlı şekilde sonuçlandırılmaktadır.",
    desc2: "Ticari faaliyetler için en gerekli unsur insan kaynağı olup bu kaynağın her bakımdan doğru şekilde yönetilmesi ise kurumsal yapılar için zorunluluktur. Aksi durum her ölçekteki kurumsal yapılar için maddi, manevi kayba ve itibar kaybına yol açmaktadır. Hukuk büromuz kurumsal yapılar ile sıkı bir işbirliği yaparak özellikle iş ilişkisinin kurulması, rekabet yasağı, kişisel verilerin korunması, gizlilik vb. düzenlemeler, personele karşı yükümlülüklerin ve hakların farkındalığı, iş güvenliğine yönelik alınması gereken önlemler ve yürütülmesi gereken süreçler, iç yönerge ve politikaların oluşturulması gibi standardizasyon çalışmaları, iş ilişkisinin yürütülmesi ve sona ermesi, iş sözleşmesi veya işyeri devri, alt yüklenici ve geçici iş ilişkisi tesisi gibi ciddi hukuki sonuçlar doğurabilecek konularda hukuki destek sağlamaktadır. Uyuşmazlığın önlenemediği durumlarda İş Hukukuna ilişkin tüm davalar alanında tecrübeli avukatlar tarafından takip edilmekte ve müvekkillerimiz için en avantajlı şekilde sonuçlandırılmaktadır.",
    features: [
      "İş ilişkisinin kurulması ve iş sözleşmesi hazırlanması",
      "Rekabet yasağı sözleşmeleri ve gizlilik düzenlemeleri",
      "Kişisel verilerin korunması (KVKK) uyumluluk danışmanlığı",
      "İşe iade davaları ve haksız fesih talepleri",
      "Kıdem ve ihbar tazminatı alacakları",
      "İş kazası tazminat davaları",
      "İşçilik alacakları (fazla mesai, yıllık izin vb.)",
      "İç yönerge, politika ve standardizasyon çalışmaları",
      "Alt yüklenici ve geçici iş ilişkisi tesisi",
      "İşyeri devri ve iş sözleşmesi devri süreçleri",
    ],
    process: [
      { step: "01", title: "Durum Değerlendirmesi", desc: "İş ilişkinizin hukuki boyutunu ve uyuşmazlığın niteliğini detaylı inceliyoruz." },
      { step: "02", title: "Zorunlu Arabuluculuk", desc: "İş uyuşmazlıklarında yasal zorunluluk olan arabuluculuk sürecini etkin biçimde yönetiyoruz." },
      { step: "03", title: "Dava Takibi", desc: "Arabuluculukta anlaşma sağlanamazsa iş mahkemesinde davayı tecrübeli avukatlarla sürdürüyoruz." },
      { step: "04", title: "Karar Sonrası İnfaz", desc: "Mahkeme kararının uygulanmasını ve hak kazanılan alacakların tahsilini takip ediyoruz." },
    ],
    faq: [
      { q: "İşten çıkarılırsam ne kadar sürem var?", a: "Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurmanız, anlaşmazlık halinde ise 2 ay içinde dava açmanız gerekmektedir." },
      { q: "Kıdem tazminatı ne zaman ödenir?", a: "En az 1 yıl çalışmış olmak kaydıyla; işveren feshi, emeklilik, askerlik veya kadın işçilerin evlenme sebebiyle ayrılması durumunda kıdem tazminatına hak kazanılır." },
      { q: "Rekabet yasağı sözleşmesi bağlayıcı mıdır?", a: "Rekabet yasağı sözleşmelerinin geçerliliği süre, coğrafi kapsam ve konu bakımından sınırlıdır. Hukuki danışmanlık alarak sözleşmenizin geçerlilik koşullarını değerlendirmenizi öneririz." },
      { q: "İş kazası geçirdim, tazminat alabilir miyim?", a: "İş kazası durumunda SGK'ya bildirim yapılması ve işverenin kusur oranının tespiti büyük önem taşır. Maddi ve manevi tazminat taleplerinde hukuki destek almanız haklarınızın korunması açısından kritiktir." },
    ],
    stats: [
      { label: "Takip Edilen Dava", value: "150+" },
      { label: "Hizmet Alanı", value: "14" },
      { label: "Yıllık Deneyim", value: "10+" },
    ],
  },

  "aile-hukuku": {
    title: "Aile Hukuku",
    subtitle: "Aile Uyuşmazlıklarında Hukuki Destek",
    heroDesc: "Boşanma, velayet, nafaka ve miras gibi hassas süreçlerde hukuki haklarınız kapsamında danışmanlık ve temsil hizmetleri.",
    desc1: "Aile hukuku; bireylerin en kırılgan dönemlerinde ihtiyaç duydukları hukuki desteği içermektedir. Boşanma davası, velayet ve kişisel ilişki düzenlenmesi, nafaka talepleri, mal rejimi ve aile içi şiddet davalarında müvekkillerimize güvenilir bir yol arkadaşlığı yapıyoruz.",
    desc2: "Öncelikle anlaşmalı çözüm yollarını değerlendiriyor, taraflara ve koşullara göre en uygun hukuki yolu birlikte belirliyoruz. Çekişmeli davalarda ise hukuki argümanlar ve delil yönetimi konusunda müvekkile destek sunuyoruz.",
    features: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Velayet ve kişisel ilişki düzenlenmesi",
      "Nafaka artırım ve azaltım davaları",
      "Mal rejimi tasfiyesi ve mal paylaşımı",
      "Aile içi şiddet ve koruma kararları",
      "Evlat edinme işlemleri",
      "Soybağı davaları",
      "Miras uyuşmazlıkları ve tenkis davaları",
    ],
    process: [
      { step: "01", title: "Gizli Danışma", desc: "Durumunuzu tam anlamıyla gizlilik içinde dinleyip değerlendiriyoruz." },
      { step: "02", title: "Strateji Belirleme", desc: "Anlaşmalı veya çekişmeli dava yolunu birlikte kararlaştırıyoruz." },
      { step: "03", title: "Dava Takibi", desc: "Mahkeme sürecinin her aşamasında yanınızda oluyoruz." },
      { step: "04", title: "Karar Sonrası Destek", desc: "Velayet, nafaka ve mal paylaşımı kararlarının uygulanmasını takip ediyoruz." },
    ],
    faq: [
      { q: "Boşanma davası ne kadar sürer?", a: "Anlaşmalı boşanma genellikle 1-3 ay içinde sonuçlanırken, çekişmeli davalar mahkemelerin yoğunluğuna göre 1-3 yıl sürebilmektedir." },
      { q: "Velayet kararını değiştirebilir miyim?", a: "Kesinleşmiş velayet kararları, koşulların değişmesi halinde değiştirilebilir. Çocuğun üstün yararı her zaman öncelikli kriter olarak değerlendirilir." },
      { q: "Mal paylaşımında eşim ne kadar hak alır?", a: "2002 sonrası edinilen mallarda yasal mal rejimi olan edinilmiş mallara katılma rejimi geçerlidir. Her eş, evlilik sürecinde edinilen mallara eşit oranda katılım payı alır." },
    ],
    stats: [
      { label: "Çözüme Kavuşturulan Aile Davası", value: "180+" },
      { label: "Anlaşmalı Boşanma", value: "%65" },
      { label: "Müvekkil Memnuniyeti", value: "%96" },
    ],
  },

  "gayrimenkul-hukuku": {
    title: "Gayrimenkul Hukuku",
    subtitle: "Gayrimenkul Hukukunda Hukuki Destek",
    heroDesc: "Tapu işlemleri, kira uyuşmazlıkları, imar sorunları ve inşaat hukukunda kapsamlı hukuki destek.",
    desc1: "Gayrimenkul hukuku; taşınmaz alım-satım işlemleri, kira sözleşmeleri, tapu iptal ve tescil davaları, kamulaştırma uyuşmazlıkları ve imar hukuku gibi önemli alanları kapsamaktadır. Bu alanda yaşanan sorunlar telafisi güç sonuçlara yol açabileceğinden hukuki sürecin doğru yönetilmesi önem taşımaktadır.",
    desc2: "Gayrimenkul yatırımlarınızı güvence altına almak, hak kayıplarını önlemek ve taşınmaz uyuşmazlıklarını etkin biçimde çözmek için kapsamlı danışmanlık ve temsil hizmetleri sunuyoruz.",
    features: [
      "Tapu iptal ve tescil davaları",
      "Kira alacağı ve tahliye davaları",
      "Kat mülkiyeti ve kat irtifakı uyuşmazlıkları",
      "Kamulaştırma ve kamulaştırmasız el koyma",
      "İnşaat ve müteahhitlik sözleşmeleri",
      "Gayrimenkul alım-satım ve devir işlemleri",
      "Şufa (önalım) hakkı davaları",
      "İmar ve yapı ruhsatı uyuşmazlıkları",
    ],
    process: [
      { step: "01", title: "Tapu ve İmar İncelemesi", desc: "Taşınmaza ilişkin tüm belgeleri ve imar durumunu inceliyoruz." },
      { step: "02", title: "Risk Analizi", desc: "Olası hukuki riskleri belirleyerek önlem stratejisi oluşturuyoruz." },
      { step: "03", title: "Müzakere veya Dava", desc: "Uyuşmazlığa göre uzlaşı ya da mahkeme yolunu seçiyoruz." },
      { step: "04", title: "Tescil ve Takip", desc: "Mahkeme kararı sonrası gerekli tescil işlemleri takip edilir." },
    ],
    faq: [
      { q: "Tapu iptali davası ne kadar sürer?", a: "Tapu iptal ve tescil davaları ortalama 1-2 yıl sürmektedir. Delillerin güçlü olması ve taşınmazın niteliğine göre bu süre değişebilir." },
      { q: "Kiracımı nasıl tahliye ettirebilirim?", a: "Kira borcunun bulunması, konutun ihtiyaç nedeniyle talep edilmesi veya tahliye taahhüdü gibi yasal gerekçelerle icra yoluyla veya dava açarak tahliye sağlanabilir." },
      { q: "Kamulaştırma bedelini itiraz etme hakkım var mı?", a: "Evet. Kamulaştırma kararına karşı idare mahkemesinde itiraz, belirlenen bedele karşı ise bedel artırım davası açma hakkınız bulunmaktadır." },
    ],
    stats: [
      { label: "Gayrimenkul Davası", value: "120+" },
      { label: "Tapu İptal Başarısı", value: "%82" },
      { label: "Kira Tahsilatı", value: "₺2M+" },
    ],
  },

  "ceza-hukuku": {
    title: "Ceza Hukuku",
    subtitle: "Ceza Davalarında Güçlü ve Kararlı Savunma",
    heroDesc: "Soruşturmadan infaza kadar tüm ceza yargılaması süreçlerinde haklarınızı etkin biçimde savunuyoruz.",
    desc1: "Ceza hukuku, bireylerin özgürlüklerini ve geleceklerini doğrudan etkileyen en kritik hukuk dallarından biridir. Soruşturma aşamasından başlayarak kovuşturma, yargılama ve infaz süreçlerinin her evresinde güçlü bir savunma hakkı için yanınızdayız.",
    desc2: "Ekonomik suçlar, internet suçları, kasten yaralama, dolandırıcılık, uyuşturucu suçları ve daha pek çok alanda deneyimli kadromuzla en etkili savunma stratejisini oluşturuyoruz. Müvekkillerimizin haklarını en üst düzeyde korumak için kanunların tüm imkânlarını kullanıyoruz.",
    features: [
      "Gözaltı ve tutukluluk kararlarına itiraz",
      "Ağır ceza davalarında savunma",
      "Ekonomik suçlar (dolandırıcılık, zimmet, irtikap)",
      "Bilişim suçları ve siber güvenlik hukuku",
      "Uyuşturucu ve kaçakçılık suçları",
      "Kasten ve taksirle yaralama davaları",
      "Cinsel suçlar savunması",
      "İnfaz hukuku ve tahliye talepleri",
    ],
    process: [
      { step: "01", title: "Acil Müdahale", desc: "Gözaltı anından itibaren yanınızdayız; haklarınızı anında koruma altına alıyoruz." },
      { step: "02", title: "Dosya Analizi", desc: "İddianameyi ve tüm delilleri titizlikle inceleyerek savunma stratejisi oluşturuyoruz." },
      { step: "03", title: "Yargılama Savunması", desc: "Duruşmalarda etkin savunma yaparak lehe kararlar için mücadele ediyoruz." },
      { step: "04", title: "Kanun Yolları", desc: "Aleyhte kararlarda istinaf ve temyiz yollarını kararlılıkla kullanıyoruz." },
    ],
    faq: [
      { q: "Gözaltına alındımda ilk ne yapmalıyım?", a: "Avukatınızı hemen arayın veya aile üyelerinizden avukat talep etmelerini isteyin. İfade vermeden önce mutlaka avukatınızla görüşün." },
      { q: "Tutukluluk kararına itiraz edebilir miyim?", a: "Evet. Tutukluluk kararına sulh ceza hakimliği nezdinde itiraz hakkınız vardır. Bu itirazı avukatınız aracılığıyla derhal yapmanız önerilir." },
      { q: "Ceza davası ne kadar sürer?", a: "Suçun niteliğine ve mahkemenin yoğunluğuna göre değişir. Basit suçlarda 6 ay–1 yıl iken ağır ceza mahkemelerinde 2-4 yıl sürebilir." },
    ],
    stats: [
      { label: "Beraat Kararı", value: "60+" },
      { label: "Ceza İndirimi", value: "95+" },
      { label: "Yıllık Deneyim", value: "10+" },
    ],
  },

  "sigorta-hukuku": {
    title: "Sigorta Hukuku",
    subtitle: "Sigorta Uyuşmazlıklarında Hukuki Destek",
    heroDesc: "Sigorta poliçenizden doğan haklarınızın kullanılması ve sigorta şirketi uyuşmazlıklarında hukuki danışmanlık hizmetleri.",
    desc1: "Sigorta hukuku alanında; trafik kazası tazminatları, kasko ve zorunlu trafik sigortası uyuşmazlıkları, hayat sigortası ödemeleri, konut sigortası hasarları ve sigorta şirketinin tazminat ödemekten kaçınması gibi durumlarda müvekkillerimizi temsil ediyoruz.",
    desc2: "Sigorta şirketleri kimi zaman ödeme yapmaktan kaçınmakta ya da hak edilen tazminatın çok altında teklifler sunmaktadır. Bu durumlarda tarafınızda yer alarak sigorta poliçesi şartlarını titizlikle inceliyor ve haklarınızı nasıl kullanabileceğiniz konusunda yönlendiriyoruz.",
    features: [
      "Trafik kazası tazminat davaları",
      "Zorunlu trafik sigortası (ZMSS) uyuşmazlıkları",
      "Kasko uyuşmazlıkları ve hasar tespiti",
      "Hayat sigortası prim iadesi ve tazminat",
      "İş yeri ve konut sigortası hasarları",
      "Rücu ve regres davaları",
      "Sigorta şirketine karşı tazminat davaları",
      "Güvence Hesabı başvuruları",
    ],
    process: [
      { step: "01", title: "Poliçe İncelemesi", desc: "Sigorta poliçenizi ve tazminat talebinizi hukuki açıdan değerlendiriyoruz." },
      { step: "02", title: "Hasar Tespiti", desc: "Bilirkişi raporları ve uzman görüşleriyle gerçek zararı belirliyoruz." },
      { step: "03", title: "Müzakere", desc: "Sigorta şirketiyle uzlaşı müzakereleri yürütüyoruz." },
      { step: "04", title: "Dava ve Tahsil", desc: "Uzlaşı sağlanamadığında dava açarak tazminatı tahsil ediyoruz." },
    ],
    faq: [
      { q: "Sigorta şirketi tazminat ödemeyi reddederse ne yapabilirim?", a: "Sigorta şirketine resmi başvuru yaparak ret gerekçesini yazılı talep edin. Akabinde sigorta tahkim komisyonuna veya mahkemeye başvurabilirsiniz." },
      { q: "Trafik kazasında tazminat alma süreci nasıl işler?", a: "Kaza tespit tutanağı, hasar raporu ve tedavi belgelerini toplayın. Sigorta şirketiyle müzakere etmeden önce hukuki danışmanlık almanız önerilir." },
      { q: "Sigorta tazminat davası ne kadar sürer?", a: "Sigorta tahkim kararları genellikle 3-6 ay içinde çıkar. Asliye Ticaret Mahkemesi'nde ise ortalama 1-2 yıl sürebilmektedir." },
    ],
    stats: [
      { label: "Sigorta Davası", value: "130+" },
      { label: "Tahsil Edilen Tazminat", value: "₺5M+" },
      { label: "Başarı Oranı", value: "%89" },
    ],
  },

  "bilisim-hukuku": {
    title: "Bilişim Hukuku",
    subtitle: "Bilişim Hukuku Danışmanlığı",
    heroDesc: "Siber suçlar, veri ihlalleri, sosyal medya uyuşmazlıkları ve e-ticaret hukukunda hukuki danışmanlık ve temsil hizmetleri.",
    desc1: "Bilişim hukuku, teknolojinin hızla gelişmesiyle birlikte günümüzde kritik bir öneme kavuşmuştur. İnternet üzerinden işlenen suçlar, kişisel verilerin korunması (KVKK), sosyal medya uyuşmazlıkları, siber zorbalık ve e-ticaret hukukunda müvekkillerimize kapsamlı hizmet sunuyoruz.",
    desc2: "KVKK uyum süreçlerinde şirketlere danışmanlık sağlıyor, veri ihlali durumlarında hukuki kriz yönetimi yapıyor ve bilişim suçlarında savunma veya takip hizmeti sunuyoruz. Dijital delil tespiti ve koruma konusundaki bilgi birikimiyle davalarınız için hukuki destek sağlıyoruz.",
    features: [
      "Bilişim suçları savunma ve takibi",
      "KVKK uyum danışmanlığı",
      "Kişisel veri ihlali davaları",
      "Sosyal medya hakaret ve iftira davaları",
      "İçerik kaldırma ve URL engelleme",
      "E-ticaret sözleşmeleri ve uyuşmazlıkları",
      "Yazılım ve fikri mülkiyet uyuşmazlıkları",
      "Siber saldırı ve veri güvenliği hukuku",
    ],
    process: [
      { step: "01", title: "Dijital Delil Tespiti", desc: "Dijital ortamdaki delillerin kaybolmaması için acil tespit işlemi yapıyoruz." },
      { step: "02", title: "Hukuki Değerlendirme", desc: "Olayı ilgili mevzuat açısından kapsamlı biçimde değerlendiriyoruz." },
      { step: "03", title: "İşlem Başlatma", desc: "Şikayet, içerik kaldırma veya dava yollarını belirleyip harekete geçiyoruz." },
      { step: "04", title: "Karar Takibi", desc: "Kararların uygulanmasına ilişkin gerekli işlemler yürütülür." },
    ],
    faq: [
      { q: "Sosyal medyada hakaret edildiysem ne yapabilirim?", a: "Ekran görüntüsü alarak delil oluşturun. Cumhuriyet Savcılığı'na şikayette bulunabilir veya tazminat davası açabilirsiniz. İçerik kaldırma için BTK'ya başvurulabilir." },
      { q: "KVKK ihlalinden dolayı tazminat alabilir miyim?", a: "Evet. Kişisel verilerinizin hukuka aykırı işlenmesi veya yetkisiz kişilerce ele geçirilmesi halinde maddi ve manevi tazminat talep edebilirsiniz." },
      { q: "E-ticaret sitesi kaynaklı zararda ne yapabilirim?", a: "Tüketici hakem heyetine veya mahkemeye başvurabilir, satıcı hakkında savcılığa suç duyurusunda bulunabilirsiniz." },
    ],
    stats: [
      { label: "KVKK Danışmanlık", value: "40+" },
      { label: "İçerik Kaldırma", value: "200+" },
      { label: "Bilişim Davası", value: "80+" },
    ],
  },

  "icra-ve-iflas-hukuku": {
    title: "İcra ve İflas Hukuku",
    subtitle: "Alacak Tahsilinde En Hızlı ve Etkin Çözüm",
    heroDesc: "İlamlı ve ilamsız icra takipleri, haciz işlemleri ve iflas süreçlerinde hızlı ve etkin temsil.",
    desc1: "İcra ve İflas Hukuku alanında; alacakların tahsili için icra takibi başlatılması, itirazların bertarafı, haciz ve satış işlemlerinin yönetimi ile iflas ve konkordato süreçlerinin takibi konularında uzman hukuki hizmet sunuyoruz.",
    desc2: "Alacaklı olarak paranızın bir an önce tahsilini, borçlu olarak ise haksız icra takiplerine karşı korunmanızı sağlıyoruz. İcra dosyalarının detaylı takibi ve stratejik hamlelerle süreçleri etkin biçimde yönetiyoruz.",
    features: [
      "İlamlı ve ilamsız icra takipleri",
      "İtirazın iptali ve kaldırılması davaları",
      "Menfi tespit ve istirdat davaları",
      "Haciz işlemleri ve maaş haczi",
      "İpoteğin paraya çevrilmesi",
      "İflas davası açılması ve takibi",
      "Konkordato süreç yönetimi",
      "İstihkak ve sıra cetveli davaları",
    ],
    process: [
      { step: "01", title: "Alacak Tespiti", desc: "Alacak belgeleri incelenerek en uygun icra yolu belirleniyor." },
      { step: "02", title: "Takip Başlatma", desc: "İcra dairesinde takip başlatılarak borçluya ödeme emri gönderiliyor." },
      { step: "03", title: "Haciz ve Satış", desc: "Borçlunun mal varlığına haciz konularak satış işlemleri yürütülüyor." },
      { step: "04", title: "Süreç Tamamlama", desc: "İcra işlemlerinin sonlandırılmasının ardından bilgilendirme yapılır." },
    ],
    faq: [
      { q: "İcra takibine itiraz ettiler ne yapmalıyım?", a: "İtiraz tarihinden itibaren 1 yıl içinde itirazın iptali davası açmanız gerekmektedir. Bu süreyi kaçırmamak kritik önem taşır." },
      { q: "Haksız icra takibine maruz kaldım ne yapabilirim?", a: "Ödeme emrine 7 gün içinde itiraz edebilirsiniz. Takibin haksız olduğunu ispat etmek için menfi tespit davası açabilirsiniz." },
      { q: "Borcumu ödeyemiyorum ne yapabilirim?", a: "Konkordato, iflas erteleme veya ödeme planı gibi yasal çözüm yolları mevcuttur. Hukuki danışmanlık alarak durumunuza en uygun yolu belirleyin." },
    ],
    stats: [
      { label: "İcra Dosyası", value: "400+" },
      { label: "Tahsil Edilen Alacak", value: "₺8M+" },
      { label: "Takip Başarısı", value: "%91" },
    ],
  },

  "marka-ve-patent-hukuku": {
    title: "Marka ve Patent Hukuku",
    subtitle: "Fikri Mülkiyet Haklarınızın Güvencesi",
    heroDesc: "Marka tescili, patent başvurusu ve fikri mülkiyet uyuşmazlıklarında kapsamlı hukuki koruma.",
    desc1: "Marka ve Patent Hukuku alanında; ticaret unvanı ve marka tescili, patent ve faydalı model başvuruları, tasarım tescili, marka ihlalleri ve haksız rekabet davalarında müvekkillerimize hukuki danışmanlık ve temsil sağlıyoruz.",
    desc2: "Markanızı ve buluşlarınızı rakiplerinize karşı korumak, ihlalleri önlemek ve tescil süreçlerini doğru yönetmek için Türk Patent ve Marka Kurumu nezdindeki işlemlerinizde uzman desteğimizi sunuyoruz.",
    features: [
      "Ulusal ve uluslararası marka tescil başvuruları",
      "Patent ve faydalı model başvuruları",
      "Endüstriyel tasarım tescili",
      "Marka hükümsüzlük ve iptal davaları",
      "Marka ihlali ve taklit ürün davaları",
      "Haksız rekabet davaları",
      "Franchising sözleşmeleri",
      "Telif hakkı uyuşmazlıkları",
    ],
    process: [
      { step: "01", title: "Ön Araştırma", desc: "Başvuru öncesi benzer marka ve patent araştırmaları yapıyoruz." },
      { step: "02", title: "Başvuru Hazırlığı", desc: "Gerekli belgeleri hazırlayarak TÜRKPATENT'e başvuru yapıyoruz." },
      { step: "03", title: "Süreç Takibi", desc: "Başvuru sürecini ve itirazları titizlikle takip ediyoruz." },
      { step: "04", title: "Tescil ve Koruma", desc: "Tescil sonrası ihlallere karşı aktif koruma sağlıyoruz." },
    ],
    faq: [
      { q: "Marka tescili ne kadar sürer?", a: "TÜRKPATENT'e başvurudan tescile kadar genellikle 12-18 ay sürmektedir. İtiraz olmaksızın yaklaşık 12 ay içinde sonuçlanabilir." },
      { q: "Markam ihlal edilirse ne yapabilirim?", a: "İhlal tespiti halinde hukuki yollara başvurabilir, ihtiyati tedbir kararı, tazminat davası ve cezai şikayet yollarını kullanabilirsiniz." },
      { q: "Uluslararası marka tescili yaptırmak istersem ne yapmalıyım?", a: "Madrid Protokolü kapsamında TÜRKPATENT üzerinden uluslararası başvuru yapılabilir. Hedef ülkeleri belirleyerek süreci planlamanızı öneririz." },
    ],
    stats: [
      { label: "Tescil Edilen Marka", value: "90+" },
      { label: "Patent Başvurusu", value: "30+" },
      { label: "Başarılı Tescil", value: "%94" },
    ],
  },

  "saglik-hukuku": {
    title: "Sağlık Hukuku",
    subtitle: "Tıbbi Hata ve Hasta Haklarında Hukuki Destek",
    heroDesc: "Tıbbi malpraktis, hasta hakları ihlalleri ve sağlık kurumlarıyla uyuşmazlıklarda hukuki danışmanlık ve temsil hizmetleri.",
    desc1: "Sağlık hukuku; tıbbi hata ve malpraktis davaları, hasta haklarının korunması, sağlık kuruluşlarıyla yaşanan uyuşmazlıklar ve sağlık personelinin hukuki sorumluluğu gibi önemli konuları kapsamaktadır. Bu alanda zamanında başvuru yapılmaması telafisi güç sonuçlara yol açabilir.",
    desc2: "Tıbbi hata sonucu bedensel zarar gören ya da hasta hakları ihlale uğrayan müvekkillerimiz için hukuken etkin bir takip yapıyor; hukuki süreçlerin doğru yürütülmesi için destek sağlıyoruz.",
    features: [
      "Tıbbi malpraktis (yanlış tedavi) davaları",
      "Hasta hakları ihlali şikayetleri",
      "Ameliyat hatası tazminat talepleri",
      "Yanlış ilaç ve tanı hataları",
      "Sağlık kuruluşuna karşı tazminat davaları",
      "Sağlık personeli hukuki danışmanlığı",
      "Estetik operasyon hataları",
      "SGK ve özel sigorta uyuşmazlıkları",
    ],
    process: [
      { step: "01", title: "Tıbbi Dosya İncelemesi", desc: "Tüm tıbbi belge ve kayıtları tıp uzmanlarıyla birlikte inceliyoruz." },
      { step: "02", title: "Uzman Görüşü", desc: "Bağımsız tıp uzmanından bilirkişi raporu alınmasını sağlıyoruz." },
      { step: "03", title: "Dava veya Şikayet", desc: "Şartlara göre cezai şikayet veya tazminat davası açıyoruz." },
      { step: "04", title: "Karar Sonrası", desc: "Mahkeme kararı sonrası gerekli adımlar konusunda bilgilendirme yapıyoruz." },
    ],
    faq: [
      { q: "Tıbbi hata davası açmak için sürem ne kadar?", a: "Zararın öğrenildiği tarihten itibaren 2 yıl, her halükarda 10 yıllık zamanaşımı süresi mevcuttur. Süreyi kaçırmamak için danışmanlık almanızı öneririz." },
      { q: "Devlet hastanesinde gerçekleşen hatada kime dava açılır?", a: "Devlet hastanesindeki hatalar için idare mahkemesinde tam yargı davası açılır. Doktora ayrıca Cumhuriyet Savcılığı'na ceza şikayetinde bulunulabilir." },
      { q: "Estetik operasyon hatası için hukuki yol var mı?", a: "Evet. Estetik cerrahi sonuçlarından memnun olunmaması veya yanlış uygulama halinde tazminat ve ceza hukuku yollarına başvurulabilir." },
    ],
    stats: [
      { label: "Sağlık Davası", value: "70+" },
      { label: "Tazminat Başarısı", value: "%84" },
      { label: "Ortalama Tazminat", value: "₺120K" },
    ],
  },

  "tuketici-hukuku": {
    title: "Tüketici Hukuku",
    subtitle: "Tüketici Haklarında Hukuki Destek",
    heroDesc: "Ayıplı ürün ve hizmetler, haksız sözleşme şartları ve tüketici uyuşmazlıklarında hukuki danışmanlık ve temsil hizmetleri.",
    desc1: "Tüketici hukuku; ayıplı mal ve hizmet davaları, haksız ticari uygulamalar, abonelik sözleşmesi uyuşmazlıkları, konut ve araç alımından doğan sorunlar ile e-ticaret kaynaklı şikayetleri kapsamaktadır.",
    desc2: "Tüketici olarak maruz kaldığınız haksız uygulamalara karşı tüketici hakem heyeti başvurusu, tüketici mahkemesi davası ve cezai şikayet gibi tüm yasal yolları kullanarak ve hukuki sürecin doğru yönetilmesi için destek sağlıyoruz.",
    features: [
      "Ayıplı mal ve hizmet tazminat davaları",
      "Konut ve işyeri satış sözleşmesi uyuşmazlıkları",
      "Araba sıfır km ayıplı araç davaları",
      "Abonelik ve devre tatil sözleşmesi iptali",
      "E-ticaret ve mesafeli satış uyuşmazlıkları",
      "Haksız ticari uygulama şikayetleri",
      "Tüketici hakem heyeti başvuruları",
      "Banka ve finans kuruluşu tüketici uyuşmazlıkları",
    ],
    process: [
      { step: "01", title: "Hak Değerlendirmesi", desc: "Tüketici sıfatınız ve talebinizin yasal dayanağını inceliyoruz." },
      { step: "02", title: "Hakem Heyeti", desc: "Belirlenen limit dahilinde önce tüketici hakem heyetine başvuruyoruz." },
      { step: "03", title: "Tüketici Mahkemesi", desc: "Limiti aşan ve karara itiraz edilen durumlarda dava açıyoruz." },
      { step: "04", title: "Karar Uygulaması", desc: "Hakem veya mahkeme kararı sonrası uygulama sürecine ilişkin bilgilendirme yapılır." },
    ],
    faq: [
      { q: "Aldığım araç arızalı çıktı ne yapmalıyım?", a: "Ayıplı araç tesliminden itibaren 2 yıl içinde başvuru yapabilirsiniz. Misli ile değişim, iade veya ücretsiz onarım haklarına sahipsiniz." },
      { q: "Devre tatil sözleşmesinden cayabilir miyim?", a: "Sözleşme kurulduğundan itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin cayma hakkınız bulunmaktadır." },
      { q: "Tüketici hakem heyeti kararına itiraz etmek mümkün mü?", a: "Evet. Hakem heyeti kararına 15 gün içinde tüketici mahkemesinde itiraz hakkınız bulunmaktadır." },
    ],
    stats: [
      { label: "Hakem Heyeti Başvurusu", value: "160+" },
      { label: "Tüketici Davası", value: "90+" },
      { label: "Lehe Karar Oranı", value: "%88" },
    ],
  },

  "yatirim-hukuku": {
    title: "Yatırım Hukuku",
    subtitle: "Yatırım Hukuku Danışmanlığı",
    heroDesc: "Yurt içi ve uluslararası yatırımlarda hukuki yapılandırma, risk yönetimi ve uyuşmazlık çözümü.",
    desc1: "Yatırım hukuku; yurt içi ve yabancı yatırımların hukuki yapılandırılması, yatırım teşvik mevzuatı, ortaklık anlaşmaları ve çıkış stratejileri ile yatırım uyuşmazlıklarının çözümü gibi kritik konuları kapsamaktadır.",
    desc2: "Yatırımlarınızın güvenli ve sürdürülebilir biçimde büyümesi için şirket hukuku, menkul kıymetler hukuku ve uluslararası yatırım mevzuatı kapsamında kapsamlı danışmanlık hizmeti sunuyoruz.",
    features: [
      "Yatırım şirketi kuruluşu ve yapılandırma",
      "Ortaklık ve hisse devir sözleşmeleri",
      "Yabancı yatırım mevzuatı danışmanlığı",
      "Due diligence (hukuki durum tespiti) hizmetleri",
      "Yatırım teşvik başvuruları",
      "Girişim sermayesi ve startup hukuku",
      "Menkul kıymet ve sermaye piyasası uyuşmazlıkları",
      "Uluslararası tahkim ve yatırım davaları",
    ],
    process: [
      { step: "01", title: "Yatırım Planı İncelemesi", desc: "Yatırım yapısını ve hukuki risklerini kapsamlı değerlendiriyoruz." },
      { step: "02", title: "Yapılandırma", desc: "En verimli ve güvenli hukuki yapıyı birlikte oluşturuyoruz." },
      { step: "03", title: "Sözleşme Hazırlama", desc: "Tüm yatırım belgelerini eksiksiz ve güvenli biçimde hazırlıyoruz." },
      { step: "04", title: "Sürekli Danışmanlık", desc: "Yatırım sürecinde ortaya çıkan hukuki sorunlarda yanınızda oluyoruz." },
    ],
    faq: [
      { q: "Yabancı yatırımcı olarak Türkiye'de şirket kurabilir miyim?", a: "Evet. Yabancı sermaye kanunu kapsamında yabancı yatırımcılar yerli yatırımcılarla eşit haklara sahiptir ve kolaylıkla şirket kurabilirler." },
      { q: "Due diligence neden önemlidir?", a: "Yatırım yapılacak şirketin hukuki, mali ve operasyonel durumunu ortaya koyar. Olası riskleri önceden tespit ederek korunmanızı sağlar." },
      { q: "Ortak anlaşmazlığında ne yapılabilir?", a: "Öncelikle şirket esas sözleşmesi ve ortaklık anlaşması incelenerek uyuşmazlık çözüm mekanizmaları devreye sokulur; gerekirse dava yoluna gidilir." },
    ],
    stats: [
      { label: "Yatırım Danışmanlığı", value: "60+" },
      { label: "Kurulan Şirket", value: "35+" },
      { label: "Müvekkil Portföyü", value: "₺50M+" },
    ],
  },

  "uluslararasi-ticari-sozlesmeler": {
    title: "Uluslararası Ticari Sözleşmeler",
    subtitle: "Küresel Ticarette Sağlam Hukuki Zemin",
    heroDesc: "Sınır ötesi ticari ilişkilerde sözleşme hazırlama, müzakere ve uyuşmazlık çözümünde uzman desteği.",
    desc1: "Uluslararası ticari sözleşmeler hukuku; ihracat/ithalat sözleşmeleri, distribütörlük ve acente anlaşmaları, uluslararası satım sözleşmeleri (CISG), joint venture ve stratejik ortaklık anlaşmaları ile uluslararası tahkim süreçlerini kapsamaktadır.",
    desc2: "Farklı hukuk sistemlerinden kaynaklanan riskleri minimize etmek ve uluslararası ticari ilişkilerinizi güvence altına almak için İngilizce ve Türkçe sözleşme hazırlama, müzakere ve uyuşmazlık çözümü konularında etkin hukuki destek sağlıyoruz.",
    features: [
      "Uluslararası satım sözleşmeleri (CISG)",
      "Distribütörlük ve acente sözleşmeleri",
      "İhracat/ithalat hukuku danışmanlığı",
      "Joint venture ve stratejik ortaklıklar",
      "Uluslararası tahkim (ICC, ICSID)",
      "Yabancı mahkeme kararlarının tanınması",
      "Akreditif ve teminat mektubu uyuşmazlıkları",
      "Transfer fiyatlandırması ve vergi anlaşmazlıkları",
    ],
    process: [
      { step: "01", title: "Hukuk Seçimi", desc: "Uygulanacak hukukun ve yargı yetkisinin belirlenmesinde danışmanlık yapıyoruz." },
      { step: "02", title: "Sözleşme Tasarımı", desc: "Uluslararası standartlara uygun sözleşmeleri iki dilli olarak hazırlıyoruz." },
      { step: "03", title: "Müzakere Desteği", desc: "Sözleşme müzakerelerinde stratejik tavsiyelerde bulunuyoruz." },
      { step: "04", title: "Uyuşmazlık Çözümü", desc: "Tahkim veya dava yoluyla uyuşmazlıkları etkin biçimde çözüyoruz." },
    ],
    faq: [
      { q: "Hangi hukuku uygulayacağımızı sözleşmede belirtmeli miyiz?", a: "Evet, hukuk seçimi maddesi uluslararası sözleşmelerin olmazsa olmazıdır. Tarafların anlaşmasına bağlı olarak herhangi bir ülke hukukunu seçebilirsiniz." },
      { q: "Uluslararası tahkim nedir?", a: "Devlet mahkemesi yerine bağımsız tahkim mahkemesi (ICC, LCIA gibi) önünde uyuşmazlık çözüm yoludur. Tarafsız ve uluslararası alanda tanınan kararlar çıkarır." },
      { q: "CISG nedir ve nasıl uygulanır?", a: "Viyana Satım Sözleşmeleri Konvansiyonu, uluslararası mal satımına uygulanır. Türkiye taraf olduğundan, aksi kararlaştırılmadıkça otomatik olarak uygulanır." },
    ],
    stats: [
      { label: "Uluslararası Sözleşme", value: "80+" },
      { label: "Tahkim Davası", value: "15+" },
      { label: "Hizmet Verilen Ülke", value: "12+" },
    ],
  },

  "idare-ve-vergi-hukuku": {
    title: "İdare ve Vergi Hukuku",
    subtitle: "Kamu Kurumlarına Karşı Etkili Hukuki Mücadele",
    heroDesc: "İdari işlemlere itiraz, vergi uyuşmazlıkları ve kamu kurumlarıyla hukuki süreçlerde güçlü temsil.",
    desc1: "İdare ve Vergi Hukuku alanında; vergi incelemesi uyuşmazlıkları, idari ceza itirazları, kamu ihalesi hukuku, ruhsat ve izin uyuşmazlıkları ile idari yargı davalarında müvekkillerimize kapsamlı hizmet sunuyoruz.",
    desc2: "Vergi Usul Kanunu, İdari Yargılama Usulü Kanunu ve ilgili mevzuat kapsamında vergi dairesi, belediye ve diğer kamu kuruluşlarıyla yaşanan uyuşmazlıklarda etkin temsil sağlıyor; hak kayıplarını önlüyoruz.",
    features: [
      "Vergi tarhiyatı ve cezasına itirazlar",
      "Vergi mahkemesinde dava açılması",
      "Uzlaşma ve pişmanlık başvuruları",
      "İdare mahkemesinde iptal ve tam yargı davaları",
      "Kamu ihale uyuşmazlıkları",
      "Ruhsat, lisans ve izin iptali davaları",
      "Kamulaştırma bedeli artırım davaları",
      "İdari para cezasına itirazlar",
    ],
    process: [
      { step: "01", title: "İdari Başvuru", desc: "İdare ile uyuşmazlıkta önce zorunlu idari başvuru yollarını tüketiyoruz." },
      { step: "02", title: "Süre Takibi", desc: "İdare hukukunda kısa olan dava açma sürelerini titizlikle takip ediyoruz." },
      { step: "03", title: "Dava Açılması", desc: "İdare veya vergi mahkemesinde davayı gerekçeli biçimde açıyoruz." },
      { step: "04", title: "Kanun Yolları", desc: "İstinaf ve Danıştay aşamalarında dilekçe ve işlemler takip edilir." },
    ],
    faq: [
      { q: "Vergi cezasına nasıl itiraz ederim?", a: "İhbarnamenin tebliğinden itibaren 30 gün içinde uzlaşma talebinde bulunabilir veya vergi mahkemesinde dava açabilirsiniz." },
      { q: "İptal davası açma sürem ne kadar?", a: "İdari işlemin tebliğinden itibaren genellikle 60 gün içinde idare mahkemesinde iptal davası açmanız gerekmektedir." },
      { q: "Kamu ihalesinde hak kaybı yaşadım ne yapabilirim?", a: "İhale kararına karşı önce ihale komisyonuna şikayet, ardından Kamu İhale Kurumu'na itirazen şikayet ve son olarak idare mahkemesine başvurabilirsiniz." },
    ],
    stats: [
      { label: "Vergi Davası", value: "85+" },
      { label: "İdari İptal Davası", value: "60+" },
      { label: "Vergi İadesi", value: "₺3M+" },
    ],
  },
};
