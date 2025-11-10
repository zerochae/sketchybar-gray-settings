import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import icons from "@/assets/icon.json";

export default function DiskWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-red)">
        <Label
          icon={icons.disk}
          color="var(--colors-red)"
          iconColor="var(--colors-red)"
        >
          Disk
        </Label>
      </Heading>
    </div>
  );
}
