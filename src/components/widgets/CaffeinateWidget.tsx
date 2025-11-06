import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import WidgetTitle from "@/components/common/WidgetTitle";
import icons from "@/assets/icon.json";

export default function CaffeinateWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <WidgetTitle
        icon={enabled ? icons.coffee_on : icons.coffee_off}
        label="Caffeinate"
        color={"var(--colors-green)"}
      />
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
