import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

export default function KakaotalkWidget() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <Heading level={2} color="var(--colors-yellow)">
        <Label
          icon={<KakaotalkIcon color="var(--colors-yellow)" />}
          color="var(--colors-yellow)"
        >
          KakaoTalk
        </Label>
      </Heading>
      <Box>
        <Heading level={3} style={{ marginBottom: "6px" }}>
          Enable
        </Heading>
        <Checkbox
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          label="Show KakaoTalk"
        />
      </Box>
    </div>
  );
}
