import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Decorative Header Background */}
      <div className="pt-16 bg-gradient-to-tr from-beige-100 via-brand-pink-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink-200 rounded-full opacity-20 -translate-y-40 translate-x-40"></div>
        <div className="absolute top-12 left-20 w-24 h-24 bg-beige-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-brand-pink-200 rounded-full opacity-15 translate-y-32"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-beige-200 rounded-full opacity-25 -translate-x-24"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            יצירת קשר
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            יש לכן שאלות על הסדנאות? רוצות לשמוע עוד פרטים? אני כאן בשבילכן
            ואשמח לעזור בכל דבר!
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Send className="w-6 h-6 ml-3 text-brand-pink-600" />
                    שלחו לי הודעה
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      פרטי התקשרות
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <a
                        href="tel:0505307961"
                        className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-brand-pink-200 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-brand-pink-600" />
                      </a>
                      <div>
                        <p className="font-semibold text-gray-900">טלפון</p>
                        <a
                          href="tel:0505307961"
                          className="text-gray-600 hover:text-brand-pink-600 transition-colors"
                        >
                          050-5307961
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <a
                        href="mailto:shirazaria1@gmail.com"
                        className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-brand-pink-200 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-brand-pink-600" />
                      </a>
                      <div>
                        <p className="font-semibold text-gray-900">מייל</p>
                        <a
                          href="mailto:shirazaria1@gmail.com"
                          className="text-gray-600 hover:text-brand-pink-600 transition-colors"
                        >
                          shirazaria1@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <a
                        href="https://www.instagram.com/shirshiz_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-brand-pink-200 transition-colors"
                      >
                        <Instagram className="w-5 h-5 text-brand-pink-600" />
                      </a>
                      <div>
                        <p className="font-semibold text-gray-900">אינסטגרם</p>
                        <a
                          href="https://www.instagram.com/shirshiz_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-pink-600 hover:text-brand-pink-500 transition-colors"
                        >
                          _shirshiz@
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Location stays the same */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <MapPin className="w-5 h-5 ml-2 text-brand-pink-600" />
                      מיקום
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      הסדנאות מתקיימות בדירה שלי בבאר שבע.
                      <br />
                      המיקום המדויק יישלח עם אישור הרשמה ושריון תאריך לסדנה.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <MessageSquare className="w-8 h-8 text-brand-pink-500" />
                שאלות נפוצות
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                אספתי את כל השאלות שאתן שואלות אותי הכי הרבה - כדי שיהיה לכן הכי
                ברור ונוח
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full mt-10">
              {[
                {
                  q: "אפשר לבחור טעמים ומילויים?",
                  a: "בטח! חשוב לי שהעוגה תתאים בדיוק לטעמים שאתם אוהבים. אני כאן כדי להמליץ לכן את השילוב המושלם שיהפוך את העוגה לא רק ליפה, אלא גם לכזו שלא תוכלו להפסיק ללקק את האצבעות.",
                },
                {
                  q: "אם אני לא יצירתית, הסדנה בכל זאת מתאימה לי?",
                  a: "כן! גם בלי ניסיון קודם תצאי מהסדנה עם עוגה מהממת שעיצבת בעצמך. נעבור יחד על כל הטכניקות כדי שתרגישי בטוחה, ותצאי עם תוצאה שלא תאמיני שזו את הכנת.",
                },
                {
                  q: "האם מקבלים חוברת מתכונים והסברים להמשך בבית?",
                  a: "ברור! בסוף כל סדנה תקבלי חוברת מתכונים והסברים מפורטים, וגם בונוסים ייחודיים שיעזרו לך להמשיך ליצור בבית.",
                },
                {
                  q: "כמה זמן מראש צריך להזמין עוגה?",
                  a: "זה תלוי בעיצוב ובמועד המבוקש, אבל לרוב מומלץ לפחות שבועיים מראש כדי לשריין. כמובן שאם יש לך תאריך, דברי איתי ונראה מה אפשרי.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white border-0 shadow-md rounded-lg mb-4"
                >
                  <AccordionTrigger className="p-6 text-xl md:text-xl font-semibold text-right hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-gray-600 text-lg leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}
