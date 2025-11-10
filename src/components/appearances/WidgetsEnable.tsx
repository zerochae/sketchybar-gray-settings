import { useState, useEffect } from "react";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Label from "@/components/common/Label";
import Checkbox from "@/components/common/Checkbox";
import { useConfig } from "@/contexts/ConfigContext";
import icons from "@/assets/icon.json";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

type WidgetName =
  | "clock"
  | "calendar"
  | "weather"
  | "caffeinate"
  | "volume"
  | "battery"
  | "disk"
  | "ram"
  | "cpu"
  | "kakaotalk";

const getWidgetIcon = (
  widget: string,
  color: string,
): string | React.ReactNode => {
  const iconMap: Record<string, string | React.ReactNode> = {
    clock: icons.clock,
    weather: icons.weather,
    caffeinate: icons.coffee_on,
    volume: icons.volume_high,
    battery: icons.battery_full,
    disk: icons.disk,
    ram: icons.memory,
    cpu: icons.cpu,
    calendar: icons.calendar,
    kakaotalk: <KakaotalkIcon color={color} size={16} />,
  };

  return iconMap[widget];
};

const widgetColors: Record<string, string> = {
  clock: "var(--colors-yellow)",
  calendar: "var(--colors-tangerine)",
  weather: "var(--colors-cyan)",
  caffeinate: "var(--colors-green)",
  volume: "var(--colors-blue)",
  battery: "var(--colors-orange)",
  disk: "var(--colors-red)",
  ram: "var(--colors-magenta)",
  cpu: "var(--colors-blue)",
  kakaotalk: "var(--colors-yellow)",
};

const allWidgets: WidgetName[] = [
  "clock",
  "calendar",
  "weather",
  "caffeinate",
  "volume",
  "battery",
  "disk",
  "ram",
  "cpu",
  "kakaotalk",
];

export default function WidgetsEnable() {
  const { config, updateWidget, updateWidgetsOrder } = useConfig();
  const [localOrder, setLocalOrder] = useState<string[]>(config.widgetsOrder);

  useEffect(() => {
    setLocalOrder(config.widgetsOrder);
  }, [config.widgetsOrder]);

  const handleToggleWidget = (widget: WidgetName) => {
    const isEnabled = config.widgets[widget].enabled;
    updateWidget(widget, "enabled", !isEnabled);

    if (isEnabled) {
      const newOrder = localOrder.filter((w) => w !== widget);
      setLocalOrder(newOrder);
      updateWidgetsOrder(newOrder);
    } else {
      const newOrder = localOrder.includes(widget) ? localOrder : [...localOrder, widget];
      setLocalOrder(newOrder);
      updateWidgetsOrder(newOrder);
    }
  };

  return (
    <div>
      <Heading level={2}>Enable Widgets</Heading>
      <Box>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {allWidgets.map((widget) => (
            <div
              key={widget}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 8px",
                background: "var(--colors-bg3)",
                borderRadius: "3px",
              }}
            >
              <Checkbox
                checked={config.widgets[widget].enabled}
                onChange={() => handleToggleWidget(widget)}
                label=""
              />
              <Label
                icon={getWidgetIcon(widget, widgetColors[widget])}
                size="12px"
                className=""
                color={widgetColors[widget]}
                iconColor={widgetColors[widget]}
                style={{ listStyle: "none" }}
              >
                <span style={{ textTransform: "capitalize" }}>{widget}</span>
              </Label>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
