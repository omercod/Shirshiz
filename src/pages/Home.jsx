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
      text: "הייתי בסדנה של שיר המהממת, בהתחלה כזה היה יותר קשה ולא היה לי ביטחון אבל עכשיו אני עם ביטחון עצום וזה כזה מזה כיף ויותר קל עכשיו, באמת שכדאי לכם, ממליצה מאוד!",
      rating: 5,
      image: "/assets/images/home/tamar_review.webp",
    },
    {
      name: "דאנה ארובס",
      details: "תדהר",
      text: "הייתה סדנה מושלמת!!!!!! והעוגה יצאה כל כך יפה וטעימה ובאה בול בשביל להרשים את כל המשפחה אחרי ארוחת שישי 🥰🥰🥰🥰🥰",
      rating: 5,
      image: "/assets/images/home/dana_review.webp",
    },
    {
      name: "שנהב אופיר",
      details: "חיפה",
      text: "רוצה להמליץ מהלב על העוגות של שיר ! חברות שלי סגרו דרכה עוגה למסיבת רווקות ,מעבר לזה שהעוגה הייתה מהממת היא הייתה טעימה בטירוף ! בנוסף המחיר היה הוגן מאוד . ",
      rating: 5,
      image: "/assets/images/home/engage_shenhav.webp",
    },
    {
      name: "ענבל עמר",
      details: "חרב להת",
      text: " קיבלתי עוגה מדהימה משיר המוכשרת לכבוד יום ההולדת שלי, ואין לי מילים לתאר עד כמה היא הייתה מיוחדת, טעימה ומעוצבת בדיוק בצבע האהוב עליי!",
      rating: 5,
      image: "/assets/images/home/Inabl_box.webp",
    },
  ];

  const offerings = [
    {
      icon: Cake,
      title: "עיצוב עוגת וינטג’",
      description:
        "סדנה חד פעמית שבו תלמדי לעצב עוגת וינטג' מהממת, שלב אחרי שלב, בעזרת קרם חמאה שוויצרי איכותי. בסוף הסדנה תצאי עם עוגה מעוצבת שלא תאמיני שהכנת, וכלים שילוו אותך בהמשך הדרך.",
    },
    {
      icon: Star,
      title: "מאפס למקצוענית",
      description:
        "סדנה מעמיקה ויצירתית הכוללת שני מפגשים מקצועיים - מתאים במיוחד למי שרוצה לקחת את התחביב צעד קדימה ולהתמקצע בתחום! תלמדי לעצב עוגת בנטו, קאפקייקס ועוגה מעוצבת עם אלמנטים של דף סוכר וצימקאו.",
      isHighlighted: true,
    },
    {
      icon: Gift,
      title: "עוגות ומתוקים בהתאמה אישית",
      description:
        "מגוון של עוגות ומתוקים, המותאמים לבקשתכם! בין אם מדובר בימי הולדת, חתונות, גילוי מין העובר אירועי חברה או כל חגיגה אחרת - אני כאן כדי להפוך אותם לבלתי נשכחים.",
    },
    {
      icon: Users,
      title: "חוויית לקוח מקצועית ומקיפה",
      description:
        "חשוב לי ללוות אתכן עם תשומת לב אישית לאורך כל התהליך. מרגע ביצוע ההזמנה ועד האיסוף, או מרגע ההרשמה לסדנה ועד להגעתכן אליי, אני כאן בשבילכן עם יחס חם, זמינות ותמיכה.",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoAlt, setSelectedVideoAlt] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/home/cupCakes_valen.webp"
            alt="רקע עוגות מעוצבות"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <AnimateOnScroll
          animation="fade-in"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-8 md:px-12 md:py-12 shadow-2xl">
              <div className="flex justify-center mb-2">
                <img
                  src="/assets/images/home/shirshizLogo.webp"
                  alt="SHIRSHIZ Logo"
                  className="h-28 md:h-36 lg:h-44"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-brand-pink-600 mb-6 tracking-tight">
                עוגות מעוצבות וסדנאות
              </h2>
              <p className="text-md md:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
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
                    פרטים נוספים על הסדנאות
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                היי, נעים להכיר!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                אני שיר, מעצבת עוגות ומתוקים בהתאמה אישית, עם 6 שנים של ניסיון
                בתחום, אהבה ענקית לעיצוב, יצירתיות ורצון להפוך כל עוגה לרגע בלתי
                נשכח! אצלי תוכלו להזמין עוגות מעוצבות ומרשימות שמתאימות בדיוק
                לאירוע שלכם - כי כל רגע מיוחד שווה חוויה מתוקה ובלתי נשכחת.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                בנוסף, אני מזמינה אתכן לסדנת עיצוב עוגות מקצועית וחווייתית, שבו
                תלמדו לעצב עוגה בעצמכן – גם אם אין לכן ניסיון קודם. תצאו עם עוגה
                מהממת, כלים פרקטיים, ביטחון, והרבה השראה להמשיך ליצור גם בבית.
              </p>
              <Link to={createPageUrl("About")}>
                <Button className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-6 hover-lift">
                  קראו עוד עליי
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/assets/images/home/shirProflie.webp"
                alt="שיר עזריה - קונדיטורית מקצועית עם עוגות"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-pink-200 to-beige-300 rounded-full opacity-80"></div>
            </div>
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
              סדנאות מקצועיות שבו תלמדי לעצב עוגה בעצמך - גם בלי ניסיון, ומגוון
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
              כאן תוכלו לראות את הרגעים בהם אני יוצרת, מעצבת ומלמדת בסדנאות.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* שורה ראשונה */}
            <AnimateOnScroll
              animation="zoom-in"
              className="md:col-span-2 relative aspect-[4/3] rounded-2xl shadow-lg overflow-hidden group hover-lift"
            >
              <video
                src="/assets/videos/workShopVideo.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/workShopVideo.mp4");
                  setSelectedVideoAlt("סדנה זוגית");
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/workShopVideo.mp4");
                  setSelectedVideoAlt("סדנה זוגית");
                }}
              >
                <Video className="w-16 h-16 text-white mb-2" />
                <p className="text-sm font-medium text-white">סדנה זוגית </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.1}
              className="relative h-full rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/blueButterfly.webp"
                alt="עוגת פרפרים"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/blueButterfly.webp");
                  setSelectedImageAlt("עוגת פרפרים");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת פרפרים</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.2}
              className="relative h-full rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/engade_lin.webp"
                alt="עוגת אירוסין"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/engade_lin.webp");
                  setSelectedImageAlt("עוגת אירוסין");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת אירוסין</p>
              </div>
            </AnimateOnScroll>

            {/* שורה שנייה */}
            <AnimateOnScroll
              animation="zoom-in"
              delay={0.3}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/miniMouse.webp"
                alt="עוגת מיני מאוס"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/miniMouse.webp");
                  setSelectedImageAlt("עוגת מיני מאוס");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת מיני מאוס</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.4}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <video
                src="/assets/videos/boyORgirl.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/boyORgirl.mp4");
                  setSelectedVideoAlt("עוגה לגילוי מין העובר");
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/boyORgirl.mp4");
                  setSelectedVideoAlt("עוגה לגילוי מין העובר");
                }}
              >
                <Video className="w-12 h-12 text-white mb-2" />
                <p className="text-sm font-medium text-white">
                  עוגה לגילוי מין העובר
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.5}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/HeartCake.webp"
                alt="עוגת בת מצווה"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/HeartCake.webp");
                  setSelectedImageAlt("עוגת בת מצווה");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת בת מצווה</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.9}
              className="relative aspect-square rounded-xl shadow-lg overflow-hidden group hover-lift"
            >
              <video
                src="/assets/videos/shotsCake.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/shotsCake.mp4");
                  setSelectedVideoAlt("עוגת צייסרים");
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/shotsCake.mp4");
                  setSelectedVideoAlt("עוגת צייסרים");
                }}
              >
                <Video className="w-12 h-12 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת צייסרים</p>
              </div>
            </AnimateOnScroll>

            {/* שורה שלישית */}
            <AnimateOnScroll
              animation="zoom-in"
              delay={0.7}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/Bar_miitzva.webp"
                alt="עוגת בר מצווה"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/Bar_miitzva.webp");
                  setSelectedImageAlt("עוגת בר מצווה");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת בר מצווה</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.8}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/spiderMan_cake.webp"
                alt="עוגת ספיידרמן"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/spiderMan_cake.webp");
                  setSelectedImageAlt("עוגת ספיידרמן");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">עוגת ספיידרמן</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={0.6}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <video
                src="/assets/videos/justinVideo.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/justinVideo.mp4");
                  setSelectedVideoAlt("עוגת ג'סטין ביבר");
                }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedVideo("/assets/videos/justinVideo.mp4");
                  setSelectedVideoAlt("עוגת ג'סטין ביבר");
                }}
              >
                <Video className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">
                  עוגת גסטין ביבר
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="zoom-in"
              delay={1.0}
              className="relative aspect-square rounded-xl shadow-md overflow-hidden group hover-lift"
            >
              <img
                src="/assets/images/home/yuval_bearCake.webp"
                alt="עוגת דובי וינטאג'"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                onClick={() => {
                  setSelectedImage("/assets/images/home/yuval_bearCake.webp");
                  setSelectedImageAlt("עוגת דובי וינטאג'");
                }}
              >
                <ZoomInIcon className="w-10 h-10 text-white mb-2" />
                <p className="text-sm font-medium text-white">
                  עוגת דובי וינטאג
                </p>
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
              הצצה אמיתית לחוויה של הלקוחות ומשתתפות הסדנאות
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
                      className="group relative w-full h-40 md:h-52 rounded-lg shadow-md overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(testimonial.image)}
                    >
                      <img
                        src={testimonial.image}
                        alt="עוגה מהסדנה"
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
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
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 cursor-zoom-out p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedImageAlt("");
          }}
        >
          <button
            className="absolute top-4 left-4 text-white text-3xl hover:text-brand-pink-400"
            onClick={(e) => {
              e.stopPropagation(); // כדי למנוע סגירה כפולה
              setSelectedImage(null);
              setSelectedImageAlt("");
            }}
          >
            &times;
          </button>
          <p className="mb-4 text-xl text-white font-semibold">
            {selectedImageAlt}
          </p>
          <div className="max-w-3xl w-full">
            <img
              src={selectedImage}
              alt={selectedImageAlt}
              className="w-auto max-h-[80vh] mx-auto rounded-xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Video Popup */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4 cursor-zoom-out"
          onClick={() => {
            setSelectedVideo(null);
            setSelectedVideoAlt(null);
          }}
        >
          <p className="mb-4 text-white text-lg font-semibold">
            {selectedVideoAlt}
          </p>
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-w-3xl w-full max-h-[70vh] rounded-xl shadow-xl"
          />
        </div>
      )}

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
            הצטרפו לסדנאות מקצועיות בעולם הקונדטוריה ולמדו ליצור עוגות מדהימות
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={createPageUrl("Workshops")}>
              <Button
                size="lg"
                className="bg-white text-brand-pink-600 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-semibold hover-lift"
              >
                <ChefHat className="w-5 h-5 ml-2" />
                צפו בסדנאות הזמינות
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Home Page Contact Form */}
      <section className="pt-10 pb-20 bg-white">
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
                    רוצות להזמין עוגה, לקבוע סדנה או סתם להתייעץ? השאירו פרטים
                    ואחזור אליכן בהקדם.
                  </p>
                  <ContactForm />
                </div>
                <div className="hidden md:block">
                  <img
                    src="/assets/images/home/cupCakes.webp"
                    alt="יצירת קשר - עוגות מעוצבות"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
