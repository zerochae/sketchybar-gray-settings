import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function RamWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label icon={icons.memory} color="var(--colors-magenta)">RAM</Label>
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
