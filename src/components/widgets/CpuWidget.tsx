import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import WidgetTitle from "@/components/common/WidgetTitle";
import icons from "@/assets/icon.json";

export default function CpuWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <WidgetTitle icon={icons.cpu} label="CPU" color="var(--colors-blue)" />
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
