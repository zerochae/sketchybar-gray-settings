import { useState, useEffect } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import Input from "@/components/common/Input";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";
import { useConfig } from "@/contexts/ConfigContext";

export default function CalendarWidget() {
  const { config, updateWidget } = useConfig();
  const [format, setFormat] = useState("YYYY-MM-DD");
  const [customFormat, setCustomFormat] = useState("");

  const formats = [
    "Custom",
    "YYYY-MM-DD",
    "YYYY-MM-DD (ddd)",
    "ddd, YYYY-MM-DD",
    "MM/DD",
    "MM/DD (ddd)",
    "ddd, MM/DD",
  ];

  useEffect(() => {
    const configFormat = config.widgets.calendar.format;
    if (configFormat) {
      if (formats.includes(configFormat)) {
        setFormat(configFormat);
      } else {
        setFormat("Custom");
        setCustomFormat(configFormat);
      }
    }
  }, [config.widgets.calendar.format]);

  const handleFormatChange = (newFormat: string) => {
    setFormat(newFormat);
    if (newFormat !== "Custom") {
      updateWidget("calendar", "format", newFormat);
    }
  };

  const handleCustomFormatChange = (value: string) => {
    setCustomFormat(value);
    updateWidget("calendar", "format", value);
  };

  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.calendar}>
        <Label
          icon={WIDGET_ICONS.calendar}
          color={WIDGET_COLORS.calendar}
          iconColor={WIDGET_COLORS.calendar}
        >
          {WIDGET_LABELS.calendar}
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
                    onChange={handleCustomFormatChange}
                    placeholder="e.g., YYYY-MM-DD HH:mm"
                    style={{ flex: 1, marginLeft: "-4px" }}
                  />
                </div>
              );
            }
            return (
              <Checkbox
                key={fmt}
                checked={format === fmt}
                onChange={() => handleFormatChange(fmt)}
                label={fmt}
              />
            );
          })}
        </div>
      </Box>
    </div>
  );
}
