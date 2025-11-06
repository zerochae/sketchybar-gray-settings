import { useState } from "react";
import { themeNames } from "@/themes";
import Checkbox from "@/components/common/Checkbox";

interface AppearanceSettingsProps {
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
}

export default function AppearanceSettings({
  selectedTheme,
  setSelectedTheme,
}: AppearanceSettingsProps) {
  const [selectedBarStyle, setSelectedBarStyle] = useState<string>("compact");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div className="section-title" style={{ marginBottom: "8px" }}>
          Theme
        </div>
        <div
          className="box-container"
          style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "8px 12px" }}
        >
          {themeNames.map((theme) => (
            <Checkbox
              key={theme}
              checked={selectedTheme === theme}
              onChange={() => setSelectedTheme(theme)}
              label={theme}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="section-title" style={{ marginBottom: "8px" }}>
          Bar Style
        </div>
        <div
          className="box-container"
          style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "8px 12px" }}
        >
          {["compact", "block"].map((style) => (
            <Checkbox
              key={style}
              checked={selectedBarStyle === style}
              onChange={() => setSelectedBarStyle(style)}
              label={style}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
