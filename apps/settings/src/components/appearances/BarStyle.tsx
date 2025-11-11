import Checkbox from "@/components/common/Checkbox";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import { useConfig } from "@/contexts/ConfigContext";

export default function BarStyle() {
  const { config, updateAppearance } = useConfig();
  const selectedBarStyle = config.appearance.barStyle;

  const handleStyleChange = (style: "compact" | "block") => {
    updateAppearance("barStyle", style);
  };

  return (
    <div>
      <Heading level={2}>Bar Style</Heading>
      <Box
        padding="8px 12px"
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        {(["compact", "block"] as const).map((style) => (
          <Checkbox
            key={style}
            checked={selectedBarStyle === style}
            onChange={() => handleStyleChange(style)}
            label={style}
          />
        ))}
      </Box>
    </div>
  );
}
