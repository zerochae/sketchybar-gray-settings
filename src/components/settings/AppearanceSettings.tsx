import { motion } from "framer-motion";
import Heading from "@/components/common/Heading";
import WidgetsOrder from "@/components/appearances/WidgetsOrder";
import Theme from "@/components/appearances/Theme";
import BarStyle from "@/components/appearances/BarStyle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function AppearanceSettings() {
  const items = [
    <Theme key="theme" />,
    <WidgetsOrder key="widgets-order" />,
    <BarStyle key="bar-style" />,
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <Heading style={{ marginBottom: "16px" }}>Appearance</Heading>
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
