import { Label, Heading } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function VolumeWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.volume}>
        <Label
          icon={WIDGET_ICONS.volume}
          color={WIDGET_COLORS.volume}
          iconColor={WIDGET_COLORS.volume}
        >
          {WIDGET_LABELS.volume}
        </Label>
      </Heading>
    </div>
  );
}
