import AppearanceSettings from "@/components/settings/AppearanceSettings";
import WidgetsSettings from "@/components/settings/WidgetsSettings";
import AdvancedSettings from "@/components/settings/AdvancedSettings";
import { useCategory } from "@/contexts/CategoryContext";

export type Category = "Appearance" | "Widgets" | "Advanced";

export default function Content() {
  const { activeCategory } = useCategory();

  switch (activeCategory) {
    case "Appearance":
      return <AppearanceSettings />;
    case "Widgets":
      return <WidgetsSettings />;
    case "Advanced":
      return <AdvancedSettings />;
    default:
      return null;
  }
}
