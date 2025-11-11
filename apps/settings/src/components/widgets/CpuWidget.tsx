import { Label, Heading } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function CpuWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.cpu}>
        <Label
          icon={WIDGET_ICONS.cpu}
          color={WIDGET_COLORS.cpu}
          iconColor={WIDGET_COLORS.cpu}
        >
          {WIDGET_LABELS.cpu}
        </Label>
      </Heading>
    </div>
  );
}
