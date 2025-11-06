import { useState } from "react";
import { exit } from "@tauri-apps/plugin-process";
import CategoryContent, { type Category } from "@/components/CategoryContent";
import Sidebar from "@/components/Sidebar";
import Banner from "@/components/common/Banner";
import { useTheme } from "@/hooks/useTheme";

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("Appearance");
  const { selectedTheme, setSelectedTheme } = useTheme();

  const categories: Category[] = ["Appearance", "Widgets", "Advanced"];

  const handleSave = () => {
    console.log("Settings saved");
  };

  const handleClose = () => {
    exit(0);
  };

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
          onSave={handleSave}
          onClose={handleClose}
        />

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Banner />
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
