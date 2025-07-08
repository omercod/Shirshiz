import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Accessibility,
  ZoomIn,
  ZoomOut,
  Contrast,
  Link as LinkIcon,
  RefreshCw,
  X,
  Keyboard,
  Type,
  Heading1,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import "/assets/css/accessibility.css";
const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultSettings = useMemo(
    () => ({
      fontSize: 1,
      contrast: "default",
      highlightLinks: false,
      keyboardNav: false,
      disableAnimations: false,
      readableFont: false,
      highlightHeadlines: false,
    }),
    []
  );

  const [settings, setSettings] = useState(defaultSettings);

  const applySettings = useCallback((currentSettings) => {
    // Font Size
    document.documentElement.style.fontSize = `${currentSettings.fontSize * 16}px`;

    // Contrast
    document.body.classList.remove("acc-high-contrast", "acc-dark-mode");
    if (currentSettings.contrast === "dark-mode") {
      document.body.classList.add("acc-dark-mode");
    }

    // Toggled classes
    document.body.classList.toggle(
      "acc-highlight-links",
      currentSettings.highlightLinks
    );
    document.body.classList.toggle(
      "acc-keyboard-nav",
      currentSettings.keyboardNav
    );
    document.body.classList.toggle(
      "acc-no-animations",
      currentSettings.disableAnimations
    );
    document.body.classList.toggle(
      "acc-readable-font",
      currentSettings.readableFont
    );
    document.body.classList.toggle(
      "acc-highlight-headlines",
      currentSettings.highlightHeadlines
    );

    localStorage.setItem(
      "accessibilitySettings",
      JSON.stringify(currentSettings)
    );
  }, []);

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem("accessibilitySettings");
      const initialSettings = savedSettings
        ? JSON.parse(savedSettings)
        : defaultSettings;
      setSettings(initialSettings);
      applySettings(initialSettings);
    } catch (error) {
      console.error("Could not load accessibility settings:", error);
      applySettings(defaultSettings);
    }
  }, [applySettings, defaultSettings]);

  const toggleSetting = (key) => {
    setSettings((prev) => {
      const newSettings = { ...prev, [key]: !prev[key] };
      applySettings(newSettings);
      return newSettings;
    });
  };

  const changeFontSize = (amount) => {
    setSettings((prev) => {
      const newSize = Math.max(0.8, Math.min(1.5, prev.fontSize + amount));
      const newSettings = { ...prev, fontSize: newSize };
      applySettings(newSettings);
      return newSettings;
    });
  };

  const setContrast = () => {
    setSettings((prev) => {
      const newContrast =
        prev.contrast === "dark-mode" ? "default" : "dark-mode";
      const newSettings = { ...prev, contrast: newContrast };
      applySettings(newSettings);
      return newSettings;
    });
  };

  const resetSettings = () => {
    applySettings(defaultSettings);
    setSettings(defaultSettings);
  };

  const accessibilityOptions = [
    {
      id: "keyboardNav",
      label: "ניווט מקלדת",
      icon: Keyboard,
      action: () => toggleSetting("keyboardNav"),
    },
    {
      id: "contrast",
      label: "ניגודיות כהה",
      icon: Contrast,
      action: setContrast,
    },
    {
      id: "readableFont",
      label: "גופן קריא",
      icon: Type,
      action: () => toggleSetting("readableFont"),
    },
    {
      id: "highlightHeadlines",
      label: "סימון כותרות",
      icon: Heading1,
      action: () => toggleSetting("highlightHeadlines"),
    },
    {
      id: "highlightLinks",
      label: "סימון קישורים",
      icon: LinkIcon,
      action: () => toggleSetting("highlightLinks"),
    },
  ];

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-5 mb-16 left-4 z-[100] rounded-full h-12 w-12 shadow-lg bg-brand-pink-500 hover:bg-brand-pink-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="פתח תפריט נגישות"
      >
        <Accessibility className="h-12 w-12 text-white scale-150" />
      </Button>

      {isOpen && (
        <div dir="rtl" className="fixed bottom-24 left-10 z-[100] w-80">
          <Card className="shadow-2xl border-gray-300">
            <CardHeader className="bg-brand-pink-500 text-white p-4 flex flex-row items-center justify-between rounded-t-lg">
              <CardTitle className="text-lg flex items-center gap-2">
                <Accessibility className="h-8 w-8" />
                תפריט נגישות
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 hover:text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </CardHeader>
            <CardContent className="p-2 space-y-1">
              <div className="p-2">
                <p className="font-semibold text-sm mb-2 text-gray-700">
                  גודל טקסט
                </p>
                <div className="flex items-center justify-around">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changeFontSize(-0.1)}
                    aria-label="הקטן טקסט"
                  >
                    <ZoomOut className="w-5 h-5 ml-1" /> הקטן טקסט
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changeFontSize(0.1)}
                    aria-label="הגדל טקסט"
                  >
                    <ZoomIn className="w-5 h-5 ml-1" /> הגדל טקסט
                  </Button>
                </div>
              </div>

              <Separator />

              {accessibilityOptions.map((opt) => (
                <div
                  key={opt.id}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
                >
                  <Label
                    htmlFor={opt.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <opt.icon className="w-6 h-6 text-gray-600" />
                    <span className="font-medium text-gray-800">
                      {opt.label}
                    </span>
                  </Label>
                  <div dir="ltr">
                    <Switch
                      id={opt.id}
                      checked={
                        opt.id === "contrast"
                          ? settings.contrast === "dark-mode"
                          : settings[opt.id]
                      }
                      onCheckedChange={opt.action}
                      className={`transition-transform duration-200 ${
                        (
                          opt.id === "contrast"
                            ? settings.contrast === "dark-mode"
                            : settings[opt.id]
                        )
                          ? "scale-110 border-2 border-brand-pink-500"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              ))}

              <Separator />

              <div className="p-2 flex justify-center items-center">
                <Button
                  variant="ghost"
                  onClick={resetSettings}
                  className="text-sm text-gray-600 hover:bg-gray-200"
                >
                  <RefreshCw className="w-5 h-5 ml-2" /> איפוס הגדרות
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;
