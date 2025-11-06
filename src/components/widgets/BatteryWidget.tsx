import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function BatteryWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label icon={icons.battery_full} color="var(--colors-orange)">Battery</Label>
      <Box>
        <Checkbox
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          label="Enable"
        />
      </Box>
    </div>
  );
}
