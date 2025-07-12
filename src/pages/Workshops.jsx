import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, ChefHat } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Helmet } from "react-helmet";

export default function Workshops() {
  const workshops = [
    {
      id: 1,
      title: "קורס מאפס למקצוענית",
      subtitle: "קורס הפרימיום שלי",
      image: "/assets/images/workShops/coursePro.webp",
      description: "הקורס המקיף שיהפוך אתכן למקצועניות, בשני מפגשים מעשיים.",
      features: [
        "2 מפגשים (עוגת בנטו + קאפקייקס +עוגה גדולה מעוצבת)",
        "טכניקות מקצועיות, זילופים, עבודה עם דפי סוכר וצימקאו",
        "ייעוץ עסקי להמשך הדרך - תמחור עוגות ודגשים חשובים",
        "עד 2 משתתפות",
      ],
      isFlagship: true,
      pageUrl: "/pro-course-workshop",
    },
    {
      id: 2,
      title: "סדנת עוגות וינטג'",
      subtitle: "הסדנה הקלאסית שלי",
      image: "/assets/images/gallery/pinkVin.webp",
      description: "במהלכה תלמדו לעצב עוגה מרשימה בסגנון וינטג' קלאסי",
      features: [
        "מפגש אחד ממוקד",
        "דגש עיקרי על זילופי וינטג'",
        "טכניקות לעיטוף העוגה בקרם חמאה שוויצרי",
        "עד 2 משתתפות",
      ],
      isFlagship: false,
      pageUrl: "/vintage-cake-workshop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>סדנאות - SHIRSHIZ</title>
        <meta
          name="description"
          content="בחרי בין שני מסלולי הסדנאות שלנו: וינטג' או מאפס למקצוענית, וקבלי ליווי אישי, אווירה ביתית והזדמנות אמיתית ליצור עוגות מרשימות בעצמך."
        />
        <meta
          name="keywords"
          content="סדנאות עיצוב עוגות, סדנת וינטג', מאפס למקצוענית, קורס קונדיטוריה, שירשיז, SHIRSHIZ"
        />
      </Helmet>

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
              שני מסלולים עיקריים שיתנו לך את כל הכלים והביטחון ליצור עוגות
              מרשימות ומקצועיות עם ליווי צמוד, יחס אישי ואווירה ביתית ומקצועית.
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
                  className={`h-full flex flex-col overflow-hidden shadow-xl hover-lift transition-all duration-300 ${
                    workshop.isFlagship
                      ? "border-4 border-pink-400 bg-gradient-to-br from-pink-50 via-white to-pink-100 relative transform hover:scale-105"
                      : "border-2 border-gray-200"
                  }`}
                  style={
                    workshop.isFlagship
                      ? {
                          borderColor: "#f2b1ad",
                          background:
                            "linear-gradient(135deg, #fef7f6 0%, #ffffff 50%, #fdebe9 100%)",
                          boxShadow: "0 8px 25px rgba(242, 177, 173, 0.15)",
                        }
                      : {}
                  }
                >
                  {workshop.isFlagship && (
                    <div className="relative z-10">
                      <Badge
                        className="absolute top-4 right-4 text-white px-4 py-2 text-sm font-bold shadow-lg z-20"
                        style={{
                          background:
                            "linear-gradient(135deg, #f2b1ad 0%, #e58c85 100%)",
                        }}
                      >
                        <Crown className="w-4 h-4 ml-1" />
                        קורס פרימיום
                      </Badge>
                      {/* Sparkle decorations */}
                      <div className="absolute top-2 left-4 z-20">
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: "#f2b1ad" }}
                        ></div>
                      </div>
                      <div className="absolute top-6 left-8 z-20">
                        <div
                          className="w-1 h-1 rounded-full animate-pulse"
                          style={{
                            backgroundColor: "#e58c85",
                            animationDelay: "300ms",
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative h-56 overflow-hidden ${workshop.isFlagship ? "z-10" : ""}`}
                  >
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {workshop.isFlagship && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(254, 247, 246, 0.2) 0%, transparent 100%)",
                        }}
                      ></div>
                    )}
                  </div>

                  <CardHeader
                    className={workshop.isFlagship ? "relative z-10" : ""}
                  >
                    <CardTitle
                      className={`text-2xl md:text-3xl font-bold ${
                        workshop.isFlagship ? "" : "text-gray-900"
                      }`}
                      style={
                        workshop.isFlagship
                          ? {
                              background:
                                "linear-gradient(135deg, #e58c85 0%, #f2b1ad 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : {}
                      }
                    >
                      {workshop.title}
                    </CardTitle>
                    <p
                      className="font-semibold"
                      style={{
                        color: workshop.isFlagship ? "#e58c85" : "#f2b1ad",
                      }}
                    >
                      {workshop.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent
                    className={`flex-grow flex flex-col ${workshop.isFlagship ? "relative z-10" : ""}`}
                  >
                    <p className="text-gray-700 mb-4">{workshop.description}</p>
                    <ul className="space-y-2 mb-6">
                      {workshop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle
                            className="w-5 h-5"
                            style={{
                              color: workshop.isFlagship
                                ? "#f2b1ad"
                                : "#10b981",
                            }}
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link to={workshop.pageUrl}>
                        <Button
                          size="lg"
                          className="w-full text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                          style={
                            workshop.isFlagship
                              ? {
                                  background:
                                    "linear-gradient(135deg, #f2b1ad 0%, #e58c85 50%, #f2b1ad 100%)",
                                }
                              : {
                                  backgroundColor: "#f2b1ad",
                                }
                          }
                          onMouseEnter={(e) => {
                            if (workshop.isFlagship) {
                              e.currentTarget.style.background =
                                "linear-gradient(135deg, #e58c85 0%, #d97570 50%, #e58c85 100%)";
                            } else {
                              e.currentTarget.style.backgroundColor = "#e58c85";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (workshop.isFlagship) {
                              e.currentTarget.style.background =
                                "linear-gradient(135deg, #f2b1ad 0%, #e58c85 50%, #f2b1ad 100%)";
                            } else {
                              e.currentTarget.style.backgroundColor = "#f2b1ad";
                            }
                          }}
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
