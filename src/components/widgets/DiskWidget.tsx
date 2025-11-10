import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function DiskWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Heading level={2} color="var(--colors-red)">
        <Label
          icon={icons.disk}
          color="var(--colors-red)"
          iconColor="var(--colors-red)"
        >
          Disk
        </Label>
      </Heading>
      <Box>
        <Heading level={3} style={{ marginBottom: "6px" }}>
          Enable
        </Heading>
        <Checkbox
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          label="Show Disk"
        />
      </Box>
    </div>
  );
}
