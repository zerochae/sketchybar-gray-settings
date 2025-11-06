export default function AdvancedSettings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div className="section-title" style={{ marginBottom: "8px" }}>
          Open Config File
        </div>
        <div className="box-container">
          <button
            className="option-item"
            style={{ color: "var(--colors-blue)" }}
          >
            <span>Open in Editor</span>
            <span className="key-hint">⌘O</span>
          </button>
          <div
            style={{
              marginTop: "12px",
              padding: "12px",
              background: "var(--colors-bg3)",
              borderRadius: "4px",
              fontSize: "12px",
              color: "var(--colors-comment)",
            }}
          >
            Opens user.sketchybarrc in your default editor.
          </div>
        </div>
      </div>

      <div>
        <div className="section-title" style={{ marginBottom: "8px" }}>
          Reload Sketchybar
        </div>
        <div className="box-container">
          <button
            className="option-item"
            style={{ color: "var(--colors-green)" }}
          >
            <span>Reload Now</span>
            <span className="key-hint">⌘R</span>
          </button>
          <div
            style={{
              marginTop: "12px",
              padding: "12px",
              background: "var(--colors-bg3)",
              borderRadius: "4px",
              fontSize: "12px",
              color: "var(--colors-comment)",
            }}
          >
            Reloads sketchybar configuration and restarts all plugins.
          </div>
        </div>
      </div>

      <div>
        <div className="section-title" style={{ marginBottom: "8px" }}>
          Reset to Defaults
        </div>
        <div className="box-container">
          <button
            className="option-item"
            style={{ color: "var(--colors-red)" }}
          >
            <span>Reset All Settings</span>
            <span className="key-hint">⌘⌫</span>
          </button>
          <div
            style={{
              marginTop: "12px",
              padding: "12px",
              background: "var(--colors-bg3)",
              borderRadius: "4px",
              fontSize: "12px",
              color: "var(--colors-comment)",
            }}
          >
            ⚠️ This will reset all settings to default values. This action
            cannot be undone.
          </div>
        </div>
      </div>
    </div>
  );
}
