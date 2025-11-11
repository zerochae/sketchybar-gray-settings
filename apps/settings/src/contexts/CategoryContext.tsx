import { createContext, useContext, useState, ReactNode } from "react";
import type { Category } from "@/components/Content";

interface CategoryContextType {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<Category>("Appearance");

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within CategoryProvider");
  }
  return context;
}
