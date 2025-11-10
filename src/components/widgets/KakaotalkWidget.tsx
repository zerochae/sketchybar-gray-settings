import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import { WIDGET_COLORS, WIDGET_LABELS, getWidgetIcon } from "@/constants/widgets";

export default function KakaotalkWidget() {
  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.kakaotalk}>
        <Label
          icon={getWidgetIcon("kakaotalk", WIDGET_COLORS.kakaotalk)}
          color={WIDGET_COLORS.kakaotalk}
        >
          {WIDGET_LABELS.kakaotalk}
        </Label>
      </Heading>
    </div>
  );
}
