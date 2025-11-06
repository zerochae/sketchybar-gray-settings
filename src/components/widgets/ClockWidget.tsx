import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import icons from "@/assets/icon.json";

export default function ClockWidget() {
  const [enabled, setEnabled] = useState(true);
  const [format, setFormat] = useState("HH:mm");

  const formats = ["MM/DD HH:mm", "HH:mm", "YYYY-MM-DD HH:mm:ss", "HH:mm:ss"];

  return (
    <div>
      <Label icon={icons.clock} color="var(--colors-yellow)">Clock</Label>
      <div className="box-container" style={{ padding: "12px" }}>
        <div style={{ marginBottom: enabled ? "12px" : "0" }}>
          <Checkbox
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            label="Enable"
          />
        </div>
        {enabled && (
          <div style={{ paddingLeft: "24px" }}>
            <div style={{ fontSize: "11px", color: "var(--colors-comment)", marginBottom: "6px" }}>
              Format
            </div>
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
      </div>
    </div>
  );
}
