import { useState, useEffect } from "react";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import Label from "@/components/common/Label";
import Checkbox from "@/components/common/Checkbox";
import { useConfig } from "@/contexts/ConfigContext";
import {
  type WidgetName,
  ALL_WIDGETS,
  WIDGET_COLORS,
  WIDGET_ICONS,
  WIDGET_LABELS,
} from "@/constants/widgets";

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
          {ALL_WIDGETS.map((widget) => (
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
                icon={WIDGET_ICONS[widget]}
                size="12px"
                className=""
                color={WIDGET_COLORS[widget]}
                iconColor={WIDGET_COLORS[widget]}
                style={{ listStyle: "none" }}
              >
                {WIDGET_LABELS[widget]}
              </Label>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
