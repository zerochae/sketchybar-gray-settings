import { Label, Heading } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function KakaotalkWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.kakaotalk}>
        <Label icon={WIDGET_ICONS.kakaotalk} color={WIDGET_COLORS.kakaotalk}>
          {WIDGET_LABELS.kakaotalk}
        </Label>
      </Heading>
    </div>
  );
}
