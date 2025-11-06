import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import icons from "@/assets/icon.json";

export default function CaffeinateWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label
        icon={enabled ? icons.coffee_on : icons.coffee_off}
        color="var(--colors-green)"
      >
        Caffeinate
      </Label>
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
