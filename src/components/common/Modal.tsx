import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/contexts/ModalContext";
import icons from "@/assets/icon.json";
import Button from "./Button";
import Label from "./Label";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export default function Modal() {
  const { modal, closeModal } = useModal();
  const { isOpen, title, message, type, mode, onConfirm } = modal;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "Enter") {
        if (mode === "confirm") {
          handleConfirm();
        } else {
          closeModal();
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal, mode, onConfirm]);

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.15,
          }}
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
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.15,
            }}
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
                gap: "8px",
              }}
            >
              {mode === "confirm" ? (
                <>
                  <Button
                    onClick={closeModal}
                    variant="secondary"
                    style={{ width: "80px", justifyContent: "center" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    variant="danger"
                    style={{ width: "80px", justifyContent: "center" }}
                  >
                    Confirm
                  </Button>
                </>
              ) : (
                <Button
                  onClick={closeModal}
                  variant="primary"
                  style={{ width: "80px", justifyContent: "center" }}
                >
                  OK
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
