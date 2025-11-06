import { useState } from "react";
import { exit } from "@tauri-apps/plugin-process";
import Content, { type Category } from "@/components/Content";
import Layout from "@/components/Layout";
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
    <Layout
      sidebar={
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onSave={handleSave}
          onClose={handleClose}
        />
      }
    >
      <Banner />
      <Content
        category={activeCategory}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
    </Layout>
  );
}

export default App;
