import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, ChefHat } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Workshops() {
  const workshops = [
    {
      id: 1,
      title: "קורס מאפס למקצוענית",
      subtitle: "קורס הפרימיום שלי",
      image: "/assets/images/home/Inabl_box.jpg",
      description: "הקורס המקיף שיהפוך אתכן למקצועניות, בשני מפגשים מעשיים.",
      features: [
        "2 מפגשים (בנטו + עוגה מעוצבת)",
        "טכניקות מקצועיות וזילופים",
        "ייעוץ עסקי ותמחור",
        "קבוצות קטנות ויחס אישי",
      ],
      isFlagship: true,
      pageUrl: "/pro-course-workshop",
    },
    {
      id: 2,
      title: "סדנת עוגות וינטג'",
      subtitle: "הסדנה הקלאסית שלי",
      image: "/assets/images/gallery/pinkVin.jpg",
      description: "למדו לעצב עוגות מרשימות וטעימות בסגנון וינטג' קלאסי.",
      features: [
        "סדנה אחת ממוקדת",
        "קרם חמאה שוויצרי מושלם",
        "עיטוף חלק וזילופי וינטג'",
        "כל אחת יוצאת עם עוגה",
      ],
      isFlagship: false,
      pageUrl: "/vintage-cake-workshop",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-brand-pink-100 via-beige-50 to-brand-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink-200 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-beige-200 rounded-full opacity-30"></div>
        <div className="relative pt-14 pb-10">
          <AnimateOnScroll
            animation="fade-in"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              הסדנאות המקצועיות שלי
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              שני מסלולים עיקריים שילמדו אתכן כל מה שצריך כדי ליצור עוגות
              מרשימות ומקצועיות, עם ליווי אישי ובאווירה ביתית.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="bg-white pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {workshops.map((workshop, index) => (
              <AnimateOnScroll
                key={workshop.id}
                animation="slide-up"
                delay={index * 0.1}
              >
                <Card
                  className={`h-full flex flex-col border-2 overflow-hidden shadow-xl hover-lift ${workshop.isFlagship ? "border-brand-pink-500" : "border-gray-200"}`}
                >
                  {workshop.isFlagship && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-2 text-sm font-bold z-10">
                      <Crown className="w-4 h-4 ml-1" />
                      קורס פרימיום
                    </Badge>
                  )}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                      {workshop.title}
                    </CardTitle>
                    <p className="text-brand-pink-600 font-semibold">
                      {workshop.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-gray-700 mb-4">{workshop.description}</p>
                    <ul className="space-y-2 mb-6">
                      {workshop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle
                            className={`w-5 h-5 ${workshop.isFlagship ? "text-yellow-500" : "text-green-500"}`}
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link to={workshop.pageUrl}>
                        <Button
                          size="lg"
                          className={`w-full text-white rounded-full font-semibold ${workshop.isFlagship ? "bg-brand-pink-500" : "bg-brand-pink-500 hover:bg-brand-pink-600"}`}
                        >
                          <ChefHat className="w-5 h-5 ml-2" />
                          פרטים נוספים והרשמה
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
