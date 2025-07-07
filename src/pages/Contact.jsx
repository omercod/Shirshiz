import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

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

        <div className="relative">
          <AnimateOnScroll
            animation="fade-in"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              יצירת קשר
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              יש לכן שאלות על הסדנאות? רוצות לשמוע עוד פרטים? אני כאן בשבילכן
              ואשמח לעזור בכל דבר!
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll animation="slide-up">
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
            </AnimateOnScroll>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimateOnScroll animation="slide-up" delay={0.1}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      פרטי התקשרות
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-brand-pink-600" />
                      </div>
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

                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-brand-pink-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">מייל</p>
                        <p className="text-gray-600">shirazaria1@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-5 h-5 text-brand-pink-600" />
                      </div>
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
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.3}>
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
              </AnimateOnScroll>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <AnimateOnScroll
              animation="slide-up"
              as="h2"
              className="text-3xl font-bold text-brand-pink-600 text-center mb-12"
            >
              שאלות נפוצות
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimateOnScroll animation="slide-up" delay={0.1}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      אפשר לבחור טעמים ומילויים?
                    </h3>
                    <p className="text-gray-600">
                      בטח! חשוב לי שהעוגה תתאים בדיוק לטעמים שאתם אוהבים. אני
                      כאן כדי להמליץ לכם את השילוב המושלם שיהפוך את העוגה לא רק
                      ליפה, אלא גם לכזו שלא תוכלו להפסיק ללקק את האצבעות.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.2}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      אם אני לא יצירתית – הסדנה בכל זאת מתאימה לי?
                    </h3>
                    <p className="text-gray-600">
                      כן! חשוב לי להדגיש שכל מי שמגיעה אליי לסדנה, גם מי שללא
                      ניסיון, יוצאת עם עוגה שהיא עיצבה לגמרי בעצמה! אנחנו
                      מתעמקות על כל הטכניקות כדי שתתמקצעו ותצאו עם עוגה שלא
                      תאמינו שהכנתן!
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.3}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      האם מקבלים חוברת מתכונים והסברים שנוכל להמשיך להכין בבית?
                    </h3>
                    <p className="text-gray-600">
                      כמובן! בסיום הסדנאות אתן יוצאות עם חוברת מתכונים והסברים
                      ועם עוגה שעיצבתן בעצמכן, ובנוסף לזה בכל סדנה יש בונוסים
                      ייחודיים ושווים!
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-up" delay={0}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      כמה זמן מראש צריך להזמין עוגה?
                    </h3>
                    <p className="text-gray-600">
                      זה מאוד תלוי בעיצוב ובגודל העוגה, בדרך כלל ממליצה שבועיים
                      מראש אבל כמה שיותר מוקדם יותר טוב.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
