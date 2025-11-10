import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Label from "@/components/common/Label";
import Checkbox from "@/components/common/Checkbox";
import { useConfig } from "@/contexts/ConfigContext";
import icons from "@/assets/icon.json";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

type WidgetName = "clock" | "calendar" | "weather" | "caffeinate" | "volume" | "battery" | "disk" | "ram" | "cpu" | "kakaotalk";

const getWidgetIcon = (widget: string, color: string): string | React.ReactNode => {
  const iconMap: Record<string, string> = {
    clock: icons.clock,
    weather: icons.weather,
    caffeinate: icons.coffee_on,
    volume: icons.volume_high,
    battery: icons.battery_full,
    disk: icons.disk,
    ram: icons.memory,
    cpu: icons.cpu,
    calendar: icons.calendar,
  };

  if (widget === "kakaotalk") {
    return <KakaotalkIcon color={color} size={16} />;
  }

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

export default function WidgetsOrder() {
  const { config, updateWidgetsOrder, updateWidget } = useConfig();
  const [localOrder, setLocalOrder] = useState<string[]>(config.widgetsOrder);

  useEffect(() => {
    setLocalOrder(config.widgetsOrder);
  }, [config.widgetsOrder]);

  useEffect(() => {
    updateWidgetsOrder(localOrder);
  }, [localOrder]);

  const enabledWidgets = localOrder.filter((widget) =>
    config.widgets[widget as WidgetName]?.enabled
  );

  const disabledWidgets = allWidgets.filter(
    (widget) => !config.widgets[widget].enabled
  );

  const handleToggleWidget = (widget: WidgetName) => {
    const isEnabled = config.widgets[widget].enabled;
    updateWidget(widget, "enabled", !isEnabled);

    if (isEnabled) {
      setLocalOrder((prev) => prev.filter((w) => w !== widget));
    } else {
      setLocalOrder((prev) => {
        if (!prev.includes(widget)) {
          return [...prev, widget];
        }
        return prev;
      });
    }
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...localOrder];
    [newOrder[index - 1], newOrder[index]] = [
      newOrder[index],
      newOrder[index - 1],
    ];
    setLocalOrder(newOrder);
  };

  const handleMoveDown = (index: number) => {
    if (index === localOrder.length - 1) return;
    const newOrder = [...localOrder];
    [newOrder[index], newOrder[index + 1]] = [
      newOrder[index + 1],
      newOrder[index],
    ];
    setLocalOrder(newOrder);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <Heading level={2}>Widget Order</Heading>
        <Box>
          <Reorder.Group
            as="div"
            axis="y"
            values={enabledWidgets}
            onReorder={setLocalOrder}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: 0,
              margin: 0,
              alignItems: "stretch",
            }}
          >
            {enabledWidgets.map((widget, index) => (
            <Reorder.Item
              as="div"
              key={widget}
              value={widget}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 8px",
                background: "var(--colors-bg3)",
                borderRadius: "3px",
                cursor: "grab",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flex: 1,
                }}
              >
                <span style={{ color: "var(--colors-comment)" }}>⋮⋮</span>
                <Label
                  icon={getWidgetIcon(widget, widgetColors[widget])}
                  size="12px"
                  color={widgetColors[widget]}
                  iconColor={widgetColors[widget]}
                  style={{ listStyle: "none" }}
                >
                  <span style={{ textTransform: "capitalize" }}>{widget}</span>
                </Label>
              </div>
              <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                <button
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  style={{
                    background: "none",
                    border: "1px solid var(--colors-border)",
                    color:
                      index === 0
                        ? "var(--colors-comment)"
                        : "var(--colors-text)",
                    cursor: index === 0 ? "default" : "pointer",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  ↑
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  disabled={index === enabledWidgets.length - 1}
                  style={{
                    background: "none",
                    border: "1px solid var(--colors-border)",
                    color:
                      index === enabledWidgets.length - 1
                        ? "var(--colors-comment)"
                        : "var(--colors-text)",
                    cursor:
                      index === enabledWidgets.length - 1 ? "default" : "pointer",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  ↓
                </button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Box>
      </div>

      <div>
        <Heading level={2}>Available Widgets</Heading>
        <Box>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {disabledWidgets.map((widget) => (
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
    </div>
  );
}
