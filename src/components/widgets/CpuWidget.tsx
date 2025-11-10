import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import icons from "@/assets/icon.json";

export default function CpuWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-blue)">
        <Label
          icon={icons.cpu}
          color="var(--colors-blue)"
          iconColor="var(--colors-blue)"
        >
          CPU
        </Label>
      </Heading>
    </div>
  );
}
