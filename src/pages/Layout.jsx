import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const TikTokIcon = (props) => (
    <svg
      {...props}
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M160 32a64 64 0 0064 64V64a48 48 0 01-48-48h-32v144a32 32 0 11-32-32v-32a64 64 0 1064 64V32z" />
    </svg>
  );

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigationItems = [
    { title: "בית", url: createPageUrl("Home") },
    { title: "סדנאות", url: createPageUrl("Workshops") },
    { title: "קצת עליי", url: createPageUrl("About") },
    { title: "מתכונים", url: createPageUrl("Recipes") },
    { title: "גלריה", url: createPageUrl("Gallery") },
    { title: "צור קשר", url: createPageUrl("Contact") },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-brand-pink-50 to-white"
    >
      <style>
        {`
          :root {
            --brand-pink-50: #fef7f6;
            --brand-pink-100: #fdebe9;
            --brand-pink-200: #f9d6d4;
            --brand-pink-500: #f2b1ad;
            --brand-pink-600: #e58c85;
            
            --beige-50: #FEFCF7;
            --beige-100: #FDF8ED;
          }
          
          .bg-brand-pink-50 { background-color: var(--brand-pink-50); }
          .bg-brand-pink-100 { background-color: var(--brand-pink-100); }
          .bg-brand-pink-500 { background-color: var(--brand-pink-500); }
          .bg-brand-pink-600 { background-color: var(--brand-pink-600); }
          
          .text-brand-pink-500 { color: var(--brand-pink-500); }
          .text-brand-pink-600 { color: var(--brand-pink-600); }
          .border-brand-pink-200 { border-color: var(--brand-pink-200); }
          .border-brand-pink-500 { border-color: var(--brand-pink-500); }
          
          .from-brand-pink-50 { --tw-gradient-from: var(--brand-pink-50); }
          .from-brand-pink-500 { --tw-gradient-from: var(--brand-pink-500); }
          .to-brand-pink-600 { --tw-gradient-to: var(--brand-pink-600); }
          
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          }
        `}
      </style>

      <AccessibilityMenu />

      {/* Header */}
      <header
        style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
        className="
          fixed top-0 left-0 right-0
          z-50
          h-16
          w-full
          bg-white/90 backdrop-blur-md
          border-b border-brand-pink-100 shadow-sm
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              onClick={() => {
                if (location.pathname === createPageUrl("Home")) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate(createPageUrl("Home"));
                }
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 space-x-reverse cursor-pointer"
            >
              <img
                src="/assets/images/home/shirProflie.webp"
                alt="שיר עזריה - SHIRSHIZ"
                className="w-10 h-10 object-cover rounded-full border-2 border-brand-pink-200"
                loading="lazy"
              />
              <div>
                <span className="text-xl font-bold text-gray-800 leading-none">
                  SHIRSHIZ
                </span>
                <span className="block text-xs text-gray-500 tracking-wide">
                  By Shir Azaria
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`group relative text-sm font-medium transition-colors ${
                    location.pathname === item.url
                      ? "text-brand-pink-600"
                      : "text-gray-700 hover:text-brand-pink-600"
                  }`}
                >
                  {item.title}
                  <span
                    className={`
                      absolute right-0 left-0 -bottom-1 h-[2px] rounded bg-gray-300 transition-all duration-300
                      ${
                        location.pathname === item.url
                          ? "opacity-100 w-full"
                          : "opacity-0 w-0 group-hover:w-full group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              ))}
              <Link to={createPageUrl("Workshops")}>
                <Button
                  className="
                    w-full 
                    bg-brand-pink-500 
                    hover:bg-transparent 
                    hover:text-gray-600 
                    border-2 
                    border-brand-pink-500 
                    text-white 
                    rounded-full 
                    transition 
                    duration-300 
                    ease-in-out
                    px-6
                  "
                >
                  הרשמה לסדנה
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-pink-600 hover:bg-brand-pink-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-pink-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.url
                      ? "text-brand-pink-600 bg-brand-pink-50"
                      : "text-gray-700 hover:text-brand-pink-600 hover:bg-brand-pink-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-2">
                <Link to={createPageUrl("Workshops")} className="w-full">
                  <Button className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full">
                    הרשמה לסדנה
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-pink-50 border-t border-brand-pink-100 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <img
                  src="/assets/images/home/shirProflie.webp"
                  alt="שיר עזריה - SHIRSHIZ"
                  className="w-10 h-10 object-cover rounded-full border-2 border-brand-pink-200"
                  loading="lazy"
                />
                <div>
                  <span className="text-lg font-bold text-gray-800 leading-none">
                    SHIRSHIZ
                  </span>
                  <span className="block text-xs text-gray-500 tracking-wide">
                    By Shir Azaria
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                מעצבת עוגות ומתוקים בהתאמה אישית, מעבירה סדנאות מקצועיות לעיצוב
                עוגות.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                קישורים מהירים
              </h3>
              <ul className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="text-gray-600 hover:text-brand-pink-600 text-sm transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">שימו עוקב</h3>
              <div className="flex items-center space-x-4 space-x-reverse">
                <a
                  href="https://www.instagram.com/shirshiz_/"
                  className="text-gray-500 hover:text-brand-pink-600 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61558124535771"
                  className="text-gray-500 hover:text-brand-pink-600 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@shirshiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-brand-pink-600 transition-colors"
                >
                  <TikTokIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-pink-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 SHIRSHIZ - עוגות מעוצבות וסדנאות. כל הזכויות שמורות.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Made By Omer_cl
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
