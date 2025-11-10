import Heading from "@/components/common/Heading";
import WidgetsOrder from "@/components/appearances/WidgetsOrder";
import Theme from "@/components/appearances/Theme";
import BarStyle from "@/components/appearances/BarStyle";

export default function AppearanceSettings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading style={{ marginBottom: "16px" }}>Appearance</Heading>
      <Theme />
      <WidgetsOrder />
      <BarStyle />
    </div>
  );
}
