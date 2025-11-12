import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Control } from "@sketchybar-gray/react";
import "./index.css";

function App() {
  const [volume, setVolume] = useState(50);
  const [theme, setTheme] = useState("onedark");

  useEffect(() => {
    invoke<number>("get_volume")
      .then((vol) => setVolume(vol))
      .catch((err) => console.error(err));

    invoke<string>("read_config_theme")
      .then((themeName) => {
        setTheme(themeName);
        document.documentElement.setAttribute("data-panda-theme", themeName);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleDragEnd = (finalVolume: number) => {
    invoke("set_volume", { volume: finalVolume }).catch((err) => console.error(err));
  };

  return (
    <div className="volume-container">
      <Control
        value={volume}
        onChange={handleVolumeChange}
        onDragEnd={handleDragEnd}
        min={0}
        max={100}
        width={200}
        label={theme}
        vertical={false}
      />
    </div>
  );
}

export default App;
