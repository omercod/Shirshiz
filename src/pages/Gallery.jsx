import { useState, useMemo } from "react";
import { ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { galleryImages } from "@/data/galleryData";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("הכל");

  const [selectedImageAlt, setSelectedImageAlt] = useState("");

  const allCategories = [
    ...new Set(galleryImages.flatMap((img) => img.categories)),
  ];

  const shuffledImages = useMemo(() => {
    const images =
      activeCategory === "הכל"
        ? galleryImages
        : galleryImages.filter((img) =>
            img.categories.includes(activeCategory)
          );

    // shuffle inplace
    const array = [...images];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>גלרייה - SHIRSHIZ</title>
        <meta
          name="description"
          content="הצצה לגלריית עוגות מעוצבות, קינוחים מרהיבים, ותוצרים מתוך הסדנאות. כל תמונה מספרת סיפור של יצירתיות, דייקנות ואהבה לקונדיטוריה."
        />
        <meta
          name="keywords"
          content="גלריה, עוגות מעוצבות, סדנאות עיצוב עוגות, קינוחים, שירשיז, SHIRSHIZ"
        />
      </Helmet>

      {/* Decorative Header Background */}
      <div className="pt-16 bg-gradient-to-bl from-brand-pink-100 via-beige-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-pink-200 rounded-full opacity-15 -translate-y-48 -translate-x-48"></div>
        <div className="absolute top-8 right-12 w-32 h-32 bg-beige-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-52 h-52 bg-brand-pink-200 rounded-full opacity-20 translate-y-26"></div>
        <div className="absolute top-2/3 right-0 w-36 h-36 bg-beige-300 rounded-full opacity-25 translate-x-18"></div>

        <div className="relative">
          <AnimateOnScroll
            animation="fade-in"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              הגלריה שלי
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              אוסף התמונות מהעבודות שלי לאורך השנים - עוגות, קישוטים, ויצירות
              מתוך הסדנאות. כל תמונה מספרת סיפור של יצירתיות, דייקנות ואהבה
              לתחום.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <AnimateOnScroll
            animation="fade-in"
            delay={0.2}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Button
              variant={activeCategory === "הכל" ? "default" : "outline"}
              onClick={() => setActiveCategory("הכל")}
              className={`rounded-full px-6 ${
                activeCategory === "הכל"
                  ? "bg-brand-pink-500 hover:bg-brand-pink-600"
                  : "border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50"
              }`}
            >
              הכל
            </Button>
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 ${
                  activeCategory === category
                    ? "bg-brand-pink-500 hover:bg-brand-pink-600"
                    : "border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </AnimateOnScroll>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {shuffledImages.map((image, index) => (
              <AnimateOnScroll
                key={`${image.src}-${index}`}
                animation="zoom-in"
                delay={index * 0.05}
                className="relative h-full rounded-xl shadow-md overflow-hidden group hover-lift"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(image.src);
                    setSelectedImageAlt(image.alt);
                  }}
                >
                  <ZoomIn className="w-10 h-10 text-white mb-2" />
                  <p className="text-sm font-medium text-white">{image.alt}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
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

      {/* CTA Section */}
      <section className="pb-10 bg-white">
        <AnimateOnScroll
          animation="fade-in"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-gradient-to-br from-brand-pink-50 to-beige-50 p-6 sm:p-10 rounded-2xl shadow-lg border-2 border-brand-pink-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אהבת את העיצובים בגלריה?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              בואי ליצור איתי עוגות משלך בסדנאות מקצועיות וחווייתיות או להזמין
              עוגה מעוצבת בדיוק כמו שחלמת.
            </p>
            <Link to={createPageUrl("Workshops")}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-base sm:text-lg font-semibold shadow-lg hover-lift transition-all duration-300"
              >
                לפרטים על הסדנאות והזמנות
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
