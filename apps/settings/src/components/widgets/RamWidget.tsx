import { Label, Heading } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function RamWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.ram}>
        <Label
          icon={WIDGET_ICONS.ram}
          color={WIDGET_COLORS.ram}
          iconColor={WIDGET_COLORS.ram}
        >
          {WIDGET_LABELS.ram}
        </Label>
      </Heading>
    </div>
  );
}
