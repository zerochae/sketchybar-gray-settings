import { exit } from "@tauri-apps/plugin-process";
import type { Category } from "@/components/Content";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import Label from "@/components/common/Label";
import icons from "@/assets/icon.json";
import { useConfig } from "@/contexts/ConfigContext";
import { useModal } from "@/contexts/ModalContext";
import { useCategory } from "@/contexts/CategoryContext";

export default function Sidebar() {
  const { saveConfig } = useConfig();
  const { showModal } = useModal();
  const { activeCategory, setActiveCategory } = useCategory();

  const categories: Category[] = ["Appearance", "Widgets", "Advanced"];

  const handleSave = async () => {
    try {
      await saveConfig();
      showModal(
        "Success",
        "Settings saved and sketchybar reloaded!",
        "success",
      );
    } catch (error) {
      showModal("Error", "Failed to save settings!", "error");
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
          {categories.map((category, index) => (
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
          {icons.save} Save
        </Button>
        <Button onClick={handleClose} variant="danger">
          {icons.exit} Exit
        </Button>
      </div>

    </aside>
  );
}
