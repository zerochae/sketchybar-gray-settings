import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exit } from "@tauri-apps/plugin-process";
import {
  Heading,
  Button,
  KeyHint,
  Label,
  AdvancedIcon,
  AppearanceIcon,
  ExitIcon,
  SaveIcon,
  SuccessIcon,
  WidgetsIcon,
  useModal,
} from "@sketchybar-gray/react";
import { css } from "@sketchybar-gray/panda/css";
import { useConfig } from "@/contexts/ConfigContext";
import { useCategory } from "@/contexts/CategoryContext";
import { CATEGORIES } from "@/constants/categories";
import { ReactNode } from "react";

const categoryIcons: Record<string, ReactNode> = {
  Appearance: <AppearanceIcon />,
  Widgets: <WidgetsIcon />,
  Advanced: <AdvancedIcon />,
};

export default function Sidebar() {
  const { saveConfig } = useConfig();
  const { showModal } = useModal();
  const { activeCategory, setActiveCategory } = useCategory();
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = async () => {
    setSaveSuccess(false);
    try {
      await saveConfig();
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
      showModal("Success", "Settings saved and sketchybar reloaded!", "success");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to save settings!";
      showModal("Error", errorMessage, "error");
    }
  };

  const handleClose = () => {
    exit(0);
  };
  return (
    <aside
      className={css({
        width: "200px",
        height: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        flexShrink: 0,
        overflow: "hidden",
        maxHeight: "100%",
        background: "bg2",
        border: "1px solid token(colors.border)",
      })}
    >
      <div
        className={css({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        })}
      >
        <Heading marginBottom="8px" className={css({ flexShrink: 0 })}>
          Categories
        </Heading>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flexShrink: 0,
          })}
        >
          {CATEGORIES.map((category, index) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant="option"
              active={activeCategory === category}
            >
              <Heading level={2} marginBottom="0">
                <Label icon={categoryIcons[category]} color="cyan">
                  {category}
                </Label>
              </Heading>
              <KeyHint>{index + 1}</KeyHint>
            </Button>
          ))}
        </div>
      </div>

      <div
        className={css({
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "12px 0",
          borderTop: "1px solid token(colors.border)",
        })}
      >
        <Button onClick={handleSave} variant="success">
          <AnimatePresence mode="wait">
            {saveSuccess ? (
              <motion.span
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <SuccessIcon /> Saved!
              </motion.span>
            ) : (
              <motion.span
                key="save"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SaveIcon /> Save
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
        <Button onClick={handleClose} variant="danger">
          <span>
            <ExitIcon /> Exit
          </span>
        </Button>
      </div>
    </aside>
  );
}
