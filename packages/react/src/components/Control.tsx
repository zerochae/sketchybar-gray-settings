import React, { useState } from "react";
import { motion } from "framer-motion";
import { css } from "@sketchybar-gray/panda/css";

interface ControlProps {
  value: number;
  onChange: (value: number) => void;
  onDragEnd?: (value: number) => void;
  min?: number;
  max?: number;
  height?: number;
  width?: number;
  label?: string;
  vertical?: boolean;
}

export default function Control({
  value,
  onChange,
  onDragEnd,
  min = 0,
  max = 100,
  height = 200,
  width = 200,
  label = "",
  vertical = true,
}: ControlProps) {
  const [isDragging, setIsDragging] = useState(false);

  const percentage = ((value - min) / (max - min)) * 100;
  const segments = vertical ? 10 : 20;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateValueFromMouse(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateValueFromMouse(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (onDragEnd) {
      onDragEnd(value);
    }
  };

  const updateValueFromMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    if (vertical) {
      const y = e.clientY - rect.top;
      const newPercentage = 100 - (y / rect.height) * 100;
      const clampedPercentage = Math.max(0, Math.min(100, newPercentage));
      const newValue = min + (clampedPercentage / 100) * (max - min);
      onChange(Math.round(newValue));
    } else {
      const x = e.clientX - rect.left;
      const newPercentage = (x / rect.width) * 100;
      const clampedPercentage = Math.max(0, Math.min(100, newPercentage));
      const newValue = min + (clampedPercentage / 100) * (max - min);
      onChange(Math.round(newValue));
    }
  };

  const renderHorizontalSlider = () => {
    const filledSegments = Math.round((percentage / 100) * segments);
    const emptySegments = segments - filledSegments;

    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        })}
      >
        <motion.div
          className={css({
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            cursor: "pointer",
            userSelect: "none",
            width: `${width}px`,
          })}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          whileTap={{ scale: 0.98 }}
        >
          <div className={css({ color: "blue" })}>├</div>
          {Array.from({ length: filledSegments }).map((_, i) => (
            <motion.div
              key={`filled-${i}`}
              className={css({ color: "blue" })}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              ━
            </motion.div>
          ))}
          {Array.from({ length: emptySegments }).map((_, i) => (
            <motion.div key={`empty-${i}`} className={css({ color: "comment", opacity: 0.4 })}>
              ━
            </motion.div>
          ))}
          <div className={css({ color: "blue" })}>┤</div>
        </motion.div>
        <div
          className={css({
            fontSize: "12px",
            color: "text",
            fontWeight: 600,
            textAlign: "center",
          })}
        >
          {label && `${label} `}
          <motion.span
            key={value}
            initial={{ color: "var(--colors-blue)" }}
            animate={{ color: "var(--colors-text)" }}
            transition={{ duration: 0.15 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
    );
  };

  const renderVerticalSlider = () => {
    const filledSegments = Math.round((percentage / 100) * segments);
    const emptySegments = segments - filledSegments;

    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        })}
      >
        <motion.div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "1.2",
            cursor: "pointer",
            userSelect: "none",
            height: `${height}px`,
            justifyContent: "space-between",
          })}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          whileTap={{ scale: 0.98 }}
        >
          <div className={css({ color: "blue" })}>┌───┐</div>
          {Array.from({ length: emptySegments }).map((_, i) => (
            <div key={`empty-${i}`} className={css({ color: "comment", opacity: 0.4 })}>
              │░░░│
            </div>
          ))}
          {Array.from({ length: filledSegments }).map((_, i) => (
            <motion.div
              key={`filled-${i}`}
              className={css({ color: "blue" })}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            >
              │███│
            </motion.div>
          ))}
          <div className={css({ color: "blue" })}>└───┘</div>
        </motion.div>
        <div
          className={css({
            fontFamily: "mono",
            fontSize: "12px",
            color: "text",
            fontWeight: 600,
          })}
        >
          {label && `${label} `}
          <motion.span
            key={value}
            initial={{ color: "var(--colors-blue)" }}
            animate={{ color: "var(--colors-text)" }}
            transition={{ duration: 0.15 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
    );
  };

  return vertical ? renderVerticalSlider() : renderHorizontalSlider();
}
