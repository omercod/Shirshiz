import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ChefHat } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Workshops() {
  const workshops = [
    {
      id: 1,
      title: "סדנת עיצוב עוגות",
      description: "רוצות ללמוד איך להכין עוגות שנראות כמו בפינטרסט? הצטרפו לסדנאות עיצוב העוגות שלי!",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6bd4a4177_IMG_9556-600x790.jpeg",
      duration: "4-6 שעות",
      participants: "עד 3 משתתפות",
      level: "כל הרמות",
      features: ["קרם חמאה שוויצרי", "בניית עוגה יציבה", "זילופים מקצועיים", "ליווי אישי"]
    },
    {
      id: 2,
      title: "סדנת פרחים מבצק סוכר",
      description: "ליצירת פרחים מעוצבים מבצק סוכר - רדים, ורדים ופיאונים מקצועיים",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3",
      duration: "5 שעות",
      participants: "עד 6 משתתפות",
      level: "מתקדמות",
      features: ["בצק סוכר", "כלי עבודה מקצועיים", "טכניקות מתקדמות", "צביעה"]
    },
    {
      id: 3,
      title: "סדנת קרמים וממרחים",
      description: "הכנת קרמים מקצועיים - חמאה, שוקולד, גבינה ועוד. הסוד לטעם מושלם",
      image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3",
      duration: "3 שעות",
      participants: "עד 10 משתתפות",
      level: "כל הרמות",
      features: ["מגוון קרמים", "טכניקות הכנה", "טיפים מקצועיים", "מתכונים"]
    },
    {
      id: 4,
      title: "סדנת עוגות חתונה",
      description: "עיצוב עוגות חתונה מרהיבות - מהתכנון ועד הביצוע המושלם",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3",
      duration: "8 שעות",
      participants: "עד 4 משתתפות",
      level: "מתקדמות",
      features: ["תכנון מקצועי", "טכניקות מתקדמות", "עיצוב אלגנטי", "טיפים עסקיים"]
    },
    {
      id: 5,
      title: "סדנת עוגות יום הולדת לילדים",  
      description: "עוגות צבעוניות ועליזות לילדים - דמויות, חיות ועיצובים משעשעים",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3",
      duration: "4 שעות",
      participants: "עד 8 משתתפות",
      level: "כל הרמות",
      features: ["עיצובים לילדים", "צבעי מאכל", "דמויות פופולריות", "טכניקות כיפיות"]
    },
    {
      id: 6,
      title: "סדנת עוגות ללא גלוטן",
      description: "למדו להכין עוגות טעימות ללא גלוטן בלי לוותר על הטעם והמרקם",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3",
      duration: "3.5 שעות",
      participants: "עד 8 משתתפות", 
      level: "כל הרמות",
      features: ["קמחים חלופיים", "תחליפי גלוטן", "מתכונים מיוחדים", "טיפים בריאותיים"]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "מתחילות": return "bg-green-100 text-green-800";
      case "מתקדמות": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Decorative Header Background */}
      <div className="pt-16 bg-gradient-to-bl from-brand-pink-100 via-beige-50 to-brand-pink-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink-200 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-beige-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-pink-200 rounded-full opacity-15 translate-y-24"></div>
        
        <div className="relative py-20">
          <AnimateOnScroll animation="fade-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              הסדנאות שלי
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              בחרו מתוך מגוון סדנאות קונדיטוריה מקצועיות, המותאמות לכל רמת ידע וניסיון. 
              כל סדנה כוללת הדרכה אישית, חומרי גלם איכותיים ומתכונים לקחת הביתה.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <AnimateOnScroll key={workshop.id} animation="slide-up" delay={index * 0.05}>
                <Card className="h-full hover-lift border-0 shadow-lg overflow-hidden bg-white transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getLevelColor(workshop.level)}>
                        {workshop.level}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {workshop.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 ml-2 text-brand-pink-500" />
                        {workshop.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 ml-2 text-brand-pink-500" />
                        {workshop.participants}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">מה כלול בסדנה:</h4>
                      <div className="flex flex-wrap gap-2">
                        {workshop.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {workshop.id === 1 ? (
                      <Link to={createPageUrl("CakeDesignWorkshop")}>
                        <Button 
                          className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold"
                        >
                          <ChefHat className="w-4 h-4 ml-2" />
                          פרטים נוספים
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold"
                      >
                        <ChefHat className="w-4 h-4 ml-2" />
                        פרטים נוספים
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-pink-500 py-16">
        <AnimateOnScroll animation="fade-in" className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            לא מצאתן את הסדנה המתאימה?
          </h2>
          <p className="text-xl text-brand-pink-100 mb-8">
            אני מעצבת סדנאות מותאמות אישית לקבוצות או לבקשות מיוחדות
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-pink-600 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-semibold hover-lift"
          >
            יצירת קשר לסדנה מותאמת
          </Button>
        </AnimateOnScroll>
      </div>
    </div>
  );
}