import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
import Input from "@/components/common/Input";
import icons from "@/assets/icon.json";

export default function WeatherWidget() {
  const [enabled, setEnabled] = useState(true);
  const [location, setLocation] = useState("Seoul");

  return (
    <div>
      <Heading level={2} color="var(--colors-cyan)">
        <Label
          icon={icons.weather}
          color="var(--colors-cyan)"
          iconColor="var(--colors-cyan)"
        >
          Weather
        </Label>
      </Heading>
      <Box>
        <div style={{ marginBottom: enabled ? "12px" : "0" }}>
          <Heading level={3} style={{ marginBottom: "6px" }}>
            Enable
          </Heading>
          <Checkbox
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            label="Show Weather"
          />
        </div>
        {enabled && (
          <div>
            <Heading level={3} style={{ marginBottom: "6px" }}>
              Location
            </Heading>
            <Input
              value={location}
              onChange={setLocation}
            />
          </div>
        )}
      </Box>
    </div>
  );
}
