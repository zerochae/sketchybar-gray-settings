import type { Config } from "@/types/config";

export interface ValidationError {
  field: string;
  message: string;
}

export function validateConfig(config: Config): ValidationError[] {
  const errors: ValidationError[] = [];

  if (config.appearance.barHeight < 0 || config.appearance.barHeight > 200) {
    errors.push({
      field: "appearance.barHeight",
      message: "Bar height must be between 0 and 200",
    });
  }

  if (config.appearance.iconFontSize < 8 || config.appearance.iconFontSize > 48) {
    errors.push({
      field: "appearance.iconFontSize",
      message: "Icon font size must be between 8 and 48",
    });
  }

  if (config.appearance.labelFontSize < 8 || config.appearance.labelFontSize > 48) {
    errors.push({
      field: "appearance.labelFontSize",
      message: "Label font size must be between 8 and 48",
    });
  }

  const validThemes = [
    "onedark",
    "tokyonight",
    "catppuccin",
    "gruvbox",
    "nord",
    "dracula",
    "monokai",
  ];
  if (!validThemes.includes(config.appearance.theme)) {
    errors.push({
      field: "appearance.theme",
      message: `Theme must be one of: ${validThemes.join(", ")}`,
    });
  }

  const validBarStyles = ["block", "compact"];
  if (!validBarStyles.includes(config.appearance.barStyle)) {
    errors.push({
      field: "appearance.barStyle",
      message: `Bar style must be one of: ${validBarStyles.join(", ")}`,
    });
  }

  const validPositions = ["top", "bottom"];
  if (!validPositions.includes(config.appearance.barPosition)) {
    errors.push({
      field: "appearance.barPosition",
      message: `Bar position must be one of: ${validPositions.join(", ")}`,
    });
  }

  if (!config.widgets.weather.location || config.widgets.weather.location.trim() === "") {
    errors.push({
      field: "widgets.weather.location",
      message: "Weather location cannot be empty",
    });
  }

  if (!config.widgets.clock.format || config.widgets.clock.format.trim() === "") {
    errors.push({
      field: "widgets.clock.format",
      message: "Clock format cannot be empty",
    });
  }

  if (!config.widgets.calendar.format || config.widgets.calendar.format.trim() === "") {
    errors.push({
      field: "widgets.calendar.format",
      message: "Calendar format cannot be empty",
    });
  }

  if (config.advanced.updateFreqDefault < 1 || config.advanced.updateFreqDefault > 3600) {
    errors.push({
      field: "advanced.updateFreqDefault",
      message: "Update frequency must be between 1 and 3600 seconds",
    });
  }

  if (config.advanced.updateFreqFast < 1 || config.advanced.updateFreqFast > 3600) {
    errors.push({
      field: "advanced.updateFreqFast",
      message: "Fast update frequency must be between 1 and 3600 seconds",
    });
  }

  if (config.advanced.updateFreqSlow < 1 || config.advanced.updateFreqSlow > 3600) {
    errors.push({
      field: "advanced.updateFreqSlow",
      message: "Slow update frequency must be between 1 and 3600 seconds",
    });
  }

  return errors;
}
