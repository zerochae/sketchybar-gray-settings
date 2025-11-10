import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import icons from "@/assets/icon.json";

export default function VolumeWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-blue)">
        <Label
          icon={icons.volume_high}
          color="var(--colors-blue)"
          iconColor="var(--colors-blue)"
        >
          Volume
        </Label>
      </Heading>
    </div>
  );
}
