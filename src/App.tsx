import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import CategoryContent, { type Category } from "@/components/CategoryContent";
import { themes } from "@/themes";

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("Appearance");
  const [selectedTheme, setSelectedTheme] = useState<string>("onedark");

  useEffect(() => {
    invoke<string>("read_config_theme")
      .then((theme) => {
        if (themes[theme]) {
          setSelectedTheme(theme);
        }
      })
      .catch((error) => {
        console.error("Failed to read theme from config:", error);
      });
  }, []);

  useEffect(() => {
    const theme = themes[selectedTheme];
    if (theme) {
      const styleId = "dynamic-theme";
      let styleEl = document.getElementById(styleId) as HTMLStyleElement;

      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }

      styleEl.textContent = theme.css.replace(
        `[data-panda-theme=${selectedTheme}]`,
        ":root",
      );

      invoke("write_config_theme", { theme: selectedTheme }).catch((error) => {
        console.error("Failed to write theme to config:", error);
      });
    }
  }, [selectedTheme]);

  const icons: Record<Category, string> = {
    Appearance: "",
    Widgets: "󰜬",
    Advanced: "󰏙",
  };

  const categories: Category[] = ["Appearance", "Widgets", "Advanced"];

  return (
    <div
      className="flex flex-col h-full"
      style={{
        background: "var(--colors-bg)",
        color: "var(--colors-text)",
        padding: "16px",
        overscrollBehavior: "none",
        overscrollBehaviorY: "none",
        WebkitOverflowScrolling: "auto",
        touchAction: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          flexDirection: "row",
          height: "calc(100vh - 32px)",
        }}
      >
        {/* Sidebar */}
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

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div
            style={{
              marginBottom: "24px",
              padding: "16px",
              background: "var(--colors-bg2)",
              border: "1px solid var(--colors-border)",
              borderRadius: "4px",
              fontFamily: "monospace",
              fontSize: "10px",
              lineHeight: "1.2",
              color: "var(--colors-blue)",
              whiteSpace: "pre",
              overflow: "hidden",
            }}
          >
            {`┌─┐┬─┐┌─┐┬ ┬   ┌─┐┬┌─┌─┐┌┬┐┌─┐┬ ┬┬ ┬   ┌┐ ┌─┐┬─┐
│ ┬├┬┘├─┤└┬┘───└─┐├┴┐├┤  │ │  ├─┤└┬┘───├┴┐├─┤├┬┘
└─┘┴└─┴ ┴ ┴    └─┘┴ ┴└─┘ ┴ └─┘┴ ┴ ┴    └─┘┴ ┴┴└─`}
          </div>
          <CategoryContent
            category={activeCategory}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
