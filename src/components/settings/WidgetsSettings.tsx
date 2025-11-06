import CalendarWidget from "@/components/widgets/CalendarWidget";
import ClockWidget from "@/components/widgets/ClockWidget";
import WeatherWidget from "@/components/widgets/WeatherWidget";
import VolumeWidget from "@/components/widgets/VolumeWidget";
import BatteryWidget from "@/components/widgets/BatteryWidget";
import CpuWidget from "@/components/widgets/CpuWidget";
import RamWidget from "@/components/widgets/RamWidget";
import DiskWidget from "@/components/widgets/DiskWidget";
import CaffeinateWidget from "@/components/widgets/CaffeinateWidget";
import KakaotalkWidget from "@/components/widgets/KakaotalkWidget";
import Heading from "@/components/common/Heading";

export default function WidgetsSettings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading style={{ marginBottom: "16px" }}>Widgets</Heading>
      <CalendarWidget />
      <ClockWidget />
      <WeatherWidget />
      <VolumeWidget />
      <BatteryWidget />
      <CpuWidget />
      <RamWidget />
      <DiskWidget />
      <CaffeinateWidget />
      <KakaotalkWidget />
    </div>
  );
}
