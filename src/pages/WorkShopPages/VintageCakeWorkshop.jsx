import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  ArrowLeft,
  Send,
  Camera,
  Sparkles,
  MessageSquare,
  X,
  Cake,
  BookOpenText,
  FileText,
  ZoomInIcon,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export default function VintageCakeWorkshop() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToContact = () => {
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  const features = {
    theory: [
      "דגשים לאפיית העוגה בצורה נכונה כדי שתהיה יציבה, אוורירית וטעימה",
      "פריסת העוגה בצורה מדויקת",
      "הכנת קרם חמאה שוויצרי מהיסוד, כולל למידת התרחישים שעלולים לקרות בדרך",
      "הכנת מילויים לעוגה",
      "בניית עוגה קוטר 16 בצורה ישרה ויציבה",
    ],
    practical: [
      "עיטוף העוגה בצורה חלקה ומקצועית",
      "סוגי זילוף: עבודה עם צנתרים שונים",
      "טכניקות זילוף וינטג' עם מגוון צנתרים",
      "צביעת הקרם חמאה",
      "קישוט העוגה",
    ],
  };

  const whatYouGet = [
    {
      icon: Cake,
      title: "עוגה מושלמת מעשה ידיכן",
      description: "בסוף היום, אתן יוצאות עם עוגה מרשימה שהכנתן לגמרי לבד!",
    },
    {
      icon: BookOpenText,
      title: "ידע וכלים להמשך הדרך",
      description:
        "תקבלו את כל הכלים והביטחון להמשיך ליצור עוגות כאלה גם בבית.",
    },
    {
      icon: FileText,
      title: "חוברת מתכונים והסברים",
      description: "חוברת שתקבלי מתחילת הסדנה, עם כל הדגשים והשלבים מהקורס",
    },
    {
      icon: Camera,
      title: "שיעור צילום ",
      description: "נלמד איך נכון לצלם את העוגה, מבחינת תאורה וזוויות",
    },
  ];

  const testimonials = [
    {
      name: "תמר",
      text: "הייתי בסדנה של שיר המהממת, בהתחלה כזה היה יותר קשה ולא היה לי ביטחון אבל עכשיו אני עם ביטחון עצום וזה כזה מזה כיף ויותר קל עכשיו, באמת שכדאי לכם, ממליצה מאוד!",
      rating: 5,
      image: "/assets/images/home/tamar_review.jpg",
    },
    {
      name: "דאנה ארובס",
      text: "הייתה סדנה מושלמת!!!!!! והעוגה יצאה כל כך יפה וטעימה ובאה בול בשביל להרשים את כל המשפחה אחרי ארוחת שישי 🥰🥰🥰🥰🥰",
      rating: 5,
      image: "/assets/images/home/dana_review.jpg",
    },
  ];

  const faqItems = [
    {
      q: "למי הסדנה מתאימה?",
      a: "הסדנה מתאימה לכל הרמות - גם למתחילות שרוצות ללמוד את הבסיס וגם למי שכבר יש לה ניסיון ורוצה להתמקצע בקרם חמאה שוויצרי וזילופי וינטג'.",
    },
    {
      q: "מה גודל הקבוצה?",
      a: "הסדנאות מתקיימות בקבוצות קטנות ואינטימיות של עד 2 משתתפות, כדי להבטיח יחס אישי ומענה לכל אחת.",
    },
    {
      q: "כמה זמן אורכת הסדנה?",
      a: "הסדנה אורכת בין 4 ל-6 שעות, במהלכן נספיק ללמוד, ליצור וליהנות באווירה כיפית ורגועה.",
    },
    {
      q: "האם צריך להביא ציוד מהבית?",
      a: "ממש לא! אני מספקת את כל חומרי הגלם והציוד המקצועי שצריך. אתן רק צריכות להגיע עם מצב רוח טוב ורצון ללמוד.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/gallery/pinkVin.jpg"
            alt="סדנת עוגות וינטג'"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        <AnimateOnScroll
          animation="fade-in"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            סדנת עוגות וינטג&apos;
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            כל הסודות ליצירת עוגות מרשימות בקרם חמאה שוויצרי
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover-lift"
          >
            אני רוצה להירשם
          </Button>
        </AnimateOnScroll>
      </section>

      {/* Workshop Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                תמיד חלמת להכין עוגות שנראות כמו בפינטרסט?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                בסדנת הוינטג&apos; שלי תקבלי את כל הכלים, הביטחון והידע כדי
                להפוך את החלום למציאות. ביום אחד בלבד תלמדי ליצור, לעצב ולהתאהב
                בעולם העוגות, באווירה נעימה ועם ליווי צמוד שיוציא ממך את המיטב.
              </p>
              <div className="flex flex-wrap gap-4 text-center">
                <div className="flex-1 space-y-1 bg-brand-pink-50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-brand-pink-500 mx-auto" />
                  <p className="font-semibold text-gray-900">4-6 שעות</p>
                </div>
                <div className="flex-1 space-y-1 bg-brand-pink-50 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-brand-pink-500 mx-auto" />
                  <p className="font-semibold text-gray-900">עד 2 משתתפות</p>
                </div>
                <div className="flex-1 space-y-1 bg-brand-pink-50 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-pink-500 mx-auto" />
                  <p className="font-semibold text-gray-900">באר שבע</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll
              animation="zoom-in"
              className="relative aspect-video rounded-2xl shadow-lg overflow-hidden"
            >
              <video
                autoPlay
                muted
                playsInline
                controls
                preload="metadata"
                poster="/assets/images/home/tamar_review.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              >
                <source
                  src="/assets/videos/workShopVideo.mp4"
                  type="video/mp4"
                />
                הדפדפן שלך לא תומך בצפייה בוידאו.
              </video>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-20 h-20 md:w-12 md:h-12 text-brand-pink-500" />
              מה מחכה לך בסדנה?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              הסדנה משלבת חלק עיוני ומעשי, כדי שתצאי עם כל הידע, הביטחון והכלים
              להתחיל ליצור עוגות מרשימות בעצמך.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="slide-up">
              <Card className="h-full border-0 shadow-lg p-6">
                <CardTitle className="mb-4 text-2xl font-bold text-brand-pink-600">
                  חלק עיוני
                </CardTitle>
                <ul className="space-y-3">
                  {features.theory.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={0.1}>
              <Card className="h-full border-0 shadow-lg p-6">
                <CardTitle className="mb-4 text-2xl font-bold text-brand-pink-600">
                  חלק מעשי
                </CardTitle>
                <ul className="space-y-3">
                  {features.practical.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <AnimateOnScroll animation="slide-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            טעימה מהסדנה
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
          {[
            "/assets/images/home/tamar_review.jpg",
            "/assets/images/workShops/vinWorkShop.jpg",
            "/assets/images/workShops/vinwork1.jpg",
            "/assets/images/workShops/vinwork2.jpg",
          ].map((img, idx) => (
            <AnimateOnScroll
              key={idx}
              animation="zoom-in"
              delay={idx * 0.1}
              className="relative rounded-xl shadow-lg overflow-hidden group hover-lift"
            >
              <img
                src={img}
                className="object-cover w-full h-36 sm:h-48 md:h-56 transition-transform duration-300 group-hover:scale-105"
                alt=""
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="
            max-h-[50vh] 
            max-w-sm 
            mx-4 my-8 
            rounded-xl shadow-xl
            sm:max-h-[60vh] sm:max-w-md
            md:max-h-[80vh] md:max-w-3xl
          "
            alt=""
          />
        </div>
      )}

      {/* What you get Section */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              מה כל משתתפת כמוך מקבלת?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whatYouGet.map((item, i) => (
                <Card
                  key={i}
                  className="text-center border-0 shadow-md p-6 hover-lift"
                >
                  <item.icon className="w-12 h-12 text-brand-pink-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              נשמע כמו חלום? בואי להפוך אותו למציאות!
            </h3>
            <p className="text-gray-600 mb-8">
              מספר המקומות מוגבל כדי להבטיח יחס אישי לכל אחת.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover-lift"
            >
              <Sparkles className="w-5 h-5 ml-2" />
              שרייני לי מקום בסדנה
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              בוגרות מספרות
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimateOnScroll key={i} animation="slide-up" delay={i * 0.1}>
                <Card className="h-full border-0 shadow-lg p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <p className="font-semibold text-gray-900">
                      - {testimonial.name}
                    </p>
                  </div>
                  {testimonial.image && (
                    <div className="mt-4">
                      <img
                        src={testimonial.image}
                        alt={`עוגה של ${testimonial.name}`}
                        className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setLightboxImage(testimonial.image)}
                      />
                    </div>
                  )}
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <MessageSquare className="w-8 h-8 text-brand-pink-500" />
              שאלות נפוצות
            </h2>
          </AnimateOnScroll>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AnimateOnScroll key={i} animation="slide-up" delay={i * 0.1}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-white border-0 shadow-md rounded-lg mb-3"
                >
                  <AccordionTrigger className="p-6 text-xl md:text-xl font-semibold text-right hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-gray-600 text-lg leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </AnimateOnScroll>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-brand-pink-100 to-beige-100">
              <div className="p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <Send className="w-20 h-20 md:w-12 md:h-12 ml-3 text-brand-pink-600" />
                  מוכנה ליצור את עוגת החלומות שלך?
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  היום הזה יכול לשנות לך את כל התפיסה על עוגות! שרייני מקום
                  בסדנה הקרובה ותגלי כמה קל זה להכין עוגה שתרשים את כולם.
                </p>
                <div className="max-w-lg mx-auto">
                  <ContactForm productName="סדנת עוגות וינטאג'" />
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 bg-white">
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

      {/* Lightbox for Testimonial Images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="תמונה מוגדלת"
            className="max-w-full max-h-[90vh] object-contain rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </Button>
        </div>
      )}
    </div>
  );
}
