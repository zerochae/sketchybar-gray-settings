import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
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
      <Heading level={2} color="var(--colors-orange)">
        <Label
          icon={icons.calendar}
          color="var(--colors-orange)"
          iconColor="var(--colors-orange)"
        >
          Calendar
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
            label="Show Calendar"
          />
        </div>
        {enabled && (
          <div>
            <Heading level={3} style={{ marginBottom: "6px" }}>
              Format
            </Heading>
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
