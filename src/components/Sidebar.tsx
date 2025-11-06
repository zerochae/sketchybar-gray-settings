import type { Category } from "@/components/CategoryContent";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import Label from "@/components/common/Label";
import icons from "@/assets/icon.json";

interface SidebarProps {
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  onSave: () => void;
  onClose: () => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  setActiveCategory,
  onSave,
  onClose,
}: SidebarProps) {
  return (
    <aside
      className="container"
      style={{
        width: "200px",
        height: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "0",
        borderTop: "none",
        borderLeft: "none",
        borderBottom: "none",
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
            gap: "2px",
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
              <Label
                icon={icons[category]}
                style={{ marginBottom: 0, fontSize: "inherit", fontWeight: 400 }}
              >
                {category}
              </Label>
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
          paddingTop: "12px",
          borderTop: "1px solid var(--colors-border)",
        }}
      >
        <Button onClick={onSave} variant="success">
          {icons.save} Save
        </Button>
        <Button onClick={onClose} variant="danger">
          {icons.exit} Exit
        </Button>
      </div>

      <div
        style={{
          flexShrink: 0,
          fontSize: "11px",
          color: "var(--colors-comment)",
          paddingTop: "12px",
          borderTop: "1px solid var(--colors-border)",
        }}
      >
        <div
          style={{
            marginBottom: "6px",
            color: "var(--colors-blue)",
            fontWeight: 600,
          }}
        >
          Shortcuts
        </div>
        <Label
          icon={<KeyHint>↑↓</KeyHint>}
          style={{ marginBottom: "4px", fontSize: "11px", fontWeight: 400 }}
        >
          Navigate
        </Label>
        <Label
          icon={<KeyHint>⏎</KeyHint>}
          style={{ marginBottom: "4px", fontSize: "11px", fontWeight: 400 }}
        >
          Select
        </Label>
        <Label icon={<KeyHint>󱊷</KeyHint>} style={{ fontSize: "11px", fontWeight: 400 }}>
          Close
        </Label>
      </div>
    </aside>
  );
}
