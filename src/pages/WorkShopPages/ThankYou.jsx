import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Heart,
  Calendar,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ThankYou() {
  // Get workshop name from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const workshopName = urlParams.get("workshop") || "הסדנה";

  // Workshop-specific content
  const getWorkshopContent = (workshop) => {
    switch (workshop) {
      case "pro-course":
        return {
          title: 'תודה על ההרשמה לקורס "מאפס למקצוענית"!',
          subtitle: "המסע שלך להפוך למקצוענית בעיצוב עוגות מתחיל כאן",
          description:
            "הקורס הפרימיום שלי יעניק לך את כל הכלים והידע הדרושים כדי להפוך את התשוקה שלך לעוגות למקצוע אמיתי.",
          nextSteps: [
            "אחזור אליך תוך 72 שעות לאישור המקום",
            "תקבלי SMS עם פרטי המיקום והזמן המדויק",
            "נשלח לך רשימת הדברים שכדאי להביא (אם בכלל)",
            "נקבע שיחת ייעוץ קצרה לפני הקורס",
          ],
          image:
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6bd4a4177_IMG_9556-600x790.jpeg",
        };
      case "vintage-cake":
        return {
          title: "תודה על ההרשמה לסדנת עוגות וינטג'!",
          subtitle: "מוכנה ליצור את עוגת החלומות שלך?",
          description:
            "בסדנה הזו תלמדי את כל הטכניקות ליצירת עוגות וינטג' מרשימות עם קרם חמאה שוויצרי מושלם.",
          nextSteps: [
            "אחזור אליך תוך 72 שעות לאישור המקום",
            "תקבלי הודעה עם פרטי המיקום והזמן",
            "כל הציוד וחומרי הגלם מסופקים על ידי",
            "מוכנה לחוויה מתוקה ויצירתית!",
          ],
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3",
        };
      default:
        return {
          title: `תודה שפנית אליי!`,
          subtitle: "שמחתי לקבל את הפנייה שלך",
          description:
            "אני מאוד מעריכה את הזמן שהקדשת כדי ליצור איתי קשר. אני מבטיחה לקרוא בעיון את ההודעה שלך ולחזור אלייך בהקדם האפשרי.",
          nextSteps: [
            "אחזור אליך תוך 72 שעות",
            "אם מדובר בהרשמה — נשלח את כל הפרטים הרלוונטיים",
            "אם יש צורך, נקבע שיחת ייעוץ קצרה",
            "ובינתיים, את מוזמנת להמשיך ולהתרשם מהאתר ומהגלריה",
          ],
          image:
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b1c9656b6_shir_profile.jpg",
        };
    }
  };

  const content = getWorkshopContent(workshopName);

  return (
    <div className="min-h-screen">
      {/* Background */}
      <div className="bg-gradient-to-br from-brand-pink-100 via-white to-beige-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink-200 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-beige-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-brand-pink-200 rounded-full opacity-15 translate-y-32"></div>

        <div className="relative pb-20 pt-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Success Icon */}
            <AnimateOnScroll animation="zoom-in" className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </AnimateOnScroll>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <AnimateOnScroll animation="slide-up">
                <div className="text-center lg:text-right">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {content.title}
                  </h1>
                  <p className="text-xl text-brand-pink-600 mb-6 font-medium">
                    {content.subtitle}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {content.description}
                  </p>

                  {/* Personal Message */}
                  <Card className="bg-gradient-to-l from-brand-pink-50 to-beige-50 border-brand-pink-200 mb-8">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Heart className="w-6 h-6 text-brand-pink-500 mt-1 flex-shrink-0" />
                        <div className="text-right">
                          <p className="text-gray-700 italic">
                            אני כל כך מתרגשת שהחלטת להצטרף אליי! הסדנאות שלי הם
                            לא רק על טכניקות - זה על יצירת חוויה, בניית ביטחון
                            עצמי והרבה כיף. אני מבטיחה לך שתיצאי משם עם ידע,
                            עוגה מושלמת ותחושה של גאווה עצמית!
                          </p>
                          <p className="text-brand-pink-600 font-semibold mt-2">
                            - שיר ❤️
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimateOnScroll>

              {/* Image */}
              <AnimateOnScroll animation="zoom-in" delay={0.2}>
                <div className="relative">
                  <img
                    src={content.image}
                    alt="שיר עזריה"
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-pink-200 to-beige-300 rounded-full opacity-70"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-beige-200 to-brand-pink-200 rounded-full opacity-80"></div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <Calendar className="w-7 h-7 text-brand-pink-500" />
              מה קורה עכשיו?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.nextSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-brand-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              יש לך שאלות? אני כאן בשבילך!
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-pink-600" />
                <span className="text-gray-700">050-5307961</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-pink-600" />
                <span className="text-gray-700">shirazaria1@gmail.com</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8">
              בינתיים, אני מזמינה אותך לעקוב אחרי בדפי הרשתות החברתיות שלי
              ולראות עוד מהעבודות והסדנאות שלי
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={createPageUrl("Gallery")}>
                <Button className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-6">
                  צפי בגלריה
                </Button>
              </Link>
              <Link to={createPageUrl("Recipes")}>
                <Button
                  variant="outline"
                  className="border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50 rounded-full px-6"
                >
                  המתכונים שלי
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-brand-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to={createPageUrl("Home")}>
            <Button
              variant="outline"
              className="border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50 rounded-full px-6"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזרה לעמוד הבית
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
