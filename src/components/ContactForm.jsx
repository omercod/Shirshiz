import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

ContactForm.propTypes = {
  productName: PropTypes.string,
};

export default function ContactForm({ productName = null }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName
      ? `השארתי פרטים ואני רוצה להירשם ל${productName}, תחזרי אליי`
      : "",
  });

  const formName = productName?.includes("וינט")
    ? "VintageWorkshop"
    : productName?.includes("קורס")
      ? "ProWorkshop"
      : "ContactHome";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // חישוב ערכים נוספים
    const phoneInternational = formData.phone.startsWith("0")
      ? "972" + formData.phone.slice(1)
      : formData.phone;

    const resolvedProductName = productName?.includes("וינט")
      ? "סדנת עוגות וינטאג'"
      : productName?.includes("קורס")
        ? "קורס מאפס למקצוענית"
        : "";

    const subject = productName?.includes("וינט")
      ? `${formData.name} רוצה להירשם לסדנת עוגות וינטאג'`
      : productName?.includes("קורס")
        ? `${formData.name} רוצה להירשם לקורס מאפס למקצוענית`
        : `${formData.name} השאיר/ה לך פניה`;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      phoneInternational,
      productName: resolvedProductName,
      message: formData.message,
      subject,
    };

    console.log("🚀 נתוני שליחה בפועל:", templateParams);

    const templateId = productName ? "template_69a6r4z" : "template_hpqii18";

    emailjs
      .send("service_7q2vymr", templateId, templateParams, "U9qOEVxDocEjehtfn")
      .then(() => {
        if (formName === "ProWorkshop") {
          navigate("/thank-you?workshop=pro-course");
        } else if (formName === "VintageWorkshop") {
          navigate("/thank-you?workshop=vintage-cake");
        } else {
          navigate("/thank-you");
        }
      })
      .catch(() => alert("אירעה שגיאה בשליחת הטופס. נסי שוב בעוד כמה דקות 🙏"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="home-name">שם מלא *</Label>
          <Input
            id="home-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="הכניסי את שמך המלא"
          />
        </div>
        <div>
          <Label htmlFor="home-phone">טלפון *</Label>
          <Input
            id="home-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="0501234567"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="home-email">כתובת מייל *</Label>
        <Input
          id="home-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          dir="ltr"
          placeholder="name@email.com"
        />
      </div>

      {!productName && (
        <div>
          <Label htmlFor="home-message">הודעה *</Label>
          <Textarea
            id="home-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="ספרי לי מה היית רוצה לדעת?"
          />
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full py-6 text-lg sm:text-xl md:text-2xl font-bold shadow-xl transition duration-300 hover:scale-105 text-center"
      >
        <Send className="w-6 h-6 ml-2" />
        {productName ? "יאללה, אני רוצה להתחיל!" : "שליחת הודעה"}
      </Button>
    </form>
  );
}
