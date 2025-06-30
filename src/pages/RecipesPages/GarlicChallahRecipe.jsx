import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Share2,
  Twitter,
  Send,
  ClipboardCopy,
} from "lucide-react";
import {
  Clock,
  Users,
  ChefHat,
  ArrowLeft,
  Printer,
  Play,
  Timer,
  CheckCircle,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import PropTypes from "prop-types";

export default function GarlicChallahRecipe() {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const ShareOption = ({ icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-gray-700 hover:text-pink-500 transition-colors"
    >
      {icon}
      <span className="mt-1 text-xs sm:text-sm font-medium">{label}</span>
    </button>
  );
  ShareOption.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  // SVG ל-TikTok
  const TikTokIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M160 32a64 64 0 0064 64V64a48 48 0 01-48-48h-32v144a32 32 0 11-32-32v-32a64 64 0 1064 64V32z" />
    </svg>
  );

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    // Updated: Removed "מ-SHIRSHIZ" from the title for sharing.
    const title = "חלת שום עננים - מתכון מדהים";

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`
        );
        break;
      case "telegram":
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "pinterest":
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
            url
          )}&description=${encodeURIComponent(title)}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      default:
        break;
    }
    setShowShareMenu(false);
  };

  const ingredients = [
    {
      category: "לבצק",
      items: [
        '½ ק"ג קמח לבן',
        "1 כף שמרים",
        "1 כף סוכר",
        "1 כף שטוחה מלח",
        "¼ כוס שמן זית",
        "½1 כוס מים",
      ],
    },
    {
      category: "לציפוי",
      items: [
        "5 יחידות שיני שום כתושים",
        "¼ כוס שמן זית",
        "½ כפית מלח",
        "1 כפית ממרח פסטו",
      ],
    },
  ];

  const instructions = [
    "במיקסר עם וו לישה, מערבבים את כל החומרים מלבד המים. מוסיפים ממים בהדרגה עד שמתקבל בצק רך.",
    "לשים במשך 10 דקות עד שהבצק רך ודביק. מכסים ומניחים להתפחה עד שהבצק מכפיל את גודלו.",
    "מחלקים לכדורים ומניחים בתבנית להתפחה נוספת.",
    "בינתיים, מכינים את התערובת לציפוי: כותשים את השיני שום, מוסיפים שמן זית, מלח וממרח פסטו.",
    "לפני האפייה, מברישים את הלחמניות עם התערובת ומכניסים לתנור שחומם על 180 מעלות למשך 20 דקות או עד שהן זהובות.",
    "לאחר האפייה מברישים מעט עם התערובת.",
  ];

  return (
    <div className="min-h-screen">
      <style>
        {`
          @media print {
              @page {
              size: A4;
              margin: 1cm;
            }
            html, body {
              width: 100%;
              max-width: 900px;
              margin: 0 auto;
            }
            .no-print {
              display: none !important;
            }
            .print-only {
              display: block !important;
            }
            body {
              font-size: 12pt;
              line-height: 1.4;
              color: black;
              margin: 0;
              padding: 0;
            }
            
            /* Print Header */
            .print-header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              height: 80px;
              background: white;
              border-bottom: 2px solid #f2b1ad;
              padding: 15px 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000;
            }
            
            .print-logo {
              display: flex;
              align-items: center;
              gap: 15px;
            }
            
            .print-logo-image {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              object-fit: cover;
              border: 2px solid #f2b1ad;
            }
            
            .print-logo-text h1 {
              font-size: 24pt;
              font-weight: bold;
              color: #333;
              margin: 0;
              line-height: 1;
            }
            
            .print-logo-text p {
              font-size: 12pt;
              color: #666;
              margin: 0;
              line-height: 1;
            }

            .recipe-content {
              max-width: none;
              margin: 50px 0 0 0; /* Adjusted for the fixed header */
              padding: 0px;
            }
            .recipe-image {
              width: 100%;
              max-width: 400px;
              height: 300px;
              object-fit: cover;
              border-radius: 10px;
              margin: 0 auto 30px;
              display: block;
            }
            .recipe-title {
              font-size: 45pt;
              font-weight: bold;
              margin-bottom: 15px;
              text-align: center;
              color: #333;
            }
            .recipe-description {
              font-size: 15pt;
              margin-bottom: 30px;
              line-height: 1.5;
              text-align: center;
              color: #555;
            }
            .recipe-info {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin-bottom: 40px;
              border: 2px solid #f2b1ad;
              padding: 20px;
              border-radius: 10px;
              background-color: #fef7f6;
            }
            .recipe-info-item {
              text-align: center;
            }
            .recipe-info-label {
              font-weight: bold;
              font-size: 16pt;
              color: #666;
              margin-bottom: 5px;
            }
            .recipe-info-value {
              font-size: 14pt;
              color: #333;
            }
            .ingredients-section {
              margin-bottom: 40px;
            }
            .instructions-section {
              margin-bottom: 40px;
              page-break-before: always;
              break-before: page;
            }
            .section-title_a {
              font-size: 22pt;
              font-weight: bold;
              margin-bottom: 20px;
              border-bottom: 3px solid #f2b1ad;
              padding-bottom: 8px;
              margin-top: 50px;
              color: #333;
              display: flex;
              align-items: center;
            }
            .section-title_b {
              font-size: 22pt;
              font-weight: bold;
              margin-bottom: 20px;
              margin-top: 170px;
              border-bottom: 3px solid #f2b1ad;
              padding-bottom: 8px;
              color: #333;
              display: flex;
              align-items: center;
            }
            .section-icon {
              width: 24px;
              height: 24px;
              margin-left: 10px;
              stroke: #f2b1ad;
              stroke-width: 2;
              fill: none;
            }
            .ingredient-category {
              font-weight: bold;
              margin-top: 20px;
              margin-bottom: 12px;
              font-size: 18pt;
              color: #f2b1ad;
            }
            .ingredient-item {
              margin-bottom: 8px;
              padding-right: 20px;
              font-size: 16pt;
              line-height: 1.4;
            }
           .instruction-item {
              display: flex;
              align-items: flex-start;
              direction: rtl;
              background-color: #fef7f6;
              border-right: 4px solid #f2b1ad;
              border-radius: 5px;
              margin-bottom: 20px;
              page-break-inside: avoid;
              font-size: 16pt;
              line-height: 1.6;
              padding: 10px 12px;
            }

            .instruction-number-cell {
              flex-shrink: 0;
              margin-left: 10px;
              color: #f2b1ad;
              font-weight: bold;
              font-size: 16pt;
            }

            .instruction-text {
              flex-grow: 1;
              text-align: right;
            }
            
            /* הסרת header ו-footer */
            header, .layout-header, nav, .navigation {
              display: none !important;
            }
            footer, .layout-footer {
              display: none !important;
            }

            /* Print Footer */
            .print-footer {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              height: 60px;
              background: white;
              border-top: 2px solid #f2b1ad;
              padding: 10px 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000;
            }
            .social-links {
              display: flex;
              align-items: center;
              gap: 30px;
              text-align: center;
            }
            
            .social-item {
              display: flex;
              align-items: center;
              gap: 4px;
              font-size: 17pt;
              color: #666;
            }
            
            .social-icon {
              width: 25px;
              height: 25px;
              color: #f2b1ad;
            }
            
            /* הסרת כפתורים ואלמנטים אינטראקטיביים */
            button, .button, .btn {
              display: none !important;
            }
            
            /* מניעת חלוקת עמודים באמצע תוכן */
            .ingredient-category, .instruction-item {
              page-break-inside: avoid;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden no-print">
        <div className="absolute inset-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5f6ecd733_-.png"
            alt="חלת שום עננים"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <AnimateOnScroll
          animation="fade-in"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-12 md:px-16 md:py-16 shadow-2xl text-gray-900">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              חלת שום עננים
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              לחמניות רכות כמו ענן, עם ניחוח משכר של שום ופסטו
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-brand-pink-500" />
                <span className="font-semibold">זמן הכנה: 15 דקות</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-pink-500" />
                <span className="font-semibold">זמן אפייה: 20 דקות</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-pink-500" />
                <span className="font-semibold">12 לחמניות</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={handlePrint}
                className="bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover-lift"
              >
                <Printer className="w-5 h-5 ml-2" />
                הדפסת מתכון
              </Button>
              <div className="relative">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="border-2 border-brand-pink-500 text-brand-pink-600 bg-white hover:bg-brand-pink-500 hover:text-brand-pink-600 rounded-full px-8 py-4 text-lg font-semibold hover-lift"
                >
                  <Share2 className="w-5 h-5 ml-2" />
                  שתפו
                </Button>

                {showShareMenu && (
                  <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-end sm:items-center">
                    <div className="bg-white border border-pink-100 rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:w-[400px] p-6 sm:mb-0 max-h-[90vh] overflow-y-auto animate-slide-up">
                      {/* Header */}
                      <div className="flex justify-between items-center border-b border-pink-200 pb-2 mb-4">
                        <h2 className="text-lg font-bold text-gray-800">
                          שתפו
                        </h2>
                        <button
                          onClick={() => setShowShareMenu(false)}
                          className="text-gray-400 hover:text-pink-500 text-2xl"
                        >
                          &times;
                        </button>
                      </div>

                      {/* Grid of icons */}
                      <div className="grid grid-cols-4 gap-4 text-center text-sm text-gray-700">
                        <ShareOption
                          icon={<Send className="w-7 h-7 text-green-600" />}
                          label="וואטסאפ"
                          onClick={() => handleShare("whatsapp")}
                        />
                        <ShareOption
                          icon={<Facebook className="w-7 h-7 text-blue-600" />}
                          label="פייסבוק"
                          onClick={() => handleShare("facebook")}
                        />
                        <ShareOption
                          icon={<Twitter className="w-7 h-7 text-sky-400" />}
                          label="טוויטר"
                          onClick={() => handleShare("twitter")}
                        />
                        <ShareOption
                          icon={<TikTokIcon />}
                          label="טיקטוק"
                          onClick={() => handleShare("tiktok")}
                        />
                        <ShareOption
                          icon={
                            <ClipboardCopy className="w-7 h-7 text-gray-600" />
                          }
                          label="העתק קישור"
                          onClick={() => handleShare("copy")}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Print-only header */}
      <div className="hidden print-only">
        <div className="print-header">
          <div className="print-logo">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b1c9656b6_shir_profile.jpg"
              alt="שיר עזריה"
              className="print-logo-image"
            />
            <div className="print-logo-text">
              <h1>SHIRSHIZ</h1>
              <p>By Shir Azaria</p>
            </div>
          </div>
        </div>

        <div className="print-footer">
          <div className="social-links">
            <div className="social-item flex items-center space-x-2 space-x-reverse">
              <Instagram className="social-icon h-6 w-6 text-gray-500" />
              <span className="text-gray-800">_shirshiz</span>{" "}
            </div>
            <div className="social-item flex items-center space-x-2 space-x-reverse">
              <svg
                className="social-icon h-6 w-6 text-gray-500"
                viewBox="0 0 256 256"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M160 32a64 64 0 0064 64V64a48 48 0 01-48-48h-32v144a32 32 0 11-32-32v-32a64 64 0 1064 64V32z" />
              </svg>
              <span className="text-gray-800">shirshiz</span>{" "}
            </div>
            <div className="social-item flex items-center space-x-2 space-x-reverse">
              <Facebook className="social-icon h-6 w-6 text-gray-500" />
              <span className="text-gray-800">
                Shirshiz - עוגות מעוצבות וסדנאות
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="recipe-content">
          <h1 className="recipe-title">חלת שום עננים</h1>
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5f6ecd733_-.png"
            alt="חלת שום עננים"
            className="recipe-image"
          />
          <p className="recipe-description">
            לחמניות רכות כמו ענן, עם ניחוח משכר של שום ופסטו – מהסוג שלא נשאר
            ממנו כלום אחרי כמה דקות על השולחן. הבצק הנעים, שמכיל שמן זית ושמרים,
            תופח בנחת ויוצר לחמניות אווריריות וקלות. אבל הקסם האמיתי קורה
            כשמורחים מעליהן תערובת מושלמת של שום טרי, שמן זית, מלח ופסטו.
          </p>
          <div className="recipe-info">
            <div className="recipe-info-item">
              <div className="recipe-info-label">זמן הכנה</div>
              <div className="recipe-info-value">15 דקות</div>
            </div>
            <div className="recipe-info-item">
              <div className="recipe-info-label">זמן אפייה</div>
              <div className="recipe-info-value">20 דקות</div>
            </div>
            <div className="recipe-info-item">
              <div className="recipe-info-label">מספר מנות</div>
              <div className="recipe-info-value">12 לחמניות</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Description */}
      <section className="py-16 bg-white no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                לחמניות רכות כמו ענן, עם ניחוח משכר של שום ופסטו – מהסוג שלא
                נשאר ממנו כלום אחרי כמה דקות על השולחן. הבצק הנעים, שמכיל שמן
                זית ושמרים, תופח בנחת ויוצר לחמניות אווריריות וקלות. אבל הקסם
                האמיתי קורה כשמורחים מעליהן תערובת מושלמת של שום טרי, שמן זית,
                מלח ופסטו – שמעניקה להן צבע, ריח וטעם שפשוט אי אפשר לעמוד
                בפניהם.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                מתאימות לארוחת ערב משפחתית, לצד מטבלים, או פשוט לנשנוש חם וטרי
                מהתנור. חלה שהיא גם יפה, גם טעימה וגם לגמרי ממכרת 💚🧄
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-brand-pink-50 no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              סרטון הכנה
            </h2>
            <div className="relative aspect-video bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-20 h-20 text-white/80" />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                01:10
              </div>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8 text-gray-600 text-center">
                מקום לסרטון הכנה
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 recipe-content">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ingredients */}
            <AnimateOnScroll animation="slide-up" className="no-print">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <ChefHat className="w-6 h-6 ml-3 text-brand-pink-500" />
                    מצרכים
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {ingredients.map((group, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-lg text-brand-pink-600 mb-3">
                        {group.category}
                      </h3>
                      <ul className="space-y-2">
                        {group.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimateOnScroll>

            {/* Print-only ingredients */}
            <div className="hidden print-only ingredients-section">
              <h2 className="section-title_a">
                <svg className="section-icon" viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                מצרכים
              </h2>
              {ingredients.map((group, index) => (
                <div key={index}>
                  <h3 className="ingredient-category">{group.category}</h3>
                  {group.items.map((item, idx) => (
                    <div key={idx} className="ingredient-item">
                      • {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Instructions */}
            <AnimateOnScroll
              animation="slide-up"
              delay={0.1}
              className="no-print"
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Clock className="w-6 h-6 ml-3 text-brand-pink-500" />
                    אופן ההכנה
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="w-8 h-8 bg-brand-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">
                          {instruction}
                        </p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            {/* Print-only instructions */}
            <div className="hidden print-only instructions-section break-before-page">
              <h2 className="section-title_b">
                <svg className="section-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                אופן ההכנה
              </h2>
              {instructions.map((instruction, index) => (
                <div key={index} className="instruction-item">
                  <div className="instruction-number-cell">
                    <span className="instruction-number">{index + 1}.</span>
                  </div>
                  <div className="instruction-text">{instruction}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 bg-brand-pink-50 no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              אהבתן את המתכון? שתפו עם חברות!
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => handleShare("facebook")}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
              >
                שתף בפייסבוק
              </Button>
              <Button
                onClick={() => handleShare("whatsapp")}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
              >
                שתף בווטסאפ
              </Button>
              <Button
                onClick={() => handleShare("pinterest")}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6"
              >
                שמור ב-Pinterest
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 bg-white no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to={createPageUrl("Recipes")}>
            <Button
              variant="outline"
              className="border-brand-pink-500 text-brand-pink-600 hover:bg-brand-pink-50 rounded-full px-6"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזרה לכל המתכונים
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
