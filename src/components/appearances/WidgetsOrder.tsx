import { useState, useEffect } from "react";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";
import { useConfig } from "@/contexts/ConfigContext";

export default function WidgetsOrder() {
  const { config, updateWidgetsOrder } = useConfig();
  const [localOrder, setLocalOrder] = useState<string[]>(config.widgetsOrder);
  const [displayOrder, setDisplayOrder] = useState<string[]>(config.widgetsOrder);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hasDropped, setHasDropped] = useState<boolean>(false);

  useEffect(() => {
    setLocalOrder(config.widgetsOrder);
    setDisplayOrder(config.widgetsOrder);
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
    setDisplayOrder(newOrder);
  };

  const handleMoveDown = (index: number) => {
    if (index === localOrder.length - 1) return;
    const newOrder = [...localOrder];
    [newOrder[index], newOrder[index + 1]] = [
      newOrder[index + 1],
      newOrder[index],
    ];
    setLocalOrder(newOrder);
    setDisplayOrder(newOrder);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    setHasDropped(false);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";

    if (draggedIndex === null || draggedIndex === index) return;

    const newOrder = [...displayOrder];
    const draggedItem = newOrder[draggedIndex];
    newOrder.splice(draggedIndex, 1);
    newOrder.splice(index, 0, draggedItem);

    setDisplayOrder(newOrder);
    setDraggedIndex(index);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasDropped) return;
    setHasDropped(true);

    setLocalOrder(displayOrder);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    if (!hasDropped) {
      setDisplayOrder(localOrder);
    }
    setDraggedIndex(null);
    setHasDropped(false);
  };

  return (
    <div>
      <Heading level={2}>Widgets Order</Heading>
      <Box>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {displayOrder.map((widget, index) => (
            <div
              key={widget}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 8px",
                background: "var(--colors-bg3)",
                borderRadius: "3px",
                cursor: "move",
                opacity: draggedIndex === index ? 0.5 : 1,
                transition: "opacity 0.15s ease",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ color: "var(--colors-comment)" }}>⋮⋮</span>
                <span style={{ textTransform: "capitalize" }}>{widget}</span>
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
                  disabled={index === displayOrder.length - 1}
                  style={{
                    background: "none",
                    border: "1px solid var(--colors-border)",
                    color:
                      index === displayOrder.length - 1
                        ? "var(--colors-comment)"
                        : "var(--colors-text)",
                    cursor:
                      index === displayOrder.length - 1 ? "default" : "pointer",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
