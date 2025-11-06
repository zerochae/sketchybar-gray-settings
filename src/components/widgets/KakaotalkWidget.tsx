import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

export default function KakaotalkWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Label
        icon={<KakaotalkIcon color="var(--colors-yellow)" />}
        color="var(--colors-yellow)"
      >
        KakaoTalk
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
