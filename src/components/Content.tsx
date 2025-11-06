import AppearanceSettings from "@/components/settings/AppearanceSettings";
import WidgetsSettings from "@/components/settings/WidgetsSettings";
import AdvancedSettings from "@/components/settings/AdvancedSettings";

export type Category = "Appearance" | "Widgets" | "Advanced";

interface ContentProps {
  category: Category;
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
}

export default function Content({
  category,
  selectedTheme,
  setSelectedTheme,
}: ContentProps) {
  switch (category) {
    case "Appearance":
      return (
        <AppearanceSettings
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />
      );
    case "Widgets":
      return <WidgetsSettings />;
    case "Advanced":
      return <AdvancedSettings />;
    default:
      return null;
  }
}
