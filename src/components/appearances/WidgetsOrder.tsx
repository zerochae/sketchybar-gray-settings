import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Label from "@/components/common/Label";
import { useConfig } from "@/contexts/ConfigContext";
import icons from "@/assets/icon.json";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

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

export default function WidgetsOrder() {
  const { config, updateWidgetsOrder } = useConfig();
  const [localOrder, setLocalOrder] = useState<string[]>(config.widgetsOrder);

  useEffect(() => {
    setLocalOrder(config.widgetsOrder);
  }, [config.widgetsOrder]);

  useEffect(() => {
    updateWidgetsOrder(localOrder);
  }, [localOrder]);

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
    <div>
      <Heading level={2}>Widgets Order</Heading>
      <Box>
        <Reorder.Group
          as="div"
          axis="y"
          values={localOrder}
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
          {localOrder.map((widget, index) => (
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
              <div style={{ display: "flex", gap: "4px" }}>
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
                  disabled={index === localOrder.length - 1}
                  style={{
                    background: "none",
                    border: "1px solid var(--colors-border)",
                    color:
                      index === localOrder.length - 1
                        ? "var(--colors-comment)"
                        : "var(--colors-text)",
                    cursor:
                      index === localOrder.length - 1 ? "default" : "pointer",
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
  );
}
