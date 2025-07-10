import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { createPageUrl, createRecipeUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, ChefHat, Heart, Search, Hash } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { recipes } from "../data/recipesData";

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("הכל");

  const categories = ["הכל", "עוגות", "עוגיות", "קינוחים", "מאפים", "מיוחדים"];

  const getTagColor = (tag) => {
    switch (tag) {
      case "חלבי":
        return "bg-blue-100 text-blue-800";
      case "בשרי":
        return "bg-red-100 text-red-800";
      case "טבעוני":
        return "bg-blue-100 text-red-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "הכל" || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredRecipes = useMemo(() => {
    return shuffleArray(filteredRecipes.filter((r) => r.featured));
  }, [filteredRecipes]);

  const allRecipes = useMemo(() => {
    return shuffleArray(filteredRecipes);
  }, [filteredRecipes]);

  const getCategoryColor = (category) => {
    switch (category) {
      case "עוגות":
        return "bg-brand-pink-100 text-brand-pink-800";
      case "עוגיות":
        return "bg-orange-100 text-orange-800";
      case "קינוחים":
        return "bg-purple-100 text-purple-800";
      case "מאפים":
        return "bg-amber-100 text-amber-800";
      case "מאכלים":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
              אוסף מתכונים אהובים שליוו אותי לאורך השנים. כל מתכון נוסה ,שופר,
              ונכתב בדיוק בשביל שתוכלו להכין ולהצליח כבר מהפעם הראשונה!
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
                לא מצאתן את המתכון שחיפשתן? תפנו אליי ברשתות ואולי אעלה מתכון
                בהמשך
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

                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <Badge
                                className={getCategoryColor(recipe.category)}
                                variant="outline"
                              >
                                {recipe.category}
                              </Badge>
                              {recipe.tags?.map((tag, idx) => (
                                <Badge
                                  key={idx}
                                  className={getTagColor(tag)}
                                  variant="outline"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
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
                                <Hash className="w-4 h-4 ml-2 text-brand-pink-500" />
                                {recipe.servings}
                              </div>
                            </div>

                            <Link to={createRecipeUrl(recipe.slug)}>
                              <Button className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold">
                                <ChefHat className="w-4 h-4 ml-2" />
                                צפייה במתכון המלא
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              )}

              {/* All Recipes */}
              {allRecipes.length > 0 && (
                <div>
                  <AnimateOnScroll
                    animation="slide-up"
                    as="h2"
                    className="text-3xl font-bold text-gray-900 mb-8 text-center"
                  >
                    כל המתכונים
                  </AnimateOnScroll>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allRecipes.map((recipe, index) => (
                      <AnimateOnScroll
                        key={recipe.id}
                        animation="slide-up"
                        delay={index * 0.05}
                      >
                        <Card className="h-full hover-lift border-0 shadow-lg overflow-hidden bg-white relative">
                          {recipe.featured && (
                            <div className="absolute top-4 right-4 z-10">
                              <div className="bg-brand-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                <Heart className="w-3 h-3 ml-1 fill-current" />
                                מומלץ
                              </div>
                            </div>
                          )}

                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>

                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <Badge
                                className={getCategoryColor(recipe.category)}
                                variant="outline"
                              >
                                {recipe.category}
                              </Badge>
                              {recipe.tags?.map((tag, idx) => (
                                <Badge
                                  key={idx}
                                  className={getTagColor(tag)}
                                  variant="outline"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                              {recipe.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                              {recipe.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 ml-2 text-brand-pink-500" />
                                {recipe.time}
                              </div>
                              <div className="flex items-center">
                                <Hash className="w-4 h-4 ml-2 text-brand-pink-500" />
                                {recipe.servings}
                              </div>
                            </div>

                            <Link to={createRecipeUrl(recipe.slug)}>
                              <Button
                                size="sm"
                                className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full font-semibold"
                              >
                                צפייה במתכון
                              </Button>
                            </Link>
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
              המתכונים הללו הם רק חלק קטן מהעולם שלי. בסדנאות שלי תלמדו את כל
              הטכניקות והכלים שיהפכו אתכן למעצבות עוגות מקצועיות!
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
