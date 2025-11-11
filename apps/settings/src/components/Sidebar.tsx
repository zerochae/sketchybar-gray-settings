import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exit } from "@tauri-apps/plugin-process";
import { Heading, Button, KeyHint, Label } from "@sketchybar-gray/react";
import icons from "@/assets/icon.json";
import { useConfig } from "@/contexts/ConfigContext";
import { useModal } from "@/contexts/ModalContext";
import { useCategory } from "@/contexts/CategoryContext";
import { CATEGORIES } from "@/constants/categories";

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
      showModal(
        "Success",
        "Settings saved and sketchybar reloaded!",
        "success",
      );
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
      className="container"
      style={{
        width: "200px",
        height: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        flexShrink: 0,
        overflow: "hidden",
        maxHeight: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Heading style={{ marginBottom: "8px", flexShrink: 0 }}>
          Categories
        </Heading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          {CATEGORIES.map((category, index) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant="option"
              active={activeCategory === category}
            >
              <Heading level={2} style={{ marginBottom: 0 }}>
                <Label
                  icon={icons[category as keyof typeof icons]}
                  color="var(--colors-cyan)"
                  style={{ fontSize: "inherit", fontWeight: 400 }}
                >
                  {category}
                </Label>
              </Heading>
              <KeyHint>{index + 1}</KeyHint>
            </Button>
          ))}
        </div>
      </div>

      <div
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "12px 0",
          borderTop: "1px solid var(--colors-border)",
        }}
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
                {icons.success} Saved!
              </motion.span>
            ) : (
              <motion.span
                key="save"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {icons.save} Save
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
        <Button onClick={handleClose} variant="danger">
          {icons.exit} Exit
        </Button>
      </div>

    </aside>
  );
}
