import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function CpuWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Heading level={2} color="var(--colors-blue)">
        <Label
          icon={icons.cpu}
          color="var(--colors-blue)"
          iconColor="var(--colors-blue)"
        >
          CPU
        </Label>
      </Heading>
      <Box>
        <Heading level={3} style={{ marginBottom: "6px" }}>
          Enable
        </Heading>
        <Checkbox
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          label="Show CPU"
        />
      </Box>
    </div>
  );
}
