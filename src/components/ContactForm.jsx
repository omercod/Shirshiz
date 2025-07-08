import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import PropTypes from "prop-types";

ContactForm.propTypes = {
  productName: PropTypes.string,
};

export default function ContactForm({ productName = null }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName ? `אני רוצה להירשם ל${productName}` : "",
  });

  const formName =
    productName === "סדנת עוגת וינטאג'"
      ? "VintageWorkshop"
      : productName === "קורס מאפס למקצוענית"
        ? "ProWorkshop"
        : "ContactHome";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input
        type="hidden"
        name="subject"
        value={
          productName === "קורס מאפס למקצוענית"
            ? `${formData.name} רוצה להירשם לקורס מאפס למקצוענית`
            : productName === "סדנת עוגת וינטאג'"
              ? `${formData.name} רוצה להירשם לסדנת עוגת וינטאג'`
              : `${formData.name} השאיר/ה לך פניה`
        }
      />
      <input type="hidden" name="bot-field" />

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
          />
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full py-4 text-lg sm:text-xl font-bold shadow-xl transition duration-300 hover:scale-105"
      >
        <Send className="w-6 h-6 ml-2" />
        {productName ? "יאללה, אני רוצה להתחיל!" : "שליחת הודעה"}
      </Button>
    </form>
  );
}
