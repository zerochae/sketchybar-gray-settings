import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function CaffeinateWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.caffeinate}>
        <Label
          icon={WIDGET_ICONS.caffeinate}
          color={WIDGET_COLORS.caffeinate}
          iconColor={WIDGET_COLORS.caffeinate}
        >
          {WIDGET_LABELS.caffeinate}
        </Label>
      </Heading>
    </div>
  );
}
