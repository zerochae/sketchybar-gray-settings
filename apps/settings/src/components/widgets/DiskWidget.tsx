import { Label, Heading } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function DiskWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.disk}>
        <Label icon={WIDGET_ICONS.disk} color={WIDGET_COLORS.disk} iconColor={WIDGET_COLORS.disk}>
          {WIDGET_LABELS.disk}
        </Label>
      </Heading>
    </div>
  );
}
