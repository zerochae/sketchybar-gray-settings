import Heading from "@/components/common/Heading";
import OpenConfigFile from "@/components/advances/OpenConfigFile";
import ReloadSketchybar from "@/components/advances/ReloadSketchybar";
import ResetToDefaults from "@/components/advances/ResetToDefaults";

export default function AdvancedSettings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading style={{ marginBottom: "16px" }}>Advanced</Heading>
      <OpenConfigFile />
      <ReloadSketchybar />
      <ResetToDefaults />
    </div>
  );
}
