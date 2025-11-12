import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { css } from "@sketchybar-gray/panda/css";
import { useModal } from "@/contexts/ModalContext";
import { Button, Label, ICONS } from "@sketchybar-gray/react";

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
    info: "blue",
    success: "green",
    warning: "yellow",
    error: "red",
  };

  const typeIcons = {
    info: ICONS.info,
    success: ICONS.success,
    warning: ICONS.warning,
    error: ICONS.error,
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
          className={css({
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
          })}
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
            className={css({
              width: "400px",
              padding: "20px",
              background: "bg",
            })}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={css({ marginBottom: "16px" })}>
              <Label
                icon={typeIcons[type]}
                color={typeColors[type]}
                iconColor={typeColors[type]}
                size="16px"
                className={css({ fontWeight: 600 })}
              >
                {title}
              </Label>
            </div>

            <p
              className={css({
                margin: "0 0 20px 0",
                color: "text",
                fontSize: "13px",
                lineHeight: "1.5",
                whiteSpace: "pre-line",
              })}
            >
              {message}
            </p>

            <div
              className={css({
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              })}
            >
              {mode === "confirm" ? (
                <>
                  <Button
                    onClick={closeModal}
                    variant="secondary"
                    className={css({ width: "80px", justifyContent: "center" })}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    variant="danger"
                    className={css({ width: "80px", justifyContent: "center" })}
                  >
                    Confirm
                  </Button>
                </>
              ) : (
                <Button
                  onClick={closeModal}
                  variant="primary"
                  className={css({ width: "80px", justifyContent: "center" })}
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
