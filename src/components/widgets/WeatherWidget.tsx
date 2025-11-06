import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import icons from "@/assets/icon.json";

export default function WeatherWidget() {
  const [enabled, setEnabled] = useState(true);
  const [location, setLocation] = useState("Seoul");

  return (
    <div>
      <Label icon={icons.weather_default} color="var(--colors-cyan)">Weather</Label>
      <div className="box-container" style={{ padding: "12px" }}>
        <div style={{ marginBottom: enabled ? "12px" : "0" }}>
          <Checkbox
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            label="Enable"
          />
        </div>
        {enabled && (
          <div style={{ paddingLeft: "24px" }}>
            <div style={{ fontSize: "11px", color: "var(--colors-comment)", marginBottom: "6px" }}>
              Location
            </div>
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
      </div>
    </div>
  );
}
