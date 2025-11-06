import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import CategoryContent, { type Category } from "@/components/CategoryContent";
import Sidebar from "@/components/Sidebar";
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
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

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
