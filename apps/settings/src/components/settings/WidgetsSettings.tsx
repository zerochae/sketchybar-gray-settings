import { motion } from "framer-motion";
import { Heading } from "@sketchybar-gray/react";
import CalendarWidget from "@/components/widgets/CalendarWidget";
import ClockWidget from "@/components/widgets/ClockWidget";
import WeatherWidget from "@/components/widgets/WeatherWidget";
// import VolumeWidget from "@/components/widgets/VolumeWidget";
// import BatteryWidget from "@/components/widgets/BatteryWidget";
// import CpuWidget from "@/components/widgets/CpuWidget";
// import RamWidget from "@/components/widgets/RamWidget";
// import DiskWidget from "@/components/widgets/DiskWidget";
// import CaffeinateWidget from "@/components/widgets/CaffeinateWidget";
// import KakaotalkWidget from "@/components/widgets/KakaotalkWidget";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function WidgetsSettings() {
  const widgets = [
    <CalendarWidget key="calendar" />,
    <ClockWidget key="clock" />,
    <WeatherWidget key="weather" />,
    // <VolumeWidget key="volume" />,
    // <BatteryWidget key="battery" />,
    // <CpuWidget key="cpu" />,
    // <RamWidget key="ram" />,
    // <DiskWidget key="disk" />,
    // <CaffeinateWidget key="caffeinate" />,
    // <KakaotalkWidget key="kakaotalk" />,
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <Heading style={{ marginBottom: "16px" }}>Widgets</Heading>
      {widgets.map((widget) => (
        <motion.div
          key={widget.key}
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
          {widget}
        </motion.div>
      ))}
    </motion.div>
  );
}
