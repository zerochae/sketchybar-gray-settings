import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import Box from "@/components/common/Box";
import Heading from "@/components/common/Heading";

export default function BarStyle() {
  const [selectedBarStyle, setSelectedBarStyle] = useState<string>("compact");

  return (
    <div>
      <Heading level={2}>Bar Style</Heading>
      <Box
        padding="8px 12px"
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        {["compact", "block"].map((style) => (
          <Checkbox
            key={style}
            checked={selectedBarStyle === style}
            onChange={() => setSelectedBarStyle(style)}
            label={style}
          />
        ))}
      </Box>
    </div>
  );
}
