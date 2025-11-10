import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import KakaotalkIcon from "@/components/icons/KakaotalkIcon";

export default function KakaotalkWidget() {
  return (
    <div>
      <Heading level={2} color="var(--colors-yellow)">
        <Label
          icon={<KakaotalkIcon color="var(--colors-yellow)" />}
          color="var(--colors-yellow)"
        >
          KakaoTalk
        </Label>
      </Heading>
    </div>
  );
}
