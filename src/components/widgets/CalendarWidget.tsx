import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Box from "@/components/common/Box";
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
      <Label icon={icons.calendar} color="var(--colors-orange)">Calendar</Label>
      <Box>
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
      </Box>
    </div>
  );
}
