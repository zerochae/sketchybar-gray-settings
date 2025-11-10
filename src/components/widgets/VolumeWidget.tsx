import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
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
