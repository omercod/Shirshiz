
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin, Clock, Send } from "lucide-react";
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
        
        <div className="relative py-20">
          <AnimateOnScroll animation="fade-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              יצירת קשר
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              יש לכן שאלות על הסדנאות? רוצות לשמוע עוד פרטים? 
              אני כאן בשבילכן ואשמח לעזור בכל דבר!
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
                        <p className="text-gray-600">054-123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-brand-pink-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">מייל</p>
                        <p className="text-gray-600">shir@shirshiz.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-5 h-5 text-brand-pink-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">אינסטגרם</p>
                        <a href="#" className="text-brand-pink-600 hover:text-brand-pink-500 transition-colors">
                          @shirshiz_cakes
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="slide-up" delay={0.2}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 ml-2 text-brand-pink-600" />
                      שעות פעילות
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">ראשון - חמישי</span>
                        <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">שישי</span>
                        <span className="font-semibold text-gray-900">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">שבת</span>
                        <span className="text-gray-500">סגור</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-brand-pink-50 rounded-lg">
                      <p className="text-sm text-brand-pink-600">
                        הסדנאות מתקיימות גם בערבים ובסופי שבוע לפי תיאום מראש
                      </p>
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
                      הסדנאות מתקיימות בסטודיו הפרטי שלי במרכז הארץ. 
                      המיקום המדויק יישלח עם אישור ההרשמה.
                    </p>
                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-8 h-8 mx-auto mb-2" />
                        <p>מפה תוצג כאן</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <AnimateOnScroll animation="slide-up" as="h2" className="text-3xl font-bold text-gray-900 text-center mb-12">
              שאלות נפוצות
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimateOnScroll animation="slide-up" delay={0}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      כמה זמן אורכת כל סדנה?
                    </h3>
                    <p className="text-gray-600">
                      אורך הסדנה משתנה בהתאם לנושא - בין 3 ל-8 שעות. 
                      הפרטים המדויקים מופיעים בתיאור כל סדנה.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.1}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      האם צריך ניסיון קודם?
                    </h3>
                    <p className="text-gray-600">
                      לא בהכרח! יש לי סדנאות לכל הרמות - ממתחילות מוחלטות 
                      ועד מתקדמות. כל סדנה מסומנת ברמת הקושי שלה.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="slide-up" delay={0.2}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      מה כלול במחיר הסדנה?
                    </h3>
                    <p className="text-gray-600">
                      כל החומרים, כלי העבודה, הדרכה אישית, 
                      ובסוף הסדנה אתן לוקחות הביתה את מה שיצרתן!
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.3}>
                <Card className="border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      איך מבטלים הרשמה?
                    </h3>
                    <p className="text-gray-600">
                      ביטול עד 48 שעות לפני הסדנה - החזר מלא. 
                      ביטול בפחות מ-48 שעות - החזר של 50%.
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
