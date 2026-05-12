import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, PhoneCall } from "lucide-react";

const ThankYou = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-10">
      <Card className="rgb-border max-w-xl w-full p-8 sm:p-12 text-center bg-card shadow-glow space-y-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-blue animate-pulse-glow">
          <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black">
          تم استلام طلبك <span className="text-gradient text-glow">بنجاح</span> 🎉
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          شكراً على ثقتك! فريقنا راح يتصل بيك في أقرب وقت لتأكيد الطلبية وتفاصيل التوصيل.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-foreground/80 bg-background/50 border border-border rounded-xl py-3 px-4">
          <PhoneCall className="w-4 h-4 text-[hsl(var(--rgb-cyan))]" />
          <span>تأكد من أن هاتفك متاح للمكالمة</span>
        </div>
        <Link to="/">
          <Button size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-95 rounded-2xl font-bold text-base sm:text-lg py-6">
            العودة للصفحة الرئيسية
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ThankYou;
