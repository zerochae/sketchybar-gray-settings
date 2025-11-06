import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import WidgetTitle from "@/components/common/WidgetTitle";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

export default function KakaotalkWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <WidgetTitle
        icon={<KakaotalkIcon color="var(--colors-yellow)" />}
        label="KakaoTalk"
        color="var(--colors-yellow)"
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
