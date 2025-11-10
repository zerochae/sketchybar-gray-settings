import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Checkbox from "@/components/common/Checkbox";
import { useConfig } from "@/contexts/ConfigContext";

export default function ConfigVisible() {
  const { config, updateAdvanced } = useConfig();

  const handleToggle = () => {
    updateAdvanced("configVisible", !config.advanced.configVisible);
  };

  return (
    <div>
      <Heading level={2}>Config Visible</Heading>
      <Box>
        <Checkbox
          checked={config.advanced.configVisible}
          onChange={handleToggle}
          label="Show config in bar"
        />
      </Box>
    </div>
  );
}
