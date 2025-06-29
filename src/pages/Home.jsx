import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Star,
  ArrowLeft,
  ChefHat,
  Mail,
  Cake,
  Send,
  Video,
  Gift,
  Users,
  ZoomInIcon,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function Home() {
  const testimonials = [
    {
      name: "תמר",
      details: "באר שבע",
      text: "הייתי בקורס של שיר המהממת, בהתחלה כזה היה יותר קשה ולא היה לי ביטחון אבל עכשיו אני עם ביטחון עצום וזה כזה מזה כיף ויותר קל עכשיו, באמת שכדאי לכם, ממליצה מאוד!",
      rating: 5,
      image: "/assets/images/tamar_review.jpg",
    },
    {
      name: "דאנה ארובס",
      details: "תדהר",
      text: "היה קורס מושלם!!!!!! והעוגה יצאה כל כך יפה וטעימה ובאה בול בשביל להרשים את כל המשפחה אחרי ארוחת שישי 🥰🥰🥰🥰🥰",
      rating: 5,
      image: "/assets/images/dana_review.jpg",
    },
    {
      name: "שנהב אופיר",
      details: "חיפה",
      text: "רוצה להמליץ מהלב על העוגות של שיר ! חברות שלי סגרו דרכה עוגה למסיבת רווקות ,מעבר לזה שהעוגה הייתה מהממת היא הייתה טעימה בטירוף ! בנוסף המחיר היה הוגן מאוד . ",
      rating: 5,
      image: "/assets/images/engage_shenhav.jpg",
    },
    {
      name: "ענבל עמר",
      details: "חרב להת",
      text: " קיבלתי עוגה מדהימה משיר המוכשרת לכבוד יום ההולדת שלי, ואין לי מילים לתאר עד כמה היא הייתה מיוחדת, טעימה ומעוצבת בדיוק בצבע האהוב עליי!",
      rating: 5,
      image: "/assets/images/Inabl_box.jpg",
    },
  ];

  const offerings = [
    {
      icon: Cake,
      title: "עיצוב עוגת וינטג’",
      description:
        "קורס חד פעמי שבו תלמדי לעצב עוגת וינטג' מהממת, שלב אחרי שלב, בעזרת קרם חמאה שוויצרי איכותי. בסוף הקורס תצאי עם עוגה מעוצבת שלא תאמיני שהכנת, וכלים שילוו אותך בהמשך הדרך.",
    },
    {
      icon: Star,
      title: "מאפס למקצוענית",
      description:
        "קורס מעמיק ויצירתי הכולל שני מפגשים מקצועיים - מתאים במיוחד למי שרוצה לקחת את התחביב צעד קדימה ולהתמקצע בתחום! תלמדי לעצב עוגת בנטו, קאפקייקס ועוגה מעוצבת עם אלמנטים של דף סוכר וצימקאו.",
      isHighlighted: true,
    },
    {
      icon: Gift,
      title: "עוגות ומתוקים בהתאמה אישית",
      description:
        "מגוון רחב של עוגות ומתוקים בעיצוב יד, המותאמים בדיוק עבורכם! בין אם מדובר בימי הולדת, חתונות, אירועי חברה או כל חגיגה אחרת - אני כאן כדי להפוך כל רגע למיוחד ובלתי נשכח.",
    },
    {
      icon: Users,
      title: "חוויית לקוח מקצועית ומקיפה",
      description:
        "השירות שלי לא נגמר בעיצוב עוגות או בהעברת קורסים - חשוב לי ללוות אתכן עם תשומת לב אישית לאורך כל התהליך. מרגע ביצוע ההזמנה ועד האיסוף, או מרגע ההרשמה לקורס ועד להגעתכן אליי, אני כאן בשבילכן עם יחס חם, זמינות ותמיכה.",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/cupCakes_valen.JPG"
            alt="רקע עוגות מעוצבות"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <AnimateOnScroll
          animation="fade-in"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-12 md:px-16 md:py-18 shadow-2xl">
              <div className="flex justify-center mb-2">
                <img
                  src="/assets/images/shirshizLogo.jpg"
                  alt="SHIRSHIZ Logo"
                  className="h-36 md:h-48 lg:h-56"
                />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-brand-pink-600 mb-8">
                עוגות מעוצבות וקורסים
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                תמיד היה לך חיבור לעיצוב עוגות ורצית לדעת איך לקחת את זה צעד אחד
                קדימה ולהתמקצע?
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={createPageUrl("Workshops")}>
                  <Button
                    size="lg"
                    className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover-lift transition-all duration-300"
                  >
                    <ChefHat className="w-5 h-5 ml-2" />
                    פרטים נוספים על הקורסים
                  </Button>
                </Link>
                <Link to={createPageUrl("Contact")}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-brand-pink-500 text-brand-pink-600 bg-white/90 hover:bg-brand-pink-500 hover:text-brand-pink-600 rounded-full px-8 py-4 text-lg font-semibold hover-lift transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 ml-2" />
                    יצירת קשר
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                היי, נעים להכיר!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                אני שיר, עם 6 שנים של נסיון כמעצבת עוגות ומתוקים בעבודת יד, עם
                אהבה ענקית לעיצוב, יצירתיות ורצון להפוך כל עוגה לרגע בלתי נשכח!
                אצלי תוכלו להזמין עוגות מעוצבות ומרשימות שמתאימות בדיוק לאירוע
                שלכם – כי כל רגע מיוחד שווה חוויה מתוקה ובלתי נשכחת.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                בנוסף, אני מזמינה אתכן לקורס עיצוב עוגות מקצועי וחווייתי, שבו
                תלמדו לעצב עוגה בעצמך – גם אם אין לכן ניסיון קודם. תצאו עם עוגה
                מהממת, כלים פרקטיים, ביטחון, והרבה השראה להמשיך ליצור גם בבית.
              </p>
              <Link to={createPageUrl("About")}>
                <Button className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-6 hover-lift">
                  קראו עוד עליי
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll animation="zoom-in" className="relative">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b1c9656b6_shir_profile.jpg"
                alt="שיר עזריה - קונדיטורית מקצועית עם עוגות"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-pink-200 to-beige-300 rounded-full opacity-80"></div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-20 bg-brand-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה אני מציעה
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              קוריסם מקצועיים שבו תלמדי לעצב עוגה בעצמך - גם בלי ניסיון, ומגוון
              של עוגות ומתוקים בעיצוב אישי שמותאמות בדיוק לאירוע שלך!
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-up"
                delay={index * 0.1}
              >
                <Card
                  className={`h-full text-center hover-lift shadow-lg bg-white/80 backdrop-blur-sm p-6 transition-all duration-300
                    ${
                      item.isHighlighted
                        ? "border-2 border-brand-pink-500 bg-brand-pink-50 scale-105"
                        : "border-0"
                    }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4
                    ${
                      item.isHighlighted
                        ? "bg-brand-pink-500"
                        : "bg-gradient-to-br from-brand-pink-100 to-beige-100"
                    }`}
                  >
                    <item.icon
                      className={`w-12 h-12 ${
                        item.isHighlighted
                          ? "text-white"
                          : "text-brand-pink-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      item.isHighlighted
                        ? "text-brand-pink-600"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              קצת מאחורי הקלעים
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              כאן תוכלו לראות את הרגעים בהם אני יוצרת, מעצבת ומלמדת בקורסים.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* שורה ראשונה */}
            <AnimateOnScroll
              animation="zoom-in"
              className="md:col-span-2 relative aspect-video bg-gray-200 rounded-2xl shadow-lg overflow-hidden group hover-lift"
            >
              <img
                src="/assets/videos/workShopVideo.mp4"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="סרטון הכנת עוגה"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Video className="w-16 h-16 text-white/80" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.1}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/blueButterfly.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="עיצוב עוגה"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() =>
                  setSelectedImage("/assets/images/blueButterfly.jpg")
                }
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.2}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/engade_lin.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="הכנת קרם"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() =>
                  setSelectedImage("/assets/images/engade_lin.jpg")
                }
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            {/* שורה שנייה */}
            <AnimateOnScroll
              animation="zoom-in"
              delay={0.3}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/miniMouse.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="פרחי בצק סוכר"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => setSelectedImage("/assets/images/miniMouse.jpg")}
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.4}
              className="relative aspect-video rounded-xl shadow-lg overflow-hidden group hover-lift"
            >
              <img
                src="https://images.unsplash.com/photo-1616690710400-91113645a273?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="סרטון אפייה"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Video className="w-12 h-12 text-white/80" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.5}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/HeartCake.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="קרמים וטופינגס"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => setSelectedImage("/assets/images/HeartCake.jpg")}
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.6}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="קאפקייקס"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  )
                }
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            {/* שורה שלישית */}
            <AnimateOnScroll
              animation="zoom-in"
              delay={0.7}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/Bar_miitzva.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="מרנג וקצפת"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() =>
                  setSelectedImage("/assets/images/Bar_miitzva.jpg")
                }
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.8}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/spiderMan_cake.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="עוגיות מעוצבות"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() =>
                  setSelectedImage("/assets/images/spiderMan_cake.jpg")
                }
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.9}
              className="relative aspect-video rounded-xl shadow-lg overflow-hidden group hover-lift"
            >
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="סרטון עוגת חתונה"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Video className="w-12 h-12 text-white/80" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={1.0}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/yuval_bearCake.jpg"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="עוגות ללא גלוטן"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() =>
                  setSelectedImage("/assets/images/yuval_bearCake.jpg")
                }
              >
                <ZoomInIcon className="w-10 h-10 text-white" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-l from-brand-pink-100 to-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה מספרות הלקוחות שלי
            </h2>
            <p className="text-lg text-gray-600">
              הצצה אמיתית לחוויה של הלקוחות ומשתתפות הקורסים
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-up"
                delay={index * 0.15}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
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
                    <div
                      className="group relative w-full aspect-[4/3] rounded-lg shadow-md overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(testimonial.image)}
                    >
                      <img
                        src={testimonial.image}
                        alt="עוגה מהסדנה"
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <ZoomInIcon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full p-4">
            <img
              src={selectedImage}
              alt="תמונה מוגדלת"
              className="w-auto max-h-[80vh] mx-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Home Page Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <Send className="w-8 h-8 ml-3 text-brand-pink-500" />
                    דברו איתי
                  </h2>
                  <p className="text-gray-600 mb-6">
                    רוצות להזמין עוגה, לקבוע קורס או סתם להתייעץ? השאירו פרטים
                    ואחזור אליכן בהקדם.
                  </p>
                  <ContactForm />
                </div>
                <div className="hidden md:block">
                  <img
                    src="/assets/images/cupCakes.jpg"
                    alt="יצירת קשר - עוגות מעוצבות"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink-500 text-white">
        <AnimateOnScroll
          animation="fade-in"
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנות להתחיל את המסע שלכן?
          </h2>
          <p className="text-xl mb-8 text-brand-pink-100">
            הצטרפו לקורסים מקצועיים בעולם הקונדטוריה ולמדו ליצור עוגות מדהימות
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("Workshops")}>
              <Button
                size="lg"
                className="bg-white text-brand-pink-600 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-semibold hover-lift"
              >
                <ChefHat className="w-5 h-5 ml-2" />
                צפו בקורסים הזמינים
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white rounded-full px-8 py-4 text-lg font-semibold hover-lift transition-all duration-300"
              >
                <Mail className="w-5 h-5 ml-2" />
                יצירת קשר
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
