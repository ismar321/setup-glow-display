import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  MonitorSmartphone,
  Sparkles,
  Check,
  Truck,
  Star,
  Cpu,
  Wrench,
  Award,
  AlertTriangle,
  Gamepad2,
  Palette,
  Settings2,
  ArrowLeft,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import productAnime from "@/assets/product-anime.jpg";
import productStats from "@/assets/product-stats.jpg";
import productCpu from "@/assets/product-cpu.jpg";
import productDashboard from "@/assets/product-dashboard.jpg";

const productCase = productAnime;
const productScreen = productStats;
const productSide = productCpu;

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
    className={`bg-gradient-primary text-primary-foreground hover:opacity-95 hover:scale-105 transition-all duration-300 animate-pulse-glow text-lg md:text-xl font-bold px-8 py-7 rounded-2xl ${className}`}
  >
    {children}
    <ArrowLeft className="w-5 h-5 mr-2" />
  </Button>
);

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-blue">
              <Cpu className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-black text-lg">GPU Stand Pro</span>
          </div>
          <Button onClick={scrollToOrder} className="bg-gradient-primary text-primary-foreground rounded-xl font-bold">
            اطلب الآن
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[hsl(var(--rgb-purple))]/20 blur-3xl" />

        <div className="container relative py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-right fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card">
              <Sparkles className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" />
              <span className="text-sm font-bold">جديد · إصدار محدود</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">
              خلي Setup تاعك <span className="text-gradient text-glow">Level آخر</span> 🔥
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              حامل GPU ذكي مع شاشة <span className="font-bold text-foreground">IPS 4.58"</span> تعرض معلومات جهازك مباشرة داخل الكيس
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

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <div className="flex items-baseline gap-2 px-6 py-4 rounded-2xl bg-card shadow-blue border border-primary/30">
                <span className="text-sm text-muted-foreground">السعر:</span>
                <span className="text-4xl font-black text-gradient text-glow">9800</span>
                <span className="font-bold">دج</span>
              </div>
              <CTAButton>اطلب الآن</CTAButton>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" /> توصيل لكامل الولايات</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" /> دفع عند الاستلام</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-rgb opacity-20 blur-3xl rounded-full" />
            <div className="relative rgb-border animate-float">
              <img
                src={productCase}
                alt="حامل GPU مع شاشة IPS داخل كيس Gaming"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* VIDEO PLAYER */}
        <div className="container relative pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h3 className="text-2xl md:text-3xl">
              شاهد المنتج في العمل <span>🎬</span>
            </h3>
            <div className="rounded-2xl overflow-hidden video-glow bg-card border border-border">
              <video
                src=""
                controls
                autoPlay
                muted
                loop
                playsInline
                poster={productScreen}
                className="w-full h-auto block aspect-video bg-black"
              >
                المتصفح لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-card/40">
        <div className="container max-w-5xl">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-bold text-sm border border-destructive/20">
              <AlertTriangle className="w-4 h-4" /> المشكلة
            </div>
            <h2 className="text-3xl md:text-5xl">
              كرت الشاشة <span className="text-destructive">ثقيل؟</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, t: "تخاف يتكسر كرت الشاشة بسبب وزنه؟" },
              { icon: AlertTriangle, t: "تخاف يكسر لوحة الأم؟" },
              { icon: AlertTriangle, t: "Setup تاعك ناقصو لمسة احترافية؟" },
            ].map(({ icon: Icon, t }) => (
              <Card key={t} className="p-6 bg-gradient-card border-destructive/20 shadow-card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-destructive/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <p className="text-lg font-bold leading-relaxed">{t}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="container relative max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[hsl(var(--rgb-cyan))] font-bold text-sm border border-primary/20">
            <Sparkles className="w-4 h-4" /> الحل
          </div>
          <h2 className="text-3xl md:text-5xl leading-tight">
            هذا الحامل <span className="text-muted-foreground line-through">مش غير دعم</span> <br />
            هذا <span className="text-gradient text-glow">Upgrade كامل</span> للـ Setup تاعك
          </h2>
          <p className="text-lg text-muted-foreground leading-loose max-w-3xl mx-auto">
            يحمي كرت الشاشة واللوحة الأم من الاعوجاج والكسر بسبب الوزن، ومعاه شاشة 4.5 إنش سريعة الاستجابة تعطيك عرض مباشر وأنيق.
            تقدر تعدل على الخلفيات وتصنعها بسهولة. تصميم قابل للتعديل، سهل التركيب، يزيد لمسة احترافية وزينة لجهازك.
          </p>
          <div className="rgb-border max-w-2xl mx-auto">
            <img src={productScreen} alt="شاشة IPS تعرض شخصية أنمي وإحصائيات CPU و GPU" className="rounded-2xl w-full" />
          </div>
          <div className="pt-4">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl md:text-5xl">المميزات اللي راح تعجبك</h2>
            <p className="text-muted-foreground text-lg">كل تفصيل مدروس باش يعطيك أحسن تجربة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-blue group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE GALLERY */}
      <section className="py-20 bg-card/40">
        <div className="container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl">شوف الجمالية بعينيك</h2>
            <p className="text-muted-foreground text-lg">شاشة Anime + إحصائيات Live داخل الكيس</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-3xl shadow-card border border-border">
              <img src={productScreen} alt="شاشة الحامل تعرض إحصائيات الجهاز" className="w-full h-full object-cover zoom-img" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-card border border-border">
              <img src={productSide} alt="منظر جانبي للحامل داخل الكيس" className="w-full h-full object-cover zoom-img" />
            </div>
            <div className="md:col-span-2 overflow-hidden rounded-3xl shadow-glow border border-border">
              <img src={productCase} alt="إعداد PC كامل مع الحامل" className="w-full object-cover zoom-img" />
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton>اطلب الآن وحوّل Setup تاعك</CTAButton>
          </div>
        </div>
      </section>

      {/* VMAX SOFTWARE */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-8 space-y-3">
            <h2 className="text-2xl md:text-4xl">
              تحكم كامل مع برنامج VMAX <Gamepad2 className="inline w-7 h-7 text-[hsl(var(--rgb-cyan))]" />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Settings2, t: "خفيف وسهل الاستخدام" },
              { icon: Palette, t: "حمّل ثيمات من Painter أو صممها بنفسك" },
              { icon: MonitorSmartphone, t: "تحكم كامل في ما تعرضه الشاشة" },
            ].map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-card border border-border shadow-card"
              >
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[hsl(var(--rgb-cyan))]" />
                </span>
                <span className="font-bold">{t}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[productScreen, productSide, productCase].map((img, i) => (
              <div key={i} className="aspect-video rounded-xl overflow-hidden border border-border shadow-card opacity-90">
                <img src={img} alt={`لقطة من برنامج VMAX ${i + 1}`} className="w-full h-full object-cover zoom-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-card/40">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl">علاش تختاره؟</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Wrench, t: "تركيب سهل بدون أدوات" },
              { icon: Cpu, t: "متوافق مع أغلب الكيسات" },
              { icon: Award, t: "جودة تصنيع عالية" },
              { icon: Sparkles, t: "تصميم أنيق ومميز" },
            ].map(({ icon: Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">{t}</span>
                <Check className="w-5 h-5 text-[hsl(var(--rgb-cyan))] mr-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl">آراء العملاء</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[hsl(var(--rgb-cyan))] text-[hsl(var(--rgb-cyan))]" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "أحمد", c: "الجزائر العاصمة", r: "زاد عطالي شكل PC كامل 🔥 من أحسن ما شريت" },
              { n: "يوسف", c: "وهران", r: "الشاشة حاجة خرافية، تعرض كل شيء بشكل احترافي" },
              { n: "كريم", c: "قسنطينة", r: "منتج يستاهل السعر، التركيب سهل والجودة ممتازة" },
            ].map((rev) => (
              <Card key={rev.n} className="p-8 bg-gradient-card shadow-card border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(var(--rgb-cyan))] text-[hsl(var(--rgb-cyan))]" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-lg">"{rev.r}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-blue">
                    {rev.n[0]}
                  </div>
                  <div>
                    <div className="font-bold leading-tight">{rev.n}</div>
                    <div className="text-xs text-muted-foreground">{rev.c}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE / OFFER */}
      <section id="order" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-3xl rounded-full" />
        <div className="container relative max-w-3xl">
          <Card className="rgb-border p-8 md:p-12 bg-card text-center shadow-glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm mb-6 shadow-blue">
              <Sparkles className="w-4 h-4" /> عرض خاص
            </div>
            <h2 className="text-3xl md:text-5xl mb-4">احصل عليه الآن</h2>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-6xl md:text-7xl font-black text-gradient text-glow">9800</span>
              <span className="text-2xl font-bold">دج</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
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
              className="space-y-4 text-right"
              onSubmit={(e) => {
                e.preventDefault();
                alert("شكراً! راح نتصلو بيك قريب لتأكيد الطلبية.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="الاسم الكامل"
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-right"
                />
                <input
                  required
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-right"
                />
              </div>
              <input
                required
                placeholder="الولاية / العنوان"
                className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-right"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-95 shadow-glow text-xl font-black py-7 rounded-2xl animate-pulse-glow"
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
