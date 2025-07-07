import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  ArrowLeft,
  Send,
  Award,
  Gift,
  BookOpen,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export default function ProCourseWorkshop() {
  const scrollToContact = () => {
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  const session1 = {
    title: "מפגש 1: מארז בנטו וקאפקייקס וינטג'",
    image: "/assets/images/home/Inabl_box.jpg",
    features: [
      "הכנת קרם חמאה שוויצרי מהיסוד, כולל התמודדות עם תקלות נפוצות",
      "הכנת מילוי גנאש שוקולד לבן עשיר",
      "בנייה נכונה של עוגת בנטו וקאפקייקס",
      "טכניקות זילוף וינטג' עם מגוון צנתרים",
      "צביעת קרם ועיצוב המארז",
      "בונוס: שיעור צילום להוצאת תמונות מושלמות",
    ],
  };

  const session2 = {
    title: "מפגש 2: עוגה מעוצבת עם אלמנטים",
    image: "/assets/images/home/yuval_bearCake.jpg",
    features: [
      "טכניקות מתקדמות לעיטוף חלק של עוגה בקוטר 16",
      "יצירת אלמנטים וקישוטים מדף סוכר ואיזומלט",
      "חידוד טכניקות זילוף לפי הצורך",
      "שיחת ייעוץ: תמחור, כלים חיוניים, שיווק והתחלת הדרך העסקית",
      "מענה אישי לשאלות וליווי מקצועי",
    ],
  };

  const whatYouGet = [
    {
      icon: Gift,
      title: "כל היצירות הביתה!",
      description: "בסיום הקורס תצאי עם כל התוצרים המדהימים שהכנת לגמרי בעצמך!",
    },
    {
      icon: BookOpen,
      title: "חוברת מתכונים מפורטת",
      description: "חוברת דיגיטלית עם כל המתכונים, ההסברים והשלבים מהקורס.",
    },
    {
      icon: Award,
      title: "ידע וכלים מקצועיים",
      description:
        "תרכשי ידע וכלים שיאפשרו לך להמשיך ליצור עוגות מושלמות בבית, ולהתחיל את הדרך שלך בעולם עיצוב העוגות.",
    },
  ];

  const faqItems = [
    {
      q: "למי הקורס מתאים?",
      a: "הקורס מתאים לכל מי שמעוניינת להתמקצע בקרם חמאה שוויצרי ולהפוך את התחביב למקצוע, גם אם אין לך ניסיון קודם.",
    },
    {
      q: "מה גודל הקבוצה?",
      a: "הקורס מתקיים בקבוצות קטנות ואינטימיות של עד 3 משתתפות, כדי להבטיח יחס אישי ומענה לכל אחת.",
    },
    {
      q: "איפה הקורס מתקיים?",
      a: "הקורס מתקיים בסטודיו הביתי שלי בבאר שבע, באווירה נעימה וכיפית.",
    },
    {
      q: "האם צריך להביא ציוד מהבית?",
      a: "ממש לא! אני מספקת את כל חומרי הגלם והציוד המקצועי שצריך. את רק צריכה להגיע עם מצב רוח טוב ורצון ללמוד.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/home/yuval_bearCake.jpg"
            alt="קורס מאפס למקצוענית"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>

        <AnimateOnScroll
          animation="fade-in"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            קורס מאפס למקצוענית
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            המסלול המלא להפוך את התשוקה שלך למקצוע
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-black hover:from-brand-pink-600 hover:to-brand-pink-700 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover-lift"
          >
            אני רוצה להפוך למקצוענית
          </Button>
        </AnimateOnScroll>
      </section>

      {/* Intro Section */}
      <section className="pb-20 pt-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              מאפס למקצוענית: איך הופכים תשוקה למקור הכנסה?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              גם אם מעולם לא החזקת צנתר, הקורס הזה ייתן לך את כל היסודות, הכלים
              והסודות המקצועיים כדי להפוך את האהבה שלך לאפייה למקצוע אמיתי.
              בניתי מסלול מקיף שמוביל אותך, צעד אחר צעד, מרמת הבסיס ועד ליכולת
              ליצור עוגות מורכבות ולתמחר אותן.
            </p>
            <div className="flex justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3"
                alt="עוגה מקצועית"
                className="w-1/3 h-auto object-cover rounded-2xl shadow-lg hover-lift"
              />
              <img
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3"
                alt="עוגת יום הולדת"
                className="w-1/3 h-auto object-cover rounded-2xl shadow-lg hover-lift"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-20 h-20 md:w-12 md:h-12 text-brand-pink-500" />
              המסלול שלך להצלחה: שני מפגשים שהופכים אותך למקצוענית
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              כל מפגש הוא אבן דרך במסע שלך. אנחנו מתחילות מהיסודות הכי חשובים
              ומטפסות יחד לרמה הגבוהה ביותר של עיצוב, ביטחון וידע עסקי.
            </p>
          </AnimateOnScroll>

          <div className="space-y-12">
            {/* Session 1 */}
            <AnimateOnScroll animation="slide-up">
              <Card className="border-0 overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold text-brand-pink-600">
                        {session1.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3">
                        {session1.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={session1.image}
                      alt={session1.title}
                      className="max-h-80 w-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>

            {/* Session 2 */}
            <AnimateOnScroll animation="slide-up">
              <Card className="border-0 overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold text-brand-pink-600">
                        {session2.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3">
                        {session2.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={session2.image}
                      alt={session2.title}
                      className="max-h-80 w-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-10 bg-white">
        <AnimateOnScroll
          animation="fade-in"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-gradient-to-br from-brand-pink-50 to-beige-50 p-10 rounded-2xl shadow-lg border-2 border-brand-pink-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              נשמע כמו חלום? בואי להפוך אותו למקצוע!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              מספר המקומות מוגבל כדי להבטיח יחס אישי ומענה צמוד לכל אחת בדרך שלה
              להצלחה.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover-lift"
            >
              <Sparkles className="w-5 h-5 ml-2" />
              שרייני לי מקום בקורס
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      {/* What you get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              מה כל משתתפת מקבלת?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whatYouGet.map((item, i) => (
                <Card
                  key={i}
                  className="text-center border-0 shadow-lg p-6 hover-lift bg-beige-50"
                >
                  <item.icon className="w-12 h-12 sm:w-10 sm:h-10 text-brand-pink-500 mx-auto mb-4" />
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

      {/* FAQ Section */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <MessageSquare className="w-8 h-8 text-brand-pink-500" />
              שאלות שחשוב לדעת
            </h2>
          </AnimateOnScroll>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AnimateOnScroll key={i} animation="slide-up" delay={i * 0.1}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-white border-0 shadow-lg rounded-xl mb-4 transition-transform duration-300 hover:scale-[1.01]"
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
                  מוכנה להפוך את האהבה למקצוע?
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  השאירי פרטים לשיחת ייעוץ ללא התחייבות, בה נבין יחד אם הקורס
                  הוא הצעד הנכון עבורך. מספר המקומות מוגבל!
                </p>
                <div className="max-w-lg mx-auto">
                  <ContactForm productName="קורס מאפס למקצוענות" />
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
    </div>
  );
}
