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
    subtitle: "Aile Uyuşmazlıklarında Tecrübeli Hukuki Destek",
    heroDesc: "Nişanlanmadan boşanmaya, velayetten mirasa kadar Aile Hukuku'nun tüm alanlarında tecrübeli avukatlarımızla yanınızdayız.",
    desc1: "Aile, toplumun temel taşı olarak kabul edilmektedir. Aileyi oluşturan kişiler arasındaki ilişkileri düzenleyen hukuk dalı ise Aile Hukuku olup en yaygın ve sıklıkla ihtiyaç duyulan hukuk dallarından bir diğeridir. Aile Hukuku'nun konusunu nişanlanma, evlenme, boşanma, velayet, vesayet, soybağı, miras gibi özel hayatta bilinen ve ihtiyaç duyulan birçok kavram teşkil etmektedir.",
    desc2: "Boşanma ve boşanmaya bağlı velayet, mal paylaşımı konuları sıklıkla uyuşmazlık yaşanan Aile Hukuku konuları arasında bulunmaktadır. Hukuk Büromuz, evlilik birliğinin kurulması, yürütülmesi, sona erdirilmesi, vesayet, soybağı, miras ve benzeri Aile Hukuku konusuna giren alanlarda tecrübeli avukatları ile hukuki danışmanlık sağlamakta ve uyuşmazlıkları takip etmektedir.",
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
    desc1: "Hukuk büromuz, ceza yargılaması süreçlerinde bireylerin hak ve özgürlüklerini en üst düzeyde korumayı ilke edinmiştir. Soruşturma aşamasından kovuşturma sürecine, istinaf ve temyiz başvurularından infaz aşamasına kadar, müvekkillerimizin yanında yer alarak etkin ve stratejik savunma hizmeti sunuyoruz.",
    desc2: "Ağır ceza davaları, ekonomik suçlar, bilişim suçları, taksirle ya da kasten işlenen suçlarda kapsamlı hukuki danışmanlık ve avukatlık hizmeti sağlamaktayız. Müvekkillerimizin adil yargılanma hakkı gözetilerek tüm yargısal süreçlerde hukuk büromuz tarafından tecrübeli avukatlarla hukuki destek sağlanmaktadır.",
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
      { q: "Gözaltına alındımda ilk ne yapmalıyım?", a: "Avukatınıza ulaşın veya aile üyelerinizden avukat talep etmelerini isteyin. İfade vermeden önce mutlaka avukatınızla görüşün." },
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
    subtitle: "Sigorta Uyuşmazlıklarında Uzman Hukuki Temsil",
    heroDesc: "Sigorta poliçesinden kaynaklanan alacak davalarından mesleki mesuliyet uyuşmazlıklarına kadar Sigorta Hukuku'nun tüm alanlarında uzman kadromuzla yanınızdayız.",
    desc1: "Hukuk büromuz, Sigorta Hukuku düzenlemeleri uyarınca zararın teminatı sigorta poliçesinden kaynaklanan alacak davaları, kazalar nedeniyle sigorta şirketlerine yahut ilgili sorumlulara karşı açılan tazminat davalarında tarafların temsili, sigortalı ve sigorta ettiren ile sigorta şirketleri arasında doğabilecek her türlü hukuki uyuşmazlıklar, mesleki mesuliyet sigortasıyla ilgili tüm uyuşmazlıklar, maluliyetin belirlenmesine ilişkin davalar ve sigorta hukukundan doğan tüm anlaşmazlıklar konusunda uzman hukukçu kadrosu ile hukuki danışmanlık hizmetini vermektedir.",
    desc2: "Sigorta şirketleri kimi zaman ödeme yapmaktan kaçınmakta ya da hak edilen tazminatın çok altında teklifler sunmaktadır. Bu durumlarda tarafınızda yer alarak sigorta poliçesi şartlarını titizlikle inceliyor, haklarınızı en etkin biçimde kullanmanız için hukuki destek sağlıyoruz.",
    features: [
      "Sigorta poliçesinden kaynaklanan alacak davaları",
      "Kaza nedeniyle sigorta şirketine karşı tazminat davaları",
      "Sigortalı–sigorta ettiren–sigorta şirketi uyuşmazlıkları",
      "Mesleki mesuliyet sigortası uyuşmazlıkları",
      "Maluliyetin belirlenmesine ilişkin davalar",
      "Zorunlu trafik sigortası (ZMSS) uyuşmazlıkları",
      "Rücu ve regres davaları",
      "Güvence Hesabı başvuruları",
    ],
    process: [
      { step: "01", title: "Poliçe İncelemesi", desc: "Sigorta poliçenizi ve tazminat talebinizi hukuki açıdan kapsamlı biçimde değerlendiriyoruz." },
      { step: "02", title: "Hasar ve Maluliyet Tespiti", desc: "Bilirkişi raporları ve uzman görüşleriyle gerçek zarar ile maluliyet oranını belirliyoruz." },
      { step: "03", title: "Müzakere ve Başvuru", desc: "Sigorta şirketi veya tahkim komisyonu nezdinde uzlaşı sürecini yönetiyoruz." },
      { step: "04", title: "Dava ve Tahsil", desc: "Uzlaşı sağlanamazsa dava açarak tazminatın eksiksiz tahsilini takip ediyoruz." },
    ],
    faq: [
      { q: "Sigorta şirketi tazminat ödemeyi reddederse ne yapabilirim?", a: "Sigorta şirketine yazılı ret gerekçesini talep edin. Akabinde Sigorta Tahkim Komisyonu'na veya Asliye Ticaret Mahkemesi'ne başvurabilirsiniz." },
      { q: "Mesleki mesuliyet sigortasında uyuşmazlık çıkarsa ne yapılır?", a: "Poliçe kapsamı, sorumluluk sınırları ve ret gerekçeleri titizlikle incelenerek en uygun hukuki yol belirlenir. Ofisimiz bu alanda uzman kadrosuyla hizmet vermektedir." },
      { q: "Maluliyet davası açabilir miyim?", a: "Kaza veya meslek hastalığı sonucu maluliyet oluşmuşsa, sigorta şirketi veya ilgili sorumluya karşı tazminat davası açılabilir. Maluliyet oranının doğru belirlenmesi süreç açısından kritik önem taşır." },
      { q: "Sigorta tazminat davası ne kadar sürer?", a: "Tahkim kararları genellikle 3–6 ay içinde çıkar. Asliye Ticaret Mahkemesi'nde ise ortalama 1–2 yıl sürebilmektedir." },
    ],
    stats: [
      { label: "Sigorta Davası", value: "130+" },
      { label: "Yıllık Deneyim", value: "10+" },
      { label: "Hizmet Alanı", value: "14" },
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
    subtitle: "Alacaklı ve Borçlu Taraf İçin Etkin Hukuki Çözümler",
    heroDesc: "Ekonomik krizlerin etkisiyle zora düşen şirketlere ve alacak tahsili gerektiren kurumlara; uzman kadromuzla prosedüre uygun, hızlı ve etkin hukuki destek sağlıyoruz.",
    desc1: "Ekonomide yaşanan krizler ve dalgalanmalar faaliyet gösteren her ölçekteki ticari yapıyı olumsuz olarak etkilemekte ve ne yazık ki şirketleri ekonomik olarak sıkıntıya sürüklemektedir. Hukuk Büromuz hem alacaklı tarafa hem de borçlu tarafa yönelik süreçlerin yönetimi konusunda destek sunmaktadır.",
    desc2: "Borçlu olarak; ticari değere sahip ve bu durumunu korumak isteyen ancak ekonomik hayatta finansal zorluk içerisinde olan gerçek ve tüzel kişilerin malvarlıklarının korunması, alacaklıların talepleri karşısında somut durumun koşullarına en uygun çözümlerin belirlenmesi, ticari faaliyetin devamlılığının sağlanması için gerekli önlemlerin alınması ve yeniden yapılandırma gibi konularda Hukuk Büromuz uzman avukatları ile destek vermekte ve değer yaratmaktadır. Alacaklı olarak; kredi finans kuruluşları başta olmak üzere birçok kurumsal yapının alacaklarının tahsili ve buna bağlı çok yönlü hukuki süreçlerinin takibi Hukuk Büromuz tarafından konusunda uzman avukatları ile prosedüre uygun, etkin ve hızlı bir şekilde yapılabilmektedir.",
    features: [
      "Alacaklı taraf icra takibi başlatılması ve yönetimi",
      "Borçlu taraf malvarlığının korunması",
      "Finansal yeniden yapılandırma danışmanlığı",
      "Konkordato süreç yönetimi",
      "İtirazın iptali ve kaldırılması davaları",
      "Menfi tespit ve istirdat davaları",
      "Haciz, ipotek ve satış işlemleri",
      "Kurumsal alacak tahsili ve çok yönlü hukuki takip",
    ],
    process: [
      { step: "01", title: "Durum Tespiti", desc: "Alacaklı veya borçlu konumunuza göre hukuki durumu ve en uygun stratejiyi belirliyoruz." },
      { step: "02", title: "Süreç Başlatma", desc: "İcra takibi, konkordato başvurusu veya yeniden yapılandırma gibi ilgili hukuki süreçleri başlatıyoruz." },
      { step: "03", title: "Etkin Takip", desc: "Tüm hukuki süreçleri prosedüre uygun, hızlı ve titiz bir şekilde yönetiyoruz." },
      { step: "04", title: "Sonuçlandırma", desc: "Müvekkilimiz için en avantajlı çözümü hayata geçiriyor, süreci eksiksiz raporluyoruz." },
    ],
    faq: [
      { q: "İcra takibine itiraz ettiler, ne yapmalıyım?", a: "İtiraz tarihinden itibaren 1 yıl içinde itirazın iptali davası açmanız gerekmektedir. Bu süreyi kaçırmamak kritik önem taşır." },
      { q: "Haksız icra takibine maruz kaldım, ne yapabilirim?", a: "Ödeme emrine 7 gün içinde itiraz edebilirsiniz. Takibin haksız olduğunu ispat etmek için menfi tespit davası açabilirsiniz." },
      { q: "Şirketim finansal zorlukta, ne yapmalıyım?", a: "Konkordato ve finansal yeniden yapılandırma başta olmak üzere birçok yasal çözüm yolu mevcuttur. Hukuki danışmanlık alarak durumunuza en uygun yolu ve ticari faaliyetin devamlılığını birlikte değerlendirelim." },
      { q: "Kurumsal alacaklarımı nasıl tahsil edebilirim?", a: "Kredi ve finans kuruluşlarından bireysel alacaklılara kadar tüm kurumsal alacak tahsil süreçleri; ilgili belgeler incelenerek, prosedüre uygun ve etkin biçimde Hukuk Büromuz tarafından takip edilmektedir." },
    ],
    stats: [
      { label: "İcra Dosyası", value: "400+" },
      { label: "Kurumsal Müvekkil", value: "50+" },
      { label: "Yıllık Deneyim", value: "10+" },
    ],
  },

  "marka-ve-patent-hukuku": {
    title: "Marka ve Patent Hukuku",
    subtitle: "Fikri Mülkiyet Haklarınızın Güvencesi",
    heroDesc: "Marka, Patent, Endüstriyel Tasarım, Faydalı Model ve Coğrafi İşaret tescil ve itiraz süreçlerinde TÜRKPATENT Siciline kayıtlı vekillerimizle yanınızdayız.",
    desc1: "Fikri Mülkiyet Hukuku; Sınai Haklar ve Fikri Haklar başlığı altında iki ayrı gruba ayrılmaktadır. Sınai Haklar başlığı altında Marka, Patent, Endüstriyel Tasarım, Faydalı Model ve Coğrafi İşaretler bulunmaktadır. Marka, Patent, Endüstriyel Tasarım, Faydalı Model ve Coğrafi İşaret tescil hizmetleri Türk Patent ve Marka Kurumu Siciline kayıtlı vekillerimiz tarafından yapılmaktadır.",
    desc2: "Türk Patent ve Marka Kurumu nezdinde; Marka, Patent, Endüstriyel Tasarım, Faydalı Model ve Coğrafi İşarete ilişkin tescil ve itiraz süreçleri başta olmak üzere gerekli tüm işlemler, Türk Patent ve Marka Kurumu Siciline kayıtlı hukukçu vekillerimiz tarafından yapılmaktadır. Uluslararası tescil süreçlerinde de Madrid Protokolü kapsamında etkin hizmet sunulmaktadır.",
    features: [
      "Marka tescil başvurusu ve itiraz süreçleri",
      "Patent ve faydalı model tescil başvuruları",
      "Endüstriyel tasarım tescili",
      "Coğrafi işaret tescili",
      "TÜRKPATENT nezdinde tüm sicil işlemleri",
      "Marka hükümsüzlük ve iptal davaları",
      "Marka ihlali ve taklit ürün davaları",
      "Uluslararası tescil (Madrid Protokolü)",
    ],
    process: [
      { step: "01", title: "Ön Araştırma", desc: "Başvuru öncesi benzer marka, patent ve tasarım araştırmaları yapıyoruz." },
      { step: "02", title: "Başvuru Hazırlığı", desc: "TÜRKPATENT Siciline kayıtlı vekillerimizce gerekli belgeler hazırlanarak başvuru yapılıyor." },
      { step: "03", title: "Süreç Takibi", desc: "Tescil süreci, olası itirazlar ve kurum yazışmaları titizlikle takip ediliyor." },
      { step: "04", title: "Tescil ve Koruma", desc: "Tescil sonrası ihlallere karşı hukuki koruma aktif biçimde sürdürülüyor." },
    ],
    faq: [
      { q: "Marka tescili ne kadar sürer?", a: "TÜRKPATENT'e başvurudan tescile kadar genellikle 12-18 ay sürmektedir. İtiraz olmaksızın yaklaşık 12 ay içinde sonuçlanabilir." },
      { q: "TÜRKPATENT Siciline kayıtlı vekil zorunlu mu?", a: "Tescil başvuruları ve itiraz süreçlerinde sicile kayıtlı vekil ile çalışmak süreci güvenli, eksiksiz ve hızlı yürütmek açısından kritik önem taşır. Ofisimiz bu konuda tam yetkili vekil kadrosuna sahiptir." },
      { q: "Markam ihlal edilirse ne yapabilirim?", a: "İhlal tespiti halinde ihtiyati tedbir kararı, tazminat davası ve cezai şikayet yollarına başvurabilirsiniz. Hukuki danışmanlık alarak en etkin yolu birlikte belirleyebiliriz." },
      { q: "Uluslararası marka tescili nasıl yapılır?", a: "Madrid Protokolü kapsamında TÜRKPATENT üzerinden uluslararası başvuru yapılabilir. Hedef ülkeler belirlenerek süreç vekilimizce yönetilir." },
    ],
    stats: [
      { label: "Tescil Edilen Marka", value: "90+" },
      { label: "Patent Başvurusu", value: "30+" },
      { label: "Yıllık Deneyim", value: "10+" },
    ],
  },

  "saglik-hukuku": {
    title: "Sağlık Hukuku",
    subtitle: "Hasta Hakları ve Tıbbi Sorumlulukta Uzman Hukuki Destek",
    heroDesc: "Hatalı tıbbi müdahaleden gizlilik ihlallerine, özel hastane sorumluluğundan hasta haklarına kadar Sağlık Hukuku'nun tüm alanlarında yanınızdayız.",
    desc1: "Sağlık Hukuku, bireylerin sağlık hizmetlerinden faydalanırken yasalarla düzenlenmiş haklarını koruyan ve sağlık hizmeti sağlayanların yükümlülüklerini belirleyen hukuk dalıdır. Hatalı tıbbi müdahale, bilgilendirme yapılmadan uygulanan tedaviler, yanlış ilaç kullanımı, rıza alınmadan yapılan müdahaleler ve gizlilik ihlali gibi durumlarda hastaların hak arayışı Sağlık Hukuku'nun alanı çerçevesinde gerçekleşir.",
    desc2: "Tıbbi müdahaleden kaynaklanan zararların ispatı teknik bilgiyi gerektirebilmektedir. Bu nedenle hukuk büromuz alanında tecrübeli avukatlar ile dava aşaması öncesinde ve dava aşamasında delillerin toplanmasında ve hukuki stratejinin oluşturulmasında destek sağlamaktadır. Sağlık Hukuku; sadece bireysel müdahale hataları dışında aynı zamanda özel hastanelerin kurumsal yükümlülüklerini de içermektedir. Bu kapsamda kişilere ve kurumlara alanında uzman hukukçularımız ile danışmanlık hizmeti sağlamaktayız.",
    features: [
      "Hatalı tıbbi müdahale ve malpraktis davaları",
      "Rıza alınmadan yapılan müdahalelerden doğan tazminat",
      "Bilgilendirme yükümlülüğünün ihlali",
      "Yanlış ilaç kullanımı ve yanlış tanı davaları",
      "Gizlilik ihlali şikayetleri",
      "Özel hastanelerin kurumsal yükümlülük uyuşmazlıkları",
      "Delil toplama ve hukuki strateji oluşturma desteği",
      "Bireysel ve kurumsal sağlık hukuku danışmanlığı",
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
    subtitle: "Tüketici ve Hizmet Sağlayıcılarına İki Yönlü Hukuki Destek",
    heroDesc: "Ayıplı malın iadesi ve cayma hakkından firmaların yükümlülük uyumuna kadar Tüketici Hukuku'nun tüm alanlarında uzman kadromuzla yanınızdayız.",
    desc1: "Hukuk büromuz tüketicinin korunması kuralları çerçevesinde, ayıplı malın iadesi, cayma hakkı kullanılması, bedel indirimi konularında tüketicilere hukuki destek vermektedir. Ortaya çıkan uyuşmazlıkların çözümü için uzman avukatları ile tecrübe ve bilgi birikimi ile destek sağlamaktadır.",
    desc2: "Ayrıca hizmet ve ürün sağlayıcılarının da Tüketici Hukuku kapsamında haklarını ve yükümlülüklerini yerine getirmesi, idari, mali ve cezai yaptırımlarla karşılaşmamaları için çok önemlidir. Hukuk büromuz, tüketici ile ilişkinin kurulması anından itibaren hukuki düzenlemelere uygun şekilde firmaların hareket etmelerini sağlayarak hizmet ve ürün sağlayıcılarına da uzman avukat kadrosu ile hukuki destek sağlayarak değer yaratmaktadır.",
    features: [
      "Ayıplı malın iadesi ve bedel indirimi talepleri",
      "Cayma hakkı kullanılması ve sözleşme iptali",
      "Tüketici hakem heyeti başvuruları",
      "Tüketici mahkemesinde dava takibi",
      "Hizmet ve ürün sağlayıcılarına yükümlülük danışmanlığı",
      "İdari, mali ve cezai yaptırımlardan korunma",
      "E-ticaret ve mesafeli satış uyuşmazlıkları",
      "Abonelik ve devre tatil sözleşmesi uyuşmazlıkları",
    ],
    process: [
      { step: "01", title: "Hak Değerlendirmesi", desc: "Tüketici sıfatınız, talebiniz veya firmanızın yükümlülük durumu hukuki açıdan inceleniyor." },
      { step: "02", title: "Hakem Heyeti / Müzakere", desc: "Belirlenen limit dahilinde hakem heyetine başvuruluyor ya da karşılıklı uzlaşı sağlanıyor." },
      { step: "03", title: "Tüketici Mahkemesi", desc: "Limiti aşan veya itiraz edilen durumlarda tüketici mahkemesinde dava takip ediliyor." },
      { step: "04", title: "Karar Uygulaması", desc: "Karar sonrası uygulama ve bilgilendirme süreçleri eksiksiz yönetiliyor." },
    ],
    faq: [
      { q: "Ayıplı mal aldım, hangi haklarım var?", a: "Ücretsiz onarım, misli ile değişim, bedel indirimi veya iade haklarına sahipsiniz. Başvuru süreleri ürüne göre değişmektedir; hukuki danışmanlık almanızı öneririz." },
      { q: "Cayma hakkımı nasıl kullanabilirim?", a: "Mesafeli satış sözleşmelerinde teslimden itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin cayma hakkı kullanılabilir." },
      { q: "Firmalar hangi yaptırımlarla karşılaşabilir?", a: "Tüketici mevzuatına aykırı uygulamalarda idari para cezası, sözleşme iptali ve tazminat yükümlülüğü doğabilir. Uyum danışmanlığı için hukuki destek almanız önerilir." },
      { q: "Tüketici hakem heyeti kararına itiraz edilebilir mi?", a: "Evet. Kararın tebliğinden itibaren 15 gün içinde tüketici mahkemesine itiraz hakkı bulunmaktadır." },
    ],
    stats: [
      { label: "Hakem Heyeti Başvurusu", value: "160+" },
      { label: "Tüketici Davası", value: "90+" },
      { label: "Yıllık Deneyim", value: "10+" },
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

  "kisisel-verilerin-korunmasi-hukuku": {
    title: "Kişisel Verilerin Korunması Hukuku",
    subtitle: "KVKK Uyum ve Veri Güvenliği Danışmanlığı",
    heroDesc: "6698 sayılı KVKK kapsamında şirketlerin veri işleme süreçlerini mevzuata uygun şekilde yapılandırıyor; hukuki riskleri minimize ediyoruz.",
    desc1: "Dijitalleşen dünyada kişisel verilerin korunması, bireyler ve şirketler açısından her geçen gün daha kritik hale gelmektedir. Büromuz; 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında şirketlerin veri işleme süreçlerinin mevzuata uygun şekilde yapılandırılması, hukuki risklerin minimize edilmesi ve sürdürülebilir uyum süreçlerinin oluşturulması konularında kapsamlı danışmanlık hizmeti sunmaktadır.",
    desc2: "Güncel teknoloji ve iş dünyasının ihtiyaçlarını yakından takip eden ekibimiz, yalnızca mevzuata uyum sağlamayı değil; aynı zamanda müvekkillerimizin kurumsal güvenilirliğini ve veri güvenliği standartlarını güçlendirmeyi hedeflemektedir.",
    features: [
      "KVKK uyum süreçlerinin yürütülmesi",
      "Veri envanteri hazırlanması",
      "VERBİS süreçlerinin yönetimi",
      "Aydınlatma metinleri ve açık rıza dokümanlarının hazırlanması",
      "Çalışan ve müşteri süreçlerinin hukuki denetimi",
      "Veri ihlali durumlarında hukuki destek",
      "Kişisel veri işleme sözleşmeleri",
      "Kurumsal veri güvenliği politikalarının oluşturulması",
    ],
    process: [
      { step: "01", title: "Mevcut Durum Analizi", desc: "Şirketinizin veri işleme faaliyetleri ve mevcut uyum düzeyi kapsamlı biçimde inceleniyor." },
      { step: "02", title: "Uyum Yol Haritası", desc: "KVKK gerekliliklerine göre önceliklendirilmiş bir eylem planı hazırlanıyor." },
      { step: "03", title: "Uygulama ve Dokümantasyon", desc: "Politikalar, aydınlatma metinleri, rıza formları ve VERBİS kayıtları tamamlanıyor." },
      { step: "04", title: "Sürekli Uyum Desteği", desc: "Mevzuat değişikliklerini takip ederek uyum sürecinin sürdürülebilirliğini sağlıyoruz." },
    ],
    faq: [
      { q: "VERBİS'e kayıt zorunlu mu?", a: "Yıllık çalışan sayısı 50'den fazla olan veya ana faaliyeti özel nitelikli kişisel veri işleme olan veri sorumluları VERBİS'e kayıt yaptırmakla yükümlüdür." },
      { q: "Veri ihlalinde ne yapılmalı?", a: "Veri ihlalinin öğrenilmesinden itibaren 72 saat içinde Kişisel Verileri Koruma Kurulu'na bildirim yapılması gerekmektedir. İhlalden etkilenen kişilerin de bilgilendirilmesi zorunludur." },
      { q: "KVKK'ya aykırılığın yaptırımı nedir?", a: "İdari para cezaları, veri işlemenin durdurulması kararı ve cezai sorumluluk gibi ağır yaptırımlar söz konusu olabilir. Proaktif uyum bu riskleri ortadan kaldırır." },
      { q: "Açık rıza olmadan kişisel veri işlenebilir mi?", a: "KVKK'da açık rıza dışında da veri işlemeye imkân tanıyan sınırlı hukuki sebepler mevcuttur. Bu koşulların doğru değerlendirilmesi için hukuki danışmanlık alınması önerilir." },
    ],
    stats: [
      { label: "KVKK Danışmanlık", value: "40+" },
      { label: "Uyum Projesi", value: "30+" },
      { label: "Yıllık Deneyim", value: "10+" },
    ],
  },

  "kira-hukuku": {
    title: "Kira Hukuku",
    subtitle: "Kira Uyuşmazlıklarında Güvenilir Hukuki Destek",
    heroDesc: "Kira ilişkilerinden doğan uyuşmazlıklarda hem mal sahipleri hem de kiracılar için etkin, hızlı ve çözüm odaklı hukuki destek sunuyoruz.",
    desc1: "Kira ilişkilerinden doğan uyuşmazlıklar, hem mal sahipleri hem de kiracılar açısından ciddi hukuki ve ekonomik sonuçlar doğurabilmektedir. Büromuz; konut ve ticari kira ilişkilerine dair tüm süreçlerde müvekkillerine etkin, hızlı ve çözüm odaklı hukuki destek sunmaktadır.",
    desc2: "Bireysel ve kurumsal müvekkiller için her dosyayı stratejik bir bakış açısıyla değerlendiriyor; hukuki süreci yalnızca dava aşamasıyla sınırlı görmeyip, önleyici ve koruyucu danışmanlık yaklaşımıyla yönetiyoruz. Özellikle güncel yargı kararları ve değişen mevzuat doğrultusunda, müvekkillerimizin hak kaybı yaşamaması adına süreci titizlikle yürütmekteyiz.",
    features: [
      "Kira sözleşmelerinin hazırlanması ve incelenmesi",
      "Kira bedelinin tespiti davaları",
      "Tahliye davaları (konut ve ticari)",
      "Kira alacaklarının tahsili",
      "Kira uyarlama davaları",
      "Erken tahliye ve tazminat talepleri",
      "Kira artış uyuşmazlıklarının çözümü",
      "Depozito iade süreçleri",
    ],
    process: [
      { step: "01", title: "Sözleşme ve Durum Analizi", desc: "Kira sözleşmesi, ihtarnameler ve mevcut hukuki durum kapsamlı biçimde değerlendirilir." },
      { step: "02", title: "İhtarname Gönderilmesi", desc: "Gerekli hallerde karşı tarafa noter kanalıyla hukuki ihtarname yöneltilir." },
      { step: "03", title: "Arabuluculuk veya Dava", desc: "Uyuşmazlığın niteliğine göre arabuluculuk sürecine başvurulur ya da dava açılır." },
      { step: "04", title: "Tahsil ve İcra", desc: "Alacak veya tahliye kararı kesinleştiğinde icra takibi başlatılarak sonuç alınır." },
    ],
    faq: [
      { q: "Kiracı evi tahliye etmezse ne yapabilirim?", a: "Sözleşme süresi dolmuş ya da fesih koşulları gerçekleşmişse, noter ihtarnamesi ardından sulh hukuk mahkemesinde tahliye davası açılabilir. Kira bedelinin ödenmemesi halinde ise icra yoluyla tahliye mümkündür." },
      { q: "Kira artışı yasal sınırı aşabilir mi?", a: "Konut kiralarında yasal düzenleme kapsamında artış oranları sınırlandırılmış olup, bu oranların üzerinde yapılan artışlar geçersizdir. Ancak ticari kiralarda taraflar farklı oranlar üzerinde serbestçe anlaşabilir." },
      { q: "Kiracı erken tahliye ederse tazminat alabilir miyim?", a: "Evet. Kiracı sözleşme süresi dolmadan kira ilişkisini sona erdirirse, yeni kiracı bulunana kadar ya da sözleşme bitimine kadar kira tazminatı talep edilebilir." },
      { q: "Uyarlama davası nedir?", a: "Kira bedelinin, ekonomik koşullardaki aşırı değişim nedeniyle piyasa değerinin çok altında kalması durumunda açılan davadır. Mahkeme, sözleşmeyi piyasa şartlarına uyarlayabilir." },
    ],
    stats: [
      { label: "Tahliye Davası", value: "120+" },
      { label: "Kira Uyuşmazlığı", value: "200+" },
      { label: "Yıllık Deneyim", value: "10+" },
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
