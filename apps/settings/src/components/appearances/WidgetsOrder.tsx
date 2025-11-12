import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { css } from "@sketchybar-gray/panda/css";
import { Box, Heading, Label } from "@sketchybar-gray/react";
import { useConfig } from "@/contexts/ConfigContext";
import { type WidgetName, WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function WidgetsOrder() {
  const { config, updateWidgetsOrder } = useConfig();
  const [localOrder, setLocalOrder] = useState<string[]>(config.widgetsOrder);

  useEffect(() => {
    setLocalOrder(config.widgetsOrder);
  }, [config.widgetsOrder]);

  useEffect(() => {
    updateWidgetsOrder(localOrder);
  }, [localOrder]);

  const enabledWidgets = localOrder.filter(
    (widget) => config.widgets[widget as WidgetName]?.enabled
  );

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...localOrder];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    setLocalOrder(newOrder);
  };

  const handleMoveDown = (index: number) => {
    if (index === localOrder.length - 1) return;
    const newOrder = [...localOrder];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    setLocalOrder(newOrder);
  };

  return (
    <div>
      <Heading level={2}>Widget Order</Heading>
      <Box>
        <Reorder.Group
          as="div"
          axis="y"
          values={enabledWidgets}
          onReorder={setLocalOrder}
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            padding: 0,
            margin: 0,
            alignItems: "stretch",
          })}
        >
          {enabledWidgets.map((widget, index) => (
            <Reorder.Item
              as="div"
              key={widget}
              value={widget}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={css({
                width: "100%",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 8px",
                background: "bg3",
                borderRadius: "3px",
                cursor: "grab",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flex: 1,
                })}
              >
                <span className={css({ color: "comment" })}>⋮⋮</span>
                <Label
                  icon={WIDGET_ICONS[widget as WidgetName]}
                  size="12px"
                  color={WIDGET_COLORS[widget as WidgetName]}
                  iconColor={WIDGET_COLORS[widget as WidgetName]}
                  className={css({ listStyle: "none" })}
                >
                  {WIDGET_LABELS[widget as WidgetName]}
                </Label>
              </div>
              <div
                className={css({
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                })}
              >
                <button
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  style={{
                    background: "none",
                    padding: "2px 6px",
                    color: index === 0 ? "var(--colors-comment)" : "var(--colors-text)",
                    cursor: index === 0 ? "default" : "pointer",
                  }}
                >
                  ↑
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  disabled={index === enabledWidgets.length - 1}
                  style={{
                    background: "none",
                    padding: "2px 6px",
                    color:
                      index === enabledWidgets.length - 1
                        ? "var(--colors-comment)"
                        : "var(--colors-text)",
                    cursor: index === enabledWidgets.length - 1 ? "default" : "pointer",
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
