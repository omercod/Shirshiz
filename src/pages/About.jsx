import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CountUp from "react-countup";

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "+6 שנות ניסיון",
      description: "בתחום הקונדיטוריה והעיצוב",
    },
    {
      icon: Users,
      title: "+30 בוגרות",
      description: "שהשתתפו בקורסים שלי",
    },
    {
      icon: Heart,
      title: "תשוקה אמיתית",
      description: "לחלוק ידע ולהעביר מקצועיות",
    },
    {
      icon: Clock,
      title: "זמינות מלאה",
      description: "ליווי וייעוץ גם אחרי הקורס",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Decorative Header Background */}
      <div className="pt-16 bg-gradient-to-br from-brand-pink-100 via-beige-100 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-pink-200 rounded-full opacity-20 -translate-y-40 -translate-x-40"></div>
        <div className="absolute top-10 right-20 w-24 h-24 bg-beige-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-brand-pink-200 rounded-full opacity-15 translate-y-28"></div>
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-beige-200 rounded-full opacity-25 translate-x-20"></div>

        <div className="relative">
          <AnimateOnScroll
            animation="fade-in"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                שיר עזריה
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                מעצבת עוגות ומתוקים בעבודת יד
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <AnimateOnScroll animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                נעים להכיר!
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>אני שיר, בת 27, מעצבת עוגות ומתוקים בעבודת יד.</p>

                <p>
                  כבר מגיל צעיר התאהבתי בעולם האפייה – השילוב בין יצירתיות, דיוק
                  וטעמים תמיד ריתק אותי. לפני חמש שנים החלטתי להפוך את התשוקה
                  הזו למקצוע, ומאז אני יוצרת עוגות בעיצוב אישי לכל אירוע.
                </p>

                <p>
                  אני מקפידה על שימוש בחומרי גלם איכותיים ומקדישה מחשבה לכל פרט,
                  כדי להבטיח שהעוגות לא יהיו רק יפות – אלא גם טעימות במיוחד!
                </p>

                <p>
                  הכי חשוב לי שהעוגה תהיה בדיוק כמו שדמיינתם – לשמח, לרגש
                  ולהתאים בדיוק לטעם שלכם. אין דבר שמשמח אותי יותר מאשר לראות את
                  הלקוחות מתלהבים מהתוצאה, נהנים מכל ביס, וכבר מחכים להזמנה
                  הבאה!
                </p>

                <p>
                  אני מזמינה אתכם להפוך כל רגע מיוחד לחוויה בלתי נשכחת עם עוגות
                  שמעוצבות בדיוק בשבילכם!
                </p>
              </div>
            </AnimateOnScroll>

            {/* Image */}
            <AnimateOnScroll animation="zoom-in">
              <div className="relative">
                <img
                  src="/assets/images/shirProflie.jpg"
                  alt="שיר עזריה - קונדיטורית מקצועית עם עוגות"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-brand-pink-200 to-beige-300 rounded-full opacity-70"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-beige-200 to-brand-pink-200 rounded-full opacity-80"></div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-up"
                delay={index * 0.1}
              >
                <Card className="h-full hover-lift border-0 shadow-lg text-center bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-pink-100 to-beige-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-brand-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                      {achievement.title.includes("+") ? (
                        <>
                          <CountUp
                            start={0}
                            end={parseInt(achievement.title.match(/\d+/)[0])}
                            duration={2}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                          <span className="ml-1">
                            {achievement.title.replace(/\d+/g, "")}
                          </span>
                        </>
                      ) : (
                        achievement.title
                      )}
                    </h3>

                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Philosophy Section */}
          <AnimateOnScroll
            animation="fade-in"
            className="bg-gradient-to-l from-brand-pink-100 to-beige-100 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              הפילוסופיה שלי
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                אני מאמינה שקונדיטוריה היא לא רק בישול - זו אמנות שמחברת בין
                טכניקה ליצירתיות. כל עוגה שאני יוצרת היא הזדמנות ליצור שמחה,
                לחגוג רגעים מיוחדים ולהביא חיוך לפנים של אנשים.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                המטרה שלי היא לא רק ללמד אתכן טכניקות, אלא להעניק לכן ביטחון
                עצמי, יצירתיות והכלים להמשיך וליצור בעצמכן.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
