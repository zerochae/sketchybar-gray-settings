import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import icons from "@/assets/icon.json";

export default function BatteryWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-orange)">
        <Label
          icon={icons.battery_full}
          color="var(--colors-orange)"
          iconColor="var(--colors-orange)"
        >
          Battery
        </Label>
      </Heading>
    </div>
  );
}
