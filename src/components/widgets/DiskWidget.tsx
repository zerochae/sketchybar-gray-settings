import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import icons from "@/assets/icon.json";

export default function DiskWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label icon={icons.disk} color="var(--colors-red)">Disk</Label>
      <div className="box-container" style={{ padding: "12px" }}>
        <Checkbox
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          label="Enable"
        />
      </div>
    </div>
  );
}
