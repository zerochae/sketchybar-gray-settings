import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Heading from "@/components/common/Heading";
import Box from "@/components/common/Box";
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
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                background: "var(--colors-bg3)",
                border: "1px solid var(--colors-border)",
                borderRadius: "2px",
                color: "var(--colors-text)",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                outline: "none",
              }}
            />
          </div>
        )}
      </Box>
    </div>
  );
}
