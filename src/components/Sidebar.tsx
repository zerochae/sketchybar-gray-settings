import type { Category } from "@/components/Content";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";
import KeyHint from "@/components/common/KeyHint";
import Label from "@/components/common/Label";
import Shortcuts from "@/components/common/Shortcuts";
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

      <Shortcuts />
    </aside>
  );
}
