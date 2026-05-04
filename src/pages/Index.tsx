import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  MonitorSmartphone,
  Sparkles,
  Check,
  Truck,
  Star,
  Zap,
  Cpu,
  Wrench,
  Award,
} from "lucide-react";
import productCase from "@/assets/product-case.png";
import productScreen from "@/assets/product-screen.png";
import productSide from "@/assets/product-side.png";

const scrollToOrder = () => {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
};

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <Button
    onClick={scrollToOrder}
    size="lg"
    className={`bg-gradient-primary text-primary-foreground hover:opacity-95 hover:scale-105 transition-all duration-300 shadow-glow text-lg md:text-xl font-bold px-8 py-7 rounded-2xl ${className}`}
  >
    {children}
  </Button>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
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
      <section className="relative overflow-hidden bg-gradient-hero grid-bg">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[hsl(var(--rgb-purple))]/20 blur-3xl" />

        <div className="container relative py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold">جديد · إصدار محدود</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">
              خلي Setup تاعك <span className="text-gradient">Level آخر</span> 🔥
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              حامل GPU ذكي مع شاشة <span className="font-bold text-foreground">IPS 4.58"</span> تعرض معلومات جهازك مباشرة داخل الكيس
            </p>

            <ul className="space-y-3 max-w-xl mx-auto lg:mx-0">
              {[
                "يحمي كرت الشاشة من الانحناء",
                'شاشة "4.58 لعرض الحرارة و الأداء',
                "تصميم Gaming احترافي",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="text-base md:text-lg font-medium">{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <div className="flex items-baseline gap-2 px-5 py-3 rounded-2xl bg-card shadow-card border border-border">
                <span className="text-sm text-muted-foreground">السعر:</span>
                <span className="text-3xl font-black text-gradient">9800</span>
                <span className="font-bold">دج</span>
              </div>
              <CTAButton>اطلب الآن</CTAButton>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-primary" /> توصيل لكامل الولايات</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> دفع عند الاستلام</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-rgb opacity-20 blur-3xl rounded-full" />
            <div className="relative rgb-border animate-float">
              <img
                src={productCase}
                alt="حامل GPU مع شاشة IPS داخل كيس Gaming أبيض"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-card">
        <div className="container max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-bold text-sm">
            <Zap className="w-4 h-4" /> المشكلة
          </div>
          <h2 className="text-3xl md:text-5xl">
            كرت الشاشة ثقيل؟ <br className="md:hidden" />
            <span className="text-destructive">تخاف يتقوس؟</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Setup تاعك ناقصو لمسة احترافية ويحس عادي قدام الـ Setups الكبار؟
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="container relative max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
            <Sparkles className="w-4 h-4" /> الحل
          </div>
          <h2 className="text-3xl md:text-5xl leading-tight">
            هذا الحامل <span className="text-muted-foreground line-through">مش غير دعم</span>… <br />
            هذا <span className="text-gradient">Upgrade كامل</span> للـ Setup تاعك
          </h2>
          <div className="rgb-border max-w-2xl mx-auto">
            <img src={productScreen} alt="شاشة IPS تعرض شخصية أنمي وإحصائيات CPU و GPU" className="rounded-2xl w-full" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl md:text-5xl">المميزات اللي راح تعجبك</h2>
            <p className="text-muted-foreground text-lg">كل تفصيل مدروس باش يعطيك أحسن تجربة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "حماية قوية", desc: "يحافظ على كرت الشاشة مستقيم وآمن من الانحناء" },
              { icon: MonitorSmartphone, title: "شاشة ذكية", desc: "تعرض CPU / GPU / الحرارة / الوقت بشكل مباشر" },
              { icon: Sparkles, title: "جمال خرافي", desc: "يعطي شكل Premium داخل الكيس مع إضاءة ناعمة" },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
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
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl">شوف الجمالية بعينيك</h2>
            <p className="text-muted-foreground text-lg">شاشة Anime + إحصائيات Live داخل الكيس</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-3xl shadow-card group">
              <img src={productScreen} alt="شاشة الحامل تعرض إحصائيات الجهاز" className="w-full h-full object-cover zoom-img" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-card group">
              <img src={productSide} alt="منظر جانبي للحامل داخل الكيس" className="w-full h-full object-cover zoom-img" />
            </div>
            <div className="md:col-span-2 overflow-hidden rounded-3xl shadow-rgb group">
              <img src={productCase} alt="إعداد PC كامل مع الحامل" className="w-full object-cover zoom-img" />
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton>اطلب الآن وحوّل Setup تاعك</CTAButton>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl">علاش تختاره؟</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Wrench, t: "تركيب سهل", d: "تركبو في دقائق بدون أدوات معقدة" },
              { icon: Cpu, t: "متوافق مع أغلب الكيسات", d: "يخدم مع معظم Cases الـ ATX و Mid-Tower" },
              { icon: Award, t: "جودة تصنيع عالية", d: "مواد متينة وتشطيب احترافي" },
              { icon: Sparkles, t: "تصميم أنيق", d: "أبيض نظيف يدمج مع أي ستايل Setup" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-6 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{t}</h3>
                  <p className="text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl">آراء العملاء</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "ياسين . ب", r: "زاد عطالي شكل PC كامل 🔥 صراحة كل واحد يجي يشوفو يبقى مبهور!" },
              { n: "أمين . ك", r: "الشاشة حاجة خرافية، تعرض كل شي بوضوح وفي ذوق." },
              { n: "وليد . ح", r: "منتج يستاهل السعر، التغليف ممتاز والتركيب جا في دقائق." },
            ].map((rev) => (
              <Card key={rev.n} className="p-8 bg-card shadow-card border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-lg">"{rev.r}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {rev.n[0]}
                  </div>
                  <span className="font-bold">{rev.n}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE / OFFER + FORM */}
      <section id="order" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative max-w-3xl">
          <Card className="rgb-border p-8 md:p-12 bg-card text-center shadow-rgb">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm mb-6">
              <Sparkles className="w-4 h-4" /> عرض خاص
            </div>
            <h2 className="text-3xl md:text-5xl mb-4">احصل عليه الآن</h2>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="text-6xl md:text-7xl font-black text-gradient">9800</span>
              <span className="text-2xl font-bold">دج</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 flex items-center justify-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              الدفع عند الاستلام متوفر · توصيل لكل الولايات
            </p>

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
                اطلب الآن وطور Setup تاعك 🔥
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-card border-t border-border">
        <div className="container text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
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
