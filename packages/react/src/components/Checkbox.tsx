import { motion } from "framer-motion";
import { css } from "@sketchybar-gray/panda/css";
import { ICONS_TEXTS } from "../constants/icons";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  disabled?: boolean;
}

export default function Checkbox({ checked, onChange, label, disabled = false }: CheckboxProps) {
  return (
    <motion.label
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        opacity: disabled ? 0.5 : 1,
      })}
      onClick={disabled ? undefined : onChange}
      whileHover={disabled ? {} : { x: 2 }}
      transition={{
        type: "tween" as const,
        ease: "easeOut",
        duration: 0.1,
      }}
    >
      <motion.span
        className={css({
          fontFamily: "mono",
          fontSize: "13px",
          color: checked ? "blue" : "comment",
          fontWeight: 600,
          display: "inline-block",
        })}
        animate={{
          scale: checked ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {checked ? `[${ICONS_TEXTS.check}]` : "[ ]"}
      </motion.span>
      <span>{label}</span>
    </motion.label>
  );
}
