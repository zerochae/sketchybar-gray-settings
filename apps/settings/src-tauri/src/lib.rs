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
fn write_config_theme(theme: String) -> Result<(), String> {
    let config_path: PathBuf = [
        std::env::var("HOME").unwrap_or_else(|_| String::from("")),
        String::from(".config/sketchybar/user.sketchybarrc"),
    ]
    .iter()
    .collect();

    let content = fs::read_to_string(&config_path)
        .map_err(|e| format!("Failed to read config: {}", e))?;

    let mut lines: Vec<String> = content.lines().map(String::from).collect();
    let mut theme_line_index = None;

    for (i, line) in lines.iter().enumerate() {
        let trimmed = line.trim();
        if trimmed.starts_with("export SBAR_THEME=") {
            theme_line_index = Some(i);
            break;
        }
    }

    let new_line = format!("export SBAR_THEME=\"{}\"", theme);

    if let Some(index) = theme_line_index {
        lines[index] = new_line;
    } else {
        lines.push(new_line);
    }

    let new_content = lines.join("\n") + "\n";

    fs::write(&config_path, new_content)
        .map_err(|e| format!("Failed to write config: {}", e))?;

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![read_config_theme, write_config_theme])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
