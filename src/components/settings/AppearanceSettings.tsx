import { useState } from "react";
import { themeNames } from "@/themes";
import Checkbox from "@/components/common/Checkbox";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";

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
      <Heading style={{ marginBottom: "16px" }}>Appearance</Heading>
      <div>
        <Heading level={2}>Theme</Heading>
        <Box
          padding="8px 12px"
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          {themeNames.map((theme) => (
            <Checkbox
              key={theme}
              checked={selectedTheme === theme}
              onChange={() => setSelectedTheme(theme)}
              label={theme}
            />
          ))}
        </Box>
      </div>

      <div>
        <Heading level={2}>Bar Style</Heading>
        <Box
          padding="8px 12px"
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          {["compact", "block"].map((style) => (
            <Checkbox
              key={style}
              checked={selectedBarStyle === style}
              onChange={() => setSelectedBarStyle(style)}
              label={style}
            />
          ))}
        </Box>
      </div>
    </div>
  );
}
