import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import Input from "@/components/common/Input";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function ClockWidget() {
  const [format, setFormat] = useState("HH:mm");
  const [customFormat, setCustomFormat] = useState("");

  const formats = [
    "Custom",
    "MM/DD HH:mm",
    "HH:mm",
    "YYYY-MM-DD HH:mm:ss",
    "HH:mm:ss",
  ];

  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.clock}>
        <Label
          icon={WIDGET_ICONS.clock}
          color={WIDGET_COLORS.clock}
          iconColor={WIDGET_COLORS.clock}
        >
          {WIDGET_LABELS.clock}
        </Label>
      </Heading>
      <Box>
        <Heading level={3} style={{ marginBottom: "6px" }}>
          Format
        </Heading>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          {formats.map((fmt) => {
            if (fmt === "Custom") {
              return (
                <div
                  key={fmt}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Checkbox
                    checked={format === fmt}
                    onChange={() => setFormat(fmt)}
                    label=""
                  />
                  <Input
                    value={customFormat}
                    onChange={setCustomFormat}
                    placeholder="e.g., HH:mm:ss"
                    style={{ flex: 1, marginLeft: "-4px" }}
                  />
                </div>
              );
            }
            return (
              <Checkbox
                key={fmt}
                checked={format === fmt}
                onChange={() => setFormat(fmt)}
                label={fmt}
              />
            );
          })}
        </div>
      </Box>
    </div>
  );
}
