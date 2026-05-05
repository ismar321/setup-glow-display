import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import {
  Shield,
  MonitorSmartphone,
  Sparkles,
  Check,
  Truck,
  Star,
  Cpu,
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  Palette,
  Settings2,
  Gamepad2,
} from "lucide-react";
import productAnime from "@/assets/product-anime.jpg";
import productStats from "@/assets/product-stats.jpg";
import productCpu from "@/assets/product-cpu.jpg";
import productDashboard from "@/assets/product-dashboard.jpg";

const scrollToOrder = () => {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
};

const CTAButton = ({
  children = "اطلب الآن",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <Button
    onClick={scrollToOrder}
    size="lg"
    className={`bg-gradient-primary text-primary-foreground hover:opacity-95 hover:scale-105 transition-all duration-300 animate-pulse-glow text-base sm:text-lg md:text-xl font-bold px-6 sm:px-8 py-6 sm:py-7 rounded-2xl w-full sm:w-auto ${className}`}
  >
    {children}
    <ArrowLeft className="w-5 h-5 mr-2" />
  </Button>
);

const Index = () => {
  const galleryImages = [
    { src: productAnime, alt: "شاشة الحامل تعرض شخصية أنمي" },
    { src: productStats, alt: "شاشة تعرض إحصائيات الجهاز ووقت" },
    { src: productCpu, alt: "شاشة تعرض استهلاك CPU" },
    { src: productDashboard, alt: "شاشة Dashboard أنيقة" },
  ];
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between py-3 sm:py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-blue">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <span className="font-black text-base sm:text-lg">GPU Stand Pro</span>
          </div>
          <Button onClick={scrollToOrder} size="sm" className="bg-gradient-primary text-primary-foreground rounded-xl font-bold text-xs sm:text-sm">
            اطلب الآن
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[hsl(var(--rgb-purple))]/20 blur-3xl" />

        <div className="container relative py-10 sm:py-14 md:py-20 px-4 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-right fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card">
              <Sparkles className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" />
              <span className="text-sm font-bold">جديد · إصدار محدود</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
              خلي Setup تاعك <span className="text-gradient text-glow">Level آخر</span> 🔥
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
              حامل GPU ذكي مع شاشة <span className="text-gradient">IPS 4.58"</span> تعرض معلومات جهازك مباشرة داخل الكيس
            </p>

            <ul className="space-y-3 max-w-xl mx-auto lg:mx-0">
              {[
                "يحمي كرت الشاشة من الانحناء وكسر اللوحة الأم",
                'شاشة "4.58 للحرارة، الأداء، ثيمات، GIF، فيديوهات',
                "تصميم Gaming احترافي يزيد جمالية Setup",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 justify-center lg:justify-start text-right">
                  <span className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="text-base md:text-lg font-medium">{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <div className="flex items-baseline gap-2 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl bg-card shadow-blue border border-primary/30">
                <span className="text-sm text-muted-foreground">السعر:</span>
                <span className="text-3xl sm:text-4xl font-black text-gradient text-glow">9800</span>
                <span className="font-bold">دج</span>
              </div>
              <CTAButton>اطلب الآن</CTAButton>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" /> توصيل لكامل الولايات</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" /> دفع عند الاستلام</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-rgb opacity-20 blur-3xl rounded-full" />
            <div className="relative rgb-border animate-float">
              <img
                src={productAnime}
                alt="حامل GPU مع شاشة IPS داخل كيس Gaming"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION (single section) */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">
            {/* Problem */}
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-bold text-sm border border-destructive/20">
                <AlertTriangle className="w-4 h-4" /> المشكلة
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                كرت الشاشة <span className="text-destructive">ثقيل؟</span>
              </h2>
              <div className="space-y-3">
                {[
                  "تخاف يتكسر كرت الشاشة بسبب وزنه؟",
                  "تخاف يكسر لوحة الأم؟",
                  "Setup تاعك ناقصو لمسة احترافية؟",
                ].map((t) => (
                  <Card key={t} className="p-4 sm:p-5 bg-gradient-card border-destructive/20 shadow-card flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </span>
                    <p className="text-sm sm:text-base font-bold leading-relaxed">{t}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[hsl(var(--rgb-cyan))] font-bold text-sm border border-primary/20">
                <Sparkles className="w-4 h-4" /> الحل
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                <span className="text-gradient text-glow">Upgrade كامل</span> للـ Setup تاعك
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-loose">
                يحمي كرت الشاشة واللوحة الأم من الاعوجاج والكسر بسبب الوزن، ومعاه شاشة 4.58" سريعة الاستجابة تعطيك عرض مباشر وأنيق.
                تصميم قابل للتعديل، سهل التركيب، ويزيد لمسة احترافية لجهازك.
              </p>
              <div className="rgb-border">
                <img src={productStats} alt="شاشة IPS تعرض إحصائيات CPU و GPU" className="rounded-2xl w-full" />
              </div>
            </div>
          </div>

          <div className="text-center pt-10">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* VIDEO + VMAX SOFTWARE INTRO */}
      <section className="py-12 sm:py-20 bg-card/40">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-6 sm:mb-8 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl">
              شوف الحل بعينيك مع برنامج <span className="text-gradient text-glow">VMAX</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              فيديو شرح بسيط للمنتج + برنامج <span className="font-bold text-foreground">VMAX</span> اللي يساعدك تتحكم في الثيمات بكل سهولة
              <span className="block text-sm text-[hsl(var(--rgb-cyan))] font-bold mt-1">
                ⚡ خفيف وغير متطلب على الجهاز
              </span>
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden video-glow bg-card border border-border mb-6">
            <video
              src=""
              controls
              autoPlay
              muted
              loop
              playsInline
              poster={productDashboard}
              className="w-full h-auto block aspect-video bg-black"
            >
              المتصفح لا يدعم تشغيل الفيديو.
            </video>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Settings2, t: "خفيف وسهل الاستخدام" },
              { icon: Palette, t: "ثيمات جاهزة أو صممها بنفسك" },
              { icon: Gamepad2, t: "تحكم كامل في العرض" },
            ].map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-gradient-card border border-border shadow-card"
              >
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[hsl(var(--rgb-cyan))]" />
                </span>
                <span className="font-bold text-sm sm:text-base">{t}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* FEATURES + GALLERY (merged) */}
      <section className="py-14 sm:py-20">
        <div className="container px-4">
          <div className="text-center mb-10 sm:mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl">المميزات + شوف الجمالية بعينيك</h2>
            <p className="text-muted-foreground text-base sm:text-lg">كل تفصيل مدروس باش يعطيك أحسن تجربة</p>
          </div>

          {/* Features cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {[
              {
                icon: Shield,
                title: "حماية قوية",
                desc: "يحافظ على كرت الشاشة مستقيم وآمن، ويمنع كسر اللوحة الأم",
              },
              {
                icon: MonitorSmartphone,
                title: 'شاشة ذكية "4.58',
                desc: "تعرض CPU / GPU / الحرارة / الوقت / ثيمات مخصصة / GIF / فيديوهات قصيرة",
              },
              {
                icon: Star,
                title: "جمال خرافي",
                desc: "يعطي شكل Premium داخل الكيس مع إضاءة RGB",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="p-6 sm:p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 sm:mb-5 shadow-blue group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{desc}</p>
              </Card>
            ))}
          </div>

          {/* Gallery Carousel */}
          <Carousel
            opts={{ align: "center", loop: true, direction: "rtl" }}
            className="w-full max-w-4xl mx-auto px-2 sm:px-8"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {galleryImages.map((img, i) => (
                <CarouselItem key={img.src} className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/2">
                  <button
                    type="button"
                    onClick={() => setZoomIndex(i)}
                    className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-card border border-border aspect-square focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="تكبير الصورة"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-bold opacity-90 group-hover:opacity-100">
                      <ZoomIn className="w-3.5 h-3.5 text-[hsl(var(--rgb-cyan))]" /> تكبير
                    </span>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -right-4 left-auto" />
            <CarouselNext className="hidden sm:flex -left-4 right-auto" />
          </Carousel>

          {/* Zoom Dialog */}
          <Dialog open={zoomIndex !== null} onOpenChange={(o) => !o && setZoomIndex(null)}>
            <DialogContent className="max-w-3xl p-0 bg-card border-border overflow-hidden">
              {zoomIndex !== null && (
                <div className="relative">
                  <img
                    src={galleryImages[zoomIndex].src}
                    alt={galleryImages[zoomIndex].alt}
                    className="w-full h-auto max-h-[85vh] object-contain bg-black"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>


          <div className="text-center mt-10 sm:mt-12">
            <CTAButton>اطلب الآن وحوّل Setup تاعك</CTAButton>
          </div>
        </div>
      </section>

      {/* PRICE / OFFER */}
      <section id="order" className="py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-3xl rounded-full" />
        <div className="container relative max-w-3xl px-4">
          <Card className="rgb-border p-6 sm:p-8 md:p-12 bg-card text-center shadow-glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm mb-5 sm:mb-6 shadow-blue">
              <Sparkles className="w-4 h-4" /> عرض خاص
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl mb-4">احصل عليه الآن</h2>
            <div className="flex items-baseline justify-center gap-2 mb-6 sm:mb-8">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-gradient text-glow">9800</span>
              <span className="text-xl sm:text-2xl font-bold">دج</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {[
                { icon: CreditCard, t: "دفع عند الاستلام" },
                { icon: Truck, t: "توصيل لكل الجزائر" },
                { icon: ShieldCheck, t: "ضمان الجودة" },
              ].map(({ icon: Icon, t }) => (
                <div
                  key={t}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-background/50 border border-border"
                >
                  <Icon className="w-5 h-5 text-[hsl(var(--rgb-cyan))]" />
                  <span className="text-sm font-bold">{t}</span>
                </div>
              ))}
            </div>

            <form
              className="space-y-3 sm:space-y-4 text-right"
              onSubmit={(e) => {
                e.preventDefault();
                alert("شكراً! راح نتصلو بيك قريب لتأكيد الطلبية.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  required
                  placeholder="الاسم الكامل"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-right"
                />
                <input
                  required
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-right"
                />
              </div>
              <input
                required
                placeholder="الولاية / العنوان"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-right"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-95 shadow-glow text-base sm:text-xl font-black py-6 sm:py-7 rounded-2xl animate-pulse-glow"
              >
                اطلب الآن وطور Setup تاعك 🚀
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-blue">
              <Cpu className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-black">GPU Stand Pro</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 جميع الحقوق محفوظة · صُمم لعشاق Gaming</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
