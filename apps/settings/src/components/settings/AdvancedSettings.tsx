import { motion } from "framer-motion";
import { Heading } from "@sketchybar-gray/react";
import OpenConfigFile from "@/components/advances/OpenConfigFile";
import ReloadSketchybar from "@/components/advances/ReloadSketchybar";
import ResetToDefaults from "@/components/advances/ResetToDefaults";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function AdvancedSettings() {
  const items = [
    <OpenConfigFile key="open-config" />,
    <ReloadSketchybar key="reload" />,
    <ResetToDefaults key="reset" />,
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <Heading style={{ marginBottom: "16px" }}>Advanced</Heading>
      {items.map((item) => (
        <motion.div
          key={item.key}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "tween" as const,
                ease: "easeOut",
                duration: 0.2,
              },
            },
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
