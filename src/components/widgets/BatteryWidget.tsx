import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function BatteryWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Heading level={2} color="var(--colors-orange)">
        <Label
          icon={icons.battery_full}
          color="var(--colors-orange)"
          iconColor="var(--colors-orange)"
        >
          Battery
        </Label>
      </Heading>
      <Box>
        <Heading level={3} style={{ marginBottom: "6px" }}>
          Enable
        </Heading>
        <Checkbox
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          label="Show Battery"
        />
      </Box>
    </div>
  );
}
