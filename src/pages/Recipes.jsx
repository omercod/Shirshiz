import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Users, ChefHat, Heart, Search } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const recipes = [
    {
      id: 1,
      title: "עוגת שוקולד עשירה",
      description:
        "עוגת שוקולד רכה ועשירה עם קרם שוקולד מושלם - המתכון שכל קונדיטור צריך לדעת",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3",
      category: "עוגות",
      difficulty: "קל",
      time: "90 דקות",
      servings: "8-10 מנות",
      ingredients: [
        "250 גרם חמאה",
        "200 גרם שוקולד מריר",
        "4 ביצים",
        "200 גרם סוכר",
        "150 גרם קמח",
      ],
      featured: true,
      slug: "chocolate-cake",
    },
    {
      id: 2,
      title: "קרם חמאה מושלם",
      description:
        "הסוד לקרם החמאה הכי חלק ויציב - בסיס לכל עיצוב עוגות מקצועי",
      image:
        "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3",
      category: "קרמים וממרחים",
      difficulty: "בינוני",
      time: "45 דקות",
      servings: "לעוגה אחת",
      ingredients: [
        "500 גרם חמאה רכה",
        "1 ק'ג אבקת סוכר",
        "2 כפות וניל",
        "מעט חלב",
      ],
      featured: false,
      slug: "buttercream",
    },
    {
      id: 3,
      title: "בצק סוכר ביתי",
      description:
        "מתכון לבצק סוכר גמיש ונוח לעבודה, מושלם ליצירת דקורציות ופרחים",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3",
      category: "בצקים",
      difficulty: "בינוני",
      time: "30 דקות",
      servings: "500 גרם",
      ingredients: [
        "500 גרם אבקת סוכר",
        "2 כפות גלוקוז",
        "2 כפות גלטין",
        "מים",
      ],
      featured: true,
      slug: "fondant",
    },
    {
      id: 4,
      title: "עוגיות חמאה קלאסיות",
      description: "עוגיות חמאה פריכות וטעימות, בסיס מושלם לעיצוב ולקישוט",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3",
      category: "עוגיות",
      difficulty: "קל",
      time: "60 דקות",
      servings: "30 עוגיות",
      ingredients: [
        "250 גרם חמאה",
        "125 גרם סוכר",
        "1 ביצה",
        "375 גרם קמח",
        "וניל",
      ],
      featured: false,
      slug: "butter-cookies",
    },
    {
      id: 5,
      title: "גנאש שוקולד מקצועי",
      description: "גנאש שוקולד חלק ומבריק לציפוי עוגות וממלא לפרלינים",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3",
      category: "קרמים וממרחים",
      difficulty: "בינוני",
      time: "25 דקות",
      servings: "לעוגה אחת",
      ingredients: ["300 גרם שוקולד מריר", "300 מ'ל שמנת מתוקה", "50 גרם חמאה"],
      featured: false,
      slug: "ganache",
    },
    {
      id: 6,
      title: "מרנג שוויצרי יציב",
      description: "מרנג חלק ויציב המתאים לקישוט עוגות ולמילויים קלים",
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3",
      category: "קרמים וממרחים",
      difficulty: "מתקדם",
      time: "40 דקות",
      servings: "לעוגה אחת",
      ingredients: [
        "6 חלבונים",
        "300 גרם סוכר",
        "מעט מלח",
        "וניל או טעם לבחירה",
      ],
      featured: true,
      slug: "swiss-meringue",
    },
    {
      id: 7,
      title: "חלת שום עננים",
      description: " לחמניות רכות כמו ענן, עם ניחוח משכר של שום ופסטו",
      image:
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5f6ecd733_-.png",
      category: "לחמים ומאפים",
      difficulty: "קל",
      time: "35 דקות",
      servings: "12 לחמניות",
      ingredients: [
        '½ ק"ג קמח לבן',
        "1 כף שמרים",
        "1 כף סוכר",
        "שום",
        "שמן זית",
        "פסטו",
      ],
      featured: true,
      slug: "garlic-challah",
    },
    {
      id: 8,
      title: "דג מרוקאי בתנור",
      description: "דג מרוקאי ארומטי עם תבלינים מיוחדים וירקות צבעוניים",
      image:
        "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3",
      category: "מנות עיקריות",
      difficulty: "בינוני",
      time: "45 דקות",
      servings: "4-6 מנות",
      ingredients: [
        "דג שלם",
        "עגבניות",
        "בצל",
        "תבלינים מרוקאיים",
        "זית",
        "לימון",
      ],
      featured: false,
      slug: "moroccan-fish",
    },
  ];

  const categories = [
    "all",
    ...new Set(recipes.map((recipe) => recipe.category)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "קל":
        return "bg-green-100 text-green-800";
      case "בינוני":
        return "bg-yellow-100 text-yellow-800";
      case "מתקדם":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "עוגות":
        return "bg-brand-pink-100 text-brand-pink-800";
      case "קרמים וממרחים":
        return "bg-purple-100 text-purple-800";
      case "בצקים":
        return "bg-blue-100 text-blue-800";
      case "עוגיות":
        return "bg-orange-100 text-orange-800";
      case "לחמים ומאפים":
        return "bg-amber-100 text-amber-800";
      case "מנות עיקריות":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const featuredRecipes = filteredRecipes.filter((recipe) => recipe.featured);
  const regularRecipes = filteredRecipes.filter((recipe) => !recipe.featured);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-16 bg-gradient-to-tr from-beige-100 via-brand-pink-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-beige-200 rounded-full opacity-25 -translate-y-36 translate-x-36"></div>
        <div className="absolute top-16 left-16 w-28 h-28 bg-brand-pink-200 rounded-full opacity-35"></div>

        <div className="relative">
          <AnimateOnScroll
            animation="fade-in"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              המתכונים שלי
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              אוסף מתכונים נבחרים שפיתחתי במהלך השנים - מהבסיסיים ביותר ועד
              המתקדמים. כל מתכון נבדק וממוטב לתוצאות מושלמות בכל פעם.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="חפש מתכון..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-12 rounded-full border-2 border-brand-pink-200 focus:border-brand-pink-500"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full text-sm ${
                      selectedCategory === category
                        ? "bg-brand-pink-500 hover:bg-brand-pink-600"
                        : "border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50"
                    }`}
                  >
                    {category === "all" ? "הכל" : category}
                  </Button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
                <ChefHat className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                לא נמצאו מתכונים
              </h3>
              <p className="text-gray-600 mb-8">
                נסו לחפש במילים אחרות או לבחור קטגוריה אחרת
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full"
              >
                נקה חיפוש
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Recipes */}
              {featuredRecipes.length > 0 && (
                <div className="mb-16">
                  <AnimateOnScroll
                    animation="slide-up"
                    as="h2"
                    className="text-3xl font-bold text-gray-900 mb-8 text-center"
                  >
                    המתכונים המומלצים שלי
                  </AnimateOnScroll>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {featuredRecipes.map((recipe, index) => (
                      <AnimateOnScroll
                        key={recipe.id}
                        animation="slide-up"
                        delay={index * 0.1}
                      >
                        <Card className="h-full hover-lift border-0 shadow-lg overflow-hidden bg-white relative">
                          <div className="absolute top-4 right-4 z-10">
                            <div className="bg-brand-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                              <Heart className="w-3 h-3 ml-1 fill-current" />
                              מומלץ
                            </div>
                          </div>

                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>

                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                className={getCategoryColor(recipe.category)}
                              >
                                {recipe.category}
                              </Badge>
                              <Badge
                                className={getDifficultyColor(
                                  recipe.difficulty
                                )}
                              >
                                {recipe.difficulty}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                              {recipe.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {recipe.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 ml-2 text-brand-pink-500" />
                                {recipe.time}
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 ml-2 text-brand-pink-500" />
                                {recipe.servings}
                              </div>
                            </div>

                            {recipe.slug === "garlic-challah" ? (
                              <Link to={createPageUrl("GarlicChallahRecipe")}>
                                <Button className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold">
                                  <ChefHat className="w-4 h-4 ml-2" />
                                  צפייה במתכון המלא
                                </Button>
                              </Link>
                            ) : (
                              <Button className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold">
                                <ChefHat className="w-4 h-4 ml-2" />
                                צפייה במתכון המלא
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              )}

              {/* All Recipes */}
              {regularRecipes.length > 0 && (
                <div>
                  <AnimateOnScroll
                    animation="slide-up"
                    as="h2"
                    className="text-3xl font-bold text-gray-900 mb-8 text-center"
                  >
                    כל המתכונים
                  </AnimateOnScroll>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularRecipes.map((recipe, index) => (
                      <AnimateOnScroll
                        key={recipe.id}
                        animation="slide-up"
                        delay={index * 0.05}
                      >
                        <Card className="h-full hover-lift border-0 shadow-lg overflow-hidden bg-white">
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>

                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                className={getCategoryColor(recipe.category)}
                                variant="outline"
                              >
                                {recipe.category}
                              </Badge>
                              <Badge
                                className={getDifficultyColor(
                                  recipe.difficulty
                                )}
                                variant="outline"
                              >
                                {recipe.difficulty}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                              {recipe.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                              {recipe.description}
                            </p>

                            <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 ml-1 text-brand-pink-500" />
                                {recipe.time}
                              </div>
                              <div className="flex items-center">
                                <Users className="w-3 h-3 ml-1 text-brand-pink-500" />
                                {recipe.servings}
                              </div>
                            </div>

                            <Button
                              size="sm"
                              className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold"
                            >
                              צפייה במתכון
                            </Button>
                          </CardContent>
                        </Card>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Call to Action */}
          <AnimateOnScroll
            animation="fade-in"
            className="bg-brand-pink-500 rounded-3xl p-12 text-center mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              רוצות ללמוד ליצור בעצמכן?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              המתכונים הללו הם רק ההתחלה. בסדנאות שלי תלמדו את כל הטכניקות
              והסודות שיהפכו אתכן לקונדיטוריות מקצועיות
            </p>
            <Link to={createPageUrl("Workshops")}>
              <Button
                size="lg"
                className="bg-white text-brand-pink-600 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-semibold hover-lift"
              >
                <ChefHat className="w-5 h-5 ml-2" />
                הרשמה לסדנה
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
