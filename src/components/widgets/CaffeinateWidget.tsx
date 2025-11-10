import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import icons from "@/assets/icon.json";

export default function CaffeinateWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-green)">
        <Label
          icon={icons.coffee_on}
          color="var(--colors-green)"
          iconColor="var(--colors-green)"
        >
          Caffeinate
        </Label>
      </Heading>
    </div>
  );
}
