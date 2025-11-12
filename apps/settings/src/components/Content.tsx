import { AnimatePresence, motion } from "framer-motion";
import { css } from "@sketchybar-gray/panda/css";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import WidgetsSettings from "@/components/settings/WidgetsSettings";
import AdvancedSettings from "@/components/settings/AdvancedSettings";
import { useCategory } from "@/contexts/CategoryContext";

export type Category = "Appearance" | "Widgets" | "Advanced";

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 20,
  },
};

export default function Content() {
  const { activeCategory } = useCategory();

  const renderContent = () => {
    switch (activeCategory) {
      case "Appearance":
        return <AppearanceSettings />;
      case "Widgets":
        return <WidgetsSettings />;
      case "Advanced":
        return <AdvancedSettings />;
      default:
        return null;
    }
  };

  return (
    <div className={css({ overflow: "hidden" })}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
