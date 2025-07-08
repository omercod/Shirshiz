import Layout from "./Layout.jsx";

import Home from "./Home";
import Workshops from "./Workshops";
import About from "./About";
import Recipes from "./Recipes";
import Gallery from "./Gallery";
import Contact from "./Contact";

import VintageCakeWorkshop from "./WorkShopPages/VintageCakeWorkshop.jsx";
import ProCourseWorkshop from "./WorkShopPages/ProCourseWorkshop.jsx";
import RecipePage from "./RecipesPages/RecipePage.jsx";
import ThankYou from "./WorkShopPages/ThankYou";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const PAGES = {
  Home: Home,
  Workshops: Workshops,
  About: About,
  Recipes: Recipes,
  Gallery: Gallery,
  Contact: Contact,
  VintageCakeWorkshop: VintageCakeWorkshop,
  ProCourseWorkshop: ProCourseWorkshop,
};

function _getCurrentPage(url) {
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  let urlLastPart = url.split("/").pop();
  if (urlLastPart.includes("?")) {
    urlLastPart = urlLastPart.split("?")[0];
  }

  const pageName = Object.keys(PAGES).find(
    (page) => page.toLowerCase() === urlLastPart.toLowerCase()
  );
  return pageName || Object.keys(PAGES)[0];
}

function PagesContent() {
  const location = useLocation();
  const currentPage = _getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Workshops" element={<Workshops />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<RecipePage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/vintage-cake-workshop"
          element={<VintageCakeWorkshop />}
        />
        <Route path="/pro-course-workshop" element={<ProCourseWorkshop />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}
