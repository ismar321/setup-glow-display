import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { wilayas } from "@/data/algeria";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import {
  Shield,
  Sparkles,
  Check,
  Truck,
  Cpu,
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  Ruler,
  Wrench,
  Usb,
} from "lucide-react";
import productAnime from "@/assets/product-anime.jpg";
import productStats from "@/assets/product-stats.jpg";
import productCpu from "@/assets/product-cpu.jpg";
import productDashboard from "@/assets/product-dashboard.jpg";
import productCase from "@/assets/product-case.png";
import productScreen from "@/assets/product-screen.png";
import productSide from "@/assets/product-side.png";
import productDimensions from "@/assets/product-dimensions.png";
import themesDashboards from "@/assets/themes-dashboards.png";
import themesAnime from "@/assets/themes-anime.png";
import themesPiky from "@/assets/themes-piky.png";
import themesEye from "@/assets/themes-eye.png";
import dimCnc from "@/assets/dim-cnc.jpg";
import dimSize from "@/assets/dim-size.jpg";
import dimAccessories from "@/assets/dim-accessories.jpg";

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
    { src: productCase, alt: "حامل GPU داخل كيس PC أبيض" },
    { src: productScreen, alt: "شاشة IPS مدمجة في الحامل" },
    { src: productSide, alt: "منظر جانبي للحامل" },
    { src: productAnime, alt: "شاشة الحامل تعرض شخصية أنمي" },
    { src: productStats, alt: "شاشة تعرض إحصائيات الجهاز ووقت" },
    { src: productCpu, alt: "شاشة تعرض استهلاك CPU" },
    { src: productDashboard, alt: "شاشة Dashboard أنيقة" },
  ];
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const navigate = useNavigate();
  const [wilayaCode, setWilayaCode] = useState<string>("");
  const [commune, setCommune] = useState<string>("");
  const [color, setColor] = useState<"أبيض" | "أسود">("أسود");
  const communes = useMemo(
    () => wilayas.find((w) => w.code === wilayaCode)?.communes ?? [],
    [wilayaCode],
  );

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);
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

        <div className="container relative py-10 sm:py-14 md:py-20 px-4 grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-right fade-in lg:col-span-2">
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

          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-rgb opacity-20 blur-3xl rounded-full" />
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "center", loop: true, direction: "rtl" }}
              plugins={[autoplay.current]}
              className="relative w-full max-w-md sm:max-w-xl lg:max-w-none mx-auto"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {galleryImages.map((img, i) => (
                  <CarouselItem key={img.src} className="pl-2 sm:pl-4 basis-full">
                    <button
                      type="button"
                      onClick={() => setZoomIndex(i)}
                      className="group relative block w-full overflow-hidden rounded-2xl rgb-border focus:outline-none"
                      aria-label="تكبير الصورة"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={i === 0 ? "high" : "low"}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 60vw"
                        className="rounded-2xl w-full aspect-[4/3] lg:aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-110 bg-muted"
                      />
                      <span className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-bold">
                        <ZoomIn className="w-3.5 h-3.5 text-[hsl(var(--rgb-cyan))]" /> تكبير
                      </span>
                      <span dir="ltr" className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/40 text-xs font-black text-[hsl(var(--rgb-cyan))] tabular-nums">
                        {i + 1} / {galleryImages.length}
                      </span>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -right-4 left-auto" />
              <CarouselNext className="hidden sm:flex -left-4 right-auto" />
            </Carousel>

            {/* Slide indicator dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`اذهب إلى الصورة ${i + 1}`}
                  onClick={() => carouselApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === i
                      ? "w-8 bg-gradient-primary shadow-blue"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION (single section) */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative max-w-7xl px-4">
          {/* Row 1: Solution (left) + Problem (right) */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Solution column */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[hsl(var(--rgb-cyan))] font-bold text-sm border border-primary/20">
                <Sparkles className="w-4 h-4" /> الحل
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                <span className="text-gradient text-glow">Upgrade كامل</span> للـ Setup
              </h2>
              <div className="space-y-3">
                {[
                  "يحمي كرت الشاشة من الانحناء والكسر",
                  "يثبت اللوحة الأم ويوزع الوزن مزيان",
                  "تصميم RGB يعطي Setup احترافي ومميز",
                ].map((t) => (
                  <Card
                    key={t}
                    className="p-4 sm:p-5 bg-gradient-card border-primary/30 shadow-card flex items-center gap-3 hover:shadow-glow transition-all duration-500"
                  >
                    <span className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </span>
                    <p className="text-sm sm:text-base font-bold leading-relaxed">{t}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Problem column */}
            <div className="space-y-5">
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
                  <Card
                    key={t}
                    className="p-4 sm:p-5 bg-gradient-card border-destructive/20 shadow-card flex items-center gap-3"
                  >
                    <span className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </span>
                    <p className="text-sm sm:text-base font-bold leading-relaxed">{t}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Centered large video */}
          <div className="mt-8 sm:mt-10 mx-auto w-full" style={{ maxWidth: "900px" }}>
            <div className="rounded-2xl overflow-hidden video-glow bg-card border border-border rgb-border">
              <video
                src=""
                controls
                autoPlay
                muted
                loop
                playsInline
                poster={productDashboard}
                className="w-full h-auto block bg-black"
                style={{ minHeight: "500px" }}
              >
                المتصفح لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>

          <div className="text-center pt-10">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* VMAX SOFTWARE */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-[hsl(222_50%_5%)]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[hsl(var(--rgb-purple))]/20 blur-3xl" />
        <div className="absolute -top-10 left-1/4 w-80 h-80 rounded-full bg-[hsl(var(--rgb-cyan))]/15 blur-3xl" />
        <div className="container relative max-w-6xl px-4">
          <div className="text-center mb-12 sm:mb-14 space-y-5">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(222_50%_9%)] border border-primary/40 shadow-blue">
              <Sparkles className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" />
              <span className="text-sm font-black tracking-wide">برنامج VMAX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              تحكم كامل في <span className="text-gradient text-glow">الثيمات</span>
              <br className="hidden sm:block" /> ببرنامج <span className="text-gradient">VMAX</span>
            </h2>
            <p className="text-foreground/80 text-base sm:text-xl max-w-3xl mx-auto leading-loose">
              برنامج <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-primary/40 font-black text-foreground">VMAX</span>
              خفيف وغير متطلب على الجهاز، يخليك تبدّل
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-[hsl(var(--rgb-cyan))]/40 font-black text-[hsl(var(--rgb-cyan))]">الثيمات</span>
              ، تحط
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-primary/40 font-black text-foreground">صور</span>
              ،
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-primary/40 font-black text-foreground">GIF</span>
              ،
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-[hsl(var(--rgb-purple))]/50 font-black text-[hsl(var(--rgb-purple))]">أنمي</span>
              ، أو
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-primary/40 font-black text-foreground">إحصائيات الجهاز</span>
              بكل سهولة — اصنع
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-[hsl(var(--rgb-cyan))]/40 font-black text-[hsl(var(--rgb-cyan))]">ثيم</span>
              على حساب
              <span className="px-2 py-0.5 mx-1 rounded-md bg-[hsl(222_50%_10%)] border border-[hsl(var(--rgb-purple))]/50 font-black text-[hsl(var(--rgb-purple))]">مزاجك</span>
              🔥
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {[
              { src: themesDashboards, alt: "ثيمات Dashboard لإحصائيات الجهاز" },
              { src: themesAnime, alt: "ثيمات أنمي متنوعة" },
              { src: themesPiky, alt: "ثيم بيكاتشو وشخصيات أنمي" },
              { src: themesEye, alt: "ثيم عين أنمي حمراء" },
            ].map((img) => (
              <div key={img.src} className="group rgb-border overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full aspect-[3/4] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 bg-muted"
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-10 sm:pt-12">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* DIMENSIONS & INSTALLATION */}
      <section className="py-14 sm:py-20 bg-card/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl">
              الأبعاد و <span className="text-gradient text-glow">طريقة التركيب</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              تصميم مدروس باش يدخل في أغلب الكيسات بسهولة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="rgb-border">
              <img
                src={productDimensions}
                alt="أبعاد الحامل وطريقة التركيب — ارتفاع 13.2 سم"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 90vw, 32rem"
                className="rounded-2xl w-full bg-muted"
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Ruler,
                  title: "ارتفاع 13 سم فقط",
                  desc: "حجم مدروس يدخل في أغلب الكيسات بدون أي مشكل",
                },
                {
                  icon: Wrench,
                  title: "تركيب فوق مراوح الكيس",
                  desc: "تقدر تركبو فوق مراوح الكيس عادي وتزيرو، فيه قاعدة عريضة تثبتو مزيان",
                },
                {
                  icon: Usb,
                  title: "USB 2.0 9-pin Header",
                  desc: "يتركب مباشرة في لوحة الأم عبر منفذ USB 2.0 9-pin header",
                },
                {
                  icon: Cpu,
                  title: "كابل امتداد USB",
                  desc: "يجي معاه كابل امتداد USB Port في حالة ما عندكش منفذ متاح",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <Card
                  key={title}
                  className="p-4 sm:p-5 bg-gradient-card border-border shadow-card flex items-start gap-4 hover:shadow-glow transition-all duration-500"
                >
                  <span className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Illustrative gallery — uniform sizing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
            {[
              { src: dimCnc, alt: "هيكل ألمنيوم CNC مقاوم للخدوش" },
              { src: dimSize, alt: "أبعاد المنتج بالتفصيل — 130mm × 128mm" },
              { src: dimAccessories, alt: "محتويات العلبة والإكسسوارات" },
            ].map((img) => (
              <div key={img.src} className="group rgb-border overflow-hidden">
                <div className="aspect-[4/5] w-full bg-background rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

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
