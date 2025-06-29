import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("תודה על פנייתכם! אחזור אליכם בהקדם האפשרי.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label
            htmlFor="home-name"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            שם מלא *
          </Label>
          <Input
            id="home-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="rounded-lg border-gray-300 focus:border-brand-pink-500 focus:ring-brand-pink-500"
            placeholder="השם שלכן"
          />
        </div>
        <div>
          <Label
            htmlFor="home-phone"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            טלפון
          </Label>
          <Input
            id="home-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className="rounded-lg border-gray-300 focus:border-brand-pink-500 focus:ring-brand-pink-500"
            placeholder="054-123-4567"
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor="home-email"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          כתובת מייל *
        </Label>
        <Input
          id="home-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          dir="ltr"
          className="rounded-lg border-gray-300 focus:border-brand-pink-500 focus:ring-brand-pink-500"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <Label
          htmlFor="home-message"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          הודעה *
        </Label>
        <Textarea
          id="home-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="rounded-lg border-gray-300 focus:border-brand-pink-500 focus:ring-brand-pink-500 resize-none"
          placeholder="ספרי לי בקצרה מה תרצי לדעת..."
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-brand-pink-500 hover:bg-brand-pink-600 text-white rounded-full py-3 text-lg font-semibold hover-lift"
      >
        <Send className="w-5 h-5 ml-2" />
        שליחת הודעה
      </Button>
    </form>
  );
}
