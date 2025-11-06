import type { Category } from "@/components/CategoryContent";

interface SidebarProps {
  categories: Category[];
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  setActiveCategory,
}: SidebarProps) {
  const icons: Record<Category, string> = {
    Appearance: "",
    Widgets: "󰜬",
    Advanced: "󰏙",
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
        <div
          className="section-title"
          style={{ marginBottom: "8px", flexShrink: 0 }}
        >
          Categories
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            flexShrink: 0,
          }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`option-item ${activeCategory === category ? "active" : ""}`}
            >
              <span>
                {icons[category]} {category}
              </span>
              <span className="key-hint">{index + 1}</span>
            </button>
          ))}
        </div>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "4px",
          }}
        >
          <span className="key-hint">↑↓</span>
          <span>Navigate</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "4px",
          }}
        >
          <span className="key-hint">⏎</span>
          <span>Select</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="key-hint">Esc</span>
          <span>Close</span>
        </div>
      </div>
    </aside>
  );
}
