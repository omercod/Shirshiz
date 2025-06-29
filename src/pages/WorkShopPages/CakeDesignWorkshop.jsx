import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Users,
  MapPin,
  Calendar,
  Heart,
  CheckCircle,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export default function CakeDesignWorkshop() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "שרה לוי",
      details: "גיל 30, תל אביב",
      text: "הסדנה הייתה מדהימה! למדתי טכניקות שחלמתי עליהן והעוגה שיצאה הייתה מושלמת",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "מיכל כהן",
      details: "גיל 27, רמת גן",
      text: "שיר מסבירה בצורה כל כך ברורה ויש לה סבלנות אין סופית. יצאתי עם ביטחון מלא!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "רונית אברהם",
      details: "גיל 29, הרצליה",
      text: "אחרי הסדנה אני מכינה עוגות מקצועיות בבית! התוצאות מדברות בעד עצמן",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const features = [
    "טכניקות עבודה עם קרם חמאה שוויצרי",
    "בניית עוגה יציבה ומרשימה",
    "עיטוף חלק ומדויק",
    "זילופים שיקפיצו כל עוגה לרמה גבוהה",
    "ליווי אישי באווירה אינטימית ונעימה",
    "סדנת בנטו קייקס (Bento Cakes)",
    "עיצוב אישי לפי בחירתכן",
    "טכניקות קישוט מינימליסטיות",
  ];

  const faqItems = [
    {
      question: "מה כלול במחיר הסדנה?",
      answer:
        "הסדנה כוללת את כל החומרים האיכותיים, כלי העבודה המקצועיים, הדרכה אישית צמודה, וכמובן - העוגה שתכינו תלך איתכן הביתה! בנוסף תקבלו מתכונים דיגיטליים ומדריך עם כל הטכניקות שלמדתן.",
    },
    {
      question: "האם צריך ניסיון קודם בקונדיטוריה?",
      answer:
        "בכלל לא! הסדנה מיועדת לכל הרמות - ממתחילות מוחלטות ועד מי שיש לה כבר קצת ניסיון. אני מתאימה את ההסבר והקצב לכל משתתפת, ומקפידה שכולן יבינו ויצליחו.",
    },
    {
      question: "כמה זמן אורכת הסדנה ומתי היא מתקיימת?",
      answer:
        "הסדנה אורכת בין 4-6 שעות, תלוי בקצב של הקבוצה ובמורכבות העיצובים שנבחר ליצור. הסדנאות מתקיימות בסופי שבוע ולפעמים גם בערבי חול, תמיד בתיאום מראש עם המשתתפות.",
    },
    {
      question: "מה קורה אם אני צריכה לבטל את ההשתתפות?",
      answer:
        "אני מבינה שלפעמים משהו דחוף קורה! ביטול עד 48 שעות לפני הסדנה - תקבלו החזר מלא. ביטול פחות מ-48 שעות לפני - החזר של 50%. במקרים חריגים (כמו מחלה) אני תמיד מנסה למצוא פתרון.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6bd4a4177_IMG_9556-600x790.jpeg"
            alt="סדנת עיצוב עוגות"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <AnimateOnScroll
          animation="fade-in"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <Badge className="bg-brand-pink-500 text-white mb-6 text-lg px-6 py-2">
            הסדנה הפופולרית ביותר
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            סדנת עיצוב עוגות
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            סדנת אפייה מקיפה – כלים, טכניקות וסודות מהמטבח המקצועי
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact-form")}
              className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg  hover-lift transition-all duration-300"
            >
              הרשמה לסדנה
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("faq-section")}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 rounded-full px-8 py-4 text-lg font-semibold"
            >
              שאלות ותשובות
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-brand-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ברוכות הבאות לעולם הקסום
              <span className="block text-brand-pink-600">של עיצוב עוגות!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              רוצות ללמוד איך להכין עוגות שנראות כמו בפינטרסט? הצטרפו לסדנאות
              עיצוב העוגות שלי!
            </p>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-brand-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    מה מחכה לכן בסדנאות שלי?
                  </h3>
                </div>

                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-pink-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="zoom-in" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="עוגה מעוצבת"
                  className="rounded-2xl shadow-lg hover-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b57?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="קישוט עוגה"
                  className="rounded-2xl shadow-lg hover-lift mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="פרחי בצק סוכר"
                  className="rounded-2xl shadow-lg hover-lift -mt-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="קרמים וממרחים"
                  className="rounded-2xl shadow-lg hover-lift mt-4"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה מיוחד בסדנאות שלי?
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll animation="slide-up" delay={0}>
              <Card className="text-center border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-brand-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    קבוצה אינטימית
                  </h3>
                  <p className="text-gray-600">
                    אווירה חמה ואישית עד 3 משתתפות
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={0.1}>
              <Card className="text-center border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-brand-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    עוגה הביתה
                  </h3>
                  <p className="text-gray-600">
                    כל משתתפת יוצאת עם עוגה שהכינה בעצמה!
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={0.2}>
              <Card className="text-center border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <Star className="w-12 h-12 text-brand-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    לכל הרמות
                  </h3>
                  <p className="text-gray-600">
                    מתאים למתחילות ולמי שיש ניסיון
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={0.3}>
              <Card className="text-center border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-brand-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    חומרים איכותיים
                  </h3>
                  <p className="text-gray-600">הדרכה צמודה וטיפים מקצועיים</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Workshop Info */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  פרטי הסדנה
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-brand-pink-500" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          משך הסדנה
                        </h3>
                        <p className="text-gray-600">4-6 שעות של כיף מתוק</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Users className="w-6 h-6 text-brand-pink-500" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          גודל הקבוצה
                        </h3>
                        <p className="text-gray-600">עד 3 משתתפות</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-brand-pink-500" />
                      <div>
                        <h3 className="font-semibold text-gray-900">מיקום</h3>
                        <p className="text-gray-600">באר שבע</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Calendar className="w-6 h-6 text-brand-pink-500" />
                      <div>
                        <h3 className="font-semibold text-gray-900">מועדים</h3>
                        <p className="text-gray-600">מועדים קרובים זמינים</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה אומרות הבוגרות
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-up"
                delay={index * 0.1}
              >
                <Card className="h-full hover-lift border-0 shadow-lg overflow-hidden bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.details}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 leading-relaxed mb-6 text-center">
                      {testimonial.text}
                    </p>
                    <div className="w-full h-48 rounded-lg shadow-md overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt="עוגה מהסדנה"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 bg-brand-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              שאלות ותשובות
            </h2>
            <p className="text-lg text-gray-600">הכל מה שרציתן לדעת על הסדנה</p>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-up"
                delay={index * 0.1}
              >
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors p-6"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-brand-pink-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-pink-500" />
                      )}
                    </div>
                  </CardHeader>
                  {openFAQ === index && (
                    <CardContent className="pt-0 pb-6 px-6">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center flex items-center justify-center">
                  <Send className="w-8 h-8 ml-3 text-brand-pink-500" />
                  מוכנות להצטרף?
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  השאירו פרטים ואחזור אליכן עם כל המידע על המועדים הקרובים
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 bg-brand-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to={createPageUrl("Workshops")}>
            <Button
              variant="outline"
              className="border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50 rounded-full px-6"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזרה לכל הסדנאות
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
