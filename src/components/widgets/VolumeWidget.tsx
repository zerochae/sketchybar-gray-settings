import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function VolumeWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label icon={icons.volume_medium} color="var(--colors-blue)">Volume</Label>
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
