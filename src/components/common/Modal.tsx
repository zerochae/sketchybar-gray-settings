import { useEffect } from "react";
import { useModal } from "@/contexts/ModalContext";
import icons from "@/assets/icon.json";
import Button from "./Button";
import Label from "./Label";

export default function Modal() {
  const { modal, closeModal } = useModal();
  const { isOpen, title, message, type } = modal;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const typeColors = {
    info: "var(--colors-blue)",
    success: "var(--colors-green)",
    warning: "var(--colors-yellow)",
    error: "var(--colors-red)",
  };

  const typeIcons = {
    info: icons.info,
    success: icons.success,
    warning: icons.warning,
    error: icons.error,
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={closeModal}
    >
      <div
        className="container"
        style={{
          width: "400px",
          padding: "20px",
          background: "var(--colors-bg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ marginBottom: "16px" }}>
          <Label
            icon={typeIcons[type]}
            color={typeColors[type]}
            iconColor={typeColors[type]}
            size="16px"
            style={{ fontWeight: 600 }}
          >
            {title}
          </Label>
        </div>

        <p
          style={{
            margin: "0 0 20px 0",
            color: "var(--colors-text)",
            fontSize: "13px",
            lineHeight: "1.5",
            whiteSpace: "pre-line",
          }}
        >
          {message}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={closeModal}
            variant="primary"
            style={{ width: "80px", justifyContent: "center" }}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}
