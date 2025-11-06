import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import WidgetTitle from "@/components/common/WidgetTitle";
import icons from "@/assets/icon.json";

export default function CalendarWidget() {
  const [enabled, setEnabled] = useState(true);
  const [format, setFormat] = useState("YYYY-MM-DD");

  const formats = [
    "YYYY-MM-DD",
    "YYYY-MM-DD (ddd)",
    "ddd, YYYY-MM-DD",
    "MM/DD",
    "MM/DD (ddd)",
    "ddd, MM/DD",
  ];

  return (
    <div>
      <WidgetTitle icon={icons.calendar} label="Calendar" color="var(--colors-orange)" />
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
            <div
              style={{
                fontSize: "11px",
                color: "var(--colors-comment)",
                marginBottom: "6px",
              }}
            >
              Format
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
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
