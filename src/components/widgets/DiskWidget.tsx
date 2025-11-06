import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import WidgetTitle from "@/components/common/WidgetTitle";
import icons from "@/assets/icon.json";

export default function DiskWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <WidgetTitle icon={icons.disk} label="Disk" color="var(--colors-red)" />
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
