import { useState } from "react";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import Input from "@/components/common/Input";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";

export default function WeatherWidget() {
  const [location, setLocation] = useState("Seoul");

  return (
    <div>
      <Heading level={2} color={WIDGET_COLORS.weather}>
        <Label
          icon={WIDGET_ICONS.weather}
          color={WIDGET_COLORS.weather}
          iconColor={WIDGET_COLORS.weather}
        >
          {WIDGET_LABELS.weather}
        </Label>
      </Heading>
      <Box>
        <Heading level={3} style={{ marginBottom: "6px" }}>
          Location
        </Heading>
        <Input
          value={location}
          onChange={setLocation}
        />
      </Box>
    </div>
  );
}
