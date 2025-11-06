import type { Category } from "@/components/CategoryContent";

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
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          paddingTop: "12px",
          borderTop: "1px solid var(--colors-border)",
        }}
      >
        <button
          onClick={onSave}
          style={{
            padding: "8px 12px",
            background: "var(--colors-green)",
            color: "var(--colors-bg)",
            border: "none",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          󰆓 Save
        </button>
        <button
          onClick={onClose}
          style={{
            padding: "8px 12px",
            background: "var(--colors-red)",
            color: "var(--colors-bg)",
            border: "none",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          󰅖 Exit
        </button>
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
