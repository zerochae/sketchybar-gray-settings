import { useState, useEffect } from "react";
import { Label, Heading, Box, Input } from "@sketchybar-gray/react";
import { WIDGET_COLORS, WIDGET_ICONS, WIDGET_LABELS } from "@/constants/widgets";
import { useConfig } from "@/contexts/ConfigContext";

export default function WeatherWidget() {
  const { config, updateWidget } = useConfig();
  const [location, setLocation] = useState("Seoul");

  useEffect(() => {
    const configLocation = config.widgets.weather.location;
    if (configLocation) {
      setLocation(configLocation);
    }
  }, [config.widgets.weather.location]);

  const handleLocationChange = (value: string) => {
    setLocation(value);
    updateWidget("weather", "location", value);
  };

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
        <Heading level={3} marginBottom="6px">
          Location
        </Heading>
        <Input value={location} onChange={handleLocationChange} />
      </Box>
    </div>
  );
}
