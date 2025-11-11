use tauri::Window;
use std::fs;
use std::path::PathBuf;

#[tauri::command]
fn read_config_theme() -> String {
    let config_path: PathBuf = [
        std::env::var("HOME").unwrap_or_else(|_| String::from("")),
        String::from(".config/sketchybar/user.sketchybarrc"),
    ]
    .iter()
    .collect();

    if let Ok(content) = fs::read_to_string(&config_path) {
        for line in content.lines() {
            let trimmed = line.trim();
            if trimmed.starts_with("export SBAR_THEME=") {
                let theme = trimmed
                    .strip_prefix("export SBAR_THEME=")
                    .unwrap_or("")
                    .trim_matches('"')
                    .trim_matches('\'')
                    .to_string();
                if !theme.is_empty() {
                    return theme;
                }
            }
        }
    }

    String::from("onedark")
}

#[tauri::command]
fn get_volume() -> Result<i32, String> {
    let output = std::process::Command::new("osascript")
        .arg("-e")
        .arg("output volume of (get volume settings)")
        .output()
        .map_err(|e| e.to_string())?;

    let volume_str = String::from_utf8(output.stdout)
        .map_err(|e| e.to_string())?
        .trim()
        .to_string();

    volume_str.parse::<i32>().map_err(|e| e.to_string())
}

#[tauri::command]
fn set_volume(volume: i32) -> Result<(), String> {
    std::process::Command::new("osascript")
        .arg("-e")
        .arg(format!("set volume output volume {}", volume))
        .output()
        .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
fn position_window(window: Window, x: f64, y: f64) -> Result<(), String> {
    window
        .set_position(tauri::Position::Physical(tauri::PhysicalPosition {
            x: x as i32,
            y: y as i32,
        }))
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn show_window(window: Window) -> Result<(), String> {
    window.show().map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn hide_window(window: Window) -> Result<(), String> {
    window.hide().map_err(|e| e.to_string())?;
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            read_config_theme,
            get_volume,
            set_volume,
            position_window,
            show_window,
            hide_window
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
