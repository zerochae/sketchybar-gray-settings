import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function DiskWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label icon={icons.disk} color="var(--colors-red)">Disk</Label>
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
