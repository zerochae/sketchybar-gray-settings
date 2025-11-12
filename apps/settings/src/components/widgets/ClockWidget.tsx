import { useState, useEffect } from "react";
import { css } from "@sketchybar-gray/panda/css";
import { Checkbox, Label, Heading, Box, Input } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";
import { useConfig } from "@/contexts/ConfigContext";

export default function ClockWidget() {
  const { config, updateWidget } = useConfig();
  const [format, setFormat] = useState("HH:mm");
  const [customFormat, setCustomFormat] = useState("");

  const formats = ["Custom", "MM/DD HH:mm", "HH:mm", "YYYY-MM-DD HH:mm:ss", "HH:mm:ss"];

  useEffect(() => {
    const configFormat = config.widgets.clock.format;
    if (configFormat) {
      if (formats.includes(configFormat)) {
        setFormat(configFormat);
      } else {
        setFormat("Custom");
        setCustomFormat(configFormat);
      }
    }
  }, [config.widgets.clock.format]);

  const handleFormatChange = (newFormat: string) => {
    setFormat(newFormat);
    if (newFormat !== "Custom") {
      updateWidget("clock", "format", newFormat);
    }
  };

  const handleCustomFormatChange = (value: string) => {
    setCustomFormat(value);
    updateWidget("clock", "format", value);
  };

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
        <Heading level={3} marginBottom="6px">
          Format
        </Heading>
        <div className={css({ display: "flex", flexDirection: "column", gap: "4px" })}>
          {formats.map((fmt) => {
            if (fmt === "Custom") {
              return (
                <div key={fmt} className={css({ display: "flex", alignItems: "center" })}>
                  <Checkbox checked={format === fmt} onChange={() => setFormat(fmt)} label="" />
                  <Input
                    value={customFormat}
                    onChange={handleCustomFormatChange}
                    placeholder="e.g., HH:mm:ss"
                    className={css({ flex: 1, marginLeft: "-4px" })}
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
