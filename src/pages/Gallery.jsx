import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3",
      alt: "עוגת שוקולד מעוצבת",
      category: "עוגות שוקולד",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3",
      alt: "פרחים מבצק סוכר",
      category: "פרחים",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3",
      alt: "עוגת חתונה מרשימה",
      category: "עוגות חתונה",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3",
      alt: "עוגת יום הולדת לילדים",
      category: "עוגות ילדים",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3",
      alt: "קרמים וטופינגס",
      category: "קרמים",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3",
      alt: "עוגיות מעוצבות",
      category: "עוגיות",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3",
      alt: "קאפקייקס מעוצבים",
      category: "קאפקייקס",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3",
      alt: "מרנג וקצפת",
      category: "קישוטים",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3",
      alt: "עוגיות חמאה קלאסיות",
      category: "עוגיות",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3",
      alt: "עוגות ללא גלוטן",
      category: "עוגות מיוחדות",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3",
      alt: "טארטים ופאיים",
      category: "טארטים",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3",
      alt: "עוגות מוס מתקדמות",
      category: "עוגות מוס",
    },
  ];

  const categories = [...new Set(galleryImages.map((img) => img.category))];
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredImages =
    activeCategory === "הכל"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen">
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
              למלאכה.
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
            {categories.map((category) => (
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
            {filteredImages.map((image, index) => (
              <AnimateOnScroll
                key={image.id}
                animation="zoom-in"
                delay={index * 0.05}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover-lift"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-12 left-4 bg-white/10 border-white/20 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-semibold mb-1">
                {selectedImage.alt}
              </p>
              <p className="text-white/80 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
