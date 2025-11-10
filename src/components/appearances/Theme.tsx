import { themeNames } from "@/themes";
import { useTheme } from "@/hooks/useTheme";
import Checkbox from "@/components/common/Checkbox";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";

export default function Theme() {
  const { selectedTheme, setSelectedTheme } = useTheme();

  return (
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
  );
}
