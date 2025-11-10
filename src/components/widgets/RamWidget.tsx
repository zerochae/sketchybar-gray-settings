import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import icons from "@/assets/icon.json";

export default function RamWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-magenta)">
        <Label
          icon={icons.memory}
          color="var(--colors-magenta)"
          iconColor="var(--colors-magenta)"
        >
          RAM
        </Label>
      </Heading>
    </div>
  );
}
