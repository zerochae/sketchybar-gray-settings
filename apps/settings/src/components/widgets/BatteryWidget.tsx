import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function BatteryWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.battery}>
        <Label
          icon={WIDGET_ICONS.battery}
          color={WIDGET_COLORS.battery}
          iconColor={WIDGET_COLORS.battery}
        >
          {WIDGET_LABELS.battery}
        </Label>
      </Heading>
    </div>
  );
}
