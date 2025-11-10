import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import icons from "@/assets/icon.json";

export default function ClockWidget() {
  const [enabled, setEnabled] = useState(true);
  const [format, setFormat] = useState("HH:mm");

  const formats = ["MM/DD HH:mm", "HH:mm", "YYYY-MM-DD HH:mm:ss", "HH:mm:ss"];

  return (
    <div>
      <Heading level={2} color="var(--colors-yellow)">
        <Label
          icon={icons.clock}
          color="var(--colors-yellow)"
          iconColor="var(--colors-yellow)"
        >
          Clock
        </Label>
      </Heading>
      <Box>
        <div style={{ marginBottom: enabled ? "12px" : "0" }}>
          <Heading level={3} style={{ marginBottom: "6px" }}>
            Enable
          </Heading>
          <Checkbox
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            label="Show Clock"
          />
        </div>
        {enabled && (
          <div>
            <Heading level={3} style={{ marginBottom: "6px" }}>
              Format
            </Heading>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {formats.map((fmt) => (
                <Checkbox
                  key={fmt}
                  checked={format === fmt}
                  onChange={() => setFormat(fmt)}
                  label={fmt}
                />
              ))}
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}
